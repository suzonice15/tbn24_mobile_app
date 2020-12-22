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
  <View style={{flex:1,flexDirection:'row',marginTop:0, backgroundColor:'#B10000'}}>  
	 <Image  style={styles.logo}  source={{uri:'https://www.tbn24.com/public/logo.png'}} />
	
	<TouchableHighlight  underlayColor='none' onPress={this.sideMenuShow}>	
	<Image   style={{width:50,marginLeft:40,marginTop:20}}  source={require('../images/menu.png')} />
	
	</TouchableHighlight>
	</View>
	 <View style={{backgroundColor:'#383838',margin:5}}>
		
		<LivePlayer source={{uri:this.state.video}}
		 
   
    
   ref={(ref) => {
       this.player = ref
   }}
   style={styles.backgroundVideo}
   paused={false}
   muted={false}
   bufferTime={1}
   maxBufferTime={300}
   resizeMode={"contain"}
   onLoading={()=>{}}
   onLoad={()=>{}}
   onEnd={()=>{}}
/>
 </View> 
 
 <Text></Text>
 <Text></Text>
 <Text></Text>
 <Text></Text>
 <Text></Text>
 <Text></Text>
  
 <Text></Text>
 <Text></Text>
 <Text></Text>
 <Text></Text>
 <Text></Text>
 <Text></Text>
 
 <View style={{flex:9,position:'absolute',color:'white',marginTop:50,bottom:0,width:'100%',padding:10,left:0,flexDirection:'row',height:80, backgroundColor:'#B10000'}}>
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

   
  </ScrollView>
     
  );
	}
}

const styles = StyleSheet.create({
	 
   backgroundVideo: {
    position: 'relative',
	height:300 ,
marginTop:2	
  },
  logo:{
		width:300,
		height:80,
		marginTop:2
	},
   
});

export default Home;
