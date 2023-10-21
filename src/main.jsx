import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import ReactDOM from 'react-dom/client'

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import "./index.css"

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })

  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <Paper
      elevation={3}
      {...getRootProps()}
      className="p-6 border-2 border-dashed border-gray-300 bg-gray-100 rounded-md text-center cursor-pointer"

    >
      <input {...getInputProps()} />
      <Typography variant="h6" color="textSecondary">
        Drag n drop some files here, or click to select files</Typography>
    </Paper>
  )
}

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        CoursifAI
      </h1>
      <h1>File Upload</h1>
      <MyDropzone />
      {/* <Button >hello</Button> */}
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
