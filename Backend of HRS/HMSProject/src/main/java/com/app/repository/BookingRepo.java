package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entity.Booking;
import com.app.entity.Client;

public interface BookingRepo extends JpaRepository<Booking, Long> {


	
	List<Booking> findAllByNewClientId(Long id);
}