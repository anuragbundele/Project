package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.entity.Room;

public interface Roomservice {
	
	List<Room> getallRooms();
	
	Room addnewRoom(Room newroom);
	
	Room updateRoom(Room roomno);
	
	Room findByRoomId(Long roomsid);
	
	String removeById(Long rid);
	
}
