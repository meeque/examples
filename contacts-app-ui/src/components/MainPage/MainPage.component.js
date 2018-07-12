import React, { Component } from "react";
import styled from 'styled-components';
import { CardStack, Card } from 'react-cardstack';
// import {
//   Dimensions,
//   Scrolldiv,
//   StyleSheet,
//   span,
//   div
// } from "react-native";
// import { getStatusBarHeight } from "react-native-status-bar-height";
// import { CardStack, Card } from "react-native-cardstack";
// import { Font } from "expo";
// const { width, height } = Dimensions.get("window");
// const statusBarHeight = getStatusBarHeight();
const colors = [
  "#00b6ff",
  "#9b72ec",
  "#acd62f",
  "#ffb600",
  "#33cc78",
  "#0857a6",
  "#0b74de",
  "#ff6000"
];

let contacts = null;
let contactsLength = 0;

const ContactCard = props => {

  
  return (
    <div>
      {/* <div style={[styles.cardHeader, { height: 60 }]}>
        <div
          style={[
            styles.logoContainer,
            {
              height: 50,
              width: 50,
              backgroundColor: colors[props.id % colors.length],
              marginRight: 20,
            }
          ]}
        >
          <span style={[styles.logo, { fontSize: 24, }]}>
            {props.firstName.charAt(0)}
            {props.lastName.charAt(0)}
          </span>
        </div>
        <span style={[{ fontFamily: "72", fontSize: 18, color: "#515559"  }]}>
          {props.firstName} {props.lastName}
        </span>
      </div>
      <div style={[{ paddingTop: 10,paddingBottom: 10, marginLeft: 70}]}>
        <span style={[{ fontFamily: "72-bold", fontSize: 18, color: "#515559" }]}>Email:</span>
        <span style={[{ fontFamily: "72", fontSize: 15, color: "#515559" } ]}>{props.email}</span>
      </div> */}
    </div>
  );
};
class MainPage extends React.Component {
  // state = {
  //   fontLoaded: false
  // };

  async componentDidMount() {
    // await Font.loadAsync({
    //   "72": require("./../../../assets/fonts/72regular.ttf"),
    //   "72-bold": require("./../../../assets/fonts/72bold.ttf")
    // });
    // this.setState({ fontLoaded: true });
  }
  render() {
    // if (!this.props.contacts.loading) {
    //   if (this.props.contacts.contacts) {
    //     contacts = this.props.contacts.contacts;
    //     contactsLength = contacts.length;
    //   }
    // }
    contacts = [
      {
        id: 1,
        email: "Michele_Stokes@gmail.com",
        firstName: "Wosianne",
        lastName: "Wreenholt"
      },
      {
        id: 2,
        email: "Denis_Ryan32@hotmail.com",
        firstName: "Moses",
        lastName: "Koelpin"
      },
      {
        id: 3,
        email: "Josefa_Kiehn@yahoo.com",
        firstName: "Kaylee",
        lastName: "Casper"
      },
      {
        id: 4,
        email: "Golden90@hotmail.com",
        firstName: "Mack",
        lastName: "Kessler"
      },
      {
        id: 5,
        email: "Joanny_Kub@gmail.com",
        firstName: "Adah",
        lastName: "Ernser"
      },
      {
        id: 6,
        email: "Gabrielle.Rippin@yahoo.com",
        firstName: "Clyde",
        lastName: "Heaney"
      },
      {
        id: 7,
        email: "Luella_Beer@hotmail.com",
        firstName: "Eda",
        lastName: "Dibbert"
      },
      {
        id: 8,
        email: "Lucas_Harris@gmail.com",
        firstName: "Eduardo",
        lastName: "Corkery"
      },
      {
        id: 9,
        email: "Michele_Stokes@gmail.com",
        firstName: "Josianne",
        lastName: "Greenholt"
      },
      {
        id: 10,
        email: "Denis_Ryan32@hotmail.com",
        firstName: "Moses",
        lastName: "Koelpin"
      },
      {
        id: 11,
        email: "Michele_Stokes@gmail.com",
        firstName: "Josianne",
        lastName: "Greenholt"
      },
      {
        id: 12,
        email: "Denis_Ryan32@hotmail.com",
        firstName: "Moses",
        lastName: "Koelpin"
      },
      {
        id: 13,
        email: "Josefa_Kiehn@yahoo.com",
        firstName: "Kaylee",
        lastName: "Casper"
      },
      {
        id: 14,
        email: "Golden90@hotmail.com",
        firstName: "Mack",
        lastName: "Kessler"
      },
      {
        id: 15,
        email: "Joanny_Kub@gmail.com",
        firstName: "Adah",
        lastName: "Ernser"
      },
      {
        id: 16,
        email: "Gabrielle.Rippin@yahoo.com",
        firstName: "Clyde",
        lastName: "Heaney"
      },
      {
        id: 17,
        email: "Luella_Beer@hotmail.com",
        firstName: "Eda",
        lastName: "Dibbert"
      },
      {
        id: 18,
        email: "Lucas_Harris@gmail.com",
        firstName: "Eduardo",
        lastName: "Corkery"
      },
      {
        id: 19,
        email: "Michele_Stokes@gmail.com",
        firstName: "Josianne",
        lastName: "Greenholt"
      },
      {
        id: 20,
        email: "Denis_Ryan32@hotmail.com",
        firstName: "Moses",
        lastName: "Koelpin"
      }
    ];
    contactsLength = contacts.length;
    console.log('contactsLength',contacts,'contacts',contacts);
    return (
      <div>
              {contacts &&
                contactsLength > 2 && (
<CardStack
	height={70*contactsLength}
	width={400}
	background='#f8f8f8'
	hoverOffset={25}>
                  {contacts.map((contact, index) => (



                    <Card key={index} background={colors[index%colors.length]}>
                      <h1>{contact.firstName} {contact.lastName}</h1>
                    </Card>


                  ))}
        
</CardStack>
                )}
            
      </div>
    );
  }
}

export default MainPage;
