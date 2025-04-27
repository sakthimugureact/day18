import React from 'react'
import Task1 from './Components/Task1'
import Wrap from './Components/Wrapcomponent'
import Wrapstyle from './Components/Wrapstyle'
import Conditional from './Components/ConditionalWrap'
import Loading from './Components/Loading'
import Logging from './Components/Logging'
import WrapFetch from './Components/WrapFetch'
import WrapMouse from './Components/WrapMouse'
import WrapTitle from './Components/WrapTitle'
import WrapClick from './Components/WrapClick'
import WrapTheme from './Components/WrapTheme'


function App() {
  return (
    <div>
      <Task1/>
      <Wrap/>
      <Wrapstyle/>
      <Conditional/>
      <Loading/>
      <Logging/>
      <WrapFetch/>
      <WrapMouse/>
      <WrapTitle/>
      <WrapClick/>
      <WrapTheme/>
    </div>
  )
}

export default App