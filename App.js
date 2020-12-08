/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar
} from 'react-native';
 import Video from 'react-native-video';
 import {LivePlayer} from "react-native-live-stream";
 

const App=() =>  {
	
	const onBuffer=()=>{
		console.log("buffering");
	}
	const onError=()=>{
		console.log("onError");
	}
	
  return ( 
  
  
    <ScrollView>  
  <View style={{backgroundColor:'#B10000'}} >  
	 <Image  style={styles.logo}  source={{uri:'https://www.tbn24.com/public/logo.png'}} />
	 </View> 
	 <View style={{backgroundColor:'#383838'}}>
		
		<LivePlayer source={{uri:"https://dog.dg21bd.com/TBN242/index.m3u8"}}
		 
   
    
   ref={(ref) => {
       this.player = ref
   }}
   style={styles.backgroundVideo}
   paused={false}
   muted={false}
   bufferTime={300}
   maxBufferTime={1000}
   resizeMode={"contain"}
   onLoading={()=>{}}
   onLoad={()=>{}}
   onEnd={()=>{}}
/>
 </View> 
  <View style={{backgroundColor:'#383838'}} >  
  
  <Text>Upcomming Program</Text>
  <Text>Upcomming Program</Text>
  <Text>Upcomming Program</Text>
  <Text>Upcomming Program</Text>
  
  </View>
 
 
  </ScrollView>
     
  );
};

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

export default App;
