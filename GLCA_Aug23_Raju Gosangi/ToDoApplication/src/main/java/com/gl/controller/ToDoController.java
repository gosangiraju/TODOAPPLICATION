package com.gl.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gl.dto.ToDoDto;
import com.gl.service.ToDoService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/todos")
public class ToDoController {

	@Autowired
	ToDoService toDoService;
	
	@PostMapping
	public ResponseEntity<ToDoDto> addTodo(@RequestBody ToDoDto toDoDto){		
		ToDoDto savedDto = toDoService.addToDo(toDoDto);
		return new ResponseEntity<ToDoDto>(savedDto,HttpStatus.CREATED);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<ToDoDto> getToDoById(@PathVariable int id){
		ToDoDto toDoDto = toDoService.getDoToById(id);
		return ResponseEntity.ok(toDoDto);
	}
	
	
	@PutMapping("{id}")
	public ResponseEntity<ToDoDto> updateDto(@RequestBody ToDoDto toDoDto, @PathVariable int id){
		ToDoDto updatedtoDoDto = toDoService.updateToDo(id, toDoDto);
		return ResponseEntity.ok(updatedtoDoDto);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteToDoById(@PathVariable int id){
		toDoService.DeleteById(id);
		return ResponseEntity.ok("Deleted");
	}
		
	
	@GetMapping
	public List<ToDoDto> getAllDepartments(){
		
		return toDoService.getAllToDos();
	}
	
	
	
		
}

	
	
	
	
	
	

