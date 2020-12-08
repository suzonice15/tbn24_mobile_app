/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  
  StyleSheet,
  
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';
  


const Header=() =>  {
	 
	
  return (
   
  
  <View style={styles.mainHeader} >
  
	 <Image style={styles.logo} source={{uri:'https://www.tbn24.com/public/logo.png'}} />
 
   
  </View> 
    
  );
}

const styles = StyleSheet.create({
	logo:{
		width:300,
		height:80,
		marginTop:2
	},
	mainHeader:{
		
		backgroundColor:"red",
		 
		
	},
      
});

export default Header;
