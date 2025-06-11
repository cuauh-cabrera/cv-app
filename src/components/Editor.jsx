import PropTypes from 'prop-types';
import General from './General';
import Profile from './Profile';
import '../scss/layout/_editor.scss';
import '../scss/layout/_forms.scss';


const Editor = ({ generalInfo, eventHandler, isEditing, handleEdit, setIsEditing, profileText, handleProfileText }) => {
    return (
        <div id="editor" className="editor-container">
            <General
                generalInfo={generalInfo}
                eventHandler={eventHandler}
                isEditing={isEditing}
                handleEdit={handleEdit}
                setIsEditing={setIsEditing}
            />
            <Profile
                isEditing={isEditing}
                handleEdit={handleEdit}
                setIsEditing={setIsEditing}
                profileText={profileText}
                handleProfileText={handleProfileText}
            />
        </div>
    )
};

Editor.propTypes = {
    generalInfo: PropTypes.object,
    eventHandler: PropTypes.func,
    isEditing: PropTypes.bool,
    handleEdit: PropTypes.func,
    setIsEditing: PropTypes.bool,
    profileText: PropTypes.string
}

export default Editor;