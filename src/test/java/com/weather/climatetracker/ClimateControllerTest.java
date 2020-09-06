package com.weather.climatetracker;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.willThrow;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.CoreMatchers.*;

import com.weather.climatetracker.controller.ClimateController;
import com.weather.climatetracker.model.ClimateData;
import com.weather.climatetracker.service.ClimateService;

@AutoConfigureMockMvc
@WebMvcTest(controllers = ClimateController.class)
public class ClimateControllerTest {
	
	@Autowired
	private MockMvc mockMvc;
	 
    @MockBean                           
    private ClimateService climateService; 
    
    private static List<ClimateData> climateList;
    
    @BeforeAll
    public static void setup() throws Exception {
    	climateList = new ArrayList<ClimateData>();
    	climateList.add(new ClimateData(1L,
				"CHEMAINUS", "BC",
				new SimpleDateFormat("yyyy-MM-dd").parse("2018-01-01"),
			    new Double(15.1), new Double(26.5), new Double(7)));
    }

    @Test
    public void testMainPageReturns() throws Exception {
    	  mockMvc.perform(MockMvcRequestBuilders.get("/main"))
    	   .andExpect(status().isOk())
    	   .andExpect(view().name("summary_jet"));
    }  
    
    @Test
    public void testDetailReturns_Success() throws Exception {
    	 given(climateService.get(1)).willReturn(climateList.get(0));

    	  mockMvc.perform(MockMvcRequestBuilders.get("/details/1"))
    	   .andExpect(status().isOk())
    	   .andExpect(view().name("details_jet"))
    	   .andExpect(content().string(containsString("2018")));
    }  
    
    
    @Test
    public void testDetailReturns_Failed_nonExistRecord() throws Exception {
    	 given(climateService.get(0)).willReturn(null);

    	  mockMvc.perform(MockMvcRequestBuilders.get("/details/0"))
    	   .andExpect(status().isOk())
    	   .andExpect(view().name("error/404"))
    	   .andExpect(content().string(containsString("Oops")));
    }  
    
    @Test
    public void testCustomNotFoundPageReturned() throws Exception{

    	  mockMvc.perform(MockMvcRequestBuilders.get("/junk/0"))
    	   .andExpect(status().isNotFound());
    } 
    
    @Test
    public void testCustomServerErrorPageReturned() throws Exception{
    	 willThrow(new Exception()).given(climateService).filterByDate("between", "2018-01-01", "");
    	 Exception exception = assertThrows(Exception.class, () -> {
    		 mockMvc.perform(MockMvcRequestBuilders.get("/summary?condition=between&criteria1=2018-01-01"));
 	    });
    } 
    
}
