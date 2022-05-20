package com.example.demo.Data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;


@Component
public class DBContext {
    private JdbcTemplate _jdbcTemplate;


    @Autowired
    public DBContext(JdbcTemplate jdbcTemplate){
        this._jdbcTemplate = jdbcTemplate;
    }
    public void InitializeDatabase(){
        _jdbcTemplate.execute("CREATE DATABASE IF NOT EXISTS boxesdb;");

    }

}
