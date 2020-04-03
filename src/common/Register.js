import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, AsyncStorage} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'


export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false,
            a:1   //a=0提示，a=1没有提示
        }
    }
    userhandle = (text)=>{
      if(text !=''){
        this.setState({username:text,a:1})
      }
        
    }
    pwdhandle = (text)=>{
      if(text !=''){
        this.setState({pwd:text,a:1})
      }
    }
    register = () =>{
      if(this.state.username!='' && this.state.pwd!=''){
        this.setState({isloading:true,a:1});
        myFetch.post('/register',{
            username:this.state.username,
            pwd:this.state.pwd
        }).then(res=>{
          AsyncStorage.setItem('user',JSON.stringify(res.data))
          .then(()=>{
              this.setState({isloading:false})
              Actions.login();
          })
        })
      }
      else{
        this.setState({
          a:0
        })
      }
    }
    gotologin=()=>{
      Actions.login()
    }
    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput placeholder="用户名" 
                onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="lock" color="red"/>
            <TextInput 
                onChangeText={this.pwdhandle}
                placeholder="密码" 
                secureTextEntry={true}
            />
          </View>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.register}>
                <Text>注册</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.gotologin}>
                <Text>返回登陆</Text>
            </TouchableOpacity>
            {
              this.state.a == 0
              ? <Text style={{position:'relative',top:50}}>请输入用户名或密码</Text>
              : <Text></Text>
            }
        </View>
      </View>
        )
    }
}
