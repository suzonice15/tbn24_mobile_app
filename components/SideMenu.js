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
	Linking,
	StyleSheet
	
} from 'react-native';

import { Navigation } from "react-native-navigation";

class SideMenu  extends Component {

    
     openStore = () => {
    //This is the main trick
    if (Platform.OS != 'ios') {
      Linking.openURL(
        `https://play.google.com/store/apps/details?id=com.tbn.live&hl=bn&gl=US`,
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
	 <Image   style={styles.sideImage}   source={require('../images/about-us.png')} />
	 </View>
	 
	 <View style={{flex:5}}>
<Text  onPress={this.About} style={styles.sideMenuTitle} >About US</Text>

	 </View>
	 
     </View>
	 
	 
	 
	 
	 
	 
	   <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image   style={styles.sideImage}   source={require('../images/contact.png')} />
	 </View>
	 
	 
	 <View style={{flex:5}}>
<Text onPress={this.Contact} style={styles.sideMenuTitle}>Contact  Us</Text>

	 </View>
	 
     </View>
	 
	    <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	  <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image   style={styles.sideImage}   source={require('../images/term.png')} />
	 </View>
	 
	 
	 <View style={{flex:5}}>
<Text onPress={this.TearmsCondition} style={styles.sideMenuTitle} >Terms and Conditions</Text>

	 </View>
	 
     </View>
            
			  <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image   style={styles.sideImage}   source={require('../images/privacy-policy.png')} />
	 </View>
	 
	 
	 <View style={{flex:5}}>
<Text onPress={this.PrivacyPolicy} style={styles.sideMenuTitle}>Privacy Policy</Text>

	 </View>
	 
     </View>
            
     <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image   style={styles.sideImage}   source={require('../images/program_menu.png')} />
	 </View>
	 
	 
	 <View style={{flex:5}}>
	 <Text onPress={this.Program} style={styles.sideMenuTitle} >Our Programs</Text>
	 </View>
	 
     </View>
	 
	  <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	  <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image   style={styles.sideImage}   source={require('../images/calendar.png')} />
	 </View>
	 
	 
	 <View style={{flex:5}}>
<Text onPress={this.Shedule} style={styles.sideMenuTitle} >
Today's Schedule
</Text>
	 </View>
	 
     </View>
	 
	
	 
	   <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image   style={styles.sideImage}   source={require('../images/user.png')} />
	 </View>
	 
	 
	 <View style={{flex:5}}>
<Text onPress={this.Login}  style={styles.sideMenuTitle} >Login</Text>

	 </View>
	 
     </View>
	 
	  
	 
	 <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image   style={styles.sideImage}   source={require('../images/play.png')} />
	 </View>
	 
	 <View style={{flex:5}}>
<Text  onPress={this.Video} style={styles.sideMenuTitle}>Videos</Text>

	 </View>
	 
     </View>
	 
	  <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image   style={styles.sideImage}  source={require('../images/blog.png')} />
	 </View>
	 
	 <View style={{flex:5}}>
<Text    onPress={this.Blog}  style={styles.sideMenuTitle}>Blog</Text>

	 </View>
	 
     </View>
	 
	 
	   <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image  style={styles.sideImage}   source={require('../images/rating.png')} />
	 </View>
	 
	 <View style={{flex:5}}>
<Text    onPress={this.openStore}  style={styles.sideMenuTitle}>Rate This App</Text>

	 </View>
	 
     </View>
	 
	 
	   <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
	 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image   style={styles.sideImage}  source={require('../images/share.png')} />
	 </View>
	 
	 <View style={{flex:5}}>
<Text    onPress={this.onShare}  style={styles.sideMenuTitle}>Share This App</Text>

	 </View>
	 
     </View>
	 
	 
	   <View style={{flex:6,flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:"#cacaca"}}>
	 
 <View style={{flex:1,alignItems: 'flex-end',justifyContent:'center'}}>
	 <Image   style={styles.sideImage}  source={require('../images/cancel.png')} />
	 </View>
	 
	 <View style={{flex:5}}>
<Text    onPress={this.backAction}  style={styles.sideMenuTitle}>Close</Text>

	 </View>
	 
     </View>
	 
	 
	 
 

         

        </View>
    );

    }

}

const styles = StyleSheet.create({
	 
  sideMenuTitle:{
	  paddingLeft:15,
	  marginTop:2,
 	  fontSize:15,
	  color:'black'
  },
  sideImage:{
	  width:20,height:20
  }
   
});

export default SideMenu;
