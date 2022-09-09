package com.team2.travelplanner.controller;


import com.team2.travelplanner.entity.Customer;
import com.team2.travelplanner.entity.TravelList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
public class SaveController {

//    @Autowired
//    private CustomerService customerservice;


    @RequestMapping(value = "save", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.CREATED)
    public void save(@RequestBody TravelList travelList, Customer customer){
//        customerservice.saveTravelList(travelList);
    }
}
