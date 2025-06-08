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

  // Sets the state for the save and edit buttons in the General Information form
  const [isEditing, setIsEditing] = useState(true);

  // Handles the state for save and edit operations for the General Information form
  const handleEdit = (event) => {
    event.preventDefault();
    setIsEditing(false);
  };

  return (
    <div id='app' className='app-container'>
      <Header />
      <div id='container' className='container'>
        <Editor
          generalInfo={generalInfo}
          eventHandler={handleSetGeneralInfo}
          isEditing={isEditing}
          handleEdit={handleEdit}
          setIsEditing={setIsEditing}
        />
        <Canvas generalInfo={generalInfo} />
      </div>
    </div>
  )
}

export default App
