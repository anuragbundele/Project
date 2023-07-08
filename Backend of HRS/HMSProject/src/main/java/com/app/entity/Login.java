//package com.app.entity;
//
//import javax.persistence.CascadeType;
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.FetchType;
//import javax.persistence.Id;
//import javax.persistence.OneToOne;
//import javax.persistence.Table;
//
////import org.springframework.security.core.userdetails.User;
//
//@Entity
//@Table(name="logins")
//public class Login {
//	
//	@Id @Column(length = 20, unique = true, updatable = false, nullable = false)
//	private String username;
//
//	@Column(nullable = false)
//	private String password;
//
//	@OneToOne(mappedBy = "login", cascade = CascadeType.ALL, 
//			fetch = FetchType.LAZY, orphanRemoval = true)
//	private Admin admin;
//
//	@OneToOne(mappedBy = "login", cascade = CascadeType.ALL, 
//			fetch = FetchType.LAZY, orphanRemoval = true)
//	private Client user;
//
//	public Login(String username, String password) {
//		super();
//		this.username = username;
//		this.password = password;
//	}
//
//	public Login() {
//		super();
//	}
//
//	public String getUsername() {
//		return username;
//	}
//
//	public void setUsername(String username) {
//		this.username = username;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	public Admin getAdmin() {
//		return admin;
//	}
//
//	public void setAdmin(Admin admin) {
//		this.admin = admin;
//	}
//
//	public Client getUser() {
//		return user;
//	}
//
//	public void setUser(Client user) {
//		this.user = user;
//	}
//
//	@Override
//	public String toString() {
//		return "Login [username=" + username + ", password=" + password + "]";
//	}	
//}
