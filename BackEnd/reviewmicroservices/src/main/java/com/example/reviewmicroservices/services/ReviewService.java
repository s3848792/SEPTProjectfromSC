package com.example.reviewmicroservices.services;

import com.example.reviewmicroservices.Repositories.ReviewRepository;
import com.example.reviewmicroservices.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    //Saves or updates a review in the database
    public Review saveOrUpdateReview(Review review) {
        return reviewRepository.save(review);
    }

    //Gets all reviews from the database
    public Iterable<Review> getReviews() { return reviewRepository.findAll(); }

    //Gets all reviews for a given book id
    public Iterable<Review> getByBookID(String id){
        return reviewRepository.getByBookID(id);
    }

}
