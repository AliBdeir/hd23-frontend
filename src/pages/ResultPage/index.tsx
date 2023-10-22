import { Outlet } from "react-router-dom";

import Typography from "@mui/material/Typography";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import mockjson from "../../assets/mock.json"
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import AssignmentIcon from "@mui/icons-material/Assignment";
import QuizIcon from "@mui/icons-material/Quiz";
import FlashOnIcon from "@mui/icons-material/FlashOn";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { SessionOverview } from "./types";

// import appConfig from "../../appConfig.js"

function MyListItem(props: { text: string; icon: React.ReactNode; handleClick: React.MouseEventHandler<HTMLLIElement> }) {
  return (
    <ListItem onClick={props.handleClick}>
      <ListItemButton>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={<Typography variant="h6">{props.text}</Typography>} />
      </ListItemButton>
    </ListItem>
  );
}

export function ResultPage() {
  const { sessionId } = useParams();

  const query = useQuery({
    queryFn: () => axios.get<SessionOverview[]>(`Session/${sessionId}/Overview`),
    queryKey: ["overview", sessionId],
  });

  const [expanded, setExpanded] = useState<number[]>([0, 1, 2]);

  const handleChange = (index: number) => (_: unknown, isExpanded: boolean) => {
    const clone = [...expanded];
    if (isExpanded && !expanded.includes(index)) {
      // If it's expanded and it's not already in the list
      clone.push(index);
    } else if (!isExpanded && expanded.includes(index)) {
      // If it's not expanded and it's already in the list
      clone.splice(expanded.indexOf(index), 1);
    }
    setExpanded(clone);
  };

  const navigate = useNavigate();

  return (
    <div>
      {/* <h1 className="text-3xl font-bold py-16">Upload is successful here are the chapters of that book:</h1> */}
      <div className="my-4">
        <Typography variant="h2" className="text-center">
          Welcome, Ali
        </Typography>
      </div>
      <div className="flex flex-col gap-4">
        {query.data?.data &&
          query.data.data.map((chapter, i) => {
            return (
              <Accordion
                expanded={expanded.includes(i)}
                onChange={handleChange(i)}
                key={i}
                className="p-6"
                style={{
                  animationDelay: `${0.1 * (i + 1)}s`,
                  animation: `popUpEffect ${0.5 * (i + 1)}s forwards`,
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography variant="h5" fontWeight="bold">
                    {chapter.title}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <List>
                    <MyListItem
                      text="Flash Cards!"
                      icon={<FlashOnIcon />}
                      handleClick={() => {
                        navigate(`/result/${sessionId}/${chapter.id}/flash`);
                      }}
                    />
                    <MyListItem
                      text="Quiz"
                      icon={<QuizIcon />}
                      handleClick={() => {
                        navigate(`/result/${sessionId}/${chapter.id}/quiz`);
                      }}
                    />
                    <MyListItem
                      text="Assignment"
                      icon={<AssignmentIcon />}
                      handleClick={() => {
                        navigate(`/result/${sessionId}/${chapter.id}/assignment`);
                      }}
                    />
                  </List>
                </AccordionDetails>
              </Accordion>
            );
          })}
      </div>
    </div>
  );
}

export function ResultPageLayout() {
  return (
    <div className="flex justify-center">
      <div className="max-w-3xl">
        <Outlet />
      </div>
    </div>
  );
}
