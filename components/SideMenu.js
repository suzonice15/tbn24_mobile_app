import React,{Component} from 'react';
import {
    ScrollView,
    View,
    Image,
    Text,
} from 'react-native';

import { Navigation } from "react-native-navigation";

class SideMenu  extends Component {


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



render(){
        return (
            <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'white',marginTop:0,marginRight:80}}>
    

 <View style={{flex:1,backgroundColor:'white',margin:20}}>
    
<Text onPress={this.Program} style={{margin:5,fontWeight:'bold'}} >Our Programs</Text>
<Text onPress={this.Shedule} style={{margin:5,fontWeight:'bold'}} >
Today's Schedule
</Text>
<Text  onPress={this.About} style={{margin:5,fontWeight:'bold'}} >ABOUT US</Text>
<Text onPress={this.Contact} style={{margin:5,fontWeight:'bold'}} >Contact  Us</Text>


<Text onPress={this.Login}  style={{margin:5,fontWeight:'bold'}} >Login</Text>
<Text onPress={this.Registration} style={{margin:5,fontWeight:'bold'}} >Registration</Text>
<Text  onPress={this.Video}  style={{margin:5,fontWeight:'bold'}} >Videos</Text>
<Text    onPress={this.Blog}  style={{margin:5,fontWeight:'bold'}}>Blog</Text>

            </View>

            </View>

        </View>
    );

    }

}


export default SideMenu;
