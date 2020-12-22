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
import SingleProgram from "./components/SingleProgram";
import Videos from "./components/Videos";
import SingleBlog from "./components/SingleBlog";
import Blog from "./components/Blog";
Navigation.registerComponent('ProgramPage', () => Program);
Navigation.registerComponent('TodayShedulePage', () => TodayShedule);
Navigation.registerComponent('AboutPage', () => About);
Navigation.registerComponent('LoginPage', () => Login);
Navigation.registerComponent('RegistrationPage', () => Registration);
Navigation.registerComponent('ContactPage', () => Contact);
Navigation.registerComponent('HomePage', () => Home);
Navigation.registerComponent('SideMenuPage', () => LeftSideMenu);
Navigation.registerComponent('SingleProgramPage', () => SingleProgram);
Navigation.registerComponent('VideoPage', () => Videos);
Navigation.registerComponent('SingleBlogPage', () => SingleBlog);
Navigation.registerComponent('BlogPage', () => Blog);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: 'red'
  },
  topBar: {
    title: {
      color: 'white'
    },
    backButton: {
      color: 'white'
    },
    background: {
      color: 'red'
    }
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
	backgroundColor:'red'
  }
});


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
									   title:{
										   text:"Home"
									   }
								   }
				 				  
				              }
                          }
                      }
                  ]
              }
          }
      },
	     
    }
});
});