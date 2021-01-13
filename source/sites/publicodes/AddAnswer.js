import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router'
import emoji from 'react-easy-emoji'
import tinygradient from 'tinygradient'
import { animated, useSpring } from 'react-spring'
import ShareButton from 'Components/ShareButton'
import { findContrastedTextColor } from 'Components/utils/colors'
import { motion } from 'framer-motion'
import BallonGES from './images/ballonGES.svg'
import StartingBlock from './images/starting block.svg'
import SessionBar from 'Components/SessionBar'
import AddAnswer from './AddAnswer'
import Chart from './chart'
import { Link } from 'react-router-dom'


const [thought, setThought] = useState({ date: new Date().toISOString().split('T')[0], text: 'Thisis a test' });

const AddAnswer = async () => {
  	const resp = await fetch('/.netlify/functions/postanswer', { 
  		method: 'POST',
  		body: JSON.stringify(thought)
  	})
    
	const { error, message } = await resp.json()
	error ? console.error(error) : console.log(message)
}

export default AddAnswer
