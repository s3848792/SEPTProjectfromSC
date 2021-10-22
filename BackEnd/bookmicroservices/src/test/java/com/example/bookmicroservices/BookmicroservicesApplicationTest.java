package com.example.bookmicroservices;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(properties = "spring.main.lazy-initialization=true",
                classes = {BookmicroservicesApplication.class})
class BookmicroservicesApplicationTests {

    @Test
    void contextLoads() {
    }
}