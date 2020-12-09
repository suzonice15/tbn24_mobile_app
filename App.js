/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import { 
  StyleSheet,   
  View
  
} from 'react-native'; 
 import Home from "./components/Home";
 import Program from "./components/Program";
 import TodayShedule from "./components/TodayShedule";
 import About from "./components/About";
 import Contact from "./components/Contact";
 import Login from "./components/Login";
 import Registration from "./components/Registration";
 

const App: () => React$Node = () => {

	
	  
	 
  return ( 
  <>
  <Registration></Registration>
  </>
  );
	
};

const styles = StyleSheet.create({
	 
  logo:{
		width:300,
		height:80,
		marginTop:2
	},
   
});

export default App;
