import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Alert,
  ActivityIndicator ,
  FlatList,
  StatusBar,
  TouchableHighlight
} from 'react-native';
 import Video from 'react-native-video';
 import {LivePlayer} from "react-native-live-stream";
 

class Program  extends Component {
	
	
	constructor(){
		
		super();
		this.state={
			Data:[],
			loading:true,
			refressicon:true
			
		}
	}
	PullRefresh=()=>{
				this.onApiCall();

		
	}
	onApiCall=()=>{
		
		 	 			this.setState({refressicon:true});

		let URL="https://www.tbn24.com/api/program";
		let config={method:'GET'}
		fetch(URL,config).then((result)=>result.json()).then((response)=>{	
	 			this.setState({Data:response,loading:false,refressicon:false});
		}).catch((error)=>{
			this.setState({loading:false,refressicon:false});
			Alert.alert("Internet Problem"); 
		});
		
	}
	
	componentDidMount=()=>{
		
		this.onApiCall();
				
	}
	
	   
	 ChildView=({program_name,program_image})=>{
		 return(
		 <TouchableHighlight>
		 <View style={{flexDirection:'column',backgroundColor:'#B10000',width:190,margin:5}}>
		  <View>
		 
		 <Image source={{uri:'https://www.tbn24.com/public/uploads/program/'+program_image}}  style={{height:180,padding:5,width:"100%"}}/>
		  
		 </View>
		  <View style={{backgroundColor:'#B10000',margin:5}}>
		 
		 	 <Text style={{color:'white',textAlign:'center',height:50,fontSize:18}}>{program_name}</Text>		 
		  
		 </View>	   	 
	
		 </View>
		  </TouchableHighlight>
		 )
	 }
	
	render(){
		
		if(this.state.loading==true){
			return(
			<View>
			 <View style={{backgroundColor:'#B10000'}} >  
	 <Image  style={styles.logo}  source={{uri:'https://www.tbn24.com/public/logo.png'}} />
	 </View> 
			<View style={{flex:1,marginTop:100,flexDirection:'column',justifyContent:'center'}} >
<ActivityIndicator size="large" color="red" />
</View>
</View>
			)
			
		} else {
			
			
  return (    
    <View>  
   <View style={{backgroundColor:'#B10000'}} >  
	 <Image  style={styles.logo}  source={{uri:'https://www.tbn24.com/public/logo.png'}} />
	 </View> 
	 
  <View style={{backgroundColor:'white'}} >  
  <Text style={{fontSize:30,color:'black',fontWeight:'bold',textAlign:'center'}}>
Our Programs
</Text> 

 
 <FlatList onRefresh={()=>this.PullRefresh()} refreshing={this.state.refressicon} numColumns={2} data={this.state.Data}   keyExtractor={item =>item.id.toString()} renderItem={({item})=><this.ChildView program_name={item.program_name} program_image={item.program_image}   />} />
  
   
   </View>
    <Text style={{fontSize:30,color:'black',fontWeight:'bold',textAlign:'center'}}>
		{this.state.shedule}</Text> 
 
  </View>   
  );
			
		}
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
