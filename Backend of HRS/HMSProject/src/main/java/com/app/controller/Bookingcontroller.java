package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.NewclientDto;
import com.app.entity.Admin;
import com.app.entity.Booking;
import com.app.entity.Client;
import com.app.entity.Room;
import com.app.entity.Status;
import com.app.service.Adminservice;
import com.app.service.Bookingservice;
//import com.app.service.BookingserviceImpl;
import com.app.service.Clientservice;
import com.app.service.Roomservice;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/fillup")
public class Bookingcontroller {
	@Autowired
	public Bookingservice bservices;
	
	@Autowired
	public Roomservice rservices;
	
	@Autowired
	public Clientservice clientser;
	
	@Autowired
	private Adminservice aservice;
	
	@GetMapping
	public List<Booking> getAllBooking()
	{
		return bservices.getallbookings();
	}
	
	@PostConstruct
	public void init()
	{
		System.out.println("In Booking init");
	}
	
	
	
	@PostMapping("/{roomsId}")
	public Booking addnewBooking(@PathVariable Long roomsId,@RequestBody NewclientDto newcustomer)
	{
		Room newroom=rservices.findByRoomId(roomsId);
		if(newroom.getStatus().equals(Status.VACANT))
		{
			newroom.setStatus(Status.OCCUPIED);
		}
		else {
			System.out.println("Room is Occupied");
		}
		System.out.println(newcustomer);
		Client cc=clientser.findByID(newcustomer.getCid());
		System.out.println(cc);
		Room room1=rservices.findByRoomId(roomsId);
		System.out.println(room1);
		Admin admins=cc.getClientadmin();
		System.out.println(admins);
		Booking booklist=new Booking(newcustomer.getName(),newcustomer.getAddress(),newcustomer.getContactno(),newcustomer.getAadharno(),newcustomer.getFromdate(),newcustomer.getTodate());
		cc.addBook(booklist);
		room1.addBook(booklist);
		admins.addbook(booklist);
		Booking bookone=new Booking(newcustomer.getName(),newcustomer.getAddress(),newcustomer.getContactno(),newcustomer.getAadharno(),newcustomer.getFromdate(),newcustomer.getTodate(),cc,room1,admins);
		System.out.println(bookone);
		
		return bservices.newbooking(bookone);   
	}
	
	@GetMapping("/{bookID}")
	public Booking fetchByID(@PathVariable Long bookID)
	{
		return bservices.getByID(bookID);
	}
	
	@GetMapping("/fetchclient/{iD}")
	public List<Booking> fetchbyClient(@PathVariable Long iD)
	{
//		Client cl=clientser.findByID(iD);
//		System.out.println(cl);
		return bservices.getByclient(iD);	
	}
	
	
}