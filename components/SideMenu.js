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
    
<Text onPress={this.Program} style={{margin:5}} >Our Programs</Text>
<Text onPress={this.Shedule} style={{margin:5}} >
Today's Schedule
</Text>
<Text  onPress={this.About} style={{margin:5}} >ABOUT US</Text>
<Text onPress={this.Contact} style={{margin:5}} >Contact  Us</Text>

<Text onPress={this.Login}  style={{margin:5}} >Login</Text>
<Text onPress={this.Registration} style={{margin:5}} >Registration</Text>
<Text  style={{margin:5}} >Video</Text>
<Text  style={{margin:5}} >Blog</Text>

            </View>

            </View>

        </View>
    );

    }

}


export default SideMenu;
