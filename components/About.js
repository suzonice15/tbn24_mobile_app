/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { Navigation } from "react-native-navigation";

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
  TouchableHighlight,
  Button
} from 'react-native';
 import Video from 'react-native-video';
 import {LivePlayer} from "react-native-live-stream";
 

class About  extends Component {
	
	 constructor(props){
		
		super(props);
		Navigation.events().bindComponent(this)

		this.state={
			about:'',
 			
		}
	}
	 
	
	
	  
	   componentDidMount=()=>{
		
	 let URL="https://www.tbn24.com/api/about";
		let config={method:'GET'}
		fetch(URL,config).then((result)=>result.json()).then((response)=>{	
	 			this.setState({about:response.replace(/(<([^>]+)>)/gi, "")});
		}).catch((error)=>{
			 
			Alert.alert("Internet Problem"); 
		});
		
				
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
  
  
    <ScrollView>  
  <View style={{flex:1,flexDirection:'row', backgroundColor:'#B10000'}} >  
	 <Image  style={styles.logo}  source={{uri:'https://www.tbn24.com/public/logo.png'}} />
<TouchableHighlight  underlayColor='none' onPress={this.sideMenuShow}>	
	<Image   style={{width:50,marginLeft:40,marginTop:20}}  source={require('../images/menu.png')} />
	
	</TouchableHighlight>
	</View> 
	 
  <View style={{backgroundColor:'white'}} >  
  <Text style={{fontSize:30,color:'black',fontWeight:'bold',textAlign:'center'}}>
ABOUT US
</Text>
 
<Text style={{textAlign:'left',paddingLeft:10,color:'black',margin:8,fontSize:19}}>

	{this.state.about}
</Text>
  
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

export default About;
