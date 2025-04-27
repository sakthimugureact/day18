import React from 'react'

function Task4(Wrapstyle) {
  return function Extension(props){
    return <Wrapstyle {...props}></Wrapstyle>
  }
}

export default Task4