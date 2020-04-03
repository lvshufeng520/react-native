import React, { useEffect,useState } from 'react';
import {View, Text, StyleSheet, AsyncStorage, BackHandler, ToastAndroid} from 'react-native';
import {Router, Tabs, Scene, Actions, Modal, Lightbox,Overlay} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen'
import Home from './src/home/Index'
import Good from './src/goods/Good'
import User from './src/userinfor/User' 
import Login from './src/common/Login';
import Register from './src/common/Register';
import SwiperPage from './src/common/Swiper'
import Release from './src/common/Release';
console.disableYellowBox=true;

const App = () => {
  let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{

		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}


  
  return (
    <Router 
    backAndroidHandler={() => {
      if(Actions.currentScene == 'login' || Actions.currentScene == 'home' || Actions.currentScene == 'goods' || Actions.currentScene == 'register' || Actions.currentScene == 'user'){
          if (new Date().getTime() - now < 2000) {
            BackHandler.exitApp();
          }
          else {
            ToastAndroid.show('再按一次退出应用', 100);
            now = new Date().getTime();
            return true;
          }
      }
      else{
        Actions.pop();
        return true;
      }
    }}
    >
      <Overlay>
      <Modal key="modal" hideNavBar>
        
        <Lightbox key="lightbox">
            <Scene key="root">
              <Tabs
                key="tabbar"
                hideNavBar
                activeTintColor='red'
                tabBarStyle={{backgroundColor: "white"}}
              >
                {/* 首页 */}
                <Scene hideNavBar key="homePage" icon={
                      ({focused})=><Icon
                        color={focused?'#f23333':'ababab'}
                        name='home'
                        size={26}
                      />
                    }
                    title="首页"
                    >
                      <Scene key="home" component={Home} />
                    </Scene>
                {/* 商品分类 */}
                <Scene hideNavBar key="goodsPage" icon={
                  ({focused})=><Icon
                    color={focused?'#f23333':'ababab'}
                    name="file"
                    size={26}
                  />
                }
                title="商品分类"
                >
                  <Scene hideNavBar key="goods" component={Good}/>
                </Scene>
                {/* 用户中心 */}
                <Scene  key="userPage" icon={
                  ({focused})=><Icon
                    color={focused?'#f23333':'ababab'}
                    name="user"
                    size={26}
                  />
                }
                title="我的"
                >
                  <Scene key="user" component={User} />
                  <Scene key='release' navBarButtonColor='white' navigationBarStyle={{backgroundColor:'red'}} renderTitle='我的发布'  renderRightButton={<View style={{marginRight:20}}><Icon color='white'  size={22} name='ellipsis-h'></Icon></View>} titleStyle={{flex:1,textAlign:'center',color:'white'}}  hideTabBar component={Release} />
                </Scene>
              </Tabs>
          </Scene>
            </Lightbox>
            <Scene key='login' component={Login} initial={!isLogin} />
            <Scene key='register' component={Register} />
          </Modal>
        </Overlay>
      </Router>
  );
}; 

const styles = StyleSheet.create({
  
});

export default App;