import { lazy, Suspense } from "react";
import MainContainer from "./components/MainContainer";

// Visitors never download the admin code.
const Admin = lazy(() => import("./admin/Admin"));

const App = () => {
    if (window.location.pathname.replace(/\/$/, "") === "/admin") {
        return (
            <Suspense fallback={null}>
                <Admin />
            </Suspense>
        );
    }
    return <MainContainer />;
};

export default App;
