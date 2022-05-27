package com.example.demo.Repository;

import com.example.demo.Model.BoxModel;
import com.example.demo.Model.BoxViewModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BoxRepository implements IBoxRepository{

    @Autowired
    private JdbcTemplate _jdbcTemplate;

    @Override
    public int save(BoxModel boxModel) {
        return _jdbcTemplate.update("INSERT INTO boxes (Name, Weight, Color, Country, ShippingCost) VALUES (?,?,?,?,?)",
                new Object[] {boxModel.getName(), boxModel.getWeight(), boxModel.getColor(), boxModel.getCountry(), boxModel.getShippingCost()});
    }

    @Override
    public List<BoxViewModel> getAllBoxes() {
        return _jdbcTemplate.query("SELECT Id, Name, Weight, Color, ShippingCost FROM boxes", BeanPropertyRowMapper.newInstance(BoxViewModel.class));
    }
}
