package com.weather.climatetracker;

import static org.junit.jupiter.api.Assertions.*; 

import java.text.SimpleDateFormat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Arrays;
import java.util.List;

import com.weather.climatetracker.model.ClimateData;
import com.weather.climatetracker.service.ClimateDataRepository;

@ExtendWith(SpringExtension.class)
@DataJpaTest
public class ClimateDataRepositoryTest {
 
    @Autowired
    private ClimateDataRepository repository;
    
    @BeforeEach
    public void setup() throws Exception{
		repository.save(new ClimateData(1L,
				"CHEMAINUS", "BC",
				new SimpleDateFormat("yyyy-MM-dd").parse("2018-01-01"),
			    new Double(15.1), new Double(26.5), new Double(7)));
		repository.save(new ClimateData(2L,
				"CHEMAINUS", "BC",
				new SimpleDateFormat("yyyy-MM-dd").parse("2019-01-01"),
				new Double(15.1), new Double(26.5), new Double(7)));
		repository.save(new ClimateData(3L,
				"CHEMAINUS", "BC",
				new SimpleDateFormat("yyyy-MM-dd").parse("2020-01-01"),
				new Double(15.1), new Double(26.5), new Double(7)));
    }
   
    @Test
    public void testDataInitialization() throws Exception
    {
       ClimateData cd = repository.findById(1L);
       assertNotNull(cd); 
    }
    
    @Test
    public void testFinaAllWithDateBefore_noRowReturned() throws Exception 
    {
		
        List<ClimateData> result = repository.findAllWithDateBefore(
			  new SimpleDateFormat("yyyy-MM-dd").parse("2017-12-31"));
 
        assertEquals(0, result.size());
    }
    
    @Test
    public void testFinaAllWithDateBefore_row1And2Returned() throws Exception 
    {
        List<ClimateData> result = repository.findAllWithDateBefore(
			  new SimpleDateFormat("yyyy-MM-dd").parse("2019-01-01"));
 
        assertEquals(2, result.size());
        result.stream().map(ClimateData::getId).forEach(id -> System.out.println(id + "; " + Arrays.asList(1L, 2L).contains(id)));
        assertTrue(result.stream()
          .map(ClimateData::getId)
          .allMatch(id -> Arrays.asList(1L, 2L).contains(id)));
    }
 
    @Test
    public void testFinaAllWithDateBetween_row1And2Returned() throws Exception
    {
        List<ClimateData> result = repository.findAllWithDateBetween(
			   new SimpleDateFormat("yyyy-MM-dd").parse("2018-01-01"),
			   new SimpleDateFormat("yyyy-MM-dd").parse("2019-01-01"));
 
        assertEquals(2, result.size());
        assertTrue(result.stream()
          .map(ClimateData::getId)
          .allMatch(id -> Arrays.asList(1L, 2L).contains(id)));
    }
    
    @Test
    public void testFinaAllWithDateBetween_row2And3Returned() throws Exception
    {
        List<ClimateData> result = repository.findAllWithDateBetween(
			   new SimpleDateFormat("yyyy-MM-dd").parse("2019-01-01"),
			   new SimpleDateFormat("yyyy-MM-dd").parse("2020-01-01"));
 
        assertEquals(2, result.size());
        assertTrue(result.stream()
          .map(ClimateData::getId)
          .allMatch(id -> Arrays.asList(2L, 3L).contains(id)));
    }
    
    @Test
    public void testFinaAllWithDateBetween_row1Returned() throws Exception
    {
        List<ClimateData> result = repository.findAllWithDateBetween(
			   new SimpleDateFormat("yyyy-MM-dd").parse("2018-01-01"),
			   new SimpleDateFormat("yyyy-MM-dd").parse("2018-01-01"));
 
        assertEquals(1, result.size());
        assertTrue(result.stream()
          .map(ClimateData::getId)
          .allMatch(id -> Arrays.asList(1L).contains(id)));
    }
    
    @Test
    public void testFinaAllWithDateBetween_row3Returned() throws Exception
    {
        List<ClimateData> result = repository.findAllWithDateBetween(
			   new SimpleDateFormat("yyyy-MM-dd").parse("2020-01-01"),
			   new SimpleDateFormat("yyyy-MM-dd").parse("2020-01-01"));
 
        assertEquals(1, result.size());
        assertTrue(result.stream()
          .map(ClimateData::getId)
          .allMatch(id -> Arrays.asList(3L).contains(id)));
    }
    
    @Test
    public void testFinaAllWithDateBetween_noRowReturned() throws Exception
    {
        List<ClimateData> result = repository.findAllWithDateBetween(
			   new SimpleDateFormat("yyyy-MM-dd").parse("2020-01-02"),
			   new SimpleDateFormat("yyyy-MM-dd").parse("2020-01-03"));
 
        assertEquals(0, result.size());
        
        result = repository.findAllWithDateBetween(
			   new SimpleDateFormat("yyyy-MM-dd").parse("2017-11-01"),
			   new SimpleDateFormat("yyyy-MM-dd").parse("2017-12-31"));
        assertEquals(0, result.size());
    }
 
    @Test
    public void testFinaAllWithDateAfter_row2And3Returned() throws Exception
    {
        List<ClimateData> result = repository.findAllWithDateAfter(
					new SimpleDateFormat("yyyy-MM-dd").parse("2019-01-01"));
 
        assertEquals(2, result.size());
        assertTrue(result.stream()
          .map(ClimateData::getId)
          .allMatch(id -> Arrays.asList(2L, 3L).contains(id)));
    }
    
    @Test
    public void testFinaAllWithDateAfter_allRowsReturned() throws Exception
    {
        List<ClimateData> result = repository.findAllWithDateAfter(
					new SimpleDateFormat("yyyy-MM-dd").parse("2018-01-01"));
 
        assertEquals(3, result.size());
        assertTrue(result.stream()
          .map(ClimateData::getId)
          .allMatch(id -> Arrays.asList(1L, 2L, 3L).contains(id)));
    }
    
    @Test
    public void testFinaAllWithDateBefore_allRowsReturned() throws Exception
    {
        List<ClimateData> result = repository.findAllWithDateBefore(
					new SimpleDateFormat("yyyy-MM-dd").parse("2020-01-01"));
 
        assertEquals(3, result.size());
        assertTrue(result.stream()
          .map(ClimateData::getId)
          .allMatch(id -> Arrays.asList(1L, 2L, 3L).contains(id)));
    }
    
    @Test
    public void testFinaAllWithDateBetween_allRowsReturned() throws Exception
    {
        List<ClimateData> result = repository.findAllWithDateBetween(
 			   new SimpleDateFormat("yyyy-MM-dd").parse("2018-01-01"),
 			   new SimpleDateFormat("yyyy-MM-dd").parse("2020-01-01"));
 
        assertEquals(3, result.size());
        assertTrue(result.stream()
          .map(ClimateData::getId)
          .allMatch(id -> Arrays.asList(1L, 2L, 3L).contains(id)));
    }
}