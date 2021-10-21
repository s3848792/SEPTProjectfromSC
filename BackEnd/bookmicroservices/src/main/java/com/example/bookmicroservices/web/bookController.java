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
public class bookController {//controller, handles interaction between the react frontend and backend service

    @Autowired
    private BookService bookService;//declares bookservice variable


    @PostMapping("/addbook")//adds new book to backend
    public ResponseEntity<?> createNewBook(@Valid @RequestBody Book book, BindingResult result){
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

    @ResponseBody
    @GetMapping("/all")//returns book list to frontend
    public Iterable<Book> getBook() {
        System.out.println("Getting all Books");
        return bookService.getBooks();
    }


    @GetMapping("get/{id}")//returns book given its id
    public Book getBookByID(@PathVariable(value = "id") long bookId){
        System.out.println("The get book thing has been called and is running from backed");
        Book b = bookService.loadBookById(bookId);
        System.out.println("The request for a book has been sent with title below");
        System.out.println(b.getTitle());

        return b;
    }
}