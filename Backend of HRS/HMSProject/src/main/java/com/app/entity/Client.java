package com.app.entity;

//import java.time.LocalDate;
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
import javax.persistence.Table;
import javax.validation.constraints.Email;




import com.app.entity.Role;

//import lombok.NoArgsConstructor;


@Entity
@Table(name="clients")
public class Client extends BaseEntity {
	@Column(length = 50)
	private String name;
	@Column(length = 50)
	@Email
	private String email;
	@Column(length = 20)
	private String password;
	private Long contactno;
	@Enumerated(EnumType.STRING)
	@Column(length=20)
	private Role role;
//	final static public String role = "USER";
	@OneToMany(mappedBy = "newClient",fetch = FetchType.EAGER,cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Booking> checkin=new ArrayList<>();
	@ManyToOne
	@JoinColumn(name="admins_id")
	private Admin clientadmin;
	@OneToMany(mappedBy = "newKart",fetch = FetchType.LAZY,cascade = CascadeType.ALL,orphanRemoval = true)
	private List<AddKart> addtokart=new ArrayList<>();
	
//	public void addroom(Room newroom)
//	{
//		rooms.add(newroom);
//		newroom.setClient(this);
//	}
	
	public void addBook(Booking newbook)
	{
		checkin.add(newbook);
		newbook.setNewclient(this);
	}
	public Client() {
		super();
	}
	
	public Client(String name, String email, String password, Long contactno) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.contactno = contactno;
		this.role=Role.USER;
	}
	public Client(String name, String email, String password, Long contactno,Admin clientadmin) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.contactno = contactno;
		this.role=Role.USER;
		this.clientadmin=clientadmin;
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
	
	
	
	
	public Admin getClientadmin() {
		return clientadmin;
	}
	public void setClientadmin(Admin clientadmin) {
		this.clientadmin = clientadmin;
	}
//public static String getRole() {
//		return role;
//	}
		public Role getRole() {
		return role;
	}
//	public void setRole(Role role) {
//		this.role = role;
//	}
		@Override
		public String toString() {
			return "Client [name=" + name + ", email=" + email + ", contactno=" + contactno + ", role=" + role + "]";
		}
	


	
	
	
	
	
}
