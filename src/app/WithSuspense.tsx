import { Loading } from "@/shared/UI/Loading/";
import { Suspense } from "react";

interface Props {
    children: React.ReactNode;
}

export const WithSuspense = (props: Props) => {
    return(
        <Suspense fallback={<Loading />}>
            {props.children}
        </Suspense>
    )
}