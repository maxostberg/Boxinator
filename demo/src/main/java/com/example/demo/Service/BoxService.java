package com.example.demo.Service;

import com.example.demo.Model.BoxModel;
import com.example.demo.Model.BoxViewModel;
import com.example.demo.Repository.IBoxRepository;
import com.example.demo.StringResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BoxService implements IBoxService{

    private Map<String, Double> costMultipliers = new HashMap<>() {{
        put("Sweden", 1.3d);
        put("China", 4d);
        put("Brazil", 8.6d);
        put("Australia", 7.2d);
    }};
    @Autowired
    private IBoxRepository _boxRepository;

    public BoxService(IBoxRepository repository){
        this._boxRepository = repository;
    }

    @Override
    public ResponseEntity<StringResponse> save(BoxModel boxModel) {

        if(boxModel.getName() == null || boxModel.getName().isEmpty()){
            return new ResponseEntity<>(new StringResponse("Please provide a name"), HttpStatus.BAD_REQUEST);
        }

        if(boxModel.getWeight() == null){
            return new ResponseEntity<>(new StringResponse("Please provide a weight"), HttpStatus.BAD_REQUEST);
        }

        if(boxModel.getWeight().isNaN()){
            return new ResponseEntity<>(new StringResponse("Weight is not a number"), HttpStatus.BAD_REQUEST);
        }

        Double weight = boxModel.getWeight();
        if(weight < 0){
            return new ResponseEntity<>(new StringResponse("You cant have a negative weight value"), HttpStatus.BAD_REQUEST);
        }

        try {
            String country = boxModel.getCountry();
            Double multiplier = getCountryMultiplier(country);
            boxModel.setShippingCost((double) Math.round((weight * multiplier)));

            _boxRepository.save(boxModel);
            return ResponseEntity.status(HttpStatus.OK).body(new StringResponse("Adding a box was successful")); //new ResponseEntity<>(new StringResponse("Adding a box was successful"), HttpStatus.OK);
        } catch (Exception e){
            return new ResponseEntity<>(new StringResponse(e.getMessage()), HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public List<BoxViewModel> getAllBoxes() {
        return _boxRepository.getAllBoxes();
    }

    @Override
    public Double getCountryMultiplier(String country) throws Exception{
        if(country.isEmpty() || country == "" || country == null){
            throw new Exception("You have not provided a country");
        }

        Double multiplier = costMultipliers.get(country);

        if(multiplier == null){
            throw new Exception("Country does not exist in our shipping list");
        }

        return  multiplier;
    }
}
