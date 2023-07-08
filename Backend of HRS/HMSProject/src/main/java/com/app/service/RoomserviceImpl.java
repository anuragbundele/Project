package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entity.Room;
import com.app.exception.ResourceNotfoundException;
import com.app.repository.RoomRepos;
@Service
@Transactional
public class RoomserviceImpl implements Roomservice {
	
	@Autowired
	private RoomRepos roomrepo;
	
	@Override
	public List<Room> getallRooms() {
		return roomrepo.findAll();
	}

	

	@Override
	public Room updateRoom(Room roomno) {
		
		return roomrepo.save(roomno);
	}

	@Override
	public Room addnewRoom(Room newroom) {
		
		return roomrepo.save(newroom);
	}



	@Override
	public Room findByRoomId(Long roomsid) {
		
		return roomrepo.findById(roomsid).orElseThrow(() -> new ResourceNotfoundException("Invalid User Id"));
	}



	@Override
	public String removeById(Long rid) {
		String mesg;
		if(roomrepo.existsById(rid))
		{
			System.out.println(rid);
			roomrepo.deleteById(rid);
			 mesg="Successfully Deleted";
		}
		else {
			 mesg="Deletion Failed!!";
		}
		
		return mesg;
	}

}
