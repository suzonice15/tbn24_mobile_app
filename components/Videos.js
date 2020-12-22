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
import YouTube from 'react-native-youtube';
class Videos  extends Component {
	
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
  
  
    <View>

  <View style={{flex:1,flexDirection:'row',width:'100%',position:'absolute',top:0,right:0, backgroundColor:'#B10000'}} >
	 <Image  style={styles.logo}  source={{uri:'https://www.tbn24.com/public/logo.png'}} />
<TouchableHighlight  underlayColor='none' onPress={this.sideMenuShow}>	
	<Image   style={{width:50,marginLeft:40,marginTop:20}}  source={require('../images/menu.png')} />
	
	</TouchableHighlight>
	</View>
	<ScrollView style={{marginTop:80}}>
   <Text style={{fontSize:30,color:'black',fontWeight:'bold',textAlign:'center'}}>
ABOUT US
</Text>


<Text style={{textAlign:'left',paddingLeft:10,color:'black',margin:8,fontSize:19}}>

	<YouTube
	apiKey='AIzaSyAEcAvRfkqGYHQMm9neonaCzkxaIttEoxo'
  videoId="KVZ-P-ZI6W4" // The YouTube video ID
  play // control playback of video with true/false
  fullscreen // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
/>

	</Text>
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

export default Videos;
