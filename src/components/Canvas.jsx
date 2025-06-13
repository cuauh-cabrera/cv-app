import PropTypes from "prop-types";
import GeneralCanvas from "./GeneralCanvas";
import ProfileCanvas from "./ProfileCanvas";
import ExperienceCanvas from "./ExperienceCanvas";
import '../components/Editor';
import '../components/General';
import '../scss/layout/_canvas.scss';

const Canvas = ({ generalInfo, profileText, jobInfo }) => {
    return (
        <div id="canvas" className="canvas-container">
            <GeneralCanvas generalInfo={generalInfo} />
            <ProfileCanvas profileText={profileText} />
            <ExperienceCanvas jobInfo={jobInfo} />
        </div>

    )
}

Canvas.propTypes = {
    generalInfo: PropTypes.object,
    profileText: PropTypes.string,
    jobInfo: PropTypes.object
}

export default Canvas;