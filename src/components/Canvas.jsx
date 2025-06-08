import PropTypes from "prop-types";
import GeneralCanvas from "./GeneralCanvas";
import '../components/Editor';
import '../components/General';
import '../scss/layout/_canvas.scss';

const Canvas = ({ generalInfo }) => {
    return (
        <div id="canvas" className="canvas-container">
            <GeneralCanvas generalInfo={generalInfo} />
        </div>

    )
}

Canvas.propTypes = {
    generalInfo: PropTypes.object
}

export default Canvas;