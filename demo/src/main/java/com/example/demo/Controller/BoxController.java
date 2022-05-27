package com.example.demo.Controller;

import com.example.demo.Model.BoxModel;
import com.example.demo.Model.BoxViewModel;
import com.example.demo.Service.IBoxService;
import com.example.demo.StringResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class BoxController {

    @Autowired
    IBoxService _boxService;

    public BoxController(IBoxService service){
        _boxService = service;
    }


    @GetMapping("/boxes")
    public ResponseEntity<List<BoxViewModel>> getAllBoxes(){

        try{
            List<BoxViewModel> result = _boxService.getAllBoxes();

            if(result.isEmpty()){
                 return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "/postbox",
            consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<StringResponse> postBox(@RequestBody BoxModel boxModel){
        return _boxService.save(boxModel);
    }

}
