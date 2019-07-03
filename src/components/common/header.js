import React from 'react'
import {Text, View} from 'react-native'

const Header = (props) => {
	const {textStyle, viewStyle} = styles
	return ( 
		<View style = {viewStyle}>
			<Text style = {textStyle}>{props.headerText}</Text>
		</View>
	)
}

const styles = {
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		backgroundColor: 'lightblue',
		shadowColor: '#000000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.9, //for iOS
		elevation: 50 //for Android
	},
	textStyle :{
		fontSize : 20 
	}
}
export  {Header}