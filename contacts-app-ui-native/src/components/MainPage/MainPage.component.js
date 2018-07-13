import React, { Component } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { CardStack, Card } from "react-native-cardstack";
import { Font } from "expo";
const { width, height } = Dimensions.get("window");
const statusBarHeight = getStatusBarHeight();
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
    <View>
      <View style={[styles.cardHeader, { height: 60 }]}>
        <View
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
          <Text style={[styles.logo, { fontSize: 24, }]}>
            {props.firstName.charAt(0)}
            {props.lastName.charAt(0)}
          </Text>
        </View>
        <Text style={[{ fontFamily: "72", fontSize: 18, color: "#515559"  }]}>
          {props.firstName} {props.lastName}
        </Text>
      </View>
      <View style={[{ paddingTop: 10,paddingBottom: 10, marginLeft: 70, /*borderTopWidth: 2, borderBottomWidth: 2, borderColor: "#f3f4f5"*/}]}>
        <Text style={[{ fontFamily: "72-bold", fontSize: 18, color: "#515559" }]}>Email:</Text>
        <Text style={[{ fontFamily: "72", fontSize: 15, color: "#515559" } ]}>{props.email}</Text>
      </View>
    </View>
  );
};
class MainPage extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "72": require("./../../../assets/fonts/72regular.ttf"),
      "72-bold": require("./../../../assets/fonts/72bold.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (!this.props.contacts.loading) {
      if (this.props.contacts.contacts) {
        contacts = this.props.contacts.contacts;
        
        contactsLength = contacts.length;
      }
    }

    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Contacts List</Text>
            </View>
            <ScrollView ref={ref => this.scrollView = ref}>
              {contacts &&
                contactsLength > 2 && (
                  <CardStack
                    height={contactsLength*70} //{height - statusBarHeight - 55}
                    width={width}
                    backgroundColor="#f3f4f5"
                    hoverOffset={25}
                    onPress={() => { this.scrollView.scrollTo({x: 0, y: 0, animated: true}) }}
                  >
                    {contacts.map((contact, index) => (
                      <Card
                        key={index}
                        style={styles.card}
                        backgroundColor="#ffffff"
                        
                      >
                        <ContactCard
                          {...contact}
                          contactsLength={contactsLength}
                        />
                      </Card>
                    ))}
                  </CardStack>
                )}
            </ScrollView>
          </View>
        ) : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 10
  },
  card: {
    backgroundColor: "#000",
    borderWidth: 10,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: "#f3f4f5",
    padding: 10,
    display: "flex",
    justifyContent: "flex-start"
  },
  container: {
    display: "flex",
    flex: 1,
    alignItems: "flex-start",
    alignContent: "flex-end",
    justifyContent: "center",
    backgroundColor: "#f3f4f5"
  },
  logo: {
    color: "#fff",
    fontFamily: "72"
  },
  logoContainer: {
    marginRight: 10,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    paddingLeft: 10,
    width: width,
    fontFamily: "72",
    fontSize: 30,
    lineHeight: 30,
    fontWeight: "400",
    color: "#32363a"
  },
  titleContainer: {
    height: 30,
    width: width,
    marginTop: statusBarHeight + 15,
    marginBottom: 10,
    backgroundColor: "#f3f4f5"
  }
});

export default MainPage;
