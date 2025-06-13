import PropTypes from 'prop-types';
import '../scss/layout/_canvas.scss';
import '../components/Profile';

const ProfileCanvas = ({ profileText }) => {
    return (
        <section id='profile-canvas' className='profile-canvas'>
            <p className='profile-canvas__text'>{profileText}</p>
        </section>
    )
}

ProfileCanvas.propTypes = {
    profileText: PropTypes.string
}

export default ProfileCanvas;