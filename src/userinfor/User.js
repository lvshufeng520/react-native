import React, { Component } from 'react';
import {View,Text, Image, ScrollView,TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import { Icon, WhiteSpace } from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux';
import {StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { AsyncStorage } from "react-native";

export default class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageUrl:require('../../assets/img0.png')
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('uri')
        .then((res)=>{
            this.setState({
                imageUrl:{uri:res}
            })
            console.log(this.state.imageUrl);
        });
    }
    takephoto(){
        const options = {
            title: '选择图片', 
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照', 
            chooseFromLibraryButtonTitle: '选择照片', 
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high', 
            durationLimit: 10, 
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.8, 
            angle: 0,
            rotation:90,
            allowsEditing: false, 
            noData: false,
            storageOptions: {
                skipBackup: true  
            }
        };

        ImagePicker.showImagePicker(options, (res) => {
            if (res.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            }
            else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
            }
            else {
                this.setState({
                    imageUrl: { uri: res.uri }
                });
                AsyncStorage.setItem('uri',res.uri,
                    ()=>{
                        console.log(res.uri);
                    }
                );
            }
        });
    }
    outLogin = ()=>{
        AsyncStorage.clear();
        Actions.login();
    }
    render() {
        return (
            <ScrollView>
            
                <View>                   
                    <Image style={styles.img} source={require('../../assets/pic.png')}/>
                        <TouchableOpacity style={styles.photo}  onPress={()=>{this.takephoto()}} >
                            <Image style={{width:160,height:160,borderRadius:100}} source={this.state.imageUrl}/>
                        </TouchableOpacity>
                </View>
                <View style={styles.box2}>
                    <Text style={styles.iconStyle}>{'\ue607'}<Text style={{fontSize:14,lineHeight:40,color:'#4f4e4e'}}> 我的个人中心</Text></Text>
                </View>
                <View style={styles.box3}>
                    <View style={styles.box4}>
                        <Text style={[styles.iconStyle,{textAlign:'center',marginTop:5}]}>{'\ue662'}</Text>
                        <Text style={styles.word2}>账户管理</Text>
                    </View>
                    <View style={styles.box4}>
                        <Text style={[styles.iconStyle,{textAlign:'center',marginTop:5}]}>{'\ue614'}</Text>
                        <Text style={styles.word2}>收货地址</Text>
                    </View>
                    <View style={styles.box4}>
                        <Text style={[styles.iconStyle,{textAlign:'center',marginTop:5}]}>{'\ue62b'}</Text>
                        <Text style={styles.word2}>我的信息</Text>
                    </View>
                    <View style={styles.box4}>
                        <Text style={[styles.iconStyle,{textAlign:'center',marginTop:5}]}>{'\ue6ab'}</Text>
                        <Text style={styles.word2}>我的订单</Text>
                    </View>
                    <View style={styles.box4}>
                        <Text style={[styles.iconStyle,{textAlign:'center',marginTop:5}]}>{'\ue662'}</Text>
                        <Text style={styles.word2}>账户管理</Text>
                    </View>
                    <View style={styles.box4}>
                        <Text style={[styles.iconStyle,{textAlign:'center',marginTop:5}]}>{'\ue647'}</Text>
                        <Text style={styles.word2}>我的二维码</Text>
                    </View>
                    <View style={styles.box4}>
                        <Text style={[styles.iconStyle,{textAlign:'center',marginTop:5}]}>{'\ue624'}</Text>
                        <Text style={styles.word2}>我的积分</Text>
                    </View>
                    <View style={styles.box4}>
                        <Text style={[styles.iconStyle,{textAlign:'center',marginTop:5}]}>{'\ue627'}</Text>
                        <Text style={styles.word2}>我的收藏</Text>
                    </View>
                    <View style={styles.box4}>
                        
                    </View>
                </View>
                <WhiteSpace/>
                <View style={styles.box2}>
                    <Text style={styles.iconStyle}>{'\ue733'}<Text style={{fontSize:14,lineHeight:40,color:'#4f4e4e'}}> E族活动</Text></Text>
                </View>
                <View style={styles.box5}>
                    <View style={styles.box4}>
                        <Text style={[styles.iconStyle,{textAlign:'center',marginTop:5}]}>{'\ue629'}</Text>
                        <Text style={styles.word2}>居家维修保养</Text>
                    </View>
                    <View style={styles.box4}>
                        <Text style={[styles.iconStyle,{textAlign:'center',marginTop:5}]}>{'\ue646'}</Text>
                        <Text style={styles.word2}>出行接送</Text>
                    </View>
                    <View style={styles.box4}>
                        <Text style={[styles.iconStyle,{textAlign:'center',marginTop:5}]}>{'\ue636'}</Text>
                        <Text style={styles.word2}>我的受赠人</Text>
                    </View>
                    <View style={styles.box4}>
                        <Text style={[styles.iconStyle,{textAlign:'center',marginTop:5}]}>{'\ue601'}</Text>
                        <Text style={styles.word2}>我的住宿优惠</Text>
                    </View>
                    <View style={styles.box4}>
                        <Text style={[styles.iconStyle,{textAlign:'center',marginTop:5}]}>{'\ue615'}</Text>
                        <Text style={styles.word2}>我的活动</Text>
                    </View>

                    <View style={styles.box4} >
                        <TouchableOpacity onPress={()=>{Actions.release()}}>
                            <Text style={[styles.iconStyle,{textAlign:'center',marginTop:5}]}>{'\ue628'}</Text>
                            <Text style={styles.word2} >我的发布</Text>
                        </TouchableOpacity>
                        
                    </View>           
                </View>
                <TouchableOpacity onPress={this.outLogin} style={styles.word1}>
                    <Text style={styles.word}>BINNU DHILLON | 退出登陆</Text>
                </TouchableOpacity>
                
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    box1:{
        flexDirection:'column',
        // justifyContent:'center',
    },
    box2:{
        justifyContent:"flex-start",
        height:40,
        backgroundColor:'white',
        bottom:'5%'
    },
    box3:{
        width:'100%',
        height:250,
        backgroundColor:'white',  
        bottom:'10%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around'
    },
    box4:{
        width:'32%',
        height:'32%',
        // backgroundColor:'red',
        marginTop:8
    },
    box5:{
        width:'100%',
        height:170,
        backgroundColor:'white',  
        bottom:'11%',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around'
    },
    img:{
        width:'100%',
        bottom:'10%'

    },
    iconStyle: {
        fontFamily: 'iconfont',
        fontSize: 24,
        lineHeight:40,
        marginLeft: 10,
        color:'#aeaeae'
    },
    word2:{
        textAlign:'center',
        color:'#4f4e4e'
    },
    word1:{
        height:30,
        bottom:'2%'
    },
    word:{
        textAlign:'center',
        color:'#727171'
    },
    photo:{
        width:160,
        height: 160,
        position: "absolute",
        top:43,
        left:189,
        borderRadius:100
    }
})



