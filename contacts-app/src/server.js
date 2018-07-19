const Express = require ("express");
const GraphHttp = require ("express-graphql");
const Schema = require("./schema.js");
const bodyParser = require('body-parser');
const httpRequest = require('request-promise-native');
const Swagger = require('swagger-client');
const util = require('util');
const cors = require('cors');
const morgan = require('morgan');

const APP_PORT = process.env.APP_PORT;

const app = Express();

//const commerceHost = "https://electronics.demo.cluster.kyma.cx";

//var jsonParser = bodyParser.json();

var openApiUrl = 'https://minio.gcp.cluster.kyma.cx/content/pb'

const bodParserOptions = {
    type: '*/*'
};

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions));

app.use(morgan('combined'));
       
app.use('/graphql', GraphHttp({
    schema: Schema.schema,
    pretty: true,
    graphiql: true
}));

app.all('/events', async function(req, res) {
       
    res.header('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
        // CORS preflight support (Allow any method or header requested)
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        res.end();
    } else {
        console.log("*****  ");
        //console.log('Event received    : ' + req.body.toString('utf-8'));
        console.log("Event time : " + req.get('event-time')); 
        if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                console.log('body = ' + body);
                //res.end('ok');
            });
        }
    }
        // var event = await parseEvent(req, res);
        // // TODO - avoid initializing the client for every event
        // const swaggerClient = await Swagger({url: openApiUrl, requestInterceptor: req => logRequest(req)});
        // console.log("APIS: "  + JSON.stringify(swaggerClient.apis));
        // // var customer = await getCommerceCustomer(event.data.customerUid);
        // var customer = await swaggerClient.apis.Users.getUserUsingGET({userId: event.data.customerUid, baseSiteId:'electronics'});
       
        // console.log("Customer = " + JSON.stringify(customer));
        // createCustomer(customer);
        // return customer;
        res.end();
    }
    
);

app.listen(APP_PORT, () => {
    console.log(`Server started on port ${APP_PORT}`);
});

async function parseEvent(req, res)
{
    let data = req.body;
    console.log("data = " + data);
    console.log("req = " + util.inspect((req)));
    if (req.body.length > 0) {
        if (req.get('content-type') === 'application/json') {
            data = JSON.parse(req.body.toString('utf-8'));
            console.log('Event data = ' + JSON.stringify(data));
        } else {
            data = req.body.toString('utf-8');
            console.log('Event data = ' + data);
        }
    }
    
    const event = {
            'event-type': req.get('event-type'),
            'event-id': req.get('event-id'),
            'event-time': req.get('event-time'),
            'event-namespace': req.get('event-namespace'),
            data,
            'extensions': { request: req, response: res },
    };
    return event;
}

/**
 * 
 * @param {*} customerId 
 * @param {*} token 
 */
async function getCommerceCustomer(customerId)
{
    var token;
    //token = await getOAuthTokenIfExpired(token);
    var url = `${process.env.GATEWAY_URL}/electronics/users/${customerId}`;
    
    //commerceHost + "/rest/v2/" + 
    console.log("URL = " +  url);
    //console.log("token = " + JSON.stringify(token));
    return await httpRequest({ 
        url: url, 
        method: 'GET',
        json: true,
        // auth: {
        //     'bearer': token.access_token
        // },
        timeout: 120000 });
}

async function createCustomer(comCustomer)
{
    return Schema.contacts.create({
        firstName: comCustomer.firstName,
        lastName : comCustomer.lastName,
        email: comCustomer.uid
    });
}
/**
 * get an oauth token
 */
async function getOAuthTokenIfExpired(currentToken)
{
  if (currentToken != null)
  {
    console.log("currentToken  = " + currentToken);
    var decoded = jwt.decode(currentToken.access_token);
    var expiryDate = decoded.exp;
  }

  if (currentToken == null || parseFloat(expiryDate) >= (Date.now() / 1000))
  {
    console.log("getting new token");
    var token = await httpRequest({
    url: commerceHost + "/authorizationserver/oauth/token",
    method: 'POST',
    json: true,
    form: {
      'grant_type': 'client_credentials',
      'client_id' : 'servicefactory',
      'client_secret' : 'secret'
    }
  });
    console.log("oauth token = " + token);
    return token;
  }
  else
  {
    console.log("returning current token");
    return currentToken;
  }
  }

async function logRequest(req)
{
   console.log("req = " + JSON.stringify(req));
}

async function initSwaggerClient()
{
    var client =  await Swagger({url: openApiUrl, requestInterceptor: req => logRequest(req)});
   return client;
}
