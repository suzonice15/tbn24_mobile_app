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
  TouchableHighlight,
  TextInput
} from 'react-native';
 import Video from 'react-native-video';
 import {LivePlayer} from "react-native-live-stream";
   import { Navigation } from "react-native-navigation";


class Contact  extends Component {
	
	 

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
	 
  <View style={{backgroundColor:'white'}} >  
  <Text style={{fontSize:30,color:'black',fontWeight:'bold',textAlign:'center'}}>
Contact With Us
</Text>
 
 <TextInput
        style={{ margin: 15,
      height: 50,fontSize:20,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Enter Your Name"
         
      />
	  
	  
	   <TextInput
        style={{ fontSize:20,margin: 15,
      height: 50,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Enter Your Email"
         
      />
	   <TextInput
        style={{ fontSize:20,margin: 15,
      height: 50,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Subject Name"
         
      />
	  
	  <TextInput
    multiline={true}
	 placeholder="Enter Your Message"
    numberOfLines={10}
    style={{fontSize:20, margin: 15,height:200,   borderColor: 'black',
      borderWidth: 2,textAlignVertical: 'top',}}/>
	  
	  
	  <View style={{backgroundColor:'red',width:'93%', margin: 15}} >  
    <Button title="Send Message" style={{fontSize:20,borderColor: 'black',
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

export default Contact;
