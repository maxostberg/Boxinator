package com.example.demo;

import com.example.demo.Model.BoxViewModel;
import com.example.demo.Service.IBoxService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest
public class BoxControllerIntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    IBoxService boxService;

    BoxViewModel BOX1 = new BoxViewModel(1l, "Box1", 1.5d, "255,255,255", 14d);
    BoxViewModel BOX2 = new BoxViewModel(2l, "Box2", 2d, "255,230,255", 16d);
    BoxViewModel BOX3 = new BoxViewModel(3l, "Box3", 2.7d, "255,255,290", 1.4d);

    @Test
    void shouldGetAllBoxes() throws Exception{
        List<BoxViewModel> someBoxes = new ArrayList<>(Arrays.asList(BOX1, BOX2, BOX3));

        Mockito.when(boxService.getAllBoxes()).thenReturn(someBoxes);
        mockMvc.perform(get("/api/boxes"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(3)))
                .andExpect(jsonPath("$[2].name", is("Box3")));
    }

}
