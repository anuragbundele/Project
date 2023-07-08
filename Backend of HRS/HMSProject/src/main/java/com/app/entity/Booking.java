package com.app.entity;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="bookings")
public class Booking extends BaseEntity {
	@Column(length=20)
	private String name;
	@Column(length=20)
	private String address;
	private Long contactno;
	@Column
	private Long aadharno;
	private LocalDate fromdate;
	private LocalDate todate;
	@ManyToOne
	@JoinColumn(name="clients_id")
	private Client newClient;
	//Eager changed to Lazy
	@ManyToOne
	@JoinColumn(name="rooms_id", referencedColumnName = "id")
	private Room newroom;
	@ManyToOne
	@JoinColumn(name="admins_id")
	private Admin bookingadmin;
	
	public Booking() {
		super();
	}

	public Booking(String name, String address, Long contactno, Long aadharno, LocalDate fromdate, LocalDate todate) {
		super();
		this.name = name;
		this.address = address;
		this.contactno = contactno;
		this.aadharno = aadharno;
		this.fromdate = fromdate;
		this.todate = todate;
	}
	
	public Booking(String name, String address, Long contactno, Long aadharno, LocalDate fromdate, LocalDate todate,Client long1,Room roomId)
	{
		super();
		this.name = name;
		this.address = address;
		this.contactno = contactno;
		this.aadharno = aadharno;
		this.fromdate = fromdate;
		this.todate = todate;
		this.newClient=long1;
		this.newroom=roomId;
	}
	
	

	public Booking(String name, String address, Long contactno, Long aadharno, LocalDate fromdate, LocalDate todate,
			Client newClient, Room newroom, Admin bookingadmin) {
		super();
		this.name = name;
		this.address = address;
		this.contactno = contactno;
		this.aadharno = aadharno;
		this.fromdate = fromdate;
		this.todate = todate;
		this.newClient = newClient;
		this.newroom = newroom;
		this.bookingadmin = bookingadmin;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getContactno() {
		return contactno;
	}

	public void setContactno(Long contactno) {
		this.contactno = contactno;
	}

	public Long getAadharno() {
		return aadharno;
	}

	public void setAadharno(Long aadharno) {
		this.aadharno = aadharno;
	}

	public LocalDate getFromdate() {
		return fromdate;
	}

	public void setFromdate(LocalDate fromdate) {
		this.fromdate = fromdate;
	}

	public LocalDate getTodate() {
		return todate;
	}

	public void setTodate(LocalDate todate) {
		this.todate = todate;
	}

	public Client getNewclient() {
		return newClient;
	}

	public void setNewclient(Client newclient) {
		this.newClient = newclient;
	}

	public Room getNewroom() {
		return newroom;
	}

	public void setNewroom(Room newroom) {
		this.newroom = newroom;
	}

	@Override
	public String toString() {
		return "Booking [name=" + name + ", address=" + address + ", contactno=" + contactno + ", aadharno=" + aadharno
				+ ", fromdate=" + fromdate + ", todate=" + todate + ", newclient=" + newClient + ", newroom=" + newroom
				+ "]";
	}

	public Admin getBookingadmin() {
		return bookingadmin;
	}

	public void setBookingadmin(Admin bookingadmin) {
		this.bookingadmin = bookingadmin;
	}
	
	
	
	
}
