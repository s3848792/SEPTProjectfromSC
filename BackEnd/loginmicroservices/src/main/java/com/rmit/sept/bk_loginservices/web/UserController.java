package com.rmit.sept.bk_loginservices.web;


import com.rmit.sept.bk_loginservices.model.User;
import com.rmit.sept.bk_loginservices.payload.JWTLoginSucessReponse;
import com.rmit.sept.bk_loginservices.payload.LoginRequest;
import com.rmit.sept.bk_loginservices.security.JwtTokenProvider;
import com.rmit.sept.bk_loginservices.services.MapValidationErrorService;
import com.rmit.sept.bk_loginservices.services.UserService;
import com.rmit.sept.bk_loginservices.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

import static com.rmit.sept.bk_loginservices.security.SecurityConstant.TOKEN_PREFIX;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    private UserService userService;

    @Autowired
    private UserValidator userValidator;


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult result){
        System.out.println("\n\n\n---A person is being added---\n\n\n");
        // Validate passwords match
        userValidator.validate(user,result);
        System.out.println("Validation of person done");
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        System.out.println("errorMap of person done");

        if(errorMap != null) {
            System.out.println("Damn its returning an error map");
            System.out.println(errorMap);
            return errorMap;
        }
        System.out.println("No errors occured");
        User newUser = userService.saveUser(user);
        System.out.println("---Returning from method---\n\n\n");
        return  new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }


    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;



    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest, BindingResult result){
        System.out.println("Login initiated...");
        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;
        System.out.println("did not return at start. Initiating");
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );
        System.out.println("Authentication done");
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX +  tokenProvider.generateToken(authentication);
        System.out.println("All done and now returning");
        return ResponseEntity.ok(new JWTLoginSucessReponse(true, jwt));
    }

}
