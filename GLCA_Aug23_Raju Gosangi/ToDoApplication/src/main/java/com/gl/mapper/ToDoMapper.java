package com.gl.mapper;

import com.gl.dto.ToDoDto;
import com.gl.entity.ToDo;

public class ToDoMapper {

	static public ToDoDto mapToToDoDto(ToDo toDo) {
		ToDoDto toDoDto = new ToDoDto(toDo.getId(), toDo.getToDoTitle(), toDo.getToDoDescription(), toDo.getToDoStatus());
		return toDoDto;
	}
	
	static public ToDo mapToToDo(ToDoDto toDoDto) {
		ToDo toDo = new ToDo(toDoDto.getId(), toDoDto.getToDoTitle(), toDoDto.getToDoDescription(), toDoDto.getToDoStatus());
		return toDo;
	}
}
