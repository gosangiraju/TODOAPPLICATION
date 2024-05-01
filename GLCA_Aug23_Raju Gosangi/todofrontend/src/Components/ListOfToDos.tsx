import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { deleteToDo, getAllToDos, getToDoById, updateToDoStatus } from "../Services/ToDoService";

type todo ={
    id: number,
    toDoTitle: string,
    toDoDescription: string
    toDoStatus: string
}

const ListOfToDos=()=>{
    const navigator = useHistory();

    const [toDo,setToDo] = useState<todo[]>([])

    function getAlltodos(){
        getAllToDos().then((response)=>setToDo(response.data))
        .catch((error)=>console.log(error))
    }

    useEffect(()=>getAlltodos(),[])

    function updateToDo(id:number){
        navigator.push(`/edit-todo/${id}`)
    }

    function deleteTodo(id:number){
        deleteToDo(id).then((response)=>{
            console.log(response.data+"********************")
            getAlltodos()
        })
        .catch((error)=>console.log(error))
    }

    
    function completeToDo(id:number){
        getToDoById(id).then((response)=>{
            const updatedToDo = { ...response.data, toDoStatus: "Yes" }; 
            updateToDoStatus(id,updatedToDo).then(() => {
                getAlltodos();
            }).catch((error) => {
                console.error(error);
            });
        })
        .catch((error) => console.error(error));
    }

    
    function inCompleteToDo(id:number){
        getToDoById(id).then((response)=>{
            const updatedToDo = { ...response.data, toDoStatus: "No" };
            updateToDoStatus(id,updatedToDo).then(() => {
                getAlltodos();
            }).catch((error) => {
                console.error(error);
            });
        })
        .catch((error) => console.error(error));
    }


    
    
    function Header() {
        return (
            <header className="bg-light text-center py-4">
                <h1>List Of Todos</h1>
            </header>
        );
    }
    

    return(<>
        <Container>
        <Header/>
        <Link to="/add-todo" className="btn btn-primary">Add ToDo</Link>
        <Table striped bordered hover>
        <thead>
        <tr> 
          <th>Todo Title</th>
          <th>Todo Description</th>
          <th>Todo Completed</th>
          <th colSpan={1}>Actions</th>
        </tr>
        </thead>
        <tbody>
        {
          toDo.map((todos: todo)=>{
            return(
            <tr key={todos.id}>
                
                <td>{todos.toDoTitle}</td>
                <td>{todos.toDoDescription}</td>
                <td>{todos.toDoStatus}</td>
                <td>
                <button onClick={()=>updateToDo(todos.id)} className='btn btn-info'>Update</button> &nbsp; &nbsp;
                <button onClick={()=>deleteTodo(todos.id)} className='btn btn-danger'>Delete</button> &nbsp; &nbsp;
                <button onClick={()=>completeToDo(todos.id)} className='btn btn-warning'>Complete</button> &nbsp; &nbsp;
                <button onClick={()=>inCompleteToDo(todos.id)} className='btn btn-success'>Incomplete</button>
                </td>
            </tr>
            )
          })
            
        }
        </tbody>
            
        </Table>
        </Container>
        </>)
}

export default ListOfToDos