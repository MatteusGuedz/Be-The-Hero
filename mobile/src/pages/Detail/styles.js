import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// import { Container } from './styles';

export default  StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight + 20,
        paddingHorizontal:24,
    },
    header: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    Incident: {
        padding:24,
        borderRadius:8,
        backgroundColor: '#fff',
        marginBottom:16,
        marginTop:48,
    },
    IncidentProperty:{
        fontSize:14,
        color:'#41414b',
        fontWeight: 'bold',
        marginTop:24,

    },
    IncidentValue:{
      marginTop:8,  
      fontSize:15,
      color: '#737380'
    },
    contactBox: {
        padding:24,
        borderRadius:8,
        backgroundColor: '#fff',
        marginBottom:16,
    },

    heroTitle:{
        fontSize:16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    heroDescription: {
        fontSize:15,
        color:'#737380',
        marginTop:16,
    },
    actions:{
        marginTop:16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height:50,
        width: '48%',
        justifyContent: 'center',
        alignItems:'center'

    },

    actionText: {
        color:'#fff',
        fontSize: 15,
        fontWeight:'bold'
    }





    
});
