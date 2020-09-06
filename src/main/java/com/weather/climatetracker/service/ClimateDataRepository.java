package com.weather.climatetracker.service;


import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.weather.climatetracker.model.ClimateData;

public interface ClimateDataRepository extends JpaRepository<ClimateData, Long> {

	  List<ClimateData> findById(String id);

	  ClimateData findById(long id);
	  
	  @Query("SELECT c FROM ClimateData c WHERE c.date <= :date")
	  List<ClimateData> findAllWithDateBefore(@Param("date") Date value);
	  
	  @Query("SELECT c FROM ClimateData c WHERE c.date >= :date")
	  List<ClimateData> findAllWithDateAfter(@Param("date") Date value);
	  
	  @Query("SELECT c FROM ClimateData c WHERE c.date >= :date1 AND c.date <= :date2")
	  List<ClimateData> findAllWithDateBetween(@Param("date1") Date value1, @Param("date2") Date value2);
	  
	  @Query("SELECT COUNT(DISTINCT date) FROM ClimateData")
	  Integer finaDistinctDateValues();
	  
	  @Query("SELECT COUNT(DISTINCT name) FROM ClimateData")
	  Integer finaDistinctStationNames();
	  
	  @Query("SELECT COUNT(DISTINCT province) FROM ClimateData")
	  Integer finaDistinctProvinceValues();
	}