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
  Alert,
  Button,
  TouchableHighlight,
  TextInput
} from 'react-native';
 import Video from 'react-native-video';
 import {LivePlayer} from "react-native-live-stream";
    import { Navigation } from "react-native-navigation";


class Registration  extends Component {
	

 constructor(props){
		 super(props)
	 this.state={
		 name:'',
		 email:'',
		 phone:'',
		 password:'',
		 message:''
		 
	 }
	 }
	 dataStore=()=>{
		 
		 if(this.state.name==""){
			  Alert.alert('Enter Your Name')
			 return false;
		 }
		  if(this.state.email==""){
			  Alert.alert('Enter Your Email')
			 return false;
		 }
		 
		 let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(this.state.email) === false) {
    	  Alert.alert('Enter Valid Email')
     
    return false;
  }
		  if(this.state.phone==""){
			  Alert.alert('Enter Your phone')
			 return false;
		 }
		  if(this.state.password==""){
			  Alert.alert('Enter Your password')
			 return false;
		 }
		 
		 let URL='https://www.tbn24.com/api/registration/store';
		 let configHeader={
			 Accept:'application/json',
			 'Content-Type':'application/json'
		 }
		 let configBody=JSON.stringify({
			 name:this.state.name,
			 email:this.state.email,
			 phone:this.state.phone,
			 password:this.state.password
			 
		 });
		 let config={method:'POST',headers:configHeader,body:configBody}
		 fetch(URL,config).then((response)=>response.text())
		 .then((responsData)=>{
 			
			 
			    Alert.alert(responsData)
		 }).catch((erorr)=>{
			 Alert.alert('Something is Wrong')
		 })
		 
	 }	 
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
  
  
    <View>  
  <View style={{flex:1,flexDirection:'row',width:'100%',position:'absolute',top:0,right:0, backgroundColor:'#B10000'}}>  
	 <Image  style={styles.logo}  source={{uri:'https://www.tbn24.com/public/logo.png'}} />
	
	<TouchableHighlight  underlayColor='none' onPress={this.sideMenuShow}>	
	<Image   style={{width:50,marginLeft:40,marginTop:20}}  source={require('../images/menu.png')} />
	
	</TouchableHighlight>
	</View>  
	 
  <ScrollView style={{marginTop:100,height:'70%'}} >  
  <Text style={{fontSize:25,color:'black',fontWeight:'bold',textAlign:'center',borderBottomWidth:1,paddingBottom:10}}>
Registration Form</Text>



  <Text style={{fontSize:18,color:'black',fontWeight:'bold',textAlign:'left',paddingBottom:1,marginTop:5,marginLeft:18}}>
 Full Name  </Text>
 
 <TextInput
 onChangeText={(value)=>this.setState({name:value})}
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
 onChangeText={(value)=>this.setState({email:value})}
        style={{ margin: 15,
      height: 50,fontSize:20,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Enter Your Email"
         
      />
	  
	  
  <Text style={{fontSize:18,color:'black',fontWeight:'bold',textAlign:'left',paddingBottom:1,marginTop:5,marginLeft:18}}>
 Phone   </Text>
 
 <TextInput
 onChangeText={(value)=>this.setState({phone:value})}
        style={{ margin: 15,
      height: 50,fontSize:20,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Enter Your  Phone  "
         
      />
	  
	  
	   <Text style={{fontSize:18,color:'black',fontWeight:'bold',textAlign:'left',paddingBottom:1,marginTop:5,marginLeft:18}}>
Password </Text>
 
	  
	   <TextInput
	   
	   secureTextEntry={true}
	   onChangeText={(value)=>this.setState({password:value})}
        style={{ fontSize:20,margin: 15,
      height: 50,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Enter Your Password"
         
      /> 
	   
	  <View style={{backgroundColor:'red',width:'93%',  marginBottom:15,marginLeft:15,marginTop: 5}} >  
    <Button onPress={this.dataStore}  title="Registration Now" style={{fontSize:20,borderColor: 'black',
      borderWidth: 2,backgroundColor:'red',textAlignVertical: 'top',}} />
	  
	  </View>
	  
	  
	  
  
  </ScrollView>
  
   
  <Text></Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>
   
  	<View style={{flex:9,position:'absolute',color:'white',marginTop:10,bottom:0,width:'100%',padding:10,left:0,flexDirection:'row',height:80, backgroundColor:'#B10000'}}>
	<View style={{flex:3,justifyContent:'center','alignItems':'center'}} >
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
	<View style={{flex:3,justifyContent:'center','alignItems':'center'}} >
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
	<View style={{flex:3,justifyContent:'center','alignItems':'center'}} >
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

	</View>

 
 
  </View>
     
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
