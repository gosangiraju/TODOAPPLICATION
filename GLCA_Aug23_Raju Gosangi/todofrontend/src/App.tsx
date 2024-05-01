import { Link, Route, Switch } from "react-router-dom"
import ListOfToDos from "./Components/ListOfToDos"
import ToDo from "./Components/ToDo"
import { Header } from "./Components/Header"
import { Footer } from "./Components/Footer"
import { Nav } from "react-bootstrap"





export const App =()=> {
    return(<>
    <Nav.Link as={Link} to="/todos" style={{ textDecoration: 'none', color: 'inherit' }}><Header/></Nav.Link>
        <Switch>
            <Route path="/todos"><ListOfToDos/></Route>
            <Route path="/add-todo"><ToDo/></Route>
            <Route path="/home"><ToDo/></Route>
            <Route path="/edit-todo/:id"><ToDo/></Route>
        </Switch>
    <Footer/>
        </>)
}

export default App