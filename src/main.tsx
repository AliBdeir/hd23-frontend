import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DNDPage from "./pages/DNDPage/index.jsx";
import QuizPage from "./pages/QuizPage/index.jsx";
import { ResultPage, ResultPageLayout } from "./pages/ResultPage/index.jsx";

import "./index.css";
import FlashcardPage from "./pages/FlashcardPage/index.jsx";
import SessionsPage from "./pages/SessionsPage/index.jsx";
import axios from "axios";

function MainPageLayout() {
  return (
    <div className="flex justify-center">
      <div className="max-w-3xl">
        <Outlet />
      </div>
    </div>
  );
}

axios.defaults.baseURL = "https://courseifybackend.azurewebsites.net/api";

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
      ],
    },
    {
      path: "/list",
      element: <MainPageLayout />,
      children: [
        {
          path: "/list",
          element: <SessionsPage />,
        },
      ],
    },
    {
      path: "/result/:sessionId",
      element: <ResultPageLayout />,
      children: [
        {
          path: "/result/:sessionId",
          element: <ResultPage />,
        },
        {
          path: "/result/:sessionId/:chapterId/flash",
          element: <FlashcardPage />,
        },
        {
          path: "/result/:sessionId/:chapterId/quiz",
          element: <QuizPage />,
        },
        {
          path: "/result/:sessionId/:chapterId/assignment",
          element: <ResultPage />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
