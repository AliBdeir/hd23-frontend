import React, { useCallback } from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet } from "react-router-dom";

import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import DNDPage from "./dnd_page.jsx"
import ResultPageLayout, { ResultPage } from "./result_page.jsx"

import "./index.css"

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
      element: <ResultPage />
    }
    // {
    //   path: "/result",
    //   element: <ResultPageLayout />,
    //   children: [
    //     {
    //       path: "/result",
    //       element: <ResultPage />
    //     }
    //   ]
    // }
  ]);

  return <div>
    <RouterProvider router={router} />
  </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
