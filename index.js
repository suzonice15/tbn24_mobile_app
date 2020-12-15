import { Navigation } from "react-native-navigation";
import App from "./App";
import Program from "./components/Program";
import Home from "./components/Home";
import TodayShedule from "./components/TodayShedule";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Registration from "./components/Registration";
import LeftSideMenu from "./components/SideMenu";
Navigation.registerComponent('ProgramPage', () => Program);
Navigation.registerComponent('TodayShedulePage', () => TodayShedule);
Navigation.registerComponent('AboutPage', () => About);
Navigation.registerComponent('LoginPage', () => Login);
Navigation.registerComponent('RegistrationPage', () => Registration);
Navigation.registerComponent('ContactPage', () => Contact);
Navigation.registerComponent('HomePage', () => Home);
Navigation.registerComponent('SideMenuPage', () => LeftSideMenu);
 
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
    root: {
      sideMenu:{
          left:{
              component:{
                  name:'SideMenuPage'
              }
          },
          center:{

              stack:{
				 id:"CenterScreen",
                  children:[
                      {
                          component:{
                              name:"HomePage",
							   options:{
				  topBar:{
					  leftButtons:{
						  icon:require('./images/menu.png')
					  }	 				  
				  }					  
				  }
                          }
                      }
                  ]
              },
			  
          }
      },
	  children:[
        {
            component:{
                name:"ProgramPage",
                options:{
                    bottomTab:{
                        text:"Program",
                        icon:require('./images/logo.png')

                    }
                }
            }
        },
         
    ]


    }
});
});