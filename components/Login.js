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
  
   <View style={{flex:100,width:"100%"}}> 	
  <View style={{flex:15,width:"100%",marginTop:0, backgroundColor:'#B10000'}}> 
 	 <Image  style={styles.logo}  source={require('../images/logo.png')} /> 
	
	</View> 
	
		 <View style={{flex:77,width:"100%",backgroundColor:'white',margin:10}}>

   <View style={{backgroundColor:'white',borderColor: 'black',
      borderWidth:1,marginRight:20}} >  
  <Text style={{fontSize:20,color:'black',textAlign:'center',borderBottomWidth:1,paddingBottom:10}}>
Login Form</Text>

  <Text style={{fontSize:17,color:'black',textAlign:'left',paddingBottom:1,marginTop:5,marginLeft:18}}>
 E-Mail Address 
 </Text>
 
 <TextInput
        style={{ margin: 10,
      height: 40,fontSize:20,padding:5,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Enter Your Email"
         
      />
	  
	  
	   <Text style={{fontSize:17,color:'black',textAlign:'left',paddingBottom:1,marginTop:5,marginLeft:18}}>
Password </Text>
	  
	   <TextInput
        style={{ fontSize:20,margin: 10,
      height: 40,
      borderColor: 'black',padding:5,
      borderWidth: 2}}
        placeholder="Enter Your Password"
         
      />	   
	    

	  <View style={{backgroundColor:'red',margin:8}} >  
     
	  <TouchableHighlight  underlayColor='none' >
<Text style={styles.submit}  >Login</Text>
</TouchableHighlight>
	  </View>
  </View>
   	</View> 

  
    
  
  
		
  
 <View style={{flex:8,flexDirection:'row',color:'white',width:'100%',padding:8, backgroundColor:'#B10000'}}>
	<View style={{flex:2,justifyContent:'center','alignItems':'center'}} >
<TouchableHighlight  underlayColor='none' onPress={()=>{

		Navigation.push(this.props.componentId, {
			component: {
				name: 'HomePage', // Push the screen registered with the 'Settings' key
				options: { // Optional options object to configure the screen
					topBar: {
						title: {
							text: 'Home' // Set the TopBar title of the new Screen
						}
					}
				}
			}
		})
	}}>

<Image    source={require('../images/live.png')} />
</TouchableHighlight>


	<Text style={{color:'white'}} >Live</Text>

	</View>
	<View style={{flex:2,justifyContent:'center','alignItems':'center'}} >
<TouchableHighlight  underlayColor='none' onPress={()=>{

		Navigation.push(this.props.componentId, {
			component: {
				name: 'ProgramPage', // Push the screen registered with the 'Settings' key
				options: { // Optional options object to configure the screen
					topBar: {
						title: {
							text: 'Program' // Set the TopBar title of the new Screen
						}
					}
				}
			}
		})
	}}>
<Image   source={require('../images/program.png')} />
</TouchableHighlight>

<Text style={{color:'white'}} >Programs</Text>

	</View>
	<View style={{flex:2,justifyContent:'center','alignItems':'center'}} >
<TouchableHighlight  underlayColor='none' onPress={()=>{

		Navigation.push(this.props.componentId, {
			component: {
				name: 'VideoPage', // Push the screen registered with the 'Settings' key
				options: { // Optional options object to configure the screen
					topBar: {
						title: {
							text: 'Videos' // Set the TopBar title of the new Screen
						}
					}
				}
			}
		})
	}}>
<Image     source={require('../images/youtube.png')} />
</TouchableHighlight>

<Text style={{color:'white'}} >Videos</Text>

	</View>

<View style={{flex:2,justifyContent:'center','alignItems':'center'}} >
<TouchableHighlight  underlayColor='none' onPress={this.sideMenuShow}>
<Image     source={require('../images/menu.png')} />
</TouchableHighlight>

<Text style={{color:'white'}} >Menu</Text>

	</View>

	</View>

 
  </View>
     
  );
	}
}

const styles = StyleSheet.create({
	 
	submit:{
		fontSize:18,
		borderColor: 'red',
		padding:5,
		color:'white',
		borderWidth:1,
		backgroundColor:'red',
		textAlign: 'center',
	  },
  logo:{
		width:300,
		height:80,
		marginTop:2
	},
   
});

export default Login;
