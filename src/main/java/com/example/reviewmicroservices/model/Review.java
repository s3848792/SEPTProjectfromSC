package com.example.reviewmicroservices.model;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.validation.constraints.NotBlank;
import java.util.Date;


@Entity
public class Review {
    @Id
    private Long id;

    @NotBlank(message="Book ID is required")
    private String bookID;

    @NotBlank(message="User ID is required")
    private String userID;

    @NotBlank(message="Review is required")
    private String review;

    private int rating;

    private Date create_At;


    public Review() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBookID() { return bookID; }

    public void setBookID(String bookID) { this.bookID = bookID; }

    public String getUserID() { return userID; }

    public void setUserID(String userID) { this.userID = userID; }

    public String getReview() { return review; }

    public void setReview(String review) { this.review = review; }

    public int getRating() { return rating; }

    public void setRating(int rating) { this.rating = rating; }

    public Date getCreate_At() {
        return create_At;
    }

    public void setCreate_At(Date create_At) {
        this.create_At = create_At;
    }


    @PrePersist
    protected void onCreate() {
        this.create_At = new Date();
    }
}
