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
		 message:'',
		 Registration:"Registration Now"
		 
	 }
	 }
	 dataStore=()=>{
		this.setState({Registration: "Please Wait...."})

		 if(this.state.name==""){
			  Alert.alert('Enter Your Name')
			  this.setState({Registration: "Registration Now"})
			 return false;
		 }
		  if(this.state.email==""){
			this.setState({Registration: "Registration Now"})

			  Alert.alert('Enter Your Email')
			 return false;
		 }
		 
		 let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(this.state.email) === false) {
	this.setState({Registration: "Registration Now"})

    	  Alert.alert('Enter Valid Email')
     
    return false;
  }
		  if(this.state.phone==""){
			this.setState({Registration: "Registration Now"})

			  Alert.alert('Enter Your phone')
			 return false;
		 }
		  if(this.state.password==""){
			this.setState({Registration: "Registration Now"})

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
		 }).catch((erorr)=>{
			this.setState({Registration: "Registration Now"})

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
  
  
    <View style={{flex:100,width:"100%"}}> 	
  <View style={{flex:15,width:"100%",marginTop:0, backgroundColor:'#B10000'}}> 
 	 <Image  style={styles.logo}  source={require('../images/logo.png')} /> 
	
	</View>
	
	
	 <View style={{flex:77,width:"100%",backgroundColor:'white'}}> 
	  <Text style={{fontSize:20,color:'black',textAlign:'center',borderBottomWidth:1,paddingBottom:10}}>
Registration Form</Text>
  <ScrollView>  
 

<View style={{margin:10}}>

  <Text  style={styles.fieldRow}>
 Full Name  </Text>
 
 <TextInput
 onChangeText={(value)=>this.setState({name:value})}
        style={styles.formField}
        placeholder="Enter Your  Full Name "
         
      />
  <Text  style={styles.fieldRow}>
 E-Mail Address 
 </Text>
 
 <TextInput
 onChangeText={(value)=>this.setState({email:value})}
 style={styles.formField}
        placeholder="Enter Your Email"
         
      />
	  
	  
  <Text  style={styles.fieldRow}>
 Phone   </Text>
 
 <TextInput
 onChangeText={(value)=>this.setState({phone:value})}
 style={styles.formField}
        placeholder="Enter Your  Phone  "
         
      />
	  
	  
	   <Text style={styles.fieldRow}>
Password </Text>
 
	  
	   <TextInput
	   
	   secureTextEntry={true}
	   onChangeText={(value)=>this.setState({password:value})}
       style={styles.formField}
        placeholder="Enter Your Password"
         
      /> 
	   
	  <View style={{backgroundColor:'red',width:'100%',  marginBottom:15,marginTop: 8}} >  
 
	  

      
	 <TouchableHighlight  onPress={this.dataStore}  underlayColor='none' >
<Text style={styles.submit}  > {this.state.Registration}</Text>
</TouchableHighlight>
	 
	  </View>
	  
	  
	  
	  </View>
  </ScrollView>
  
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
	  fieldRow:{
		  fontSize:18,
		  color:'black',
		  textAlign:'left',
		  paddingBottom:1,
		  marginTop:5,
		  marginLeft:2
	  },
	  formField: {
		margin: 3,
		height: 35,
		padding:5,
		alignItems:'center',
		fontSize:20,
		borderColor: 'black',
		borderWidth: 1 
	  },
  logo:{
		width:300,
		height:80,
		marginTop:2
	},
   
});

export default Registration;
