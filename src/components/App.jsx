import { useState } from 'react'
import Header from './Header'
import Editor from './Editor'
import Canvas from './Canvas'
import '../scss/layout/_app.scss';

function App() {

  // Sets the state for each input in the General Information Section
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    linkedin: ''
  });

  // Handles the state for each input value in the General Information form
  const handleSetGeneralInfo = (event) => {
    const { name, value } = event.target;
    setGeneralInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Sets the state for save and edit operations for the Professional Profile section
  const [profileText, setProfileText] = useState('');

  // Handles the state for save and edit operations for the Professional Profile section
  const handleProfileText = (event) => {
    event.preventDefault;
    setProfileText(event.target.value);
  };

  return (
    <div id='app' className='app-container'>
      <Header />
      <div id='container' className='container'>
        <Editor
          generalInfo={generalInfo}
          eventHandler={handleSetGeneralInfo}
          handleProfileText={handleProfileText}
        />
        <Canvas
          generalInfo={generalInfo}
          profileText={profileText}
        />
      </div>
    </div>
  )
}

export default App
