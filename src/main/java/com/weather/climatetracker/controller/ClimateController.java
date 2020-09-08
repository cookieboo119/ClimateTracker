package com.weather.climatetracker.controller;


import com.weather.climatetracker.model.ClimateData;
import com.weather.climatetracker.service.ClimateService;

import org.springframework.ui.Model;
import org.springframework.stereotype.Controller;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

@Controller
public class ClimateController {
	Logger logger = LoggerFactory.getLogger(ClimateController.class);
	@Autowired
	private ClimateService service;
	
	/**
	 * Summary page with JET style
	 * @param model
	 * @return view
	 */
	@GetMapping("/main")
	public String jetPage(Model model) {
		logger.info("main page is visited");
		return "summary_jet";
	}
	
	/**
	 * Detail drill down page
	 * @param id
	 * @param model
	 * @return view
	 */
	@GetMapping("/details/{id}")
	public String getDetail(@PathVariable("id") long id, Model model) {
		logger.info("details page is visited for id=" + id);
		ClimateData cd = service.get(id); 
		if(cd == null)
		{
			logger.error("id does not exist {}", id);
			return "error/404"; 
		}
		model.addAttribute("climateData", cd);
		return "details_jet";
	}
	
    /**
     * Plain thymeleaf page without styling
     * @param condition
     * @param value1
     * @param value2
     * @param model
     * @return view
     * @throws Exception 
     */
    @GetMapping("/summary")
    public String summaryList(
            @RequestParam(name = "condition", required = false, defaultValue="")String condition, 
            @RequestParam(name = "criteria1", required = false, defaultValue="")String value1,  
            @RequestParam(name = "criteria2", required = false, defaultValue="")String value2, Model model) throws Exception {
    	logger.info("climateSummary invoked");
    	List<ClimateData> climateDataListFiltered = new ArrayList<ClimateData>();
    	if(condition.isEmpty() || value1.isEmpty())
    	{
    		climateDataListFiltered = service.listAll(); 
    	}
    	
    	climateDataListFiltered = service.filterByDate(condition, value1, value2);
    	
    	model.addAttribute("climateSummaryList", climateDataListFiltered);
        return "mainTable"; //view
    }

}
