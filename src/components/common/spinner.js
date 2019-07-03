import React from 'react'
import {View, ActivityIndicator} from 'react-native'

const Spinner =({size})=>{
	const {spinnerStyle} = styles
	return (
		<View style={spinnerStyle}>
			<ActivityIndicator size ={size ||'large'}>
			</ActivityIndicator>
		</View>
	)
}

const styles ={
	spinnerStyle:{
		alignItems:'center',
		flex:1,
		justifyContent:'center'
	}
}

export {Spinner}