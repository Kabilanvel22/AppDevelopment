package com.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="plantsdemo")

public class Plant {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="plantid")
	private long plantId;
	
	@Column(name="commonname", nullable = false)
	private String commonName;
	
	@Column(name="scitificname", nullable = false)
    private String scientificName;
	
	@Column(name="description", length=50000, nullable = false)
    private String description;
	
	@Column(name="plantfamily", nullable = false)
    private String plantFamily;
	
	@Column(name="planttype", nullable = false)
    private String plantType;
	
	@Column(name="growing", length=50000, nullable = false)
    private String growingConditions;
	
	@Column(name="watering", length=50000, nullable = false)
    private String wateringNeeds;
	
	@Column(name="fertilize", length=50000, nullable = false)
    private String fertilization;
	
	@Column(name="maintenance", length=50000, nullable = false)
    private String maintenance;
	
	@Column(name="disease", length=50000, nullable = false)
    private String pestAndDiseaseManagement;
	
	@Column(name="harvest", nullable = false)
    private String harvesting;
	
	@Column(name="season", nullable = false)
    private String plantingSeason;
	
	@Column(name="age", nullable = false)
    private int harvestingAge;
	
	@Column(name="yeild", nullable = false)
    private String expectedYield;
	
	@Column(name="coplant",length=5000, nullable = false)
    private List<String> companionPlants;
	
	@Column(name="varieties", length=5000, nullable = false)
    private List<String> varieties;
	
	@Column(name="rating", nullable = false)
    private double averageRating;
	
	@Column(name="source", nullable = false)
    private String sourceAndOrigin;
	
	@Column(name="plantimage", nullable = false)
    private String plantImage;
}
