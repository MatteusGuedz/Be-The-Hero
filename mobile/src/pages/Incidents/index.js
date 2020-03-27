import  React, {useState, useEffect} from 'react';
import { View,Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { Feather} from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const navigation = useNavigation();
  

  function navigateToDetail(Incident){
    navigation.navigate('Detail', {Incident})
  };

  async function loadIncidents() {
   if(loading){
     return;
   }

   if(total > 0 && Incidents.length == total){
     return;

   }
   setLoading(true)
   const response = await api.get('incidents', {
     params: {
       page
     }
   });
 


   setIncidents([...incidents, ...response.data])
   setTotal(response.headers['x-total-count'])
   setPage(page + 1)
     setLoading(false)
  }

  useEffect(() => {
    loadIncidents();

  }, []);

  return (
<View style={styles.container}>

      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.header}>
          Total de <Text style={styles.headerTextBold}>{total}</Text> casos. 
        </Text>
      </View>
      <Text style={styles.title}>Bem-vindo!  </Text>
      <Text style={styles.description}> Escolha um dos casos abaixo e salve o dia!</Text>

<FlatList 
    style={styles.IncidentsList}
    data={incidents}
    keyExtractor={Incident => String(Incident.id)}
    showsVerticalScrollIndicator={false}
    onEndReached={loadIncidents}
    onEndReachedThreshold={0.2}
    renderItem={({item: Incident})=>(
      <View style={styles.Incident}>
      <Text style={styles.IncidentProperty}>ONG:</Text>
    <Text style={styles.IncidentValue}>{Incident.name}</Text> 
      <Text style={styles.IncidentProperty}>CASO:</Text>
    <Text style={styles.IncidentValue}>{Incident.title}</Text>
      <Text style={styles.IncidentProperty}>VALOR:</Text>
    <Text style={styles.IncidentValue}>
      {Intl.NumberFormat('pt-BR', 
      {style: 
      'currency', 
      currency: 'BRL'}).format(Incident.value)}</Text>
      
          <TouchableOpacity 
          style={styles.detailsButton} 
          onPress={() => navigateToDetail(Incident)}> 
          <Text style={styles.detailsButtonText} >Ver mais detalhes</Text>
          <Feather name="arrow-right" size={17} color="#e02041"/>
          </TouchableOpacity>
             
    </View>
    )}

/>
 
      
</View>
  );
}
 