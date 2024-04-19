import React from 'react'
import { useNavigate } from 'react-router-dom'


const About = () => {
  
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/home');
    }
      return (
    <div>
        <h1>This is an example of the react DOM</h1>
        <button className='btn btn-success' onClick={goHome} >HOME</button>
    </div>
  );
};

export default About