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

    public Review saveOrUpdateReview(Review review) {
        return reviewRepository.save(review);
    }

    public Iterable<Review> getReviews() { return reviewRepository.findAll(); }

    public Iterable<Review> getByBookID(String id){
        return reviewRepository.getByBookID(id);
    }

    @Transactional
    public Review loadReviewById(Long id){
        Review review = reviewRepository.getById(id);
        return review;
    }

}
