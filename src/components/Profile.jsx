import { useState } from "react";
import PropTypes from "prop-types";
import '../scss/layout/_editor.scss';

const Profile = ({ profileText, handleProfileText }) => {
    const [isEditing, setIsEditing] = useState(true);

    // Handle the state for save and edit operations
    const handleEdit = (event) => {
        event.preventDefault();
        setIsEditing(false);
    };

    return (
        <section id="profile" className="profile-info">
            <h2>Professional Profile</h2>
            <form id="profile-form" className="profile-info__form" onSubmit={handleEdit}>
                <div className="profile-info__form-wrapper">
                    <label htmlFor="profile-text" >Profile:
                        <textarea
                            id="profile-text"
                            name="profile"
                            rows={5}
                            cols={30}
                            maxLength={300}
                            placeholder="Describe in no more than 300 characters what's your professional profile"
                            value={profileText}
                            onChange={handleProfileText}
                            disabled={!isEditing}
                            required>
                        </textarea>
                    </label>
                    <div className="general-form__submit">
                        <button
                            type="submit"
                            id="btn-profile-submit"
                            className="btn-submit"
                        >Save
                        </button>
                        <button
                            type="button"
                            id="btn-profile-edit"
                            className="btn-submit"
                            onClick={() => setIsEditing(true)}
                        >Edit
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}

Profile.PropTypes = {
    profileText: PropTypes.string,
    handleProfileText: PropTypes.func,
    isEditing: PropTypes.bool,
    handleEdit: PropTypes.func,
    setIsEditing: PropTypes.bool
}

export default Profile;