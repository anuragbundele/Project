package com.app.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Admin;
import com.app.entity.Client;
import com.app.entity.Room;
import com.app.service.Roomservice;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/room")
public class Roomcontroller {
	
	@Autowired(required=false)
	private Client clientservices;
	
	@Autowired
	private Roomservice roomservice;
	
	@Autowired
	private Admincontroller acontrol;
	
	@PostConstruct
	public void init()
	{
		System.out.println("In Rooms init");
	}
	
	@GetMapping
	public List<Room> getallRoom()
	{
		return roomservice.getallRooms();
	}
	
	@PostMapping("/addroom")
	public Room addNewRoom(@RequestBody Room newrooms)
	{
		Long id=(long) 1;
		Admin admins=acontrol.fetchbyId(id);
		System.out.print(admins);
		Room newroom=new Room(newrooms.getType(),newrooms.getDesc(),newrooms.getPrice(),newrooms.getStatus(),admins);
		return roomservice.addnewRoom(newroom);
	}
	
	@GetMapping("/{roomsid}")
	public Room fetchbyID(@PathVariable Long roomsid)
	{
		return roomservice.findByRoomId(roomsid);
	}
	
	@PutMapping("/edit")
	public Room editBYid(@RequestBody Room roomno)
	{
		return roomservice.updateRoom(roomno);
	}
	
	@DeleteMapping("remove/{drid}")
	public String deleteById(@PathVariable Long drid)
	{
		System.out.println(drid);
		return roomservice.removeById(drid);
	}
}
