import React,{Component} from 'react';
import {
    ScrollView,
    View,
    Image,
    Text,
    Share,
	BackHandler,
	Alert,
	Platform,
	Linking
	
} from 'react-native';

import { Navigation } from "react-native-navigation";

class SideMenu  extends Component {

   componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backAction);
  }
     openStore = () => {
    //This is the main trick
    if (Platform.OS != 'ios') {
      Linking.openURL(
        `https://apps.apple.com/us/app/somoy-tv/id1234444890#?platform=iphone`,
      ).catch(
          (err) => alert('Please check for Google Play Store')
      );
    } else {
      Linking.openURL(
        `https://play.google.com/store/apps/details?id=com.tbn.live&hl=bn&gl=US`,
      ).catch((err) => alert('Please check for the App Store'));
    }
  };

  backAction = () => {
    Alert.alert(
      'Exit',
      'Do you want to close this App ?',
      [
        {text: 'CANCEL', style: 'cancel'},
        {text: 'OK', onPress: () => {
          BackHandler.exitApp()
        }
      }
      ]
    );
    return true;
  }
Program=()=>{
	
	Navigation.push('CenterScreen',{
		
		component:{
			name:"ProgramPage",
			options:{
				sideMenu:{
					left:{
						visible:false						
					}
				}
				, topBar: {
    title: {
      text: 'Program',
      color: 'white'
    }
				  }
			}
		}
	})
}
Shedule=()=>{
	
	Navigation.push('CenterScreen',{
		
		component:{
			name:"TodayShedulePage",
			options:{
				sideMenu:{
					left:{
						visible:false						
					}
				}
				, topBar: {
    title: {
      text: 'TodayShedule',
      color: 'white'
    }
				  }
			}
		}
	})
}
About=()=>{
	
	
	Navigation.push('CenterScreen',{
		
		component:{
			name:"AboutPage",
			options:{
				sideMenu:{
					left:{
						visible:false						
					}
				}
				, topBar: {
    title: {
      text: 'About',
      color: 'white'
    }
				  }
			},
			  passProps: {
      page_name:  'about-us',
       
    }
		}
	})
}
TearmsCondition=()=>{
	
	
	Navigation.push('CenterScreen',{
		
		component:{
			name:"AboutPage",
			options:{
				sideMenu:{
					left:{
						visible:false						
					}
				}
				, topBar: {
    title: {
      text: 'Terms and Conditions',
      color: 'white'
    }
				  }
			},
			  passProps: {
      page_name:  'term-and-condition',
       
    }
		}
	})
}

PrivacyPolicy=()=>{
	
	
	Navigation.push('CenterScreen',{
		
		component:{
			name:"AboutPage",
			options:{
				sideMenu:{
					left:{
						visible:false						
					}
				}
				, topBar: {
    title: {
      text: 'Privacy Policy',
      color: 'white'
    }
				  }
			},
			  passProps: {
      page_name:  'privacy-policy',
       
    }
		}
	})
}

Login=()=>{
	
	
	Navigation.push('CenterScreen',{
		
		component:{
			name:"LoginPage",
			options:{
				sideMenu:{
					left:{
						visible:false						
					}
				}
				, topBar: {
    title: {
      text: 'Login',
      color: 'white'
    }
				  }
				  ,
				    bottomTab: {
    text: 'Settings'
  }
			}
		}
	})
}
Registration=()=>{
	
	
	Navigation.push('CenterScreen',{
		
		component:{
			name:"RegistrationPage",
			options:{
				sideMenu:{
					left:{
						visible:false						
					}
				}
				, topBar: {
    title: {
      text: 'Registration',
      color: 'white'
    }
				  }
			}
		}
	})
}
Contact=()=>{
	
	Navigation.push('CenterScreen',{
		
		component:{
			name:"ContactPage",
			options:{
				sideMenu:{
					left:{
						visible:false						
					}
				},
				  topBar: {
    title: {
      text: 'Contact',
      color: 'white'
    }
				  }
				   
			}
		}
	})
} 

