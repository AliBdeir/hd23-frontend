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
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
