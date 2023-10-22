import { Outlet } from "react-router-dom";

import Typography from '@mui/material/Typography';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ButtonGroup from '@mui/material/ButtonGroup';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import mockjson from "../../assets/mock.json"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { DeleteForever } from "@mui/icons-material";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AssignmentIcon from '@mui/icons-material/Assignment';
import QuizIcon from '@mui/icons-material/Quiz';
import FlashOnIcon from '@mui/icons-material/FlashOn';

function MyListItem({ text, icon, handleClick }) {
    return <ListItem onClick={handleClick}>
        <ListItemButton>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
        </ListItemButton>
    </ListItem>
}

export function ResultPage() {
    const navigate = useNavigate();

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        console.log(panel)
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold py-16">Upload is successful here are the chapters of that book:</h1>
            {mockjson.children.map((e, i) => {
                return <Accordion
                    expanded={expanded == `panel${i}`}
                    onChange={handleChange(`panel${i}`)}
                    key={i}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography fontWeight="bold">{e.title}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <ButtonGroup
                            className="w-full"
                            variant="outlined"
                            aria-label="outlined primary button group"
                            orientation="vertical"
                        >
                            <List>
                                <MyListItem text="Flash Cards!" icon={<FlashOnIcon />}
                                    handleClick={() => { navigate("/result/1/flash") }}
                                />
                                <MyListItem text="Quiz" icon={<QuizIcon />}
                                    handleClick={() => { navigate("/result/1/quiz") }}
                                />
                                <MyListItem text="Assignment" icon={<AssignmentIcon />}
                                    handleClick={() => { navigate("/result/1/assignment") }}
                                />
                            </List>
                        </ButtonGroup>
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