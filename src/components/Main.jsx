import React, { useContext } from 'react'
import {Context} from '../Context';


function Main() {
  const {darkmode,setDarkmode} = useContext(Context);

  return (
    <section className={darkmode ? 'darkmode' : ''}>
      <h1>main</h1>
      {
        darkmode? <img src='./src/images/dog.png'/> : 
        <img src='./src/images/cat.png'/>
      }
    </section>
  )
}

export default Main