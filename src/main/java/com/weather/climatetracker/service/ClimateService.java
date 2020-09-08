package com.weather.climatetracker.service;
import org.springframework.stereotype.Service;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.annotation.Autowired;

import com.weather.climatetracker.controller.ClimateRESTController;
import com.weather.climatetracker.model.ClimateData;
@Service
public class ClimateService {
    @Value("${csv.filePath}")
    private String filePath;
    private static SimpleDateFormat _excelDateFormat = new SimpleDateFormat("dd/MM/yyyy");
    private static SimpleDateFormat _isoDateFormat = new SimpleDateFormat("yyyy-MM-dd");
    public static final String _BEFORE = "before";
    public static final String _AFTER = "after";
    public static final String _BETWEEN = "between";

    Logger logger = LoggerFactory.getLogger(ClimateService.class);
    
	@Autowired
    private ClimateDataRepository repo;
	
	@PostConstruct
    private void init() throws Exception {
		File csvFile = new File(filePath);
		logger.info("Working Directory = " + System.getProperty("user.dir"));
		if (csvFile.isFile()) {
			logger.info("File exists");
			InputStreamReader input = new InputStreamReader(new FileInputStream(filePath));
			CSVParser csvParser = CSVFormat.EXCEL.withFirstRecordAsHeader().parse(input);
			long beforeTime = System.currentTimeMillis();
	        csvParser.forEach(record -> {
				try {
					repo.save(new ClimateData(record.getRecordNumber(),
							record.get(0), 
							record.get(1),
							_excelDateFormat.parse(record.get(2)),
							record.get(3) == null || record.get(3).isEmpty()? null: Double.parseDouble(record.get(3)),
							record.get(4) == null || record.get(4).isEmpty()? null: Double.parseDouble(record.get(4)),
							record.get(5) == null || record.get(5).isEmpty()? null: Double.parseDouble(record.get(5))));
				} catch (ParseException e) {
					logger.error("Exception while saving csv file to repository:", e);
				}
			});
	     
	        logger.info("time taken: " + (System.currentTimeMillis() - beforeTime));
	        logger.info("total row count = " + repo.count());
		}
    }    
    
    public List<ClimateData> listAll() {
        return repo.findAll();
    }
    
    public ClimateData get(long id) {
        return repo.findById(id);
    }
     
    public List<ClimateData> filterByDate(String condition, String value1, String value2) throws Exception{
    	List<ClimateData> filteredList = new ArrayList<ClimateData>();
    	if(condition == null || condition.isEmpty())
    	{
    		String error = "ClimateService:filterByDate: condition is required";
    		logger.error(error);
    		throw new Exception(error);
    	}
    	Date date1 = null;
    	Date date2 = null;
    	try {
		  if(value1 != null && !value1.isEmpty())
		  {
		     date1 = _isoDateFormat.parse(value1);
		  }
		  if(value2 != null && !value2.isEmpty())
		  {
		     date2 = _isoDateFormat.parse(value2);
		  }
    	}catch(Exception e)
    	{
    		String error = "ClimateService:filterByDate: Exception parsing date value, expected Date format is: YYYY-MM-DD";
    		logger.error(error);
    		throw new Exception(error);
    	}
    	System.out.println("ClimateService:filterByDate: condition=" + condition + "; date1=" + date1 + "; date2=" + date2); 
    	if(date1 == null)
		{
     		String error = "ClimateService:filterByDate: date value is required.";
     		logger.error(error);
     		throw new Exception(error);
		}
    	switch(condition.toLowerCase())
    	{
    	  case _BEFORE:
    		    filteredList = repo.findAllWithDateBefore(date1);
    		  break;
    	  case _AFTER:
    		    filteredList = repo.findAllWithDateAfter(date1);  
    		  break;
    	  case _BETWEEN:  
    		  if(date1 != null && date2 != null)
    		  { 
    		     filteredList = repo.findAllWithDateBetween(date1, date2);
    		  }
    		  else
    		  {
    			  String error = "ClimateService:filterByDate: 'betweeen' condition requires from and to date.";  
    			  logger.error(error);
    	     	  throw new Exception(error);
    		  }
    		  break;
    	  default:
    	  {
    		  String error = "ClimateService:filterByDate: condition not supported, expected value is following: before, after, between.";
    		  logger.error(error);
       		  throw new Exception(error);
    	  }
    	}
    	logger.info("ClimateService:filterByDate: total fetched row count = " + filteredList.size());
    	
    	//DEBUG
    	//int dateCount = repo.finaDistinctDateValues();
    	//int stationCount = repo.finaDistinctStationNames();
    	//int province = repo.finaDistinctProvinceValues();
    	//System.out.println("ClimateService:filterByDate: dateCount=" + dateCount + "; stationCount=" + stationCount + "; province=" + province);
    	
        return filteredList;
    }
     
}