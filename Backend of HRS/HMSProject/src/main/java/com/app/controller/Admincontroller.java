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
import com.app.entity.Booking;
import com.app.entity.Client;
import com.app.entity.Room;
import com.app.service.Adminservice;
import com.app.service.AdminserviceImpl;
import com.app.service.Bookingservice;
import com.app.service.Clientservice;
import com.app.service.Roomservice;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/admin")
public class Admincontroller {
	
	@PostConstruct
	public void init()
	{
		System.out.println("In Admin init");
	}
	
	@Autowired
	public Bookingservice bservice;
	
	@Autowired
	public Clientservice cservice;
	
	@Autowired
	public Roomservice rservice;
	
	@Autowired(required = true)
	public AdminserviceImpl aservice;
	
	@GetMapping
	public List<Admin> getAlladmin()
	{
		return aservice.getallAdmin();
	}
	
	@PostMapping("/add")
	public Admin addnewAdmin(@RequestBody Admin admins)
	{
		return aservice.addAdmin(admins);
	}
	
	@GetMapping("/{adminId}")
	public Admin fetchbyId(@PathVariable Long adminId)
	{
		return aservice.getByID(adminId);
	}
	
	@PutMapping("/edit")
	public Admin editAdmin(@RequestBody Admin admin)
	{
		return aservice.updateAdmin(admin);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteAdmin(@PathVariable Long id)
	{
		return aservice.removeAdmin(id);
	}
	
	@GetMapping("/clients")
	public List<Client> getAllClients()
	{
		return cservice.Getallclients();
	}
	
	@GetMapping("/rooms")
	public List<Room> getAllRoom()
	{
		return rservice.getallRooms();
	}
	
	@GetMapping("/bookings")
	public List<Booking> getAllBookings()
	{
		return bservice.getallbookings();
	}
}
