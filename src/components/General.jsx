import PropTypes from 'prop-types';
import '../scss/layout/_editor.scss';
import '../scss/components/_button.scss';

const General = ({ generalInfo, eventHandler, isEditing, handleEdit, setIsEditing }) => {
    return (
        <section id="general" className="general-info">
            <h2>General Information</h2>
            <form id="general-info" className='general-info__form' onSubmit={handleEdit}>
                <div className='general-info__form-wrapper'>
                    <label>Full Name:
                        <input
                            name='name'
                            type="text"
                            placeholder="John Doe"
                            value={generalInfo.name}
                            onChange={eventHandler}
                            disabled={!isEditing}
                            required
                        />
                    </label>
                </div>
                <div className='general-info__form-wrapper'>
                    <label>Email:
                        <input
                            name='email'
                            type="email"
                            placeholder="john.doe@mail.com"
                            value={generalInfo.email}
                            onChange={eventHandler}
                            disabled={!isEditing}
                            required
                        />
                    </label>
                    <label>Phone:
                        <input
                            name='phone'
                            type="tel"
                            placeholder="+52 2222 222 222"
                            value={generalInfo.phone}
                            onChange={eventHandler}
                            disabled={!isEditing}
                            required
                        />
                    </label>
                </div>
                <div className='general-info__form-wrapper'>
                    <label>City:
                        <input
                            name='city'
                            type="text"
                            placeholder="Mexico City"
                            value={generalInfo.city}
                            onChange={eventHandler}
                            disabled={!isEditing}
                            required
                        />
                    </label>
                    <label>Country:
                        <input
                            name='country'
                            type="text"
                            placeholder="Mexico"
                            value={generalInfo.country}
                            onChange={eventHandler}
                            disabled={!isEditing}
                            required
                        />
                    </label>
                </div>
                <div className='general-info__form-wrapper'>
                    <label>LinkedIn:
                        <input
                            name='linkedin'
                            type="text"
                            placeholder="linkedin.com/in/your-profile/"
                            value={generalInfo.linkedin}
                            onChange={eventHandler}
                            disabled={!isEditing}
                            required
                        />
                    </label>
                </div>
                <div className="general-form__submit">
                    <button
                        type="submit"
                        id="btn-general-submit"
                        className="btn-submit"
                    >Save
                    </button>
                    <button
                        type="button"
                        id="btn-general-edit"
                        className="btn-submit"
                        onClick={() => setIsEditing(true)}
                    >Edit
                    </button>
                </div>
            </form>
        </section>
    )
}

General.PropTypes = {
    generalInfo: PropTypes.object,
    eventHandler: PropTypes.func,
    isEditing: PropTypes.bool,
    handleEdit: PropTypes.func,
    setIsEditing: PropTypes.bool
}

export default General;