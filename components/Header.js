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
  View,
  Image, 
  StatusBar,
  Alert,
  TouchableHighlight,
  Button
} from 'react-native';
   

class Header  extends Component {
	
	 constructor(props){		
		super(props);
		Navigation.events().bindComponent(this)
		this.state={
			about:'', 			
		}
		}
	
	  
	   componentDidMount=()=>{
		
	 let URL="https://www.tbn24.com/api/about";
		let config={method:'GET'}
		fetch(URL,config).then((result)=>result.json()).then((response)=>{	
	 			this.setState({about:response.replace(/(<([^>]+)>)/gi, "")});
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
  
   <View style={{flex:1,flexDirection:'row', backgroundColor:'#B10000'}} >  
	 <Image  style={styles.logo}  source={{uri:'https://www.tbn24.com/public/logo.png'}} />
<TouchableHighlight onPress={this.sideMenuShow}>	
	<Image   style={{width:50,marginLeft:40,marginTop:20}}  source={require('../images/menu.png')} />
	
	</TouchableHighlight>
	  </View>
  );
	}
}

const styles = StyleSheet.create({
	 
  logo:{
		width:300,
		height:80,
		marginTop:2
	},
   
});

export default Header;
