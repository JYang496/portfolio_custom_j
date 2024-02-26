import './App.scss';
import {BrowserRouter, Outlet, Route} from "react-router-dom";
import {Routes} from "react-router";
import {Navigator} from './Navigator/Navigator'
import {Footer} from "./Footer/Footer";
import {Articles} from "./Articles/Articles";
import {Posts} from "./Posts/Posts";
import {HomePage} from "./HomePage/HomePage";
import {Editor} from "./Editor/Editor";


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
        <Navigator/>
        <Outlet/>
        <Footer/>
    </>
}

export default App;
