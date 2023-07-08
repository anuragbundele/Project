package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entity.AddKart;
import com.app.entity.Client;
import com.app.entity.Room;
import com.app.repository.AddKartRepo;

@Service
@Transactional
public class KartserviceImpl implements Kartservice {

	@Autowired
	public AddKartRepo kartrepo;
	
	
	
	@Override
	public List<AddKart> getALLkart() {
		
		return kartrepo.findAll();
	}

	@Override
	public AddKart addtoKart(AddKart newKart) {
		
		return kartrepo.save(newKart);
	}

}
