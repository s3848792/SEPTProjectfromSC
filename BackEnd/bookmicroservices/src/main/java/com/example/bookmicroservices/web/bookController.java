package com.example.bookmicroservices.web;

import com.example.bookmicroservices.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.ui.Model;
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
    @GetMapping("/all")
    public Iterable<Book> getBook() {
        System.out.println("Getting all Books");
        return bookService.getBooks();
    }


    @GetMapping("get/{id}")
    public Book getBookByID(@PathVariable(value = "id") long bookId){
        System.out.println("The get book thing has been called and is running from backed");
        Book b = bookService.loadBookById(bookId);
        System.out.println("The request for a book has been sent with title below");
        System.out.println(b.getTitle());

        return b;
    }

    @GetMapping("/search/{keyword}")
    public Iterable<Book> search(@PathVariable(value = "keyword") String keyword, Model model){
        System.out.println("keyword: " + keyword);
        Iterable<Book> searchResult = bookService.search(keyword);
//        model.addAttribute("keyword", keyword);
//        model.addAttribute("searchResult", searchResult);
        return searchResult;
    }
}