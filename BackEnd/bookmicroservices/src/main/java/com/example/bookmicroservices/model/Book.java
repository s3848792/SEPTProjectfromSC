package com.example.bookmicroservices.model;

//The class model for 'Book' objects


import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;


@Entity
public class Book {
    @Id
    private Long id;//the identifier used as the primary key in the database

    @NotBlank(message="Title is Required")
    private String title;//title attribute
    @NotBlank(message="Author is Required")
    private String author;//author attribute
    @NotBlank(message="ISBN is Required")
    private String isbn;//ISBN attribute
    private Date create_At;//bate attributes for creation and latest update
    private Date update_At;


    public Book() {
    }

    //getter and setter methods
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getISBN() {
        return isbn;
    }

    public void setISBN(String isbn) {
        this.isbn = isbn;
    }

    public Date getCreate_At() {
        return create_At;
    }

    public void setCreate_At(Date create_At) {
        this.create_At = create_At;
    }

    public Date getUpdate_At() {
        return update_At;
    }

    public void setUpdate_At(Date update_At) {
        this.update_At = update_At;
    }

    @PrePersist//date setters for the database
    protected void onCreate() {
        this.create_At = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.update_At = new Date();
    }

//    Overridden method for setting id from int instead of long
    public void setId(int i) {
        Long x = Long.valueOf(i);
        this.id = x;
    }
}
