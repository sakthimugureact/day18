import React from 'react'

function Task9(WrapFetch) {
  return function of(props){
    return <WrapFetch {...props}/>
  }
}

export default Task9