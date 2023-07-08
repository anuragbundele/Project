package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.app.entity.Room;

public interface RoomRepos extends JpaRepository<Room, Long> {
//	,CrudRepository<Room, Long> to be used
}
