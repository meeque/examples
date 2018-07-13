import React from "react";
import styled from "styled-components";
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
  font-size: 16px;
  font-family: "72";
  color: #515559;
  font-weight: 600;
`;

const DetailsValue = styled.div`
  font-size: 14px;
  font-family: "72";
  color: #6f7275;
  font-weight: 100;
`;

const ContactCard = props => {
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
      <DetailsContainer>
        <DetailsKey>Email:</DetailsKey>
        <DetailsValue>{props.email}</DetailsValue>
      </DetailsContainer>
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
    // contacts = [
    //   {
    //     id: 1,
    //     email: "Michele_Stokes@gmail.com",
    //     firstName: "Wosianne",
    //     lastName: "Wreenholt"
    //   },
    //   {
    //     id: 2,
    //     email: "Denis_Ryan32@hotmail.com",
    //     firstName: "Moses",
    //     lastName: "Koelpin"
    //   },
    //   {
    //     id: 3,
    //     email: "Josefa_Kiehn@yahoo.com",
    //     firstName: "Kaylee",
    //     lastName: "Casper"
    //   },
    //   {
    //     id: 4,
    //     email: "Golden90@hotmail.com",
    //     firstName: "Mack",
    //     lastName: "Kessler"
    //   },
    //   {
    //     id: 5,
    //     email: "Joanny_Kub@gmail.com",
    //     firstName: "Adah",
    //     lastName: "Ernser"
    //   },
    //   {
    //     id: 6,
    //     email: "Gabrielle.Rippin@yahoo.com",
    //     firstName: "Clyde",
    //     lastName: "Heaney"
    //   },
    //   {
    //     id: 7,
    //     email: "Luella_Beer@hotmail.com",
    //     firstName: "Eda",
    //     lastName: "Dibbert"
    //   },
    //   {
    //     id: 8,
    //     email: "Lucas_Harris@gmail.com",
    //     firstName: "Eduardo",
    //     lastName: "Corkery"
    //   },
    //   {
    //     id: 9,
    //     email: "Michele_Stokes@gmail.com",
    //     firstName: "Josianne",
    //     lastName: "Greenholt"
    //   },
    //   {
    //     id: 10,
    //     email: "Denis_Ryan32@hotmail.com",
    //     firstName: "Moses",
    //     lastName: "Koelpin"
    //   },
    //   {
    //     id: 11,
    //     email: "Michele_Stokes@gmail.com",
    //     firstName: "Josianne",
    //     lastName: "Greenholt"
    //   },
    //   {
    //     id: 12,
    //     email: "Denis_Ryan32@hotmail.com",
    //     firstName: "Moses",
    //     lastName: "Koelpin"
    //   },
    //   {
    //     id: 13,
    //     email: "Josefa_Kiehn@yahoo.com",
    //     firstName: "Kaylee",
    //     lastName: "Casper"
    //   },
    //   {
    //     id: 14,
    //     email: "Golden90@hotmail.com",
    //     firstName: "Mack",
    //     lastName: "Kessler"
    //   },
    //   {
    //     id: 15,
    //     email: "Joanny_Kub@gmail.com",
    //     firstName: "Adah",
    //     lastName: "Ernser"
    //   },
    //   {
    //     id: 16,
    //     email: "Gabrielle.Rippin@yahoo.com",
    //     firstName: "Clyde",
    //     lastName: "Heaney"
    //   },
    //   {
    //     id: 17,
    //     email: "Luella_Beer@hotmail.com",
    //     firstName: "Eda",
    //     lastName: "Dibbert"
    //   },
    //   {
    //     id: 18,
    //     email: "Lucas_Harris@gmail.com",
    //     firstName: "Eduardo",
    //     lastName: "Corkery"
    //   },
    //   {
    //     id: 19,
    //     email: "Michele_Stokes@gmail.com",
    //     firstName: "Josianne",
    //     lastName: "Greenholt"
    //   },
    //   {
    //     id: 20,
    //     email: "Denis_Ryan32@hotmail.com",
    //     firstName: "Moses",
    //     lastName: "Koelpin"
    //   }
    // ];
    // contactsLength = contacts.length;
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
                background="#f8f8f8"
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
