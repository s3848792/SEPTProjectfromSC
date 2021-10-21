package com.example.bookmicroservices.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.bookmicroservices.model.Book;
//repository for the book model

    @Repository
    public interface BookRepository extends CrudRepository<Book, Long> {

        Book findByTitle(String title);//method to return single book using title as keyword
        Book getById(Long id);//method to return single book using ID
    }
