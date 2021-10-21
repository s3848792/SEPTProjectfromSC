package com.example.bookmicroservices.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.bookmicroservices.Repositories.BookRepository;
import com.example.bookmicroservices.model.Book;
import org.springframework.transaction.annotation.Transactional;

//webservice for books models, actions which can be performed by the backend
@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book saveOrUpdateBook(Book book) {//saves book information as either new book or updates existing model
        return bookRepository.save(book);
    }

    public Iterable<Book> getBooks() { return bookRepository.findAll(); }//returns list of books in database

    @Transactional
    public Book loadBookById(Long id){//returns copy of book in database
        Book book = bookRepository.getById(id);
        return book;
    }
}
