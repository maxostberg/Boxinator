package com.example.demo;

import com.example.demo.Controller.BoxController;
import com.example.demo.Model.BoxViewModel;
import com.example.demo.Service.BoxService;
import com.example.demo.Service.IBoxService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class BoxControllerTest {
    BoxViewModel BOX1 = new BoxViewModel(1l, "Box1", 1.5d, "255,255,255", 14d);
    BoxViewModel BOX2 = new BoxViewModel(2l, "Box2", 2d, "255,230,255", 16d);
    BoxViewModel BOX3 = new BoxViewModel(3l, "Box3", 2.7d, "255,255,290", 1.4d);

    @Test
    public void get_all_boxes_success() throws Exception {
        List<BoxViewModel> someBoxes = new ArrayList<>(Arrays.asList(BOX1, BOX2, BOX3));

        IBoxService boxService = Mockito.mock(BoxService.class);
        Mockito.when(boxService.getAllBoxes()).thenReturn(someBoxes);
        BoxController boxController = new BoxController(boxService);

        Assertions.assertEquals(new ResponseEntity<>(someBoxes, HttpStatus.OK), boxController.getAllBoxes());
    }
}
