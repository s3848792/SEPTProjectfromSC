package com.example.bookmicroservices.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.bookmicroservices.model.Book;

public interface BookRepository {


    @Repository
    public interface UserRepository extends CrudRepository<Book, Long> {

        Book findByTitle(String title);
        Book getById(Long id);
    }
}
