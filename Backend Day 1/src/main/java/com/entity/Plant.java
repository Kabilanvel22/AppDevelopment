package com.entity;

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
@Entity
@Table(name="garplant")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Plant {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	@Column(name="name", nullable = false)
	private String name;
	@Column(name="imgurl", nullable = false)
	private String imgurl;
	@Column(name="seasonal", nullable = false)
	private String seasonal;
	@Column(name="soil", nullable = false)
	private String soil;
	@Column(name="diseases", nullable = false)
	private String diseases;
	@Column(name="benefit", nullable = false)
	private String benefit;
	@Column(name="description", nullable = false)
	private String description;
	@Column(name="climate", nullable = false)
	private String climate;
	@Column(name="sunlight", nullable = false)
	private String sunlight;
	@Column(name="watering", nullable = false)
	private String watering;
	@Column(name="height", nullable = false)
	private String height;
	@Column(name="harvest", nullable = false)
	private String harvest;
	@Column(name="care", nullable = false)
	private String care;

}
