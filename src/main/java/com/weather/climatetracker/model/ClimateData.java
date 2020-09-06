package com.weather.climatetracker.model;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "ClimateData")
public class ClimateData{
	@Id
	private long id;
	private String name;
	private Double meanTemp;
	private Double maxTemp;
	private Double minTemp;
	@Temporal(TemporalType.DATE)
	private Date date;
	private String province;
	
	public ClimateData(){}
	
	public ClimateData(long id, String name, String province, Date date, Double meanTemp, Double maxTemp, Double minTemp) {
		this.id = id;
		this.name = name;
		this.date = date;
		this.meanTemp = meanTemp;
		this.maxTemp = maxTemp;
		this.minTemp = minTemp;
		this.province = province;
	}
 
	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public String getName() {
		return this.name;
	}
 
	public void setName(String name) {
		this.name = name;
	}
 
	public String getProvince() {
		return this.province;
	}
 
	public void setProvince(String province) {
		this.province = province;
	}
 
	public Date getDate() {
		return this.date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	public Double getMeanTemp () {
		return this.meanTemp;
	}
	
	public void setMeanTemp(Double meanTemp) {
		this.meanTemp = meanTemp;
	}
	
	public Double getMaxTemp () {
		return this.maxTemp;
	}
	
	public void setMaxTemp(Double maxTemp) {
		this.maxTemp = maxTemp;
	}
	
	public Double getMinTemp () {
		return this.minTemp;
	}
	
	public void setMinTemp(Double minTemp) {
		this.minTemp = minTemp;
	}
 
	@Override
	public String toString() {
		return "ClimateData {stationname:" + name + 
				", province:" + this.province +
				", date:" + (this.date != null ? this.date.toString() : "") + 
				", meanTemp: " + this.meanTemp +
				", maxTemp: " + this.maxTemp + 
				", minTemp: " + this.minTemp + "}";
	}

}