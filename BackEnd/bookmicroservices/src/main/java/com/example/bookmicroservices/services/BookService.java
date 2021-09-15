package com.example.bookmicroservices.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.bookmicroservices.Repositories.BookRepository;
import com.example.bookmicroservices.model.Book;






    @Service
    public class BookService {

        @Autowired
        private BookRepository bookRepository;

        public Book saveOrUpdateBook(Book book) {
            return bookRepository.save(book);
        }
    }