Blog=()=>{
	
	Navigation.push('CenterScreen',{
		
		component:{
			name:"BlogPage",
			options:{
				sideMenu:{
					left:{
						visible:false						
					}
				},
				  topBar: {
    title: {
      text: 'Blog',
      color: 'white'
    }
				  }
				   
			}
		}
	})
} 
Video=()=>{
	
	Navigation.push('CenterScreen',{
		
		component:{
			name:"VideoPage",
			options:{
				sideMenu:{
					left:{
						visible:false						
					}
				},
				  topBar: {
    title: {
      text: 'Video',
      color: 'white'
    }
				  }
				   
			}
		}
	})
} 
  onShare = async () => {
    try {
      const result = await Share.share({
       title: 'App link',
  message: 'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en', 
  url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };



render(){
        return (
            <View style={{flex:50,flexDirection:'column',backgroundColor:'white', width:"90%"}}>
			
			 <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image  style={{width:20,height:20}}   source={require('../images/about-us.png')} />
	 </View>
	 
	 <View style={{flex:5}}>
<Text  onPress={this.About} style={{paddingLeft:15,marginTop:2,fontWeight:'bold',fontSize:18}} >ABOUT US</Text>

	 </View>
	 
     </View>
	 
	 
	 
	 
	 
	 
	   <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image  style={{width:20,height:20}}   source={require('../images/contact.png')} />
	 </View>
	 
	 
	 <View style={{flex:5}}>
<Text onPress={this.Contact} style={{paddingLeft:15,marginTop:2,fontWeight:'bold',fontSize:18}}>Contact  Us</Text>

	 </View>
	 
     </View>
	 
	    <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	  <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image  style={{width:20,height:20}}   source={require('../images/term.png')} />
	 </View>
	 
	 
	 <View style={{flex:5}}>
<Text onPress={this.TearmsCondition} style={{paddingLeft:15,marginTop:2,fontWeight:'bold',fontSize:18}} >Terms and Conditions</Text>

	 </View>
	 
     </View>
            
			  <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image  style={{width:20,height:20}}   source={require('../images/privacy-policy.png')} />
	 </View>
	 
	 
	 <View style={{flex:5}}>
<Text onPress={this.PrivacyPolicy} style={{paddingLeft:15,marginTop:2,fontWeight:'bold',fontSize:18}}>Privacy Policy</Text>

	 </View>
	 
     </View>
            
     <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image  style={{width:20,height:20}}   source={require('../images/program_menu.png')} />
	 </View>
	 
	 
	 <View style={{flex:5}}>
	 <Text onPress={this.Program} style={{paddingLeft:15,marginTop:2,fontWeight:'bold',fontSize:18}} >Our Programs</Text>
	 </View>
	 
     </View>
	 
	  <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	  <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image  style={{width:20,height:20}}   source={require('../images/calendar.png')} />
	 </View>
	 
	 
	 <View style={{flex:5}}>
<Text onPress={this.Shedule} style={{paddingLeft:15,marginTop:2,fontWeight:'bold',fontSize:18}} >
Today's Schedule
</Text>
	 </View>
	 
     </View>
	 
	
	 
	   <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image  style={{width:20,height:20}}   source={require('../images/user.png')} />
	 </View>
	 
	 
	 <View style={{flex:5}}>
<Text onPress={this.Login}  style={{paddingLeft:15,marginTop:2,fontWeight:'bold',fontSize:18}} >Login</Text>

	 </View>
	 
     </View>
	 
	   <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	   
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image  style={{width:20,height:20}}   source={require('../images/user.png')} />
	 </View>
	 
	 <View style={{flex:5}}>
<Text onPress={this.Registration} style={{paddingLeft:15,marginTop:2,fontWeight:'bold',fontSize:18}} >Registration</Text>
	 </View>
	 
     </View>
	 
	 <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image  style={{width:20,height:20}}   source={require('../images/play.png')} />
	 </View>
	 
	 <View style={{flex:5}}>
<Text  onPress={this.Video} style={{paddingLeft:15,marginTop:2,fontWeight:'bold',fontSize:18}}>Videos</Text>

	 </View>
	 
     </View>
	 
	  <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image  style={{width:20,height:20}}   source={require('../images/blog.png')} />
	 </View>
	 
	 <View style={{flex:5}}>
<Text    onPress={this.Blog}  style={{paddingLeft:15,marginTop:2,fontWeight:'bold',fontSize:18}}>Blog</Text>

	 </View>
	 
     </View>
	 
	 
	   <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image  style={{width:20,height:20}}   source={require('../images/rating.png')} />
	 </View>
	 
	 <View style={{flex:5}}>
<Text    onPress={this.openStore}  style={{paddingLeft:15,marginTop:2,fontWeight:'bold',fontSize:18}}>Rate This App</Text>

	 </View>
	 
     </View>
	 
	 
	   <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image  style={{width:20,height:20}}   source={require('../images/share.png')} />
	 </View>
	 
	 <View style={{flex:5}}>
<Text    onPress={this.onShare}  style={{paddingLeft:15,marginTop:2,fontWeight:'bold',fontSize:18}}>Share This App</Text>

	 </View>
	 
     </View>
	 
	 
	   <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image  style={{width:20,height:20}}   source={require('../images/cancel.png')} />
	 </View>
	 
	 <View style={{flex:5}}>
<Text    onPress={this.backAction}  style={{paddingLeft:15,marginTop:2,fontWeight:'bold',fontSize:18}}>Close</Text>

	 </View>
	 
     </View>
	 
	 
	 
 

         

        </View>
    );

    }

}


export default SideMenu;
