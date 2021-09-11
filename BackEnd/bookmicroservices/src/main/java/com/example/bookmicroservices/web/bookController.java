package com.example.bookmicroservices.web;

import com.example.bookmicroservices.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import com.example.bookmicroservices.services.BookService;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/book")
public class bookController {

    @Autowired
    private BookService bookService;


    @PostMapping("/addbook")
    public ResponseEntity<?> createNewBook(@Valid @RequestBody Book book, BindingResult result){

        if(result.hasErrors()){
            return new ResponseEntity<String>("Invalid Book Entry", HttpStatus.BAD_REQUEST);
        }
        Book newBook = bookService.saveOrUpdateBook(book);
        return  new ResponseEntity<Book>(newBook, HttpStatus.CREATED);
    }

}