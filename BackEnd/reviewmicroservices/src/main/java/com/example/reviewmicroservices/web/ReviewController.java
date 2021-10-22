package com.example.reviewmicroservices.web;

import com.example.reviewmicroservices.model.Review;
import com.example.reviewmicroservices.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/review")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;


    @PostMapping("/addreview")
    public ResponseEntity<?> createNewReview(@Valid @RequestBody Review review, BindingResult result){
        System.out.println("Adding Review method Called");
        if(result.hasErrors()){
            System.out.println("It has errors. Here they are");
            System.out.println(result);
            return new ResponseEntity<String>("Invalid review Entry", HttpStatus.BAD_REQUEST);
        }
        System.out.println("Making the updated review");
        Review newReview = reviewService.saveOrUpdateReview(review);
        System.out.println("new review is created. Now returning");
        return  new ResponseEntity<Review>(newReview, HttpStatus.CREATED);
    }

    @ResponseBody
    @GetMapping("/all")
    public Iterable<Review> getReview() {
        System.out.println("Getting all reviews");
        return reviewService.getReviews();
    }


    @GetMapping("/getbybookid/{bookid}")
    public Iterable<Review> search(@PathVariable(value = "bookid") String keyword, Model model){
        System.out.println("Searching for reviews with id: " + keyword);
        Iterable<Review> searchResult = reviewService.getByBookID(keyword);
        model.addAttribute("keyword", keyword);
        model.addAttribute("searchResult", searchResult);
        return searchResult;
    }
}