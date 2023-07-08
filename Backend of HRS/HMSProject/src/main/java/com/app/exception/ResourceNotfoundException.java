package com.app.exception;

@SuppressWarnings("serial")
public class ResourceNotfoundException extends RuntimeException {
	public ResourceNotfoundException(String mesg)
	{
		super(mesg);
	}
}
