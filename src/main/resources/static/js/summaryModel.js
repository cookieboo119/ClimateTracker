define(['ojs/ojcore', 'jquery', 'knockout', 'ojs/ojarraydataprovider', 'ojs/ojpagingdataproviderview', 'ojs/ojconverterutils-i18n', 'ojs/ojconverter-datetime', 'ojs/ojinputtext',
	'ojs/ojbutton','ojs/ojlabel', 'ojs/ojtable', 'ojs/ojdatetimepicker', 'ojs/ojselectcombobox',
    'ojs/ojselectcombobox', 'ojs/ojlabel', 'ojs/ojpagingcontrol', 'ojs/ojformlayout', 'ojs/ojknockout', 'ojs/ojselectsingle', 'ojs/ojlabel', 'ojs/ojchart'], 
  function (oj, $, ko, ArrayDataProvider, PagingDataProviderView, ConverterUtilsI18n, DateTimeConverter) {
	
	var SummaryViewModel = function() {
		var self = this;
        self.envTableDisplay = ko.observable('none');
        self.envDataArray = ko.observableArray([]);
        self.envDataProvider = new PagingDataProviderView(new ArrayDataProvider(self.envDataArray, { idAttribute: 'id' }));
        self.fromValue = ko.observable();
        self.toValue = ko.observable();
        self.value = ko.observable();
        self.datePicker = {
                numberOfMonths: 3
              };
        self.dateConverter = ko.observable(new DateTimeConverter.IntlDateTimeConverter(
                {
                  pattern: "yyyy-MM-dd"
                }));
        self.baseUrl = ko.observable('/summary/viewbydate');
        self.condition = ko.observable('between');
        self.sizeOptions = ko.observableArray([
            { value: '10', label: 'Display 10 Per Page' },
            { value: '25', label: 'Display 25 Per Page' },
            { value: '50', label: 'Display 50 Per Page' },
            { value: '100', label: 'Display 100 Per Page' }
          ]);
        self.pageSizeDP = new ArrayDataProvider(self.sizeOptions, { keyAttributes: 'value' });
        self.pageSizeSelectedValue = ko.observable("10");
        self.pageSize = ko.computed(function(){
        	console.log("pagesize=" + parseInt(self.pageSizeSelectedValue()));
        	return parseInt(self.pageSizeSelectedValue());
        });

       self.envColumnArray = [{headerText: "Station Name", 
            field: "name",
            headerStyle: "text-align: left; font-weight: bold; min-width: 8em; max-width: 16em; width: 8em",
            sortable: 'enabled',
            sortProperty: 'name',
            style: "white-space:normal;word-wrap:break-word; text-align: left;vertical-align: top;"},
            {headerText: "Date",
             field: "date",
             sortable: 'enabled',
             sortProperty: 'date',
             headerStyle: "text-align: left; font-weight: bold; min-width: 8em; max-width: 16em; width: 8em",
             style: "white-space:normal;word-wrap:break-word; text-align: left;vertical-align: top;"},
            {headerText: "Average Temperature",
             field: "meanTemp",
             template: "meanTempTemplate",
             sortable: 'enabled',
             sortProperty: 'meanTemp',
             headerStyle: "text-align: left; font-weight: bold; min-width: 8em; max-width: 16em; width: 8em",
             style: "white-space:normal;word-wrap:break-word; text-align: left;vertical-align: middle;"}];  
      
       self.applyFilter = function (event) {
    	   var fromDate =  document.getElementById("from");
    	   var toDate =  document.getElementById("to");
    	   var date = document.getElementById("dateInput");
    	   var cond = self.condition();
    	   var invalidsPresent = false;
    	   var url = '';
    	   if(cond === "between")
    	   {
               if (fromDate.valid !== 'valid')
               {
            	   fromDate.showMessages();
                   invalidsPresent = true;
               }
               if (toDate.valid !== 'valid')
               {
            	   toDate.showMessages();
                   invalidsPresent = true;
               }
               
               if(!invalidsPresent) 
               {
            	  url = self.baseUrl() + "?condition=between&date1=" + self.fromValue() + "&date2=" + self.toValue();
            	  console.log("url=" + url);
               }
    	   }else
    	   {
    		   if (date.valid !== 'valid')
               {
            	   date.showMessages();
                   invalidsPresent = true;
               }
    		   
    		   if(!invalidsPresent) 
               {
    			  var condParam = cond === "from" ? "after" : "before";
            	  url = self.baseUrl() + "?condition=" + condParam + "&date1=" + self.value();
            	  console.log("url=" + url);
               }
    	   }
    	   if(!invalidsPresent)
    	   {
    		   self.loadData(url);
    	   }
           return true;
         }.bind(this);
       
      self.clearFilter = function (event) {
    	  self.value('');
    	  self.fromValue('');
    	  self.toValue('');
    	  self.loadData(self.baseUrl());
      }.bind(this);
      
      
      //====Graph ====== 
      self.datePointCount = ko.observable();
      self.datePointNames = ko.observableArray([]);
      self.selectedProvince = ko.observable('BC');
      self.provinceArray = ko.observableArray([]);
      self.provinceDP = new ArrayDataProvider(self.provinceArray, {keyAttributes: 'value'});
      self.orientationValue = ko.observable('vertical');
      self.observableGraphData = ko.observableArray([]);
      self.graphDataProvider = new ArrayDataProvider(self.observableGraphData, {keyAttributes: 'id'});
      self.distinctProvince = function(array){
    	  var result = [];
	      var map = new Map();
	      $.each(array, function(){
	    	  var item = this;
	          if(!map.has(item.province)){
	              map.set(item.province, true);    // set any value to Map
	              result.push({
	                  'value': item.province,
	                  'label': item.province
	              });
	          }
	      });
	      return result;
      };
      
    var valueFormat = {
              group: { tooltipLabel: ['Date'] }
            }  
    this.valueFormatsValue = ko.observable(valueFormat);
      
      self.prepareGraphData = function(rawData)
      {
    	  var graphDataArray = [];
    	  $.each(rawData, function(){
    		  var row = this;
    		  if(row.meanTemp && row.meanTemp !== '')
    	       {
    			  graphDataArray.push({id: "mean" + row.id, "series": "max temp", "Date": row.date, "value": row.meanTemp, "Station": row.name})
    		   }
    		  if(row.minTemp && row.minTemp !== '')
	   	       {
	   			  graphDataArray.push({id: "min" + row.id, "series": "min temp", "Date": row.date, "value": row.minTemp, "Station": row.name})
	   		   }
    		  if(row.maxTemp && row.maxTemp !== '')
	   	       {
	   			  graphDataArray.push({id: "max" + row.id, "series": "mean temp", "Date": row.date, "value": row.maxTemp, "Station": row.name})
	   		   }
    	        
    	  });
    	  
    	  self.observableGraphData.removeAll();
    	  var sortedArray = graphDataArray.sort(function(a, b){
    		     return new Date(a.Date) - new Date(b.Date)});
    	  self.observableGraphData(sortedArray);
    	  
      }

      self.provinceChangedHandler = function(event)
      {  
    	  var current = event.detail.value;
    	  var prev = event.detail.previousValue;
    	  if(current && (current !== prev))
    	  {
     		   var filteredData = self.filterDataByProvince(self.envDataArray(), current); 
      		   self.prepareGraphData(filteredData);
    	  }
      }
      
      self.filterDataByProvince = function(dataArray, province)
      {
    	 
    	 console.log("selected province value: " + province);
    	 var filtered = dataArray.filter(function(data){
    		  return  data.province && (data.province === province);
    	  })
    	  
    	  return filtered;
      }
      
      self.containsProvince = function(provArray, prov)
      {
    	  var found = false;
    	  for(var i = 0; i < provArray.length; i++) {
    		    if (provArray[i].value === prov) {
    		        found = true;
    		        break;
    		    }
    		}
    	  return found;
      }
      
      self.loadData = function(url)
      {
          getJSON(url, function(error, jsonData){
          	   if(error === null || error === '')
                 {
          		   self.envDataArray(jsonData);
          		   //prepare the province choice 
          		   self.prepareGraphData([]);
          		   if(jsonData && (jsonData.length > 0))
          		   {
	          		  var newProvArray = self.distinctProvince(jsonData);
	          		  var prevProvince = self.selectedProvince();
	          		  self.provinceArray(newProvArray);
	          		  var province = prevProvince;
	          		  if(!self.containsProvince(newProvArray, prevProvince))
	          		  {
	          		    province = newProvArray[0].value
	          		  }
	          		  self.selectedProvince(province);
	          		  var filteredData = self.filterDataByProvince(jsonData, province); 
	          		  self.prepareGraphData(filteredData);
          		   }
                 }
                });
      }
      
      
  	   //get base data
       self.loadData(self.baseUrl());
	};

	return {
		vm: SummaryViewModel
	};
});