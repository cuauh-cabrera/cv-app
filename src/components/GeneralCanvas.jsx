import PropTypes from 'prop-types';
import '../scss/layout/_canvas.scss';
import '../components/General';

const GeneralCanvas = ({ generalInfo }) => {
    return (
        <section id="general-canvas" className="general-canvas">
            <h1>{generalInfo.name}</h1>
            <p className='general-canvas__contact'>{generalInfo.email}</p>
            <p className='general-canvas__contact'>{generalInfo.phone}</p>
            <p className='general-canvas__contact'>{generalInfo.city}</p>
            <p className='general-canvas__contact'>{generalInfo.country}</p>
            <p className='general-canvas__contact'>{generalInfo.linkedin}</p>
            <hr></hr>
        </section>

    )
}

GeneralCanvas.propTypes = {
    generalInfo: PropTypes.object
}

export default GeneralCanvas;