import '../scss/layout/_editor.scss';
import '../scss/components/_button.scss';

const General = () => {
    return (
        <section id="general" className="general-info">
            <h2>General Information</h2>
            <form id="general-info" className='general-info__form'>
                <div className='general-info__form-wrapper'>
                    <label>First Name:
                        <input type="text" placeholder="John" required></input>
                    </label>
                    <label>Last Name:
                        <input type="text" placeholder="Doe" required></input>
                    </label>
                </div>
                <div className='general-info__form-wrapper'>
                    <label>Email:
                        <input type="email" placeholder="john.doe@mail.com" required></input>
                    </label>
                    <label>Phone:
                        <input type="tel" placeholder="+52 2222 222 222" required></input>
                    </label>
                </div>
                <div className='general-info__form-wrapper'>
                    <label>City:
                        <input type="text" placeholder="Mexico City" required></input>
                    </label>
                    <label>Country:
                        <input type="text" placeholder="Mexico" required></input>
                    </label>
                </div>
                <div className='general-info__form-wrapper'>
                    <label>LinkedIn:
                        <input type="url" placeholder="linkedin.com/in/your-profile/" required></input>
                    </label>
                </div>
                <div className="general-form__submit">
                    <button type="submit" id="btn-general-submit" className="btn-submit">Save</button>
                    <button type="submit" id="btn-general-edit" className="btn-submit">Edit</button>
                </div>
            </form>
        </section>
    )
}

export default General;