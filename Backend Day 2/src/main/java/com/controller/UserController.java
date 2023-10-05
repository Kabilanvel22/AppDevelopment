package com.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.User;
import com.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/user")

public class UserController {
	
	@Autowired 
	
	UserService userService;
	
	@GetMapping("/getuser")  
	public Optional<List<User>> GetAllUser()   
	{  
		return userService.getAll();  
	}  

	@GetMapping("/user/{code}") 
	public ResponseEntity<Optional<User>> GetUser(@PathVariable int code)
	{  
		Optional<User> re = userService.getUser(code); 
		return ResponseEntity.ok(re);
	}  

	@DeleteMapping("/user/{code}")  
	public ResponseEntity<Map<String, Boolean>> DeleteUser(@PathVariable int code)   
	{  
		userService.deleteUser(code);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}  

	@PostMapping("/newuser")  
	public User SaveUser(@RequestBody User u)   
	{  
		return userService.saveUser(u);  
	}  
	
	@PutMapping("/updateuser")  
	public ResponseEntity<User> UpdateUser(@PathVariable int code,@RequestBody User u)   
	{  
		User ue = userService.updateUser(u);  
		return ResponseEntity.ok(ue); 
	} 
	
}