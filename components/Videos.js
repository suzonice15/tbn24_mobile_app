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
import YouTube from 'react-native-youtube';

class Videos  extends Component {
	
	
	constructor(props){
		
		super(props);
				Navigation.events().bindComponent(this)

		this.state={
			PopularVideo:[],
			PlaylistVideo:[],
			Data:[],
			loading:true,
			isReady:false,
			refressicon:true,
			status:'',
			quality:'',
			error:''
			
		}
	}
	 
	
	PullRefresh=()=>{
				this.onApiCall();

		
	}
	onApiCall=()=>{
		
		this.setState({refressicon:true});

		
	}
	
	componentDidMount=()=>{
		
		
		
		var URL="https://www.tbn24.com/api/popularVideo";
		var config={method:'GET'}
		fetch(URL,config).then((result)=>result.json()).then((response)=>{	
	 			this.setState({PopularVideo:response,loading:false,refressicon:false});
		}).catch((error)=>{
			this.setState({loading:false,refressicon:false});
			Alert.alert("Internet Problem"); 
		});
		
		var URL="https://www.tbn24.com/api/playlistVideo";
		var config={method:'GET'}
		fetch(URL,config).then((result)=>result.json()).then((response)=>{	
	 			this.setState({PlaylistVideo:response});
		}).catch((error)=>{
			this.setState({loading:false,refressicon:false});
			Alert.alert("Internet Problem"); 
		});
		
		 var URL="https://www.tbn24.com/api/allVideos";
		var config={method:'GET'}
		fetch(URL,config).then((result)=>result.json()).then((response)=>{	
	 			this.setState({Data:response});
		}).catch((error)=>{
			this.setState({loading:false,refressicon:false});
			 
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
	
	
		 PlaylistChildView=({title,picture,playlist})=>{
		 return(
		   <View>
		 <TouchableHighlight   
		 
		  onPress={()=>{

		Navigation.push(this.props.componentId, {
			component: {
				name: 'PlaylistPage', // Push the screen registered with the 'Settings' key
				options: { // Optional options object to configure the screen
					topBar: {
						title: {
							text: `${title}` // Set the TopBar title of the new Screen
						}
					}
				},
				    passProps: {
      playlist:`${playlist}`,
      playlistTitle:`${title}`,
     
      
    }
			}
		})
	}}
		 >
		 <View style={{flexDirection:'column',backgroundColor:'#B10000',width:185,margin:5}}>
		  <View>
		 
 		 
	 <Image source={{uri:picture}}  style={{height:180,padding:5,width:"100%"}}/>
		  
		 </View>
		  <View style={{backgroundColor:'#B10000',margin:5}}>
		 
		 	 <Text style={{color:'white',textAlign:'center',height:50,fontSize:18}}>{title}</Text>		 
		  
		 </View>	   	 
	
		 </View>
		  </TouchableHighlight>
		  		   </View>

		 
		 )
	 }
	
	  
	 PopularChildView=({title,picture,videoId})=>{
		 return(
		   <View>
		 <TouchableHighlight   
		 
		  onPress={()=>{

		Navigation.push(this.props.componentId, {
			component: {
				name: 'YouTubePage', // Push the screen registered with the 'Settings' key
				options: { // Optional options object to configure the screen
					topBar: {
						title: {
							text: `${title}` // Set the TopBar title of the new Screen
						}
					}
				},
				    passProps: {
      youtubeVideoId:`${videoId}`,
     
      
    }
			}
		})
	}}
		 >
		 <View style={{flexDirection:'column',backgroundColor:'#B10000',width:185,margin:5}}>
		  <View>
		 
 		 
	 <Image source={{uri:picture}}  style={{height:180,padding:5,width:"100%"}}/>
		  
		 </View>
		  <View style={{backgroundColor:'#B10000',margin:5}}>
		 
		 	 <Text style={{color:'white',textAlign:'center',height:50,fontSize:18}}>{title}</Text>		 
		  
		 </View>	   	 
	
		 </View>
		  </TouchableHighlight>
		  		   </View>

		 
		 )
	 }
	
	   
	 ChildView=({title,picture,videoId})=>{
		 return(
		   <View>
		 <TouchableHighlight   
		 
		  onPress={()=>{

		Navigation.push(this.props.componentId, {
			component: {
				name: 'YouTubePage', // Push the screen registered with the 'Settings' key
				options: { // Optional options object to configure the screen
					topBar: {
						title: {
							text: `${title}` // Set the TopBar title of the new Screen
						}
					}
				},
				    passProps: {
      youtubeVideoId:`${videoId}`,
     
      
    }
			}
		})
	}}
		 >
		 <View style={{flexDirection:'column',backgroundColor:'#B10000',width:185,margin:5}}>
		  <View>
		 
 		 
	 <Image source={{uri:picture}}  style={{height:180,padding:5,width:"100%"}}/>
		  
		 </View>
		  <View style={{backgroundColor:'#B10000',margin:5}}>
		 
		 	 <Text style={{color:'white',textAlign:'center',height:50,fontSize:18}}>{title}</Text>		 
		  
		 </View>	   	 
	
		 </View>
		  </TouchableHighlight>
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
	<Image   style={{width:50,marginLeft:15,marginTop:20}}  source={require('../images/menu.png')} />
	
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
	<Image   style={{width:50,marginLeft:15,marginTop:20}}  source={require('../images/menu.png')} />
	
	</TouchableHighlight>
	</View> 
	    
            
	   <ScrollView style={{marginTop:90,height:'80%'}} >  

   <Text style={{fontSize:30,color:'black',fontWeight:'bold',textAlign:'center',marginTop:5}}>

Popular Videos
</Text> 
 
 
 <FlatList  numColumns={2} data={this.state.PopularVideo}   keyExtractor={item =>item.videoId.toString()} renderItem={({item})=><this.PopularChildView title={item.title} videoId={item.videoId} picture={item.picture}     />} />

 <Text style={{fontSize:30,color:'black',fontWeight:'bold',textAlign:'center',marginTop:5}}>

 Playlist Videos
</Text>

<FlatList  numColumns={2} data={this.state.PlaylistVideo}   keyExtractor={item =>item.playlist.toString()} renderItem={({item})=><this.PlaylistChildView title={item.title} playlist={item.playlist} picture={item.picture}     />} />



   <Text style={{fontSize:30,color:'black',fontWeight:'bold',textAlign:'center',marginTop:5}}>

 Videos
</Text>
 
 <FlatList onRefresh={()=>this.PullRefresh()} refreshing={this.state.refressicon} numColumns={2} data={this.state.Data}   keyExtractor={item =>item.index.toString()} renderItem={({item})=><this.ChildView title={item.title} videoId={item.videoId} picture={item.picture}     />} />
     
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

export default Videos;
