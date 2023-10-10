package com.auth;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor 
public class PlantAdd {
	
	private long plantId;
	private String commonName;
    private String scientificName;
    private String description;
    private String plantFamily;
    private String plantType;
    private String growingConditions;
    private String wateringNeeds;
    private String fertilization;
    private String maintenance;
    private String pestAndDiseaseManagement;
    private String harvesting;
    private String plantingSeason;
    private int harvestingAge;
    private String expectedYield;
    private List<String> companionPlants;
    private List<String> varieties;
    private double averageRating;
    private String sourceAndOrigin;
    private String plantImage;

}
