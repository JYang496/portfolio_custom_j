import './App.scss';
import {BrowserRouter, Outlet, Route} from "react-router-dom";
import {Routes} from "react-router";
import {HomePage} from "./HomePage/HomePage";
import {Header} from "./Header/Header";


const NoMatch = () =>{
    return <>
        <p>Oops, this page does not exist</p>
    </>
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

const SharedLayout = () =>{
    return<>
        <Header/>
        <Outlet/>
    </>
}

export default App;
