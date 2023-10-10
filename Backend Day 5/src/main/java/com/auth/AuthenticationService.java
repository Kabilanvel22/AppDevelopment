package com.auth;

import java.util.List;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.config.JwtService;
import com.entity.Plant;
import com.entity.User;
import com.entity.enumerate.Role;
import com.repository.PlantRepository;
import com.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse userregister(RegisterRequest request) {
        var user = User.builder()
        .email(request.getEmail())
        .userName(request.getUserName())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.USER)
        .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();
    }

    public AuthenticationResponse userauthenticate(AuthenticationRequest request) {
    	authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
       );
        var user = repository.findById(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwtToken).build();
    }

   public void updatedUser(String email, User updateUser){
    User user = repository.findByEmail(email);
    if(!user.toString().isEmpty()){

        user.setUserName(updateUser.getUsername());
        user.setRole(Role.USER);
        repository.save(user);
    }
   }
    public void deleteUserByUsername(String email){
        User user = repository.findByEmail(email);
        if(user!=null){
            repository.delete(user);
        }
    }
    
    public Optional<User> getuserById(String email) {
        var user = repository.findById(email);
        return user;
    }

    // Admin Service


    public AuthenticationResponse adminregister(RegisterRequest request){
        var admin =  User.builder()
        .email(request.getEmail())
        .userName(request.getUserName())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(Role.ADMIN)
        .build();
        repository.save(admin);
        var jwtToken = jwtService.generateToken(admin);

        return AuthenticationResponse.builder()
        .token(jwtToken)

        .build();
    }

    public AuthenticationResponse adminAuthenticate(AuthenticationRequest request){
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        var admin = repository.findById(request.getEmail()).orElseThrow();
        var adminToken = jwtService.generateToken(admin);
        return AuthenticationResponse.builder().token(adminToken).build();
    
    }
    
    public Optional<User> getadminById(String email) {
        var admin = repository.findById(email);
        return admin;
    }

    //Plant Service
    private final PlantRepository plantRepository;

    
    public String AddPlant(PlantAdd request){
        var plant = Plant.builder()
        .commonName(request.getCommonName())
        .scientificName(request.getScientificName())
        .description(request.getDescription())
        .plantFamily(request.getPlantFamily())
        .plantType(request.getPlantType())
        .growingConditions(request.getGrowingConditions())
        .wateringNeeds(request.getWateringNeeds())
        .fertilization(request.getFertilization())
        .maintenance(request.getMaintenance())
        .pestAndDiseaseManagement(request.getPestAndDiseaseManagement())
        .harvesting(request.getHarvesting())
        .plantingSeason(request.getPlantingSeason())
        .harvestingAge(request.getHarvestingAge())
        .expectedYield(request.getExpectedYield())
        .companionPlants(request.getCompanionPlants())
        .varieties(request.getVarieties())
        .averageRating(request.getAverageRating())
        .sourceAndOrigin(request.getSourceAndOrigin())
        .plantImage(request.getPlantImage())
        .build();
        plantRepository.save(plant);
        return "Plant Added Successfully";
    }

    public Optional<Plant> getPlantById(long id){
        return plantRepository.findById(id);
    }

    public List<Plant> getAllPlants(){
        return plantRepository.findAll();
    }

    public void updatePlant(long id, Plant updatePlant){
        Plant plant = plantRepository.findByplantId(id);
        if(plant!=null){
        	
        	plant.setCommonName(updatePlant.getCommonName());
        	plant.setScientificName(updatePlant.getScientificName());
        	plant.setDescription(updatePlant.getDescription());
        	plant.setPlantFamily(updatePlant.getPlantFamily());
        	plant.setPlantType(updatePlant.getPlantType());
        	plant.setGrowingConditions(updatePlant.getGrowingConditions());
        	plant.setWateringNeeds(updatePlant.getWateringNeeds());
        	plant.setFertilization(updatePlant.getFertilization());
        	plant.setMaintenance(updatePlant.getMaintenance());
        	plant.setPestAndDiseaseManagement(updatePlant.getPestAndDiseaseManagement());
        	plant.setHarvesting(updatePlant.getHarvesting());
        	plant.setPlantingSeason(updatePlant.getPlantingSeason());
        	plant.setHarvestingAge(updatePlant.getHarvestingAge());
        	plant.setExpectedYield(updatePlant.getExpectedYield());
        	plant.setCompanionPlants(updatePlant.getCompanionPlants());
        	plant.setVarieties(updatePlant.getVarieties());
        	plant.setAverageRating(updatePlant.getAverageRating());
        	plant.setSourceAndOrigin(updatePlant.getSourceAndOrigin());
        	plant.setPlantImage(updatePlant.getPlantImage());;

            
            plantRepository.save(plant);
        }
    }

    public void deletePlant(long id){
        Plant plant = plantRepository.findByplantId(id);
        if(plant!=null){
        	plantRepository.deleteById(id);
        }
    }
}