import React from 'react';
import { StyleSheet, View, Image} from 'react-native';

export default function Header() {
  return (
	  <View style={styles.container}>
      <Image 
        style={styles.logo} 
        source={{ uri: 'https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png' }}
        className={"header-image"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    borderBottomColor:'#7800FF',
    borderBottomWidth:2
  },
  logo:{
    width: '100%', 
    height: 95,
    marginLeft: 10,
    marginTop: 30
  }
});