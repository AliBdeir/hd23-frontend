import React, { useCallback } from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet } from "react-router-dom";

import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import DNDPage from "./dnd_page.jsx"

import "./index.css"

function ResultPageLayout() {
  return <div>
    something
    <Outlet />
  </div>
}

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
          element: <div>other</div>
        }
      ]
    }
  ]);

  return <div>
    <RouterProvider router={router} />
  </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
