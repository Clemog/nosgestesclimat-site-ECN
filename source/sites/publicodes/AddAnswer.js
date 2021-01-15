import React, { useState, useContext } from 'react'
import emoji from 'react-easy-emoji'

const AddAnswer = async () => {
  	const resp = await fetch('/.netlify/functions/postanswer', { 
  		method: 'POST',
  		body: JSON.stringify({ date: new Date().toISOString().split('T')[0], text: 'This is a test' })
  	})
    
	const { error, message } = await resp.json()
	error ? console.error(error) : console.log(message)
}

const AddAnswerButton = (props) => {
	return (
		<div
			css={`
				display: flex;
				align-items: center;
				justify-content: center;
				img {
					margin-right: 0.4rem !important;
				}
			`}
		>
			<button
				className="ui__ simple small button"
				onClick={() => {AddAnswer}}
			>
			{emoji('📄')}
			</button>
		</div>
	)
}

export default AddAnswerButton
