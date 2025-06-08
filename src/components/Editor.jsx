import PropTypes from 'prop-types';
import General from './General';
import '../scss/layout/_editor.scss';
import '../scss/layout/_forms.scss';

const Editor = ({ generalInfo, eventHandler, isEditing, handleEdit, setIsEditing }) => {
    return (
        <div id="editor" className="editor-container">
            <General
                generalInfo={generalInfo}
                eventHandler={eventHandler}
                isEditing={isEditing}
                handleEdit={handleEdit}
                setIsEditing={setIsEditing}
            />
        </div>

    )
};

Editor.propTypes = {
    generalInfo: PropTypes.object,
    eventHandler: PropTypes.func,
    isEditing: PropTypes.bool,
    handleEdit: PropTypes.func,
    setIsEditing: PropTypes.bool
}

export default Editor;