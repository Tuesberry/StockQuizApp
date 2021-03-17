import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Modal, TouchableHighlight } from 'react-native';
import { WebView } from 'react-native-webview';


export default class App extends React.Component {
	state = {
    	modalVisible: false
  	};

  	setModalVisible = (visible) => {
    	this.setState({ modalVisible: visible });
  	}
	
	constructor(props){
		super(props);
		
		this.state={
			isIn : true,
		};
	}

  	render() {
		const isIn = this.state.isIn;
		const { modalVisible } = this.state;
	  	if(isIn){
		  return(
			
    		<View style={styles.centeredView}>
      			<Modal
        			animationType="slide"
        			transparent={true}
        			visible={modalVisible}
        			onRequestClose={() => {
         			Alert.alert('Modal has been closed.');
        		}}>
        		<View style={styles.centeredView}>
          			<View style={styles.modalView}>
            			<Text style={styles.modalText}>과도한 투자는 위험합니다.</Text>
						<TouchableHighlight
              				style={{ ...styles.openButton, backgroundColor: '#8796e6' }}
              				onPress={() => {
                 				
								this.setModalVisible(!modalVisible);
								this.setState({isIn : false});
              				}}>
              			<Text style={styles.textStyle}>닫기</Text>
            			</TouchableHighlight>
          				</View>
        			</View>
     			</Modal>
    		</View>
		
  		);}else{
			  // 여기에 html 주소 적기
			  return <WebView source={{ uri: 'https://dtproject-8a69f.web.app' }} style={{ marginTop: 20 }} />;
		  }
  }
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
	backgroundColor:'#5C73F2',
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
	openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});