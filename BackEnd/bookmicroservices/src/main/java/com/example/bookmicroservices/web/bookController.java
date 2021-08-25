package com.example.bookmicroservices.web;

import com.example.bookmicroservices.model.Book;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.bookmicroservices.services.BookService;

@RestController
@RequestMapping("/api/Books")
public class bookController {


    @PostMapping("/addBook")
    public ResponseEntity<?> registerBook(@RequestBody Book book){

        Book newBook = BookService.saveBook(book);

        return  new ResponseEntity<Book>(newBook, HttpStatus.CREATED);
    }

}