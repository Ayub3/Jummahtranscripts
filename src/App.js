import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import TableContents from './TableContents';
import JummahTranscript from './JummahTranscript';

export const App = () => {
    const [data, setData] = useState([]);
    const [lecture1, setLecture1] = useState([]);
    React.useEffect(() => {
        fetch('https://dh9ck0ub55.execute-api.us-east-1.amazonaws.com/Dev')
            .then((results) => results.json())
            .then((data) => {
                console.log(data.Items);
                setData(data.Items);
            });
    }, []);

    React.useEffect(() => {
        fetch(
            'https://dh9ck0ub55.execute-api.us-east-1.amazonaws.com/Dev/getlecture1'
        )
            .then((results) => results.json())
            .then((data) => {
                setLecture1(data);
                console.log(lecture1);
            });
    }, []);

    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<TableContents data={data} setData={setData} />}
                ></Route>
                {/* <Route
                    path="/transcript"
                    element={
                        <JummahTranscript
                            data={data}
                            setData={setData}
                            lecture1={lecture1}
                            setLecture1={setLecture1}
                        />
                    }
                /> */}
            </Routes>
        </div>
    );
};

export default App;
