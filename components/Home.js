/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import { Navigation } from "react-native-navigation";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TextInput,
  Text,
  TouchableHighlight,
  ActivityIndicator,
   TouchableOpacity,
  Modal,
  StatusBar,
  Alert
} from 'react-native';
 import Video from 'react-native-video';
 import {LivePlayer} from "react-native-live-stream";
 
 

class Home  extends Component {
	
	
	constructor(props){		
		super(props);
		Navigation.events().bindComponent(this)
		this.state={
			video:'', 			
			loading:true, 
			isVisible: false	,
			loginNotice:'',		
			registrationNotice:'',
			email:'',
			loginModalShowStatus:1,	
			password:'',
			user_id:0,
			showRegistrationModal:false,
			modalVisible: false,
			loginButton:"Login",
			miniteShowNotice:false,
		}
	}
	
	
	navigationButtonPressed({componentId}){
		Navigation.mergeOptions(this.props.componentId,{			
			sideMenu:{
				left:{
					visible:true
				}
			}
		});
	}

	toggleModal(visible) {
		this.setState({ modalVisible: visible });
	 }
	   componentDidMount=()=>{
		
	 var URL="https://www.tbn24.com/api/video";
	 var config={method:'GET'}
		fetch(URL,config).then((result)=>result.json()).then((response)=>{	
	 			this.setState({video:response,loading:false});
		}).catch((error)=>{
			 
			Alert.alert("No Internet Connection","You need to be connected to your network or Wi-Fi or Mobile Data"); 
		});	
		
			
		var URLNotice="https://www.tbn24.com/api/modal/notice";
		var configNotice={method:'GET'}
		fetch(URLNotice,configNotice).then((result)=>result.json()).then((response)=>{	
	 			this.setState({registrationNotice:response.five_minite,loginNotice:response.one_hour});
		}).catch((error)=>{
			Alert.alert("No Internet Connection","You need to be connected to your network or Wi-Fi or Mobile Data"); 

			 
		});	
	
		setInterval(()=>{
			if(this.state.user_id < 1){
			this.setState({isVisible: true,miniteShowNotice:true})
			}
			
		  }, 300000);

		  setInterval(()=>{
		 
			this.setState({isVisible: true,miniteShowNotice:false})
			 
			
		  }, 3600000);
		
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
	

	  


	  loginSubmit=()=>{
		this.setState({loginButton: "Please Wait...."})
if(this.state.email==''){
	this.setState({loginButton: "Login"})
	Alert.alert('Please Enter Your Email !')
	return false;
}
if(this.state.password==''){
	this.setState({loginButton: "Login"})
	Alert.alert('Please Enter Your Password !')
	return false;
}
 
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (reg.test(this.state.email) === false) {
	this.setState({loginButton: "Login"})
		Alert.alert('Please Enter Your Valid Email !')
   
  return false;
}


var URL='https://www.tbn24.com/api/home/loginCheck';
var configHeader={
			 Accept:'application/json',
			 'Content-Type':'application/json'
		 }
		 var configBody=JSON.stringify({
		 
			 email:this.state.email,
			 password:this.state.password,
 			 
		 });
		 var config={method:'POST',headers:configHeader,body:configBody}
		 fetch(URL,config).then((response)=>response.json())
		 .then((responsData)=>{	
		 
			if(responsData.error=='ok'){
				Alert.alert("Your Email Or Password Invalid Try Again")
				this.setState({loginButton: "Login"})

			} else {
				this.setState({isVisible: false,user_id:responsData.user_id})
				this.setState({loginButton: "Login"})
			}
			  
		 }).catch((erorr)=>{
			Alert.alert("No Internet Connection","You need to be connected to your network or Wi-Fi or Mobile Data"); 
			this.setState({loginButton: "Login"})
		 })
		 
	


	  }

	  Registration=()=>{
	
	
		Navigation.push('CenterScreen',{
			
			component:{
				name:"RegistrationPage",
				options:{
					sideMenu:{
						left:{
							visible:false						
						}
					}
					, topBar: {
		title: {
		  text: 'Registration',
		  color: 'white'
		}
					  }
				}
			}
		})
	}
	 
	
	render(){
  return ( 
  
  
    <View style={{flex:100,width:"100%"}}> 	
  <View style={{flex:15,width:"100%",marginTop:0, backgroundColor:'#B10000'}}> 
 	 <Image  style={styles.logo}  source={require('../images/logo.png')} /> 
	
	</View>
	
	
	 <View style={{flex:77,width:"100%", alignItems: 'stretch',backgroundColor:'white'}}>
	 
		 {
			this.state.loading ?
	     <ActivityIndicator  style={{fontSize:30,marginTop:100}}size="large" color="red" />:null
			 
		 }
		
		 {
			this.state.loading ?
		null:<LivePlayer source={{uri:this.state.video}}
   ref={(ref) => {
       this.player = ref
   }}
   style={styles.backgroundVideo}
   paused={false}
   muted={true}
   bufferTime={300}
   maxBufferTime={1000}
   resizeMode={"contain"}
   onLoading={()=>{}}
   onLoad={()=>{}}
   onEnd={()=>{}}
		 />
		 }




<View style={{margin:100,padding:10,width:"80%",height:"80%"}}>
<Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

<View style={{margin:10}}>
              <Text style = { styles.text }>
				  {this.state.miniteShowNotice ? this.state.registrationNotice:this.state.loginNotice}
              </Text>
				  <Text  style={styles.fieldRow}>
 E-Mail Address 
 </Text>
 
 <TextInput
 onChangeText={(value)=>this.setState({email:value})}
 style={styles.formField}
        placeholder="Enter Your Email"
         
      /> 
  
	  
	  
	   <Text style={styles.fieldRow}>
Password </Text>
 
	  
	   <TextInput
	   
	   secureTextEntry={true}
	   onChangeText={(value)=>this.setState({password:value})}
       style={styles.formField}
        placeholder="Enter Your Password"
         
      /> 
	    

	  <View style={{backgroundColor:'red',marginTop:5}} >  
     
	  <TouchableHighlight  underlayColor='none' 
	  
	  onPress={() => {
		this.loginSubmit();}}
	  >
<Text style={styles.submit}  >{this.state.loginButton}</Text>
</TouchableHighlight>

</View>

<View style={{backgroundColor:'white',display:'none',flex:4,flexDirection:'row',marginTop:20}} > 

<View style={{backgroundColor:'white',textAlign:'center',flex:2}}>
<Text  style={{color:'black',textAlign:'center'}}>New to tbn24 ? </Text>
</View>
<View style={{backgroundColor:'white',flex:2}}>
<TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
            <Text  style={styles.submit}   >Create an account ....</Text>
    
 </TouchableHighlight>
</View>

</View>
</View>
                
          </Modal>
            
         
</View>




<View style={{margin:100}}>
<Modal
            animationType = {"slide"}
            transparent={false}
            visible={this.state.showRegistrationModal}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

<View style={{margin:10}}>
              <Text style = { styles.text }>
              {this.state.loginNotice} registration </Text>
				  <Text  style={styles.fieldRow}>
 E-Mail Address 
 </Text>
 
 <TextInput
 onChangeText={(value)=>this.setState({email:value})}
 style={styles.formField}
        placeholder="Enter Your Email"
         
      /> 
  
	  
	  
	   <Text style={styles.fieldRow}>
Password </Text>
 
	  
	   <TextInput
	   
	   secureTextEntry={true}
	   onChangeText={(value)=>this.setState({password:value})}
       style={styles.formField}
        placeholder="Enter Your Password"
         
      /> 
	    

	  <View style={{backgroundColor:'red',marginTop:5}} >  
     
	  <TouchableHighlight  underlayColor='none' 
	  
	  onPress={() => {
		this.loginSubmit();}}
	  >
<Text style={styles.submit}  >Registration</Text>
</TouchableHighlight>

</View>

<View style={{backgroundColor:'white',flex:4,flexDirection:'row',marginTop:10}} > 

<View style={{backgroundColor:'white',textAlign:'center',flex:2}}>
<Text  style={{color:'black',textAlign:'center'}}>New to tbn24 ? </Text>
</View>
<View style={{backgroundColor:'white',flex:2}}>
<Text style={{color:'green',textAlign:'center'}}>Create an account .</Text>
</View>

</View>
</View>               
          </Modal>
            
        
</View>


<View style = {{marginTop:50}}>
            <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
                  <Text style = {styles.text}>Modal is open!</Text>
                  
                  <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text style = {styles.text}>Close Modal</Text>
                  </TouchableHighlight>
               </View>
            </Modal>
            
            <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.text}>Open Modal</Text>
            </TouchableHighlight>
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
	 
   backgroundVideo: {
    position: 'relative',
	height:310 ,
marginTop:2	
  },
  logo:{
		width:300,
		height:80,
		marginTop:0
	},
	button: {
		display: 'flex',
		height: 60,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		backgroundColor: '#2AC062',
		shadowColor: '#2AC062',
		shadowOpacity: 0.5,
		shadowOffset: { 
		  height: 10, 
		  width: 0 
		},
		shadowRadius: 25,
	  },
	  closeButton: {
		display: 'flex',
		height: 60,
		borderRadius: 6,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FF3974',
		shadowColor: '#2AC062',
		shadowOpacity: 0.5,
		shadowOffset: { 
		  height: 10, 
		  width: 0 
		},
		shadowRadius: 25,
	  },
	  buttonText: {
		color: '#FFFFFF',
		fontSize: 22,
	  },
	  image: {
		marginTop: 150,
		marginBottom: 10,
		width: '100%',
		height: 350,
	  },
	  text: {
		fontSize: 18,
		marginBottom: 0,
		padding: 20,
		color:'black'
	  },submit:{
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
	  height: 40,
	  padding:10,
	  alignItems:'center',
	  fontSize:20,
	  borderColor: 'black',
	  borderWidth: 1 
	},
	modal: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'white',
		padding: 100
	 },
   
});

export default Home;
