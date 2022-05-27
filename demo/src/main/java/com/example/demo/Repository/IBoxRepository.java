package com.example.demo.Repository;

import com.example.demo.Model.BoxModel;
import com.example.demo.Model.BoxViewModel;

import java.util.List;

public interface IBoxRepository {
    int save(BoxModel boxModel);
    List<BoxViewModel> getAllBoxes();
}
