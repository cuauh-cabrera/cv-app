import { useState } from 'react'
import Header from './Header'
import Editor from './Editor'
import Canvas from './Canvas'
import '../scss/layout/_app.scss';

function App() {

  return (
    <div id='app' className='app-container'>
      <Header />
      <div id='container' className='container'>
        <Editor />
        <Canvas />
      </div>
    </div>
  )
}

export default App
