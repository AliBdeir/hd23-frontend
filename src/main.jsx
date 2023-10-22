import React, { useCallback } from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet } from "react-router-dom";

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import QuizPage from './pages/QuizPage/index.jsx'
import DNDPage from "./pages/DNDPage/index.jsx"
import { ResultPageLayout, ResultPage } from "./pages/ResultPage/index.jsx"

import "./index.css"
import FlashcardPage from './pages/FlashcardPage/index.jsx';

function MainPageLayout() {
  return <Outlet />
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPageLayout />,
      children: [
        {
          path: "/",
          element: <DNDPage />,
        },
      ]
    },
    {
      path: "/result",
      element: <ResultPageLayout />,
      children: [
        {
          path: "/result",
          element: <ResultPage />
        },
        {
          path: "/result/:chapter_id/flash",
          element: <FlashcardPage />
     
        },
        {
          path: "/result/:chapter_id/quiz",
          element: <QuizPage />
        },
        {
          path: "/result/:chapter_id/assignment",
          element: <ResultPage />
        },
        
      ]
    },
  ]);

  return <div>
    <RouterProvider router={router} />
  </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
