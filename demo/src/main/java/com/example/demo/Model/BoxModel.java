package com.example.demo.Model;

public class BoxModel {

    private Long Id;
    private String Name;
    private Double Weight;
    private String Color;
    private String Country;
    private Double ShippingCost;

    public BoxModel(){
    }

    public BoxModel(Long id, String name, Double weight, String color, String country, Double shippingCost){
        this.Id = id;
        this.Name = name;
        this.Weight = weight;
        this.Color = color;
        this.Country = country;
        this.ShippingCost = shippingCost;
    }
    public BoxModel(String name, Double weight, String color, String country, Double shippingCost){
        this.Name = name;
        this.Weight = weight;
        this.Color = color;
        this.Country = country;
        this.ShippingCost = shippingCost;
    }

    public void setId(Long id){
        this.Id = id;
    }

    public Long getId(){
        return this.Id;
    }

    public void setName(String name){
        this.Name = name;
    }

    public String getName(){
        return this.Name;
    }

    public void setWeight(Double weight){
        this.Weight = weight;
    }

    public Double getWeight(){
        return this.Weight;
    }

    public void setColor(String color){
        this.Color = color;
    }

    public String getColor(){
        return this.Color;
    }

    public void setCountry(String country){
        this.Country = country;
    }

    public String getCountry(){
        return this.Country;
    }

    public void setShippingCost(Double cost){
        this.ShippingCost = cost;
    }

    public Double getShippingCost(){
        return this.ShippingCost;
    }
}
