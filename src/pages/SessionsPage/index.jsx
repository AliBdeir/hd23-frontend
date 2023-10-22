import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useNavigate } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';

import { getDatabase, ref, get } from "firebase/database";

import firebaseApp from '../../firebaseConfig.js';

import "./index.css"
export default function SessionsPage() {
    const [sessions, setSessions] = useState(null)
    const navigate = useNavigate()

    const db = getDatabase(firebaseApp);
    const dbRef = ref(db, 'Sessions'); // Replace 'yourDatabasePath' with the path to your data

    useEffect(() => {
        get(dbRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    setSessions(data)
                    console.log(data);
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error("Error getting data:", error);
            });
    }, [])

    return <div>
        <Typography variant="h3" sx={{my: 5}}>List of generated courses</Typography>

        <div className="sessionsList">
            {sessions && Object.keys(sessions).map((key, _) => {
                return <Card
                    className="sessionCard"
                    key={key}
                    onClick={() => {
                        console.log(sessions[key])
                        navigate(`/result/${key}`)
                    }}
                >

                    <Typography variant="div">
                        <Typography fontWeight="bold">
                            Session Id:
                        </Typography>
                        {key}
                    </Typography>

                    <Typography variant="div">
                        <Typography fontWeight="bold">
                            Title:
                        </Typography>
                        {sessions[key]?.Title}
                    </Typography>

                    <Typography variant="div">
                        <Typography fontWeight="bold">
                            Id:
                        </Typography>
                        {sessions[key]?.Id}
                    </Typography>

                </Card>
            })}
        </div>
    </div>

}