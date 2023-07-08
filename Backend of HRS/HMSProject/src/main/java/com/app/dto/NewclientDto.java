package com.app.dto;

import java.time.LocalDate;

import com.app.entity.Client;

public class NewclientDto {
//	private Long id=(long) 1;
//	Client c;
//	private Long id=c.getId();		
	private Long cid;
	private String name;
	private String address;
	private Long contactno;
	private Long aadharno;
	private LocalDate fromdate;
	private LocalDate todate;
	public NewclientDto(Long cid,String name, String address, Long contactno, Long aadharno, LocalDate fromdate,
			LocalDate todate) {
		super();
		this.cid=cid;
		this.name = name;
		this.address = address;
		this.contactno = contactno;
		this.aadharno = aadharno;
		this.fromdate = fromdate;
		this.todate = todate;
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
	public Long getCid() {
		return cid;
	}
	public void setCid(Long cid) {
		this.cid = cid;
	}


	@Override
	public String toString() {
		return "NewclientDto [cid=" + cid + ", name=" + name + ", address=" + address + ", contactno=" + contactno
				+ ", aadharno=" + aadharno + ", fromdate=" + fromdate + ", todate=" + todate + "]";
	}
	
	
	
	
	
}
