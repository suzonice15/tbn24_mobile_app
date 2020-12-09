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
  ScrollView,
  View,
  Image,
  Text,
  FlatList,
  StatusBar,
  Button,
  TextInput
} from 'react-native';
 import Video from 'react-native-video';
 import {LivePlayer} from "react-native-live-stream";
 

class Registration  extends Component {
	
	 
	
	render(){
  return ( 
  
  
    <ScrollView>  
  <View style={{backgroundColor:'#B10000'}} >  
	 <Image  style={styles.logo}  source={{uri:'https://www.tbn24.com/public/logo.png'}} />
	 </View> 
	 
  <View style={{backgroundColor:'white',borderColor: 'black',
      borderWidth:1,margin:5}} >  
  <Text style={{fontSize:25,color:'black',fontWeight:'bold',textAlign:'center',borderBottomWidth:1,paddingBottom:10}}>
Registration Form</Text>



  <Text style={{fontSize:18,color:'black',fontWeight:'bold',textAlign:'left',paddingBottom:1,marginTop:5,marginLeft:18}}>
 Full Name  </Text>
 
 <TextInput
        style={{ margin: 15,
      height: 50,fontSize:20,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Enter Your  Full Name "
         
      />
  <Text style={{fontSize:18,color:'black',fontWeight:'bold',textAlign:'left',paddingBottom:1,marginTop:5,marginLeft:18}}>
 E-Mail Address 
 </Text>
 
 <TextInput
        style={{ margin: 15,
      height: 50,fontSize:20,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Enter Your Email"
         
      />
	  
	  
  <Text style={{fontSize:18,color:'black',fontWeight:'bold',textAlign:'left',paddingBottom:1,marginTop:5,marginLeft:18}}>
 Phone   </Text>
 
 <TextInput
        style={{ margin: 15,
      height: 50,fontSize:20,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Enter Your  Phone  "
         
      />
	  
	  
	   <Text style={{fontSize:18,color:'black',fontWeight:'bold',textAlign:'left',paddingBottom:1,marginTop:5,marginLeft:18}}>
Password </Text>
 
	  
	   <TextInput
        style={{ fontSize:20,margin: 15,
      height: 50,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Enter Your Password"
         
      /> 
	   
	  <View style={{backgroundColor:'red',width:'93%',  marginBottom:15,marginLeft:15,marginTop: 5}} >  
    <Button title="Registration Now" style={{fontSize:20,borderColor: 'black',
      borderWidth: 2,backgroundColor:'red',textAlignVertical: 'top',}} />
	  
	  </View>
	  
	  
	  
  
  </View>
 
 
  </ScrollView>
     
  );
	}
}

const styles = StyleSheet.create({
	 
   backgroundVideo: {
    position: 'relative',
	height:300    
  },
  logo:{
		width:300,
		height:80,
		marginTop:2
	},
   
});

export default Registration;
