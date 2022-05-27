package com.example.demo.Model;

public class BoxViewModel {
    private Long Id;
    private String Name;
    private Double Weight;
    private String Color;
    private Double ShippingCost;

    public BoxViewModel(){
    }

    public BoxViewModel(Long id, String name, Double weight, String color, Double shippingCost){
        this.Id = id;
        this.Name = name;
        this.Weight = weight;
        this.Color = color;
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

    public void setShippingCost(Double cost){
        this.ShippingCost = cost;
    }

    public Double getShippingCost(){
        return this.ShippingCost;
    }
}
