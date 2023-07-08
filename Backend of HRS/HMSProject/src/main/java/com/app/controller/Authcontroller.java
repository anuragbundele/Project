package com.app.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.Logindto;
import com.app.entity.Admin;
import com.app.entity.Client;
import com.app.service.Adminservice;
import com.app.service.Clientservice;
import com.app.service.Roomservice;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth")

public class Authcontroller {
	
	@Autowired
	private Adminservice aservice;
	
	@Autowired
	private Clientservice cservice;
	
	
	@PostMapping("/signin")
	private Optional<?> validate(@RequestBody Logindto logindto)
	{
		Optional<Admin> admin=aservice.findByemail(logindto.getEmail());
		if(admin==null)
		{
			return cservice.authenticate(logindto);
		}
		else {
			return aservice.authenticate(logindto);
		}
	}
	
	@GetMapping("/email/{email}")
	private Optional<?> getByemail(@PathVariable String email)
	{
		Optional<Admin> admins=aservice.findByemail(email);
		System.out.println(admins);
		
		if(admins.isEmpty())
		{
			System.out.println("in If condition");
			return cservice.findByemail(email);
		}
		else {
			System.out.println("in Else condition");
			return aservice.findByemail(email);
		}
	}

}
