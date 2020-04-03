import React, { Component } from 'react'
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native'

export default class Release extends Component {
    constructor(){
        super(),
        this.state={
            da:[],
            page:1
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?page=' + this.state.page + '&limit=10')
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({da:res.data})
            }
        )
    }
    lastPage = () =>{
        this.setState({page:this.state.page-1},()=>{
            if(this.state.page == 0){
                ToastAndroid.show('这里是首页', 100);
            }else{
                fetch('https://cnodejs.org/api/v1/topics?page=' + this.state.page + '&limit=10')
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({da:res.data})
                })
            }
        })
    }

    nextPage = () =>{
        this.setState({page:this.state.page+1},()=>{
            if(this.state.page == (this.state.da.length)/10){
                alert('这里是尾页')
            }else{
                fetch('https://cnodejs.org/api/v1/topics?page=' + this.state.page + '&limit=10')
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({da:res.data})
                })
            }
        })
    }

    render() {
        return (
        <>
            <View style={{paddingLeft:15,backgroundColor:'white',height:420}}>
                {
                    this.state.da.map((item)=>(
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Text style={{color:'grey',paddingLeft:5,width:260}}>
                                {item.title ? (item.title.length > 15 ?  item.title.substr(0, 15) + "..." : item.title) : ''}
                            </Text>
                            <Text style={{color:'grey',}}>
                                {item.create_at.substr(0, 10)}
                            </Text>
                            <Text style={{color:'grey',paddingLeft:120}}>
                                {item.tab}
                            </Text>
                        </View>
                    ))
                }
            </View>
            <View style={{backgroundColor:'#fff',width:'100%',height:60,flexDirection:'row'}}>
                <TouchableOpacity onPress={()=>{this.lastPage()}} style={{width:100,height:40,marginTop:5,marginLeft:30,backgroundColor:'red',borderRadius:10,}}>
                    <Text style={{lineHeight:40,fontSize:18,textAlign:'center',color:'#fff'}}>上一页</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.nextPage()}} style={{width:100,height:40,marginTop:5,marginLeft:270,backgroundColor:'red',borderRadius:10,}}>
                    <Text style={{lineHeight:40,fontSize:18,textAlign:'center',color:'#fff'}}>下一页</Text>
                </TouchableOpacity>
            </View>
        </>
        )
    }
}
