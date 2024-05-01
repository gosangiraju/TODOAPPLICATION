import axios from 'axios'

const TODO_REST_API_BASE_URL = 'http://localhost:8080/api/todos'

export const createToDo = (todo: any) => axios.post(TODO_REST_API_BASE_URL, todo);

export const getToDoById = (toDoId: number) => axios.get(TODO_REST_API_BASE_URL + '/' + toDoId);

export const updateToDo = (toDoId: number, toDo: any) => axios.put(TODO_REST_API_BASE_URL + '/' + toDoId, toDo);

export const deleteToDo = (toDoId: number) => axios.delete(TODO_REST_API_BASE_URL + '/' + toDoId);

export const getAllToDos = () => axios.get(TODO_REST_API_BASE_URL);

export const updateToDoStatus = (toDoId: number, toDo: any)=> axios.put(TODO_REST_API_BASE_URL + '/' + toDoId, toDo);