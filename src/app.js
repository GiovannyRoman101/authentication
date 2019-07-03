import React,{Component} from 'react'
import {View} from 'react-native'
import {Header,Button,Card,CardSection,Spinner} from './components/common'
import LoginForm from './components/login_form.js'
import firebase from 'firebase'

class App extends Component{

	constructor(){
		super()
		this.state ={loggedIn:undefined}
	}
	componentWillMount(){
		firebase.initializeApp({
			apiKey: 'AIzaSyAVlUXEb_Wg2Sr6MP8KP_FAQ5zEgYfwO6M',
			authDomain: 'auth-949c8.firebaseapp.com',
			databaseURL: 'https://auth-949c8.firebaseio.com',
			projectId: 'auth-949c8',
			storageBucket: '',
			messagingSenderId: '357374785132',
			appId: '1:357374785132:web:55e79b50b7074958'
		})
		firebase.auth().onAuthStateChanged((user)=>{
			if(user){
				this.setState({loggedIn:true})
			}
			else{
				this.setState({loggedIn:false})
			}
		})
	}
	renderContent(){
		switch(this.state.loggedIn){
		case true:
			return (
				<Card>
					<CardSection>
						<Button onPress={()=>{
							firebase.auth().signOut()}}>
							Log out
						</Button>
					</CardSection>
				</Card>	
			)
		case false:
			return (
				<LoginForm>
				</LoginForm>
			)
		default:
			return (
				<Card>
					<CardSection>
						<Spinner size ='large'></Spinner>
					</CardSection>
				</Card>)
		}
	}
	render(){
		return (
			<View>
				<Header headerText = 'Authentication'></Header>
				{this.renderContent()}
			</View>
		)
	}
}

export default App