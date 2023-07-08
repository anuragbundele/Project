package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.Logindto;
import com.app.entity.Admin;
import com.app.exception.ResourceNotfoundException;
import com.app.repository.AdminRepos;
@Service
@Transactional
public class AdminserviceImpl implements Adminservice {

	
	@Autowired
	public AdminRepos arepos;
	
	@Override
	public List<Admin> getallAdmin() {
		
		return arepos.findAll();
	}

	@Override
	public Admin addAdmin(Admin admins) {
		
		return arepos.save(admins);
	}

	@Override
	public Admin getByID(Long Id) {
		
		return arepos.findById(Id).orElseThrow(() -> new ResourceNotfoundException("Invalid User Id"));
	}

	@Override
	public Admin updateAdmin(Admin admin) {
		if(arepos.existsById(admin.getId()))
		{	
		return arepos.save(admin);
		}else {
			throw new ResourceNotfoundException("Invalid Admin Id!!!!!");
		}
	}

	@Override
	public String removeAdmin(Long id) {
		
		if(arepos.existsById(id))
		{
			arepos.deleteById(id);
			String mesg="Deleted Successfully!!";
			
			return mesg;
		}
		else {
			return "Id does not exist !";
		}
		 
	}

	@Override
	public Optional<Admin> authenticate(Logindto logclient) {
		
		return arepos.findByEmailAndPassword(logclient.getEmail(), logclient.getPassword());
		
		
	}

	@Override
	public Optional<Admin> findByemail(String email) {
		
		return arepos.findByEmail(email);
	}

}
