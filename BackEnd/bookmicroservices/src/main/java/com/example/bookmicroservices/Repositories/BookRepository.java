package com.example.bookmicroservices.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.bookmicroservices.model.Book;



    @Repository
    public interface BookRepository extends CrudRepository<Book, Long> {

        Book findByTitle(String title);
        Book getById(Long id);


    }
