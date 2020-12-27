import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableHighlight,
  Alert,
  ActivityIndicator ,
  FlatList,
  StatusBar,
  
} from 'react-native';
 import Video from 'react-native-video';
 import {LivePlayer} from "react-native-live-stream";
 import { Navigation } from "react-native-navigation";


class SingleProgram  extends Component {
	
	
	constructor(props){
		
		super(props);
				Navigation.events().bindComponent(this)

		this.state={
			Data:[],
			loading:true,
			refressicon:true
			
		}
	}
	 
	 
	
	componentDidMount=()=>{
		
		this.setState({refressicon:true});

		let URL="https://www.tbn24.com/api/program/"+this.props.program_id;
		let config={method:'GET'}
		fetch(URL,config).then((result)=>result.json()).then((response)=>{	
	 			this.setState({Data:response,loading:false,refressicon:false});
		}).catch((error)=>{
			this.setState({loading:false,refressicon:false});
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
	singleProgram=(program_id)=>{
		
		Alert.alert(program_id)
	}
	
	
	   
	 ChildView=({program_id,program_name,program_image})=>{
		 return(
		   <View>
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
		  		   </View>

		 
		 )
	 }
	
	render(){
		
		 
			
  return ( 
<View>
<View style={{flex:1,flexDirection:'row',width:'100%',position:'absolute',top:0,right:0, backgroundColor:'#B10000'}}>  
	 <Image  style={styles.logo}  source={{uri:'https://www.tbn24.com/public/logo.png'}} />
	
	<TouchableHighlight  underlayColor='none' onPress={this.sideMenuShow}>	
	<Image   style={{width:50,marginLeft:15,marginTop:20}}  source={require('../images/menu.png')} />
	
	</TouchableHighlight>
	</View> 
	    
            
	   <ScrollView style={{marginTop:90,height:'80%'}} >  

   <Text style={{fontSize:25,color:'black',fontWeight:'bold',textAlign:'center',marginTop:5}}>
	   {this.props.programName}
	   
	   
	   </Text> 
	   	    
  
	   <View style={{ margin:10}}>
	   <Image style={{width:'100%',height:250}} source={{uri:'https://www.tbn24.com/public/uploads/program/'+this.props.program_image}} />
	   
	  
	   <Text style={{fontSize:18,color:'black',textAlign:'center',marginTop:5}}>
	   {this.props.programDescription}
 	   
	   </Text> 
	   	</View>
		
		 <View style={{ margin:10,borderColor:'red',borderWidth:1}}>
	  
	  <Text style={{color:'white',padding:10,fontSize:20,textAlign:'center',backgroundColor:'red'}}>
	   Weekly Schedule List 
	  </Text>
	  		 <View style={{ flex:9,flexDirection:'row',textAlign:'center',justifyContent:'center',marginTop:5,marginLeft:5,marginRight:5}}>

            <View style={{ flex:2,borderWidth:1,borderColor:'red',textAlign:'center',}}>
<Text style={{ padding:5}} >Date</Text>
           </View>
		   <View style={{ flex:3,borderWidth:1,borderColor:'red'}}>
<Text style={{ padding:5}} >Day</Text>
           </View>
		   <View style={{ flex:4,borderWidth:1,borderColor:'red'}}>
<Text style={{ padding:5}}>Show Time</Text>
           </View>
           </View>
		   
		   
			
			 {this.state.Data.map((program) => {
        return  <View style={{ flex:9,flexDirection:'row',marginLeft:5,marginRight:5,marginTop:0}}>
			
            <View style={{ flex:2,borderWidth:1,borderColor:'red'}}>
<Text style={{ padding:5}} >{program.schedule_date}</Text>
           </View>
		   <View style={{ flex:3,borderWidth:1,borderColor:'red'}}>
<Text style={{ padding:5}} >{program.day}</Text>
           </View>
		   <View style={{ flex:4,borderWidth:1,borderColor:'red'}}>
<Text style={{ padding:5}}>{program.start_time}-{program.end_time}</Text>
           </View> 
		   
	     	</View> 
      })}
	  <Text></Text>
	  <Text></Text>
 
	  
	   	</View>
		
		
 

   
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

export default SingleProgram;
