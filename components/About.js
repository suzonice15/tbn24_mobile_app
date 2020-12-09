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
  Button
} from 'react-native';
 import Video from 'react-native-video';
 import {LivePlayer} from "react-native-live-stream";
 

class About  extends Component {
	
	 
	 
	
	render(){
  return ( 
  
  
    <ScrollView>  
  <View style={{backgroundColor:'#B10000'}} >  
	 <Image  style={styles.logo}  source={{uri:'https://www.tbn24.com/public/logo.png'}} />
	 </View> 
	 
  <View style={{backgroundColor:'white'}} >  
  <Text style={{fontSize:30,color:'black',fontWeight:'bold',textAlign:'center'}}>

ABOUT US
</Text>

<Text style={{textAlign:'left',paddingLeft:10,color:'black',margin:8,fontSize:19}}>

The voice of Non Resident Bangladeshis
TBN24 is a Bangla language live television channel in North America provides content that is informative, educational, socially responsible, entertaining and comparable with world-class television broadcasters. TBN24 is the first Bangla 24x7 live television channel to produce original content here in the USA. This channel is currently available in US, Canada, Europe, Australia, and Middle-East.TBN24 Television is the for non-resident Bangladeshi living across the globe as well as people whose mother tongue is Bangla.
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
