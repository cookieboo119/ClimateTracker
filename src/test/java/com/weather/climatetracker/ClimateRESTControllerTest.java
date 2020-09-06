package com.weather.climatetracker;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.CoreMatchers.is;
import static org.mockito.BDDMockito.given;

import com.weather.climatetracker.controller.ClimateRESTController;
import com.weather.climatetracker.model.ClimateData;
import com.weather.climatetracker.service.ClimateService;

@WebMvcTest(controllers = ClimateRESTController.class)
class ClimateRESTControllerTest {

	@Autowired
	private MockMvc mvc;
	
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
    	climateList.add(new ClimateData(2L,
			"CHEMAINUS", "BC",
			new SimpleDateFormat("yyyy-MM-dd").parse("2019-01-01"),
			new Double(15.1), new Double(26.5), new Double(7)));
    	climateList.add(new ClimateData(3L,
			"CHEMAINUS", "BC",
			new SimpleDateFormat("yyyy-MM-dd").parse("2020-01-01"),
			new Double(15.1), new Double(26.5), new Double(7)));
    }

	@Test
	public void testGetFullList_Success() throws Exception {
		given(climateService.listAll()).willReturn(climateList);
		mvc.perform(MockMvcRequestBuilders.get("/summary/viewbydate").accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(jsonPath("size()", is(climateList.size())));
	}
	
	@Test
	public void testGetFilteredListByDateBefore_Success() throws Exception {
		given(climateService.filterByDate("before", "2018-01-01", "")).willReturn(climateList.subList(0, 1));
		mvc.perform(MockMvcRequestBuilders.get("/summary/viewbydate?condition=before&date1=2018-01-01").accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.[0].id", is(1)));
	}
	
	@Test
	public void testGetFilteredListByDateAfter_Success() throws Exception {
		given(climateService.filterByDate("after", "2019-01-01", "")).willReturn(climateList.subList(1, 3));
		mvc.perform(MockMvcRequestBuilders.get("/summary/viewbydate?condition=after&date1=2019-01-01").accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(jsonPath("size()", is(2)))
				.andExpect(jsonPath("$.[0].id", is(2)))
				.andExpect(jsonPath("$.[1].id", is(3)));
	}
	
	@Test
	public void testGetFilteredListByDateBetween_Success() throws Exception {
		given(climateService.filterByDate("between", "2019-01-01", "2020-01-01")).willReturn(climateList.subList(1, 3));
		mvc.perform(MockMvcRequestBuilders.get("/summary/viewbydate?condition=between&date1=2019-01-01&date2=2020-01-01").accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isOk())
				.andExpect(jsonPath("size()", is(2)))
				.andExpect(jsonPath("$.[0].id", is(2)))
				.andExpect(jsonPath("$.[1].id", is(3)));
	}
	
	@Test
	public void testGetFilteredListByDateBefore_FailIncorrectCondition() throws Exception {
		mvc.perform(MockMvcRequestBuilders.get("/summary/viewbydate?condition=equal&date1=2018-01-01").accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isBadRequest());
	}
	
	@Test
	public void testGetFilteredListByDateBefore_FailMissingDate() throws Exception {
		mvc.perform(MockMvcRequestBuilders.get("/summary/viewbydate?condition=between&date1=2018-01-01").accept(MediaType.APPLICATION_JSON))
				.andExpect(status().isBadRequest());
	}
}
