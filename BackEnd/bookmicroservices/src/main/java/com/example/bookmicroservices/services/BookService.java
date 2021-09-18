package com.example.bookmicroservices.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.example.bookmicroservices.Repositories.BookRepository;
import com.example.bookmicroservices.model.Book;
import org.springframework.transaction.annotation.Transactional;


@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book saveOrUpdateBook(Book book) {
        return bookRepository.save(book);
    }

    public Iterable<Book> getBooks() { return bookRepository.findAll(); }

    @Transactional
    public Book loadBookById(Long id){
        Book book = bookRepository.getById(id);
        return book;
    }
}
