import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import './App.css';
import { useNavigate } from 'react-router-dom';

const TableContents = ({ data, setData }) => {
    const checkId = (id) => {
        console.log(id);
    };

    const navigate = useNavigate();

    const GoToJummahTranscript = () => {
        navigate('/transcript');
    };

    return (
        <div>
            <Table>
                <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Speaker</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.Id}</td>
                            <td>{val.Date}</td>
                            <td>{val.LectureName}</td>
                            <td>{val.Speaker}</td>

                            <td>
                                <Button
                                    className="btn btn-lg btn-success"
                                    onClick={GoToJummahTranscript}
                                >
                                    {' '}
                                    Ok{' '}
                                </Button>
                            </td>
                        </tr>
                    );
                })}
            </Table>
        </div>
    );
};

export default TableContents;
