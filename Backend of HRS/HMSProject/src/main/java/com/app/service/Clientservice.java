package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.Logindto;
import com.app.dto.NewclientDto;
import com.app.entity.Booking;
import com.app.entity.Client;

public interface Clientservice {
	
	List<Client> Getallclients();
	
	Client addnewClient(Client newclient);
	
	Client updateClient(Client clients);
	
	Client findByID(Long clientID);
	
	Optional<Client> authenticate(Logindto logclient);
	
	String removeClient(Long id);
	
	Optional<Client> findByemail(String email);

	
}
