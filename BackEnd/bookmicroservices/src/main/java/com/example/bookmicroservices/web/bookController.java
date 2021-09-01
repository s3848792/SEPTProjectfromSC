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
        System.out.println("\n\n\n---Book Being Added---");
        System.out.println("Author");
        System.out.println(book.getAuthor());
        System.out.println("\nISBN");
        System.out.println(book.getISBN());
        System.out.println("\nID");
        System.out.println(book.getId());
        System.out.println("\nTitle");
        System.out.println(book.getTitle());
        System.out.println("\nCreated At");
        System.out.println(book.getCreate_At());
        if(result.hasErrors()){
            System.out.println("It has errors. Here they are");
            System.out.println(result);
            return new ResponseEntity<String>("Invalid Book Entry", HttpStatus.BAD_REQUEST);
        }
        System.out.println("Making the updated book");
        Book newBook = bookService.saveOrUpdateBook(book);
        System.out.println("new book is created. Now returning");
        return  new ResponseEntity<Book>(newBook, HttpStatus.CREATED);
    }


}