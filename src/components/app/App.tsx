import React from "react";
import Phone from "../../containers/phone";
import ErrorBoundary from "../errorBoundary";

const App: React.FC = () => {
    return (
        <div className="App">
            <ErrorBoundary>
                <Phone />
            </ErrorBoundary>
        </div>
    );
};

export default App;
