import { useState } from "react";
import PropTypes from "prop-types";
import Experience from "./Experience";
import '../scss/layout/_canvas.scss';

const ExperienceCanvas = ({jobInfo}) => {
    return (
        <section id="experience-canvas" className="experience-canvas">
            <h2>Experience</h2>
            <p className="experience-canvas__role">{jobInfo.company}</p>
            <p className="experience-canvas__role">{jobInfo.role}</p>
            <div className="experience-canvas__dates">
                <p id="start-date">{jobInfo.startDate}</p>
                <span>-</span>
                <p id="end-date">{jobInfo.endDate}</p>
            </div>
            <p className="experience-canvas__desc">{jobInfo.description}</p>
        </section>
    );
}

export default ExperienceCanvas;