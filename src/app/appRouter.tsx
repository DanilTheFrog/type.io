import Home from "@/pages/Home";
import { lazy } from 'react';

import { createBrowserRouter } from "react-router-dom";
import { WithSuspense } from "./WithSuspense";

const TestingPage = lazy(() => import('@/pages/testing'))
const TrainingPage = lazy(() => import('@/pages/training'))


export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/testing",
        element: <WithSuspense ><TestingPage/></WithSuspense>
    },
    {
        path: "/training",
        element: <WithSuspense><TrainingPage/></WithSuspense>
    }
])