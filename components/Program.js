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
  StatusBar,
  TouchableHighlight
} from 'react-native';
 import Video from 'react-native-video';
 import {LivePlayer} from "react-native-live-stream";
 

class Program  extends Component {
	
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
		 <TouchableHighlight>
		 <View style={{flexDirection:'column',backgroundColor:'#B10000',width:190,margin:5}}>
		  <View>
		 
		 <Image source={{uri:img}}  style={{height:180,padding:5,width:"100%"}}/>
		  
		 </View>
		  <View style={{backgroundColor:'#B10000',margin:5}}>
		 
		 	 <Text style={{color:'white',textAlign:'center',fontSize:18}}>{title}</Text>		 
		  
		 </View>	   	 
	
		 </View>
		  </TouchableHighlight>
		 )
	 }
	
	render(){
  return ( 
  
  
    <ScrollView>  
	<StatusBar/>
  <View style={{backgroundColor:'#B10000'}} >  
	 <Image  style={styles.logo}  source={{uri:'https://www.tbn24.com/public/logo.png'}} />
	 </View> 
	 
  <View style={{backgroundColor:'white'}} >  
  <Text style={{fontSize:30,color:'black',fontWeight:'bold',textAlign:'center'}}>
Our Programs
</Text>
  
 
 <FlatList numColumns={2} data={this.shedule}   keyExtractor={item => item.id} renderItem={({item})=><this.ChildView title={item.title} img={item.img} subtitle={item.subtitle} />} />
  
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

export default Program;
