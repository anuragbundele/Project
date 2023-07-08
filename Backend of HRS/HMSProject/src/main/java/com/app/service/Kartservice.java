package com.app.service;

import java.util.List;

import com.app.entity.AddKart;

public interface Kartservice {

	List<AddKart> getALLkart();
	
	AddKart addtoKart(AddKart newKart);
}
