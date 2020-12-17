/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import { Navigation } from "react-native-navigation";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableHighlight,
  FlatList,
  StatusBar
} from 'react-native';
 import Video from 'react-native-video';
 import {LivePlayer} from "react-native-live-stream";
 

class Home  extends Component {
	
	
	constructor(props){		
		super(props);
		Navigation.events().bindComponent(this)
		this.state={
			video:'',
 			
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
	   componentDidMount=()=>{
		
	 let URL="https://www.tbn24.com/api/video";
		let config={method:'GET'}
		fetch(URL,config).then((result)=>result.json()).then((response)=>{	
	 			this.setState({video:response});
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
  <View style={{flex:1,flexDirection:'row', backgroundColor:'#B10000'}}>  
	 <Image  style={styles.logo}  source={{uri:'https://www.tbn24.com/public/logo.png'}} />
	
	<TouchableHighlight  underlayColor='none' onPress={this.sideMenuShow}>	
	<Image   style={{width:50,marginLeft:40,marginTop:20}}  source={require('../images/menu.png')} />
	
	</TouchableHighlight>
	</View>
	 <View style={{backgroundColor:'#383838'}}>
		
		<LivePlayer source={{uri:this.state.video}}
		 
   
    
   ref={(ref) => {
       this.player = ref
   }}
   style={styles.backgroundVideo}
   paused={false}
   muted={false}
   bufferTime={1}
   maxBufferTime={100}
   resizeMode={"contain"}
   onLoading={()=>{}}
   onLoad={()=>{}}
   onEnd={()=>{}}
/>
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

export default Home;
