import { Loading } from "@/shared/UI/Loading/";
import { Suspense } from "react";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withSuspense<P>(Component: React.ComponentType & any) {
    return function WithSuspense(props: P) {
      return (
        <Suspense fallback={<Loading />}>
          <Component {...props} />
        </Suspense>
      );
    };
  }