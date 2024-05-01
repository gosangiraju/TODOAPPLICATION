package com.gl.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ToDoDto {
	
	private int id;
	private String toDoTitle;
	private String toDoDescription;
	private String toDoStatus;
	
	

}
