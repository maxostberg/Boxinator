package com.example.demo.Service;

import com.example.demo.Model.BoxModel;
import com.example.demo.Model.BoxViewModel;
import com.example.demo.StringResponse;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IBoxService {
    ResponseEntity<StringResponse> save(BoxModel boxModel);
    List<BoxViewModel> getAllBoxes();

    Double getCountryMultiplier(String country) throws Exception;
}
