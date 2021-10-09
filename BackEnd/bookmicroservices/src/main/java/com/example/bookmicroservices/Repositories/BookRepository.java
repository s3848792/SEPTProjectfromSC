package com.example.bookmicroservices.Repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.bookmicroservices.model.Book;

    @Repository
    public interface BookRepository extends CrudRepository<Book, Long> {

        Book findByTitle(String title);
        Book getById(Long id);

    @Query(value = "Select * FROM book WHERE "
        + "MATCH(title, author, ISBN)"
        + "AGAINST (?1)",
        nativeQuery = true)
    Iterable<Book> search (String keyword);

    }
