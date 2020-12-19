
import React,{Component} from 'react';
import {
   StyleSheet,
  Alert,
  View,
  Image,
  Text,
  FlatList,
  StatusBar,
  TouchableHighlight,
  Button,
  ScrollView,
  ActivityIndicator
} from 'react-native';
 import Video from 'react-native-video';
 import {LivePlayer} from "react-native-live-stream";
 
 import { Navigation } from "react-native-navigation";

class TodayShedule  extends Component {

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

	let URL="https://www.tbn24.com/api/today/schedule";
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

sideMenuShow=()=>{	
 		Navigation.mergeOptions(this.props.componentId,{			
			sideMenu:{
				left:{
					visible:true
				}
			}
		});
	
	}

 
	 ChildView=({program_name,schedule_date,img,start_time})=>{

		 return(
		 		   <View>

		 <View style={{flexDirection:'row',backgroundColor:'white',border:2,borderColor:'black', margin:3,flex:100}}>
		   
		  <View style={{flex:30}}>
		 
		 <Image source={{uri:'https://www.tbn24.com/public/uploads/program/'+img}}   style={{height:90,padding:5,width:100}}/>
		  
		 </View>
		  <View style={{backgroundColor:'white',margin:5,flex:50}}>
		 
		 	 <Text style={{color:'black',fontSize:15}}>{program_name}</Text>
		 	 <Text style={{color:'black',fontSize:15}}>{schedule_date}</Text>
 		 
		  
		 </View>
		 
		   <View style={{backgroundColor:'white',margin:5,flex:20}}>
		 
		 	 <Text style={{color:'white',backgroundColor:'#5a0000',fontWeight:'bold',borderRadius:50,width:80,height:75,paddingRight:15,paddingLeft:16,paddingTop:22,fontSize:18}}>{start_time}</Text>
		 
		  
		 </View>
		 
	
		 </View>
		 </View>
		 )
	 }
	
	render(){
		
		
		if(this.state.loading==true){
			return(
			<View>
 			 <View style={{flex:1,flexDirection:'row', backgroundColor:'#B10000'}}>  
	 <Image  style={styles.logo}  source={{uri:'https://www.tbn24.com/public/logo.png'}} />
	
	<TouchableHighlight  underlayColor='none' onPress={this.sideMenuShow}>	
	<Image   style={{width:50,marginLeft:40,marginTop:20}}  source={require('../images/menu.png')} />
	
	</TouchableHighlight>

	</View> 
</View>	
			)
			
		} else {
			
	  return ( 
  
  
    <View>
 <View style={{flex:1,flexDirection:'row',width:'100%',position:'absolute',top:0,right:0, backgroundColor:'#B10000'}}>  
	 <Image  style={styles.logo}  source={{uri:'https://www.tbn24.com/public/logo.png'}} />
	
	<TouchableHighlight  underlayColor='none' onPress={this.sideMenuShow}>	
	<Image   style={{width:50,marginLeft:40,marginTop:20}}  source={require('../images/menu.png')} />
	
	</TouchableHighlight>
	</View>  
	 
	   <ScrollView style={{marginTop:90,height:'80%'}} >  
  <Text style={{fontSize:30,color:'black',fontWeight:'bold',textAlign:'center'}}>

Today's Schedule
</Text>
  
 
 <FlatList data={this.state.Data}  onRefresh={()=>this.PullRefresh()} refreshing={this.state.refressicon}   keyExtractor={item => item.id} renderItem={({item})=><this.ChildView start_time={item.start_time} program_name={item.program_name} img={item.program_image} schedule_date={item.schedule_date} />} />
  
  </ScrollView>
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

export default TodayShedule;
