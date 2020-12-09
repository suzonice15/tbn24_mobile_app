/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  FlatList,
  StatusBar
} from 'react-native';
 import Video from 'react-native-video';
 import {LivePlayer} from "react-native-live-stream";
 

class Home  extends Component {
	
	  shedule=[
         {id:1,title:"TBN Analysis",subtitle:" দেখা হয় নাই চক্ষু মেলিয়া ",img:'https://www.tbn24.com/public/uploads/program/1601996132.jpg'},
         {id:2,title:"TBN Analysis",subtitle:" দেখা হয় নাই চক্ষু মেলিয়া ",img:'https://www.tbn24.com/public/uploads/program/1601996132.jpg'},
         {id:3,title:"TBN Analysis",subtitle:" দেখা হয় নাই চক্ষু মেলিয়া ",img:'https://www.tbn24.com/public/uploads/program/1601996132.jpg'},
         {id:4,title:"TBN Analysis",subtitle:"Dhaka",img:'https://www.tbn24.com/public/uploads/program/1601996132.jpg'},
         {id:5,title:"TBN Analysis",subtitle:" দেখা হয় নাই চক্ষু মেলিয়া ",img:'https://www.tbn24.com/public/uploads/program/1601996132.jpg'},
         {id:6,title:"TBN Analysis",subtitle:" দেখা হয় নাই চক্ষু মেলিয়া ",img:'https://www.tbn24.com/public/uploads/program/1601996132.jpg'},
         {id:7,title:"TBN Analysis",subtitle:"Dhaka",img:'https://www.tbn24.com/public/uploads/program/1601996132.jpg'},
         {id:8,title:"TBN Analysis",subtitle:"Dhaka",img:'https://www.tbn24.com/public/uploads/program/1601996132.jpg'},
        
     ];
	 ChildView=({title,subtitle,img})=>{
		 return(
		 <View style={{flexDirection:'row',backgroundColor:'white',margin:2,flex:100}}>
		  <View style={{flex:30}}>
		 
		 <Image source={{uri:img}}  style={{height:90,padding:5,width:100}}/>
		  
		 </View>
		  <View style={{backgroundColor:'white',margin:5,flex:50}}>
		 
		 	 <Text style={{color:'black',fontSize:15}}>{title}</Text>
		 	 <Text style={{color:'black',fontSize:15}}>{subtitle}</Text>
		 
		  
		 </View>
		 
		   <View style={{backgroundColor:'white',margin:5,flex:20}}>
		 
		 	 <Text style={{color:'white',backgroundColor:'red',borderRadius:50,width:80,height:80,padding:22,fontSize:18}}>12:8</Text>
		 
		  
		 </View>
		 
	
		 </View>
		 )
	 }
	
	render(){
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
   bufferTime={1}
   maxBufferTime={100}
   resizeMode={"contain"}
   onLoading={()=>{}}
   onLoad={()=>{}}
   onEnd={()=>{}}
/>
 </View> 
  <View style={{backgroundColor:'#383838'}} >  
  
 
 <FlatList data={this.shedule}   keyExtractor={item => item.id} renderItem={({item})=><this.ChildView title={item.title} img={item.img} subtitle={item.subtitle} />} />
  
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
