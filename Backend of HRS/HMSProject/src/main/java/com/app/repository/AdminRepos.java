package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Admin;
import com.app.entity.Client;

public interface AdminRepos extends JpaRepository<Admin, Long> {
	
	Optional<Admin> findByEmail(String email);
	
	Optional<Admin> findByEmailAndPassword(String email,String password);
	
	
}
