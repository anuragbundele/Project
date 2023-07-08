package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.AddKart;
import com.app.entity.Client;
import com.app.entity.Room;
import com.app.service.Clientservice;
import com.app.service.Kartservice;
import com.app.service.Roomservice;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/room")
public class Kartcontroller {

	
	@Autowired
	public Clientservice cservice;
	
	@Autowired
	public Roomservice rservice;
	
	@Autowired
	public Kartservice kservice;
	
	@GetMapping("/karts")
	public List<AddKart> fetchallkarts()
	{
		return kservice.getALLkart();
	}
	
	@PostMapping("/{roomId}")
	public AddKart addNewKart(@PathVariable Long roomId,@RequestBody Long clientid)
	{
	
	Client client=cservice.findByID(clientid);
	
	Room room=rservice.findByRoomId(roomId);
	
	AddKart kart=new AddKart(client,room);
	
	return kservice.addtoKart(kart);
	}
}
