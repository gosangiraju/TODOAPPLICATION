package com.gl.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.dto.ToDoDto;
import com.gl.entity.ToDo;
import com.gl.mapper.ToDoMapper;
import com.gl.repository.ToDoRepository;
import com.gl.service.ToDoService;

@Service
public class ToDoServiceImpl implements ToDoService {

	@Autowired
	ToDoRepository toDoRepository;
	
	@Override
	public List<ToDoDto> getAllToDos() {
		
		List<ToDo> toDos = toDoRepository.findAll();
		
		return toDos.stream().map((toDo) -> ToDoMapper.mapToToDoDto(toDo)).toList();
	}

	@Override
	public ToDoDto getDoToById(int id) {
		ToDo toDo = toDoRepository.findById(id).get();
		return ToDoMapper.mapToToDoDto(toDo);
	}

	@Override
	public void DeleteById(int id) {
		toDoRepository.deleteById(id);
	}

	@Override
	public ToDoDto updateToDo(int id, ToDoDto toDoDto) {
		
		ToDo toDo = toDoRepository.findById(id).get();
		toDo.setToDoDescription(toDoDto.getToDoDescription());
		toDo.setToDoStatus(toDoDto.getToDoStatus());
		toDo.setToDoTitle(toDoDto.getToDoTitle());
		ToDo savedToDo = toDoRepository.save(toDo);	
		return ToDoMapper.mapToToDoDto(savedToDo);
	}

	@Override
	public ToDoDto addToDo(ToDoDto toDoDto) {
		ToDo toDo = ToDoMapper.mapToToDo(toDoDto);
		toDoRepository.save(toDo);
		return ToDoMapper.mapToToDoDto(toDo);
	}

	@Override
	public void complete(int id) {
		ToDo toDo = toDoRepository.findById(id).get();
		toDo.setToDoStatus("Yes");

	}

	@Override
	public void inComplete(int id) {
		ToDo toDo = toDoRepository.findById(id).get();
		toDo.setToDoStatus("No");

	}

}
