package com.example.bookmicroservices.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/")
public class bookController {


    public String HelloWorld() {
        return "HelloWorld";
    }

}