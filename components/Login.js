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
  TouchableHighlight,
  Button,
  TextInput
} from 'react-native';
 import Video from 'react-native-video';
 import {LivePlayer} from "react-native-live-stream";
  import { Navigation } from "react-native-navigation";


class Login  extends Component {
	
	

sideMenuShow=()=>{	
 		Navigation.mergeOptions(this.props.componentId,{			
			sideMenu:{
				left:{
					visible:true
				}
			}
		});
	
	}	
	
	render(){
  return ( 
  
  
    <ScrollView>  
  <View style={{flex:1,flexDirection:'row', backgroundColor:'#B10000'}}>  
	 <Image  style={styles.logo}  source={{uri:'https://www.tbn24.com/public/logo.png'}} />
	
	<TouchableHighlight  underlayColor='none' onPress={this.sideMenuShow}>	
	<Image   style={{width:50,marginLeft:40,marginTop:20}}  source={require('../images/menu.png')} />
	
	</TouchableHighlight>
	</View>  
  <View style={{backgroundColor:'white',borderColor: 'black',
      borderWidth:1,margin:5}} >  
  <Text style={{fontSize:25,color:'black',fontWeight:'bold',textAlign:'center',borderBottomWidth:1,paddingBottom:10}}>
Login Form</Text>

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
Password </Text>
	  
	   <TextInput
        style={{ fontSize:20,margin: 15,
      height: 50,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Enter Your Password"
         
      />	   
	  <View style={{backgroundColor:'red',width:'93%',  marginBottom:15,marginLeft:15,marginTop: 5}} >  
    <Button title="Login" style={{fontSize:20,borderColor: 'black',
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

export default Login;
