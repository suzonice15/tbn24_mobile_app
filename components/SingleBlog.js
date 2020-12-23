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
  TextInput,
  TouchableHighlight,
  Button
} from 'react-native';

import CommentForm from "./CommentForm";

  class SingleBlog  extends Component {
	
	 constructor(props){
		
		super(props);
		Navigation.events().bindComponent(this)

		this.state={
		 comments:[],
 		 name:'',
		 email:'',		
		 post_id:'',
		 comment_id:0,
		 message:''
		}
		    this.subCommentForm = this.subCommentForm.bind(this);
	}
	 
	 
	 mainCommentStore=()=>{	 
	
		 
		 if(this.state.message==""){
			  Alert.alert('Enter Your Comment')
			 return false;
		 }
		 
		 if(this.state.name==""){
			  Alert.alert('Enter Your Name')
			 return false;
		 }
		  if(this.state.email==""){
			  Alert.alert('Enter Your Email')
			 return false;
		 }
		 
		 let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(this.state.email) === false) {
    	  Alert.alert('Enter Valid Email')
     
    return false;
  }
		 
		 let URL='https://www.tbn24.com/api/mainComment/store';
		 let configHeader={
			 Accept:'application/json',
			 'Content-Type':'application/json'
		 }
		 let configBody=JSON.stringify({
			 name:this.state.name,
			 email:this.state.email,
			 post_id:this.state.post_id,
			 comments:this.state.message			 
		 });
		 let config={method:'POST',headers:configHeader,body:configBody}
		 fetch(URL,config).then((response)=>response.text())
		 .then((responsData)=>{
 			  Alert.alert(responsData)
		 }).catch((erorr)=>{
			 Alert.alert('Something is Wrong')
		 })
		 
	 }

	
	  
	   componentDidMount=()=>{
		
	 let URL="https://www.tbn24.com/api/selectBlogComment/"+this.props.post_id;
		let config={method:'GET'}
		fetch(URL,config).then((result)=>result.json()).then((response)=>{	
	 			this.setState({comments:response});
		}).catch((error)=>{			 
			Alert.alert("Internet Problem"); 
		});
		
		
		this.setState({
			post_id:this.props.post_id,
			name:"anisur rohman",
		email:"anisur@gmail.com"
			})
		
	 
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
	subCommentSave=(comment_id)=>{
			 			this.setState({comment_id:comment_id});
						if(this.state.comment_id){
							
							this.subCommentForm()
							
						}

 	}
	
	subCommentForm=()=>{
		return(
		<View>
		<TextInput
		
onChangeText={(value)=>this.setState({name:value})}
        style={{ margin: 15,
      height: 50,fontSize:20,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Enter Your Name"
         
      />
	  <TextInput
	  onChangeText={(value)=>this.setState({email:value})}
        style={{ margin: 15,
      height: 50,fontSize:20,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Enter Your Email"
         
      />
	  <TextInput
	  onChangeText={(value)=>this.setState({message:value})}
    multiline={true}
	 placeholder="Enter Your Comment"
    numberOfLines={10}
    style={{fontSize:20, margin: 15,height:200,   borderColor: 'black',
      borderWidth: 2,textAlignVertical: 'top',}}/>
	  <Button  onPress={this.mainCommentStore} title="Submit Now" ></Button>  
		
		</View>
		
		)
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
	<ScrollView style={{marginTop:80,marginBottom:80}}>
   
<View style={{margin:5,flex:1,flexDirection:'column'}}>


<View style={{margin:2,flex:1}}>
  
		 
<Image style={{width:'100%',height:260}}  source={{uri:'https://www.tbn24.com/public/uploads/post/'+this.props.post_picture}} />
<View style={{backgroundColor:'#ddd',marginBottom:20,padding:10}}>

 <Text style={{color:'color',fontSize:20,textAlign:'left'}} >{this.props.post_title}   </Text>
<Text style={{color:'color',fontSize:18,textAlign:'center'}} >{this.props.post_created_date}
      |  Viewed: {this.props.post_view} </Text>
<Text style={{color:'color',fontSize:16,textAlign:'left'}}>{this.props.post_description.replace(/(<([^>]+)>)/gi, "")}
</Text>
</View>
</View>
</View>

<View style={{margin:5,flex:1}}>

<TextInput
onChangeText={(value)=>this.setState({name:value})}
        style={{ margin: 15,
      height: 50,fontSize:20,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Enter Your Name"
         
      />
	  <TextInput
	  onChangeText={(value)=>this.setState({email:value})}
        style={{ margin: 15,
      height: 50,fontSize:20,
      borderColor: 'black',
      borderWidth: 2}}
        placeholder="Enter Your Email"
         
      />
	  <TextInput
	  onChangeText={(value)=>this.setState({message:value})}
    multiline={true}
	 placeholder="Enter Your Comment"
    numberOfLines={10}
    style={{fontSize:20, margin: 15,height:200,   borderColor: 'black',
      borderWidth: 2,textAlignVertical: 'top',}}/>
	  <Button  onPress={this.mainCommentStore} title="Submit Now" ></Button> 
	  
	  <View style={{margin:5}}>

		  {this.state.comments.map((row)=>
	   <View style={{padding:5}}>	
	   
	   <Text style={{fontSize:20,color:'black'}}>{row.name}</Text>
	   <Text>{row.comments} </Text>
	   <Text onPress={ this.subCommentSave.bind(this, row.comment_id) } >Replay</Text>
		   {

			   this.state.comment_id==row.comment_id ?  
				   
				    <CommentForm comment_id={row.comment_id} post_id={this.state.post_id} ></CommentForm>
			    :null
		   
		   
		   
		   } 
		 
	   
	     {
			 (typeof(row.sub_comment)=='object')?
			 
			  row.sub_comment.map((sub)=><View style={{paddingLeft:30}}>	   
	  
	  <Text style={{fontSize:20,color:'black'}}>{sub.name}</Text>
	   <Text>{sub.comments} </Text>
	   
	   
		</View>)
		  :null
		}
	   
	   
	   </View>
		  )}
	   
	   
	  
	  </View>
	  
	  

</View>





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

export default SingleBlog;
