//package com.app.service;
//
//import java.util.Collections;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.app.entity.Admin;
//import com.app.entity.Client;
//import com.app.repository.AdminRepos;
//import com.app.repository.ClientRepos;
//@Service
//@Transactional
//public class UserServiceImpl implements UserService {
//
//	@Autowired
//	public ClientRepos clientrepo;
//	
//	@Autowired
//	public AdminRepos adminrepos;
//	
//	
//	
//	
//	@Override
//	public UserDetails loadclientByEmail(String email) throws UsernameNotFoundException{
//		Optional<Client> clientOptional = clientrepo.findByEmail(email);
//		if(clientOptional.isPresent())
//		{
//			Client clientss=clientOptional.get();
//			return new org.springframework.security.core.userdetails.User(clientss.getEmail(),clientss.getPassword(), Collections.singleton(new SimpleGrantedAuthority("USER")));
//		}
//		
//		Optional<Admin> adminoptional=adminrepos.findByEmail(email);
//		if(adminoptional.isPresent())
//		{
//			Admin admins=adminoptional.get();
//			return new org.springframework.security.core.userdetails.User(admins.getEmail(),admins.getPassword(),Collections.singleton(new SimpleGrantedAuthority("ADMIN")));
//		}
//		
//		throw new UsernameNotFoundException("Client Not Find using email: "+email);
//		
//	}
//}
