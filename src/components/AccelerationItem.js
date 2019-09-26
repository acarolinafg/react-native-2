import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, View, Image,  FlatList} from 'react-native';

export default function AccelerationItem({ item }) {
  const profile = { ...item };
  return (
	    <View style={styles.container}>
        <View style={styles.userHeader}>
          <Image
            source={{ uri: profile.picture }}
            style={styles.avatar}
            className={"profile-image"}
          />
          <Text style={styles.name} className={"contact-name"}>{profile.name}</Text>
        </View>

        <View className={"contact-content"} style={[styles.userContainer, { opacity: 1 }]}>
          <Text className={"contact-label"} style={styles.label}>Linkedin:</Text>
          <Text className={"contact-value"} style={[styles.text, styles.mBottom]}>{profile.linkedin}</Text>

          <Text className={"contact-label"} style={styles.label}>GitHub:</Text>
          <Text className={"contact-value"} style={[styles.text, styles.mBottom]}>{profile.github}</Text>
        </View>

        <View className={"contact-content"} style={[styles.userContainer, { opacity: 1 }]}>
          <Text className={"contact-label"} style={styles.label}>E-mail:</Text>
          <Text className={"contact-value"} style={[styles.text, styles.mBottom]}>{profile.email}</Text>

          <Text className={"contact-label"} style={styles.label}>Celular:</Text>
          <Text className={"contact-value"} style={[styles.text, styles.mBottom]}>{profile.phone}</Text>

          <Text className={"contact-label"} style={styles.label}>Data de Nascimento:</Text>
          <Text className={"contact-value"} style={[styles.text, styles.mBottom]}>{moment(new Date(profile.birthday)).format("DD/MM/YYYY")}</Text>

          <Text className={"contact-label"} style={styles.label}>Sexo:</Text>
          <Text className={"contact-value"} style={[styles.text, styles.mBottom]}>{profile.gender == 1 ? 'Masculino': 'Feminino'}</Text>

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
    flex: 1
  },
  userHeader:{
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16
  },
  avatar:{
    borderRadius: 22,
    height: 45,
    width: 45
  },
  name: {
    color: '#7800ff',
    fontSize: 20,
    paddingLeft: 16
  },
  userContainer:{
    backgroundColor: '#000',
    borderRadius: 2,
    margin: 16,
    padding: 16,
    marginTop: 0
  },
  label:{
    color: '#FFFFFF',
    fontSize: 11
  },
  text:{
    color: '#FFFFFF',
    fontSize: 14
  },
  language:{
    backgroundColor: '#666',
    borderRadius: 50,
    marginRight: 16,
    marginTop: 8,
    color: '#FFFFFF',
    fontSize: 12,
    padding: 5,
    paddingHorizontal: 10
  },
  mBottom: {
    marginBottom: 16
  }
});