package com.app.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="addkarts")
public class AddKart extends BaseEntity {
	
	@ManyToOne
	@JoinColumn(name="clients_id")
	private Client newKart;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="rooms_id", referencedColumnName = "id")
	private Room roomKart;

	public AddKart() {
		super();
	}
	
	public AddKart(Client newKart, Room roomKart) {
		super();
		this.newKart = newKart;
		this.roomKart = roomKart;
	}

	public Client getNewKart() {
		return newKart;
	}

	public void setNewKart(Client newKart) {
		this.newKart = newKart;
	}

	public Room getRoomKart() {
		return roomKart;
	}

	public void setRoomKart(Room roomKart) {
		this.roomKart = roomKart;
	}

	@Override
	public String toString() {
		return "AddKart [newKart=" + newKart + ", roomKart=" + roomKart + "]";
	}

	
}
