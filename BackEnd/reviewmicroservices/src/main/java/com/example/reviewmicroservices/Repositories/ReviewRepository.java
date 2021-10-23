package com.example.reviewmicroservices.Repositories;

import com.example.reviewmicroservices.model.Review;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends CrudRepository<Review, Long> {

    Review getById(Long id);

    //Query to get all books with the given book id from the database.
    @Query(value = "SELECT * FROM review WHERE bookid = :bid", nativeQuery = true)
    Iterable<Review> getByBookID (@Param("bid") String bid);
}
