import React, { useState } from 'react'
import Value from 'Components/Value'
/*const [thought, setThought] = useState({ date: new Date().toISOString().split('T')[0], text: 'Thisis a test' });*/

const AddAnswer = async () => {
  	const resp = await fetch('/.netlify/functions/postanswer', { 
  		method: 'POST',
  		body: JSON.stringify(Value})
  	})
    
	const { error, message } = await resp.json()
	error ? console.error(error) : console.log(message)
}

export default AddAnswer
