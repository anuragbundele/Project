package com.app.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;

@Entity
@Table(name="admins")
public class Admin extends BaseEntity {
	@Column(length=20)
	private String name;
	@Column(length=50)
	private String address;
	@Column(length=50)
	@Email
	private String email;
	@Column(length=20)
	private String password;
	private Long contactno;
	@Enumerated(EnumType.STRING)
	@Column(length=20)
	private Role role;
	@OneToMany(mappedBy = "clientadmin",fetch = FetchType.LAZY,cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Client> clientdetail=new ArrayList<>();
	@OneToMany(mappedBy = "roomadmin",fetch = FetchType.LAZY,cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Room> roomdetail=new ArrayList<>();
	@OneToMany(mappedBy = "bookingadmin",fetch = FetchType.LAZY,cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Booking> bookingdetail=new ArrayList<>();
	public Admin() {
		super();
	}
	public void addbook(Booking newbook)
	{
		bookingdetail.add(newbook);
		newbook.setBookingadmin(this);
	}
	public Admin(String name,String address, String email, String password, Long contactno) {
		super();
		this.name = name;
		this.address=address;
		this.email = email;
		this.password = password;
		this.contactno = contactno;
		this.role=Role.ADMIN;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Long getContactno() {
		return contactno;
	}
	public void setContactno(Long contactno) {
		this.contactno = contactno;
	}
	
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	@Override
	public String toString() {
		return "Admin [name=" + name + ", email=" + email + ", contactno=" + contactno + "]";
	}
	
	

}
