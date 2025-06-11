import PropTypes from "prop-types";
import GeneralCanvas from "./GeneralCanvas";
import ProfileCavnvas from "./ProfileCanvas";
import '../components/Editor';
import '../components/General';
import '../scss/layout/_canvas.scss';

const Canvas = ({ generalInfo, profileText }) => {
    return (
        <div id="canvas" className="canvas-container">
            <GeneralCanvas generalInfo={generalInfo} />
            <ProfileCavnvas profileText={profileText} />
        </div>

    )
}

Canvas.propTypes = {
    generalInfo: PropTypes.object,
    profileText: PropTypes.string
}

export default Canvas;