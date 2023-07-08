package com.app.service;

import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.Logindto;
import com.app.entity.Booking;
import com.app.entity.Client;
import com.app.exception.ResourceNotfoundException;
import com.app.repository.AdminRepos;
import com.app.repository.ClientRepos;
@Service
@Transactional
public class ClientserviceImpl implements Clientservice {
	
	@Autowired
	public ClientRepos crepo;
	
	@Autowired
	public AdminRepos arepos;
	
	@Override
	public List<Client> Getallclients() {
		return crepo.findAll();
	}

	@Override
	public Client updateClient(Client clients) {
		if(crepo.existsById(clients.getId())) {
			
			return crepo.save(clients);
		}
		throw new ResourceNotfoundException("Invalid Client Id!!!");
	}

//	@Override
//	public Booking bookNewClient(Long roomId,NewclientDto bookdto) {
//		Booking bb=cservices.
//		return crepo.save(newoneclient);
//	}

	@Override
	public Client addnewClient(Client newclient) {
		System.out.println(newclient);
		return crepo.save(newclient);
	}

	@Override
	public Client findByID(Long clientID) {
		return crepo.findById(clientID).orElseThrow(() -> new ResourceNotfoundException("Invalid User Id"));
	}

	@Override
	public Optional<Client> authenticate(Logindto logclient) {
		
		return crepo.findByEmailAndPassword(logclient.getEmail(), logclient.getPassword());
	}

	@Override
	public String removeClient(Long id) {
		if(crepo.existsById(id))
		{
			crepo.deleteById(id);
			return "Client's account deleted successfully!!";
		}
		return "Id does not exist !!";
	}

	@Override
	public Optional<Client> findByemail(String email) {
		Optional<Client> newOne=crepo.findByEmail(email);
		return newOne;
	}

	

}
