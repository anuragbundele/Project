package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.Logindto;
import com.app.entity.Admin;

public interface Adminservice {

	List<Admin> getallAdmin();
	
	Admin addAdmin(Admin admins);
	
	Admin getByID(Long Id);
	
	Admin updateAdmin(Admin admin);
	
	String removeAdmin(Long id);
	
	Optional<Admin> authenticate(Logindto logclient);
	
	Optional<Admin> findByemail(String email);
}
