import React from 'react';
import { View,Image, Text, TouchableOpacity, Linking } from 'react-native';
import  * as MailCompose from 'expo-mail-composer';
import { Feather} from '@expo/vector-icons';
import { useNavigation, useRoute} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';

// import { Container } from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const Incident = route.params.Incident
  const message = `Olá ${Incident.name}, estou entrando em contato pois gostaria de ajudar no caso ${Incident.title} com o valor de ${Intl.NumberFormat('pt-BR', 
  {style: 
  'currency', 
  currency: 'BRL'}).format(Incident.value)}`;

  function navigateBack(){
        navigation.goBack();
  }

  function sendMail(){
      MailCompose.composeAsync({
        subject: `Herói do Caso: ${Incident.title}`,
        recipients: [Incident.email],
        body:message
      })
  }

  function sendWhatsapp(){
      Linking.openURL(`whatsapp://send?phone=${Incident.whatsapp}&text=${message}`)
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={logoImg} />   
          <TouchableOpacity onPress={navigateBack}>
        <Feather name="arrow-left" size={28}  color="#e02041"/>
          </TouchableOpacity>   
      </View>

 <View style={styles.Incident}> 
    <Text style={[styles.IncidentProperty, {marginTop:0}]}>ONG:</Text>
  <Text style={styles.IncidentValue}>{Incident.name} de {Incident.city}/{Incident.uf}</Text> 
    <Text style={styles.IncidentProperty}>CASO:</Text>
    <Text style={styles.IncidentValue}>{Incident.title}</Text>
    <Text style={styles.IncidentProperty}>VALOR:</Text>
    <Text style={styles.IncidentValue}>
      {Intl.NumberFormat('pt-BR', 
      {style: 
      'currency', 
      currency: 'BRL'}).format(Incident.value)}</Text>

  </View>

      <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia! </Text>
          <Text style={styles.heroTitle}>Seja o heroi desse caso. </Text>
          <Text style={styles.heroDescription}>Entre em contato:</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                <Text style={styles.actionText}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} onPress={sendMail}>
                <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}
