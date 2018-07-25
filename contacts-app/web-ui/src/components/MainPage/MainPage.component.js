import React from "react";
import styled from "styled-components";
import Moment from 'moment';
import { CardStack, Card } from "react-cardstack";

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
let rowHeight = 60;

let contacts = null;
let contactsLength = 0;

const Center = styled.div`
  box-sizing: border-box;
  margin: 0;
`;

const CardStack1 = styled.div`
  box-sizing: border-box;
  width: 400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #32363a;
  font-family: "72";
  font-size: 23px;
  font-weight: 400;
  padding-left: 10px;
  font-size: 30px;
  line-height: 30px;
  margin: 20px 0;
`;
const TitleContainer = styled.div`
  height: 30px;
  width: 100%;
  margin-bottom: 10px;
  background-color: #f3f4f5;
`;

const LogoContainer = styled.div`
  height: ${rowHeight - 20}px;
  width: ${rowHeight - 20}px;
  background-color: ${props => colors[props.id % colors.length]};
  margin-right: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.span`
  font-size: 20px;
  color: #fff;
  font-family: "72";
  text-transform: uppercase;
`;
const CardHeader = styled.div`
  box-sizing: border-box;
  height: ${rowHeight - 20}px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10;
`;
const RowContainer = styled.div`
  padding: 10px;    
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.08);
  height: 100%;
`;

const DetailsContainer = styled.div`
  margin-top: 30px;
  margin-left: ${rowHeight - 10}px;
`;
const Name = styled.div`
  font-size: 16px;
  font-family: "72";
  color: #515559;
`;

const DetailsKey = styled.div`
  font-size: 14px;
  font-family: "72";
  color: #6f7275;
  font-weight: 100;
`;

const DetailsValue = styled.div`
  font-size: 16px;
  font-family: "72";
  color: #515559;
  font-weight: 600;
`;

const ContactCard = props => {

  let date;
  if(props.lastOrderDate && props.lastOrderDate !== "No Orders") date = new Date(props.lastOrderDate);
  return (
    <RowContainer>
      <CardHeader>
        <LogoContainer id={props.id}>
          <Logo>
            {props.firstName.charAt(0)}
            {props.lastName.charAt(0)}
          </Logo>
        </LogoContainer>
        <Name>
          {props.firstName} {props.lastName}
        </Name>
      </CardHeader>
      {props.email && <DetailsContainer>
        <DetailsKey>Email:</DetailsKey>
        <DetailsValue>{props.email}</DetailsValue>
      </DetailsContainer>}

      {props.phone &&<DetailsContainer>
        <DetailsKey>Phone:</DetailsKey>
        <DetailsValue>{props.phone}</DetailsValue>
      </DetailsContainer>}

      {props.line1 &&<DetailsContainer>
        <DetailsKey>Address:</DetailsKey>
        <DetailsValue>{props.line1}</DetailsValue>
        {props.line2 && <DetailsValue>{props.line2}</DetailsValue>}
        {(props.line2 || props.postalCode) && <DetailsValue>{props.postalCode} {props.town}</DetailsValue>}
        {props.country && <DetailsValue>{props.country}</DetailsValue>}
      </DetailsContainer>}


      {props.lastOrderDate && <DetailsContainer>
        <DetailsKey>Last order date:</DetailsKey>
        <DetailsValue>
          {!date && props.lastOrderDate}
          {date && Moment(date).format('YYYY-MM-DD HH:mm')}
        </DetailsValue>
      </DetailsContainer>}
    </RowContainer>
  );
};
class MainPage extends React.Component {


  render() {
    if (!this.props.contacts.loading) {
      if (this.props.contacts.contacts) {
        contacts = this.props.contacts.contacts;
        contactsLength = contacts.length;
      }
    }
    
    return (
      <Center>
        <CardStack1>
          <TitleContainer>
            <Title>Contacts List</Title>
          </TitleContainer>
          {contacts &&
            contactsLength > 2 && (
              <CardStack
                height={rowHeight * contactsLength}
                width={400}
                background="#f3f4f5"
                hoverOffset={20}
              >
                {contacts.map((contact, index) => (
                  <Card key={index} background="#ffffff">
                    <ContactCard {...contact} contactsLength={contactsLength} />
                  </Card>
                ))}
              </CardStack>
            )}
        </CardStack1>
      </Center>
    );
  }
}

export default MainPage;
