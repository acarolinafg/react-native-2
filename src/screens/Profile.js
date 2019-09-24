import React from 'react';
import { View, ActivityIndicator, StyleSheet,Image, Text} from 'react-native';
import Header from '../components/Header';
import AccelerationItem from '../components/AccelerationItem';

const profile = {
  "picture": "https://secure.gravatar.com/avatar/f50a9db56e231198af3507f10b5d5491?d=mm",
  "email": "rafael.fuzifaru@gmail.com",
  "first_name": "Rafael",
  "last_name": "Fuzifaru Cianci",
  "phone": "(48) 99660-6666",
  "gender": 1,
  "birthday": "1993-04-27T00:00:00-03:00",
  "linkedin": "https://www.linkedin.com/in/rafaelcianci",
  "github": "http://github.com/rafacianci",
  "address": {
    "Street": "",
    "ZipCode": "",
    "Number": "",
    "ComplementaryAddress": ""
  },
  "language": ["Português - PT", "Inglês - EN", "Japonês - JA"],
  "name": "Rafael Fuzifaru Cianci"
}

export default class Profile extends React.PureComponent {
  state = { animating: true };

  closeActivityIndicator = () =>

    setTimeout(
      () =>
        this.setState({
          animating: false
        }),
      600
    );
  componentDidMount = () => this.closeActivityIndicator();

  render() {
    const animating = this.state.animating; 

    return (
      <View>
        <Header/>
        <View style={styles.userHeader}>
          <Image
            source={{ uri: profile.picture }}
            style={styles.avatar}
            className={"profile-image"}
          />
          <Text style={styles.name} className={"contact-name"}>{profile.name}</Text>
        </View>

        {animating === true ? (
          <ActivityIndicator
            color="#7800FF"
            size="large"
            animating={animating}
            style={styles.activityIndicator}
          />
        ) : (
          <AccelerationItem item={profile} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  userHeader:{
    margin:10,
    flexDirection:'row',
    alignItems: 'center',
  },
  avatar:{
    width: 45, 
    height: 45,
    borderRadius:22
  },
  name: {
    color:'#7800FF',
    fontSize:20,
    paddingLeft:10
  },
  activityIndicator: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    height: 80,
    marginTop:180
  }
});