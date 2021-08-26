package com.example.bookmicroservices.web;

import com.example.bookmicroservices.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import com.example.bookmicroservices.services.BookService;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/books")
public class bookController {

    @Autowired
    private BookService bookService;


    @PostMapping("")
    public ResponseEntity<?> createNewBook(@Valid @RequestBody Book book, BindingResult result){
        if(result.hasErrors()){
            return new ResponseEntity<String>("Invalid Book Entry", HttpStatus.BAD_REQUEST);
        }
        Book newBook = bookService.saveOrUpdateBook(book);

        return  new ResponseEntity<Book>(newBook, HttpStatus.CREATED);
    }
    @DeleteMapping("")
    public ResponseEntity<?> deleteBook(@Valid @RequestBody Book book, BindingResult result){

        return  new ResponseEntity<Book>(book, HttpStatus.ACCEPTED);
    }

}