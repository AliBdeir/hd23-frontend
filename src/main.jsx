import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from '@mui/material/Button';
import "./index.css"

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button variant="contained">Hello world</Button>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
