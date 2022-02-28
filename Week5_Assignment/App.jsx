import React from 'react'
import AddEntries from './Redux_Component/AddEntries'
import AddInput from './Redux_Component/AddInput'
import Heading from './Redux_Component/Heading'

const App = () => {
  return (
    <div>
      <Heading/>
      <AddInput/>
      <AddEntries/>
    </div>
  )
}

export default App