import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import ReactDOM from 'react-dom/client'

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import logo from './assets/images/coursify_logo.png';

import DNDPage from "./dnd_page.jsx"

import "./index.css"



function App() {
  return <div>
    <DNDPage />
  </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
