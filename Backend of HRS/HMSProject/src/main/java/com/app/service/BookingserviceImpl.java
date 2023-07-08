package com.app.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entity.Booking;
import com.app.entity.Client;
import com.app.entity.Room;
import com.app.exception.ResourceNotfoundException;
import com.app.repository.BookingRepo;
@Service
@Transactional
public class BookingserviceImpl implements Bookingservice {
	
	@Autowired
	public BookingRepo brepo;
	
	@Autowired
	public Roomservice roomService;

	

	@Override
	public Booking newbooking(Booking bookone) {
		return brepo.save(bookone);
	}

	@Override
	public Booking editbooking(Booking editbook) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Booking getByID(Long bookID) {
		
		return brepo.findById(bookID).orElseThrow(() -> new ResourceNotfoundException("Invalid User Id"));
	}

	@Override
	public List<Booking> getallbookings() {
		
		return brepo.findAll();
	}

	@Override
	public List<Booking> getByclient(Long Cl) {
		System.out.println(Cl);
		System.out.println("######");
		
		List<Booking> lists=brepo.findAllByNewClientId(Cl);
//		System.out.println(brepo.findAllByNewclientId(Cl));
		return lists;
	}
	
	

}
