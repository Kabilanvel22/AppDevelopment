package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.User;
import com.repository.UserRepository;

@Service

public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public Optional<List<User>> getAll()   
	{  
		return Optional.of(userRepository.findAll());
	}  
	
	public Optional<User> getUser(int id)   
	{  
		return userRepository.findById(id); 
	}
	
	public void deleteUser(int id)   
	{  
		userRepository.deleteById(id);  
	}
	
	public User saveUser(User u)   
	{  
		return userRepository.save(u);  
	}
	
	public User updateUser(User u)   
	{  
		userRepository.save(u);  
		return u;  
	}
	
	
}