package com.weather.climatetracker;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.BDDMockito.given;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import com.weather.climatetracker.model.ClimateData;
import com.weather.climatetracker.service.ClimateDataRepository;
import com.weather.climatetracker.service.ClimateService;

@ExtendWith(MockitoExtension.class)
public class ClimateServiceTest {
	
	@InjectMocks 
	private ClimateService climateService;
	
    @Mock                           
    private ClimateDataRepository mockRepo; 
    
    private static List<ClimateData> climateList;
    
    private static Date firstDate;
    private static Date secondDate;
    private static Date thirdDate;
    
    @BeforeAll
    public static void setup() throws Exception {
    	climateList = new ArrayList<ClimateData>();
    	firstDate = new SimpleDateFormat("yyyy-MM-dd").parse("2018-01-01");
    	secondDate = new SimpleDateFormat("yyyy-MM-dd").parse("2019-01-01");
    	thirdDate = new SimpleDateFormat("yyyy-MM-dd").parse("2020-01-01");
    	
    	climateList.add(new ClimateData(1L,
			"CHEMAINUS", "BC", firstDate,
			new Double(15.1), new Double(26.5), new Double(7)));
    	climateList.add(new ClimateData(2L,
			"CHEMAINUS", "BC",secondDate,
			new Double(15.1), new Double(26.5), new Double(7)));
    	climateList.add(new ClimateData(3L,
			"CHEMAINUS", "BC", thirdDate,
			new Double(15.1), new Double(26.5), new Double(7)));
    	
    }

	@Test
	public void testListAll_Success()
	{
		given(mockRepo.findAll()).willReturn(climateList);
		List<ClimateData> result = climateService.listAll();
	 
        assertEquals(3, result.size());
        result.stream().map(ClimateData::getId).forEach(id -> System.out.println(id + "; " + Arrays.asList(1L, 2L, 3L).contains(id)));
        assertTrue(result.stream()
          .map(ClimateData::getId)
          .allMatch(id -> Arrays.asList(1L, 2L, 3L).contains(id)));
	}
	
	@Test
	public void testFilterByDateAfterCondition_Success() throws Exception
	{
		given(mockRepo.findAllWithDateAfter(firstDate)).willReturn(climateList);
		List<ClimateData> result = climateService.filterByDate("after", "2018-01-01", "");
	 
        assertEquals(3, result.size());
        result.stream().map(ClimateData::getId).forEach(id -> System.out.println(id + "; " + Arrays.asList(1L, 2L, 3L).contains(id)));
        assertTrue(result.stream()
          .map(ClimateData::getId)
          .allMatch(id -> Arrays.asList(1L, 2L, 3L).contains(id)));
	}
	
	@Test
	public void testFilterByDateBeforeCondition_Success() throws Exception
	{
		given(mockRepo.findAllWithDateBefore(thirdDate)).willReturn(climateList);
		List<ClimateData> result = climateService.filterByDate("before", "2020-01-01", "");
	 
        assertEquals(3, result.size());
        result.stream().map(ClimateData::getId).forEach(id -> System.out.println(id + "; " + Arrays.asList(1L, 2L, 3L).contains(id)));
        assertTrue(result.stream()
          .map(ClimateData::getId)
          .allMatch(id -> Arrays.asList(1L, 2L, 3L).contains(id)));
	}
	
	@Test
	public void testFilterByDateBetweenCondition_Success() throws Exception
	{
		given(mockRepo.findAllWithDateBetween(firstDate, thirdDate)).willReturn(climateList);
		List<ClimateData> result = climateService.filterByDate("between", "2018-01-01", "2020-01-01");
	 
        assertEquals(3, result.size());
        result.stream().map(ClimateData::getId).forEach(id -> System.out.println(id + "; " + Arrays.asList(1L, 2L, 3L).contains(id)));
        assertTrue(result.stream()
          .map(ClimateData::getId)
          .allMatch(id -> Arrays.asList(1L, 2L, 3L).contains(id)));
	}
	
	@Test
	public void testGetById_Success()
	{
		given(mockRepo.findById(1L)).willReturn((ClimateData)climateList.get(0));
		ClimateData result = climateService.get(1L);
	 
        assertEquals(1L, result.getId());
	}
	
	@Test
	public void testFilterByDateConditionCaseInsensitive_Success() throws Exception
	{
		given(mockRepo.findAllWithDateBefore(thirdDate)).willReturn(climateList);
		List<ClimateData> result = climateService.filterByDate("BEFORE", "2020-01-01", "");
	 
        assertEquals(3, result.size());
        result.stream().map(ClimateData::getId).forEach(id -> System.out.println(id + "; " + Arrays.asList(1L, 2L, 3L).contains(id)));
        assertTrue(result.stream()
          .map(ClimateData::getId)
          .allMatch(id -> Arrays.asList(1L, 2L, 3L).contains(id)));
	}
	
	@Test
	public void testFilterByDateAfter_Failed_ConditionMissing()
	{
		Exception exception = assertThrows(Exception.class, () -> {
			climateService.filterByDate("", "", "");
	    });
	 
	    String expectedMessage = "condition is required";
	    String actualMessage = exception.getMessage();
	 
	    assertTrue(actualMessage.contains(expectedMessage));
	}
	
	@Test
	public void testFilterByDateAfter_Failed_UnsupportedCondition()
	{
		Exception exception = assertThrows(Exception.class, () -> {
			climateService.filterByDate("larger", "2018-01-01", "");
	    });
	 
	    String expectedMessage = "condition not supported";
	    String actualMessage = exception.getMessage();
	 
	    assertTrue(actualMessage.contains(expectedMessage));
	}
	
	@Test
	public void testFilterByDateAfter_Failed_DateMissing()
	{
		Exception exception = assertThrows(Exception.class, () -> {
			climateService.filterByDate("after", "", "");
	    });
	 
	    String expectedMessage = "date value is required";
	    String actualMessage = exception.getMessage();
	 
	    assertTrue(actualMessage.contains(expectedMessage));
	}
	
	@Test
	public void testFilterByDateBetween_Failed_DateMissing()
	{
		Exception exception = assertThrows(Exception.class, () -> {
			climateService.filterByDate("between", "2018-01-01", "");
	    });
	 
	    String expectedMessage = "'betweeen' condition requires from and to date";
	    String actualMessage = exception.getMessage();
	 
	    assertTrue(actualMessage.contains(expectedMessage));
	}
	
	@Test
	public void testFilterByDate_Failed_InvorrectDateFormat()
	{
		Exception exception = assertThrows(Exception.class, () -> {
			climateService.filterByDate("between", "2018/01/01", "2020/01/01");
	    });
	 
	    String expectedMessage = "expected Date format";
	    String actualMessage = exception.getMessage();
	 
	    assertTrue(actualMessage.contains(expectedMessage));
	}
}
