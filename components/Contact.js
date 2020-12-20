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
  Alert,
  TouchableHighlight,
  TextInput
} from 'react-native';
 import Video from 'react-native-video';
 import {LivePlayer} from "react-native-live-stream";
   import { Navigation } from "react-native-navigation";


class Contact  extends Component {
	
	 constructor(props){
		 super(props)
	 this.state={
		 name:'',
		 email:'',
		 subject:'',
		 message:''
		 
	 }
	 }
	 contactStore=()=>{
		 let URL='https://www.tbn24.com/api/contact/store';
		 let configHeader={
			 Accept:'application/json',
			 'Content-Type':'application/json'
		 }
		 let configBody=JSON.stringify({
			 contact_name:this.state.name,
			 contact_email:this.state.email,
			 contact_subject:this.state.subject,
			 contact_message:this.state.message
			 
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
	 
  <ScrollView style={{marginTop:100,height:'85%'}} >  
  <Text style={{fontSize:30,color:'black',fontWeight:'bold',textAlign:'center'}}>
Contact With Us
</Text>

 
 <TextInput onChangeText={(value)=>this.setState({name:value})}
        style={{ margin: 15,
      height: 50,fontSize:20,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Enter Your Name"
         
      />
	  
	  
	   <TextInput
	   
	   onChangeText={(value)=>this.setState({email:value})}
        style={{ fontSize:20,margin: 15,
      height: 50,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Enter Your Email"
         
      />
	   <TextInput
	   onChangeText={(value)=>this.setState({subject:value})}
        style={{ fontSize:20,margin: 15,
      height: 50,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Subject Name"
         
      />
	 
	  <TextInput
	  onChangeText={(value)=>this.setState({message:value})}
    multiline={true}
	 placeholder="Enter Your Message"
    numberOfLines={10}
    style={{fontSize:20, margin: 15,height:200,   borderColor: 'black',
      borderWidth: 2,textAlignVertical: 'top',}}/>
	  
	  
	  <View style={{backgroundColor:'red',width:'93%', margin: 15}} >  
    <Button onPress={this.contactStore} title="Send Message" style={{fontSize:20,borderColor: 'black',
      borderWidth: 2,backgroundColor:'red',textAlignVertical: 'top',}} />
	  
	  </View>
	  
	  <Text style={{fontSize:30,color:'black',fontWeight:'bold',textAlign:'center'}}>
Contact info 
</Text>

 
	  <View style={{backgroundColor:'white',flex:100, margin: 15,borderColor: 'black',
      borderWidth: 1}} > 
	  
	  <View style={{backgroundColor:'white',borderBottomWidth:1,padding:10}} > 
	    <Text style={{fontSize:25,color:'black',fontWeight:'bold',textAlign:'left'}}>
Contact info 
</Text>

 <Text style={{fontSize:20,color:'black',fontWeight:'normal',textAlign:'left'}}>
37-19, 57th street
woodside,NY-11377 United States 
</Text>
 </View>   
   
	  <View style={{backgroundColor:'white',borderBottomWidth:1,padding:10}} > 
	    <Text style={{fontSize:25,color:'black',fontWeight:'bold',textAlign:'left'}}>
Email
</Text>

 <Text style={{fontSize:20,color:'black',fontWeight:'normal',textAlign:'left'}}>
 info@tban24.com 
</Text>
 </View> 
   
	  <View style={{backgroundColor:'white',borderBottomWidth:1,padding:10}} > 
	    <Text style={{fontSize:25,color:'black',fontWeight:'bold',textAlign:'left'}}>
Hotline </Text>

 <Text style={{fontSize:20,color:'black',fontWeight:'normal',textAlign:'left'}}>
 +1(718)808-9000 
</Text>
 </View>  
 
 <Text></Text>
 <Text></Text>
 <Text></Text>
 <Text></Text>
 <Text></Text>
     
	  </View>	  
  
  </ScrollView>

  
  <View style={{flex:9,position:'absolute',color:'white',bottom:0,width:'100%',padding:10,left:0,flexDirection:'row',height:80, backgroundColor:'#B10000'}}>
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

export default Contact;
