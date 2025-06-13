import { useState } from 'react';
import PropTypes from 'prop-types';
import '../scss/layout/_editor.scss';
import '../scss/layout/_forms.scss';

const Experience = ({ jobInfo, handleJobInfo }) => {

    // Handle the state for save and edit operations
    const [isEditing, setIsEditing] = useState(true);

    const handleEdit = (event) => {
        event.preventDefault();
        setIsEditing(false);
    };

    return (
        <section id="experience" className="experience-info">
            <h2>Job Experience</h2>
            <form id="experience-form" className="experience-info__form" onSubmit={handleEdit}>
                <div className="experience-info__form-wrapper">
                    <label htmlFor="company">Company:
                        <input
                            id='company'
                            type="text"
                            name='company'
                            placeholder='ACME Inc.'
                            value={jobInfo.company}
                            onChange={handleJobInfo}
                            disabled={!isEditing}
                            required
                        />
                    </label>
                    <label htmlFor="role">Role:
                        <input
                            id='role'
                            type="text"
                            name='role'
                            placeholder='Software Developer'
                            value={jobInfo.role}
                            onChange={handleJobInfo}
                            disabled={!isEditing}
                            required
                        />
                    </label>
                    <label htmlFor="start">Start Date:
                        <input
                            type="date"
                            name="startDate"
                            id="start"
                            value={jobInfo.startDate}
                            onChange={handleJobInfo}
                            disabled={!isEditing}
                            required
                        />
                    </label>
                    <label htmlFor="end">End Date:
                        <input
                            type="date"
                            name="endDate"
                            id="end"
                            value={jobInfo.endDate}
                            onChange={handleJobInfo}
                            disabled={!isEditing}
                            required
                        />
                    </label>
                    <label htmlFor="description">Description:
                        <textarea
                            name="description"
                            id="description"
                            rows={5}
                            cols={30}
                            value={jobInfo.description}
                            onChange={handleJobInfo}
                            disabled={!isEditing}
                            required>
                        </textarea>
                    </label>
                    <div className="general-form__submit">
                        <button
                            type="submit"
                            id="btn-experience-submit"
                            className="btn-submit"
                        >Save
                        </button>
                        <button
                            type="button"
                            id="btn-experience-edit"
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

Experience.PropTypes = {
    jobInfo: PropTypes.object,
    handleJobInfo: PropTypes.func
}

export default Experience;