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

import com.entity.Plant;
import com.entity.User;
import com.service.PlantService;
@RestController
@CrossOrigin
@RequestMapping("/plant")

public class PlantController {


	@Autowired 
	
	PlantService plantService;
	
	@GetMapping("/getplant")  
	public Optional<List<Plant>> GetAllPlant()   
	{  
		return plantService.getAll();  
	}  

	@GetMapping("/plant/{code}") 
	public ResponseEntity<Optional<Plant>> GetPlant(@PathVariable int code)
	{  
		Optional<Plant> re = plantService.getPlant(code); 
		return ResponseEntity.ok(re);
	}  

	@DeleteMapping("/plant/{code}")  
	public ResponseEntity<Map<String, Boolean>> DeletePlant(@PathVariable int code)   
	{  
		plantService.deletePlant(code);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}  

	@PostMapping("/newplant")  
	public Plant SavePlant(@RequestBody Plant p)   
	{  
		return plantService.savePlant(p);  
	}  
	
	@PutMapping("/updateplant")  
	public ResponseEntity<Plant> UpdatePlant(@PathVariable int code,@RequestBody Plant p)   
	{  
		Plant pl = plantService.updatePlant(p);  
		return ResponseEntity.ok(pl); 
	} 
	
}
