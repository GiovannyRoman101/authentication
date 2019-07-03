import React,{Component} from 'react'
import {Text} from 'react-native'
import {Button, Card, CardSection, Input,Spinner} from './common'
import firebase from 'firebase'

class LoginForm extends Component{
	constructor(){
		super()
		this.state = {email:'',password:'',error:'',loading:false}
	}
	onButtonPress(){
		const {email,password} = this.state
		this.setState({error:'',loading:true})
		firebase.auth().signInWithEmailAndPassword(email,password)
			.then(this.onLoginSuccess.bind(this))
			.catch(()=>{
				firebase.auth().createUserWithEmailAndPassword(email,password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this))
			})
	}

	onLoginFail(){
		this.setState({error:'Authentication Failed',loading:false})
	}
	onLoginSuccess(){
		this.setState(
			{
				email:'',
				password:'',
				loading:false,
				error:''
			}
		)
	}

	renderButton(){
		if(this.state.loading === true){
			return (
				<Spinner size = 'small'>
				</Spinner>
			)
		}
		return (
			<Button onPress ={this.onButtonPress.bind(this)}>
				Log In
			</Button>)
	}

	render(){
		const {errorTextStyle} = styles
		return (
			<Card>
				<CardSection>
					<Input value = {this.state.email}
						label = 'Email'
						placeholder = 'user@gamil.com'
						onChangeText = {(text)=>{this.setState({email:text})}}
					/>
				</CardSection>
				<CardSection>
					<Input value = {this.state.password}
						label = 'Password'
						secureTextEntry = {true}
						placeholder = 'password123'
						onChangeText = {(text)=>{this.setState({password:text})}}
					/>
				</CardSection>

				<Text style = {errorTextStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		)
	}
}

const styles = {
	errorTextStyle:{
		fontSize:20,
		color:'red',
		alignSelf:'center'
	}
}
export default LoginForm