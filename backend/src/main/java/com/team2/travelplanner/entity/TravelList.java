package com.team2.travelplanner.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "travelList")

public class TravelList implements Serializable {
    private static final long serialVersionUID = 8436097833452420298L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    //@OneToMany(mappedBy = "spotsitem",  cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    private String[] travelList;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

//    public String[] getTravleList() {
//        return travleList;
//    }
}
