import { useState } from 'react'
import Header from './Header'
import Editor from './Editor'
import Canvas from './Canvas'
import '../scss/layout/_app.scss';

function App() {

  // Handle the state for each input value in the General Information form
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    linkedin: ''
  });

  const handleSetGeneralInfo = (event) => {
    const { name, value } = event.target;
    setGeneralInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Handle the state for save and edit operations for for text Boxes
  const [textArea, setTextArea] = useState('');

  const handleProfileText = (event) => {
    event.preventDefault;
    setTextArea(event.target.value);
  };

  // Handle the state for each input in the Job Experience Information Section
  const [jobInfo, setJobInfo] = useState({
    company: '',
    role: '',
    startDate: '',
    endDate: '',
    description: ''
  });

  const handleJobInfo = (event) => {
    const { name, value } = event.target;
    setJobInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div id='app' className='app-container'>
      <Header />
      <div id='container' className='container'>
        <Editor
          generalInfo={generalInfo}
          eventHandler={handleSetGeneralInfo}
          handleProfileText={handleProfileText}
          jobInfo={jobInfo}
          handleJobInfo={handleJobInfo}
        />
        <Canvas
          generalInfo={generalInfo}
          profileText={textArea}
          jobInfo={jobInfo}
        />
      </div>
    </div>
  )
}

export default App
