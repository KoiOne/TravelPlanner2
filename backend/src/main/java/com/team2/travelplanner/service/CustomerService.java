package com.team2.travelplanner.service;

import com.team2.travelplanner.dao.CustomerDao;
import com.team2.travelplanner.entity.Customer;
import com.team2.travelplanner.entity.TravelList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    private CustomerDao customerDao;

    @Autowired
    public CustomerService(CustomerDao customerDao) {
        this.customerDao = customerDao;
    }

    public void signUp(Customer customer) {
        TravelList travleList = new TravelList();
        customer.setTravelList(travleList);
        customer.setEnabled(true);
        customerDao.signUp(customer);
    }

    public Customer getCustomer(String email) {
        return customerDao.getCustomer(email);
    }
}

