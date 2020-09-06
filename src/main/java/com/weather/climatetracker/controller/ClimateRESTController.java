package com.weather.climatetracker.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.weather.climatetracker.model.ClimateData;
import com.weather.climatetracker.service.ClimateService;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ClimateRESTController {

	@Autowired
	private ClimateService service;
    
    @GetMapping("/summary/viewbydate")
    public List<ClimateData> summaryList(
            @RequestParam(name = "condition", required = false, defaultValue="")String condition, 
            @RequestParam(name = "date1", required = false, defaultValue="")String value1,  
            @RequestParam(name = "date2", required = false, defaultValue="")String value2) throws Exception {
    	List<ClimateData> climateDataListFiltered = new ArrayList<ClimateData>();
    	System.out.println("ClimateRESTController:summaryList:condition=" + condition + "; date1=" + value1 + "; date2=" + value2); 
    	if(condition.isEmpty() || value1.isEmpty())
    	{
    		climateDataListFiltered = service.listAll(); 
    	}
    	else if(!condition.toLowerCase().equals(ClimateService._AFTER) && 
    			!condition.toLowerCase().equals(ClimateService._BEFORE) && 
    			!condition.toLowerCase().equals(ClimateService._BETWEEN))
    	{
    		//log error
    		String error = "REST: condition " + condition + " is not supported. Valid ones are: 'before', 'after', 'between'.";
    		System.out.println(error);
    		throw new ResponseStatusException(
    		          HttpStatus.BAD_REQUEST, error, new Exception());
    	}
    	else
    	{
    		if(condition.toLowerCase().equals(service._BETWEEN))
    		{
    			if((value1==null || value1.isEmpty()) || 
    			   (value2==null || value2.isEmpty()))
    			{
    			    String error = "REST: invalid request: criteria date with condition 'between' expects inputs for both date1 and date2.";
    				System.out.println(error);
    				throw new ResponseStatusException(
    	    		          HttpStatus.BAD_REQUEST, error, new Exception());
    			}
    		}
    		climateDataListFiltered = service.filterByDate(condition, value1, value2); 
    	}
    	
    	return climateDataListFiltered;
    }
       
    

}
