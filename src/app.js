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
			// use own api key
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