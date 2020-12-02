import React from 'react'
import classes from './Button.module.css'

const button = (props ) => {
  return(
    <button
      className={[classes.Button, classes[props.btnType]].join(' ')}
      onClick={props.clicked}
    >
      {props.children}  {/*CONTINUE / CANCEL*/}
    </button>
  )
}

// 3:45

export default button