import Home from "@/pages/Home";
import { lazy } from 'react';

import { createBrowserRouter } from "react-router-dom";
import { baseLayout } from "./Layouts/baseLayout";
import { withSuspense } from "./withSuspense";

// eslint-disable-next-line react-refresh/only-export-components
const TestingPage = withSuspense(lazy(() => import('@/pages/testing')))
// eslint-disable-next-line react-refresh/only-export-components
const TrainingPage = withSuspense(lazy(() => import('@/pages/training')));


export const appRouter = () => createBrowserRouter([
    {
        element: baseLayout,

        errorElement: <div>Error</div>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/testing",
                element: <TestingPage />
            },
            {
                path: "/training",
                element: <TrainingPage/>
            },
            {
                path: "/test",
                element: <h1>TEST</h1>
            }
        ]
    },

])