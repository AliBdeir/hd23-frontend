import { Outlet } from "react-router-dom";

import Typography from '@mui/material/Typography';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import mockjson from "./assets/mock.json"

export default function ResultPageLayout() {
    return <div>
        <Outlet />
    </div>
}

export function BasicAccordion() {
    return (
        <div className="flex justify-center">
            <div className="max-w-3xl">
                <h1 className="text-3xl font-bold">Upload is successful here are the chapters of that book:</h1>
                {/* {mockjson.children.slice(1).map((e, i) => { return e})} */}
                {console.log(mockjson.children.slice(1,mockjson.children.length))}
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}

export function ResultPage() {
    return <BasicAccordion />
}

