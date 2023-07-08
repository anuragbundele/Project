package com.app.service;

import java.util.List;

import com.app.entity.Booking;
import com.app.entity.Client;

public interface Bookingservice {
	
	List<Booking> getallbookings();
	
	Booking newbooking(Booking bookone);
	
	Booking editbooking(Booking editbook);
	
	Booking getByID(Long bookID);
	
	List<Booking> getByclient(Long Cl);

}
