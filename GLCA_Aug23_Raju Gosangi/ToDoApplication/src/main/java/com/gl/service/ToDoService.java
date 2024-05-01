package com.gl.service;

import java.util.List;

import com.gl.dto.ToDoDto;
import com.gl.entity.ToDo;

public interface ToDoService {
	
	public List<ToDoDto> getAllToDos();
	public ToDoDto getDoToById(int id);
	public void DeleteById(int id);
	public ToDoDto updateToDo(int id,ToDoDto toDo);
	public ToDoDto addToDo(ToDoDto toDoDto);
	public void complete(int id);
	public void inComplete(int id);

}
