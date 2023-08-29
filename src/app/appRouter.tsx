import Home from "@/pages/Home";
import { lazy } from 'react';

import { LayoutUserCard } from "@/widgets/LayoutUserCard";
import { LayoutHeader } from "@/widgets/Layoutheader";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { WithSuspense } from "./WithSuspense";

const TestingPage = lazy(() => import('@/pages/testing'))
const TrainingPage = lazy(() => import('@/pages/training'))


export const appRouter = () => createBrowserRouter([
    {
        element: (<>
        <LayoutHeader rightContentSlot={<LayoutUserCard name={"Хуй Моржовый"}/>}/>
        <Outlet />
        </>),
        errorElement: <div>Error</div>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/testing",
                element: <WithSuspense ><TestingPage/></WithSuspense>
            },
            {
                path: "/training",
                element: <WithSuspense><TrainingPage/></WithSuspense>
            },
            {
                path: "/test",
                element: <h1>TEST</h1>
            }
        ]
    },

])