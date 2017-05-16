/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';
/**
 * automaticallyAdjustContentInsets:是否自动调整内部内容,true、false
 * bounces:回弹效果。false:内容拉到底部或者头部不回弹,默认为true
 * contentInset:内部内容偏移值,该值为一个JavaScript对象{top:number, left:number, bottom:number, right:number}
 * html:HTML代码字符串。如果传入了HTML代码字符串,则渲染该HTML代码。
 * injectedJavaScript:注入的JavaScript代码,其值为字符串,如果加上了该属性,就会在WebView里面执行JavaScript代码
 * onNavigationStateChange:监听导航状态变化的函数
 * renderError:监听渲染页面出错的函数
 * startInLoadingState:是否开启页面加载的状态  true、false
 * renderLoading:WebView组件正在渲染页面时触发的函数,需要同startInLoadingState一起使用,当startInLoadingState为true时该函数才起作用
 * scrollEnabled:表示WebView里面页面是否能滚动,如果其值为true表示可以滚动,false表示禁止滚动
 * onNavigationStateChange:页面导航状态改变时,触发该事件监听
 * scalesPageToFit:按照页面比例和内容宽高比例自动缩放内容
 */

var Dimensions = require('Dimensions');
var screen_width = Dimensions.get('window').width;
var screen_height = Dimensions.get('window').height;

export default class RN_WebView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
            injectedJavaScript="alert('欢迎使用reactnative')"
        bounces={false}
            source={{uri:'https://weibo.com/vczero'}}
        style={{width:screen_width, height:screen_height}}>
        </WebView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

AppRegistry.registerComponent('RN_WebView', () => RN_WebView);
