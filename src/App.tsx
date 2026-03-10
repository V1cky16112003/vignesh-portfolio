import { Suspense } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";

const App = () => {
    return (
        <>
            <Suspense>
                <MainContainer />
            </Suspense>
        </>
    );
};

export default App;
