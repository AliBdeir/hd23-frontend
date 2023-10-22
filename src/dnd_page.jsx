import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client'

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import logo from './assets/images/coursify_logo.png';
import axios from 'axios';

function MyDropzone() {
    const navigate = useNavigate();
    
    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];

        const formData = new FormData();
        formData.append('file', file);

        navigate("/result")

        // try {
        //     const response = await axios.post('your_server_base_url/api/pdf/upload', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //         },
        //     });
        //     console.log('File uploaded successfully:', response.data);
        // } catch (error) {
        //     console.error('Error uploading file:', error);
        // }
    }, []);

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


export default function DNDPage() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div>

                {/* Inserting the logo */}
                <div className="flex flex-col items-center justify-center h-64 max-w-md mx-auto my-12">
                    <img src={logo} alt="Logo" className="max-w-xs max-h-xs w-full h-auto" /> {/* Tailwind CSS classes for size and other styles */}
                </div>
                <MyDropzone />
                {/* Other components can go here */}
            </div>
        </div>
    )
}