import React, { useState, useEffect } from 'react';
const JummahTranscript = ({ data, setData, lecture1, setLecture1 }) => {
    return (
        <div>
            <h4>lecture title</h4>
            {lecture1.map((lecture) => (
                <p>{lecture.S.Transcript}</p>
            ))}
        </div>
    );
};

export default JummahTranscript;
