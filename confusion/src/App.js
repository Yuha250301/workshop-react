import "./App.css";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { ConfigureStore } from "./redux/configureStore";
import { Provider } from "react-redux";

import TestFetchComponent from "./use-fetch/TestFetchComponent"

const store = ConfigureStore();

function App() {
    return (
        // <Provider store={store}>
        //     <BrowserRouter>
        //         <div className="App">
        //             <Main />
        //         </div>
        //     </BrowserRouter>
        // </Provider>
        <TestFetchComponent/>
    );
}

export default App;
