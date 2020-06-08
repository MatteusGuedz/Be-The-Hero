import React from 'react';
import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
            flex:1,
            paddingHorizontal: 24,
            paddingTop:Constants.statusBarHeight + 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize:15,
        color:'#737380'
    },
    headerTextBold: {
        fontWeight: 'bold'
    },
    title: {
        fontSize:30,
        marginBottom:16,
        marginTop:48,
        color: "#13131a",
    },

    description: {
        fontSize:15,
        lineHeight:24,
        color:'#737380',
    },

    IncidentsList: {
        marginTop:32,
    },
    Incident: {
        padding:24,
        borderRadius:8,
        backgroundColor: '#fff',
        marginBottom:16,
    },
    IncidentProperty:{
        fontSize:14,
        color:'#41414b',
        fontWeight: 'bold',

    },
    IncidentValue:{
      marginTop:8,  
      fontSize:15,
      marginBottom:24,
      color: '#737380'
    },
    detailsButton: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    detailsButtonText:{
        color:'#e02041',
        fontSize:15,
        fontWeight:'bold'
    }
});