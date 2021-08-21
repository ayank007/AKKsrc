import {Nav1, Nav2} from "./components/Navbar/Navbar";
import {Validate} from "./actions/Validate";

const App = () =>{
    return(
        <div>
            <Validate />
            <Nav1 />
            <Nav2 />
        </div>
    )
}

export default App;
