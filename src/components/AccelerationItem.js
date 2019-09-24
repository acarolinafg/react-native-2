import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, View,  FlatList } from 'react-native';

export default function AccelerationItem({ item }) {
  const profile = { ...item };
  return (
	  <View style={styles.container}>
      <View className={"contact-content"} style={[styles.userContainer, { opacity: 1 }]}>
        <Text className={"contact-label"} style={styles.label}>Linkedin:</Text>
        <Text className={"contact-value"} style={styles.input}>{profile.linkedin}</Text>

        <Text className={"contact-label"} style={styles.label}>GitHub:</Text>
        <Text className={"contact-value"} style={styles.input}>{profile.github}</Text>
      </View>

      <View className={"contact-content"} style={[styles.userContainer, { opacity: 1 }]}>
        <Text className={"contact-label"} style={styles.label}>E-mail:</Text>
        <Text className={"contact-value"} style={styles.input}>{profile.email}</Text>

        <Text className={"contact-label"} style={styles.label}>Celular:</Text>
        <Text className={"contact-value"} style={styles.input}>{profile.phone}</Text>

        <Text className={"contact-label"} style={styles.label}>Data de Nascimento:</Text>
        <Text className={"contact-value"} style={styles.input}>{moment(new Date(profile.birthday)).format("DD/MM/YYYY")}</Text>

        <Text className={"contact-label"} style={styles.label}>Sexo:</Text>
        <Text className={"contact-value"} style={styles.input}>{profile.gender == 1 ? 'Masculino': 'Feminino'}</Text>

        <Text className={"contact-label"} style={styles.label}>Idioma:</Text>
        <FlatList
          data={profile.language}
          renderItem={({item}) => <Text className={"contact-language"} style={styles.language}>{item}</Text>}
          keyExtractor={item => item}
          horizontal
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    margin:10
  },
  label:{
    fontSize:12,
    color:'#FFFFFF'
  },
  input:{
    fontSize:12,
    color:'#FFFFFF',
    marginBottom:10
  },
  userContainer:{
    backgroundColor:'#111111',
    marginTop:15,
    padding:10
  },
  language:{
    fontSize:12,
    color:'#FFFFFF',
    backgroundColor:'#808080',
    marginTop:5,
    marginRight:10,
    marginBottom:5,
    padding:8,
    borderRadius:20
  }
});