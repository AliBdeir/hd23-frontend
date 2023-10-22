import { Outlet } from "react-router-dom";

import Typography from '@mui/material/Typography';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import mockjson from "../../assets/mock.json"
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AssignmentIcon from '@mui/icons-material/Assignment';
import QuizIcon from '@mui/icons-material/Quiz';
import FlashOnIcon from '@mui/icons-material/FlashOn';

import axios from "axios";

import appConfig from "../../appConfig.js"


function MyListItem({ text, icon, handleClick }) {
    return <ListItem onClick={handleClick}>
        <ListItemButton>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={<Typography variant="h6">{text}</Typography>} />
        </ListItemButton>
    </ListItem>
}

export function ResultPage() {
    const [sessionData, setSessionData] = useState(null)
    const [expanded, setExpanded] = useState(false);
    
    const navigate = useNavigate()

    const { sessionId } = useParams();
    console.log(sessionId)

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const response = await axios.get(`${appConfig.baseUrl}/api/Session/${sessionId}/Overview`);
                console.log(response.data)
                setSessionData(response.data)

            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }

        fetchSession()
    }, [])

    const handleChange = (panel) => (event, isExpanded) => {
        console.log(panel)
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold py-16">Upload is successful here are the chapters of that book:</h1>
            {sessionData && sessionData.map((chapter, i) => {
                
                return <Accordion
                    style={{
                        padding: "10px 10px 50px 10px"
                    }}
                    expanded={expanded == `panel${i}`}
                    onChange={handleChange(`panel${i}`)}
                    key={i}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="h5" fontWeight="bold">{chapter.title}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>

                            <List>
                                <MyListItem text="Flash Cards!" icon={<FlashOnIcon />}
                                    handleClick={() => { navigate(`/result/${sessionId}/${chapter.id}/flash`) }}
                                />
                                <MyListItem text="Quiz" icon={<QuizIcon />}
                                    handleClick={() => { navigate(`/result/${sessionId}/${chapter.id}/quiz`) }}
                                />
                                <MyListItem text="Assignment" icon={<AssignmentIcon />}
                                    handleClick={() => { navigate(`/result/${sessionId}/${chapter.id}/assignment`) }}
                                />
                            </List>

                    </AccordionDetails>
                </Accordion>
            })}
        </div>
    );
}


export function ResultPageLayout() {
    return <div className="flex justify-center">
        <div className="max-w-3xl" >
            <Outlet />
        </div>
    </div>
}