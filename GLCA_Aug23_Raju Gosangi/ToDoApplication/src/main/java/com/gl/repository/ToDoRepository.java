package com.gl.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gl.entity.ToDo;

public interface ToDoRepository extends JpaRepository<ToDo, Integer>{

}
