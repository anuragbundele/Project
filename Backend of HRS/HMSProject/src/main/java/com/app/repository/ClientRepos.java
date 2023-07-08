package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Client;

public interface ClientRepos extends JpaRepository<Client, Long> {
	
	Optional<Client> findByEmailAndPassword(String email,String password);
	
	Optional<Client> findByEmail(String email);
}
