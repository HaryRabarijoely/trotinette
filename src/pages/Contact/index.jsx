import React from 'react'
import { Container } from '@material-ui/core';
import "./index.css";
import img3 from '../../assets/Img/contact.png';

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Trott'eam</h1>

      <Container className='linkgithub'>
        <div className='link'>
        <a href="https://github.com/jordan-creyelman">Jordan Creyelman</a>
        <a href="https://github.com/HaryRabarijoely">Hary Andrianarisoa</a>
        <a href="https://github.com/kalu6334">Lucas Martin</a>
        <a href="https://github.com/Nicoclos">Nicolas Bia</a>
        <a href="https://github.com/JulienRouet">Julien ROUET</a>
        </div>
        <img style={{height: 400, width: 800, borderRadius: 0,}}src={img3} alt="Banner" className='img-fluid'></img>
      </Container>
    </div>
    
  )
}
