package com.example.bookmicroservices.web;

import com.example.bookmicroservices.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.bookmicroservices.services.BookService;

@RestController
@RequestMapping("/api/book")
public class bookController {

    @Autowired
    private BookService bookService;


    @PostMapping("")
    public ResponseEntity<Book> createNewBook(@RequestBody Book book){

        Book newBook = bookService.saveOrUpdateBook(book);

        return  new ResponseEntity<Book>(newBook, HttpStatus.CREATED);
    }

}