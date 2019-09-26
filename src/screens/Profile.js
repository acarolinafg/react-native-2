import React from 'react';
import { View, ActivityIndicator, StyleSheet, Image, ScrollView } from 'react-native';
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
  state = { loading: true };

  closeActivityIndicator = () =>

    setTimeout(
      () =>
        this.setState({
          loading: false
        }),
      600
    );
  componentDidMount = () => this.closeActivityIndicator();

  render() {
    const loading = this.state.loading; 

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image 
            className={"header-image"}
            style={styles.logo} 
            source={{ uri: 'https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png' }}
          />
        </View>
        {this.state.loading && (
          <View style={styles.loadingContent}>
            <ActivityIndicator size="large" color="#7800ff" />
          </View>
        )}
        {!this.state.loading && (
          <ScrollView>
            <AccelerationItem item={profile} />
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  header:{
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#7800ff',
    borderBottomWidth: 2,
    padding: 16,
    paddingTop: 55
  },
  logo:{
    height: 45,
    width: 250
  },
  loadingContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});