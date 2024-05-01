import { FormEvent, useEffect, useState } from "react"
import { Container, Form } from "react-bootstrap"
import { createToDo, getToDoById, updateToDo } from "../Services/ToDoService"
import { useHistory, useParams } from "react-router-dom"


interface RouteParams{
    id:string
}

const ToDo=()=>{
    const [toDoTitle, setToDoTitle] = useState<string>("")
    const [toDoDescription, setToDoDescription] = useState<string>("")
    const [toDoStatus, setToDoStatus] = useState<string>("")
    const [completed,setCompleted] = useState('')
    const {id} = useParams<RouteParams>()
    const navigator = useHistory();

    useEffect(()=>{
        getToDoById(Number(id))
        .then((response)=>{
            setToDoTitle(response.data.toDoTitle)
            setToDoDescription(response.data.toDoDescription)
            setToDoStatus(response.data.toDoStatus)
        })
        .catch((error)=>console.log(error))
    }, [id])

    function saveOrUpdateToDo(e:FormEvent){
        e.preventDefault();

        const todo={toDoTitle,toDoDescription,toDoStatus}
        console.log(todo)

        if(id){
            updateToDo(Number(id),todo)
            .then((response)=>{
                console.log(response.data)
                navigator.push('/todos')
            }).catch((error)=>console.log(error))
        }
        else{
            createToDo(todo)
            .then((response)=>{
                console.log(response.data)
                navigator.push('todos')
            }).catch((error)=>console.log(error))
        }
    }

    function pageTitle(){
        if(id){
            return <h2 className="text-center">Update ToDo</h2>
        }
        else{
            return <h2 className="text-center">Add ToDo</h2>
        }
    }
 
    return(
    <Container style={{ maxWidth: '500px', paddingTop: '50px' }}>
    {pageTitle()}

    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Todo Title</Form.Label>
        <Form.Control type="text"  value={toDoTitle} placeholder="Enter title" 
        onChange={(e)=>setToDoTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Todo Description</Form.Label>
        <Form.Control type="text" value={toDoDescription} placeholder="Enter Description"
        onChange={(e)=>setToDoDescription(e.target.value)}
        />
      </Form.Group>
      <div className='form-group mb-2'>
        <label className='form-label'>Completed:</label>
        <select onChange={(e) => setToDoStatus(e.target.value)} value={toDoStatus} className='form-control'>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
        </select>
      </div>

      <button className="btn btn-primary mb-2" style={{ width: '100%' }} 
      onClick={(e)=>saveOrUpdateToDo(e)}> Submit </button>
</Form>

        
    </Container>
    )
}

export default ToDo



















{/* <Form.Group className="mb-3">
        <Form.Label>Todo Completed</Form.Label>
        <Form.Control type="text" value={toDoStatus} placeholder="Enter Status"
        onChange={(e)=>setToDoStatus(e.target.value)}
        />
      </Form.Group> */}