package com.app.controller;

import java.util.List;
import java.util.Optional;

import javax.annotation.PostConstruct;
import javax.validation.Valid;

import org.modelmapper.ModelMapper;
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

import com.app.dto.Logindto;
import com.app.dto.NewclientDto;
import com.app.entity.Admin;
import com.app.entity.Booking;
import com.app.entity.Client;
import com.app.service.Clientservice;



@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/client")
public class Clientcontroller {
	
	@Autowired
	public Clientservice clientservice;
	
	@Autowired
	public Admincontroller acontrol;
	
//	@Autowired
//	public ModelMapper mapper;
	
	@PostConstruct
	public void init()
	{
		System.out.println("In INIT");
	}
	
	@GetMapping
	public List<Client> getallClient()
	{
		return clientservice.Getallclients();
	}
	
	@PostMapping("/signup")
	public Client savenewClient(@RequestBody Client newclients)
	{
		Long id=(long) 1;
		Admin admins=acontrol.fetchbyId(id);
		System.out.print(admins);
		Client newclient=new Client(newclients.getName(),newclients.getEmail(),newclients.getPassword(),newclients.getContactno(),admins);
		System.out.println(newclient);
		return clientservice.addnewClient(newclient);
	}
	
	@GetMapping("/{clientID}")
	public Client fetchbyId(@PathVariable Long clientID)
	{
		return clientservice.findByID(clientID);
	}

	
	@PutMapping("/edit")
	public Client updateClient(Client clients)
	{
		return clientservice.updateClient(clients);
	}
	
	@PostMapping("/signin")
	public Optional<Client> validateClient(@RequestBody Logindto clientlog)
	{
		return clientservice.authenticate(clientlog);
	}
	
	@DeleteMapping("/remove/{id}")
	public String deleteClient(@PathVariable Long id)
	{
		return clientservice.removeClient(id);
	}
	
	@GetMapping("/email/{email}")
	public Optional<Client> getByEmail(@PathVariable String email)
	{
		return clientservice.findByemail(email);
	}
}
