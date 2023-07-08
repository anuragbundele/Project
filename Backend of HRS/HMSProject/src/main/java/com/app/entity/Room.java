package com.app.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;






@Entity
@Table(name="rooms")
public class Room extends BaseEntity{
	@Enumerated(EnumType.STRING)
	@Column(name="room_type",length=20)
	private Roomtype type;
	@Column(name="description",length=20)
	private String desc;
	private double price;
	@Enumerated(EnumType.STRING)
	@Column(length=20)
	private Status status;
//	@OneToOne(mappedBy = "newroom",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.EAGER)
	@OneToMany(mappedBy = "newroom",fetch = FetchType.EAGER,cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Booking> newbooking;
	@ManyToOne
	@JoinColumn(name="admins_id")
	private Admin roomadmin;
	@OneToMany(mappedBy = "roomKart",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<AddKart> addroomtokart;
	
	public void addBook(Booking newbook)
	{
		newbooking.add(newbook);
		newbook.setNewroom(this);
	}
	
	public Room() {
		super();
	}

	public Room(Roomtype type, String desc, double price, Status status) {
		super();
		this.type = type;
		this.desc = desc;
		this.price = price;
		this.status = Status.VACANT;
	}
	
	public Room(Roomtype type, String desc, double price, Status status,Admin roomadmin) {
		super();
		this.type = type;
		this.desc = desc;
		this.price = price;
		this.status = Status.VACANT;
		this.roomadmin=roomadmin;
	}

	public Roomtype getType() {
		return type;
	}

	public void setType(Roomtype type) {
		this.type = type;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	
//	public Booking getClient() {
//		return newclient;
//	}
//
//	public void Booking(Booking client) {
//		this.newclient = client;
//	}

	public Admin getRoomadmin() {
		return roomadmin;
	}

	public void setRoomadmin(Admin roomadmin) {
		this.roomadmin = roomadmin;
	}

	@Override
	public String toString() {
		return "Room [" + " type=" + type + ", desc=" + desc + ", price=" + price + ", status="
				+ status + "]";
	}

	
	
	
	
}
