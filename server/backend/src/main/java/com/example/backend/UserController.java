package com.example.backend;




import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("api/v1")
@CrossOrigin(origins = "http://localhost:5175")
public class UserController {

    @Value("${secret}")
    private String secret_key;
    @Value("${user}")
    private String USERNAME;
    @Value("${password}")
    private String PASSWORD;

    @PostMapping("/login")
    public ResponseEntity<?> UserLogin(@RequestBody Map<String,String> credentials) {
        String username =credentials.get("username");
        String password = credentials.get("password");
        Map<String, String> response = new HashMap<>();
        long issueddate_mil = System.currentTimeMillis();



        if (username == null || password == null) {

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username and password must be provided");
        }


        if (username.equals(USERNAME) && password.equals(PASSWORD)) {
            Claims claims = Jwts.claims().setIssuer(username).setIssuedAt(new Date(issueddate_mil));
            String token  = Jwts.builder().setClaims(claims).setExpiration(new Date(issueddate_mil+ 24*60*60*1000)).signWith(SignatureAlgorithm.HS256,secret_key).compact();
            response.put("token", token);
            response.put("status", "200");
            return ResponseEntity.status(HttpStatus.OK).body(response);

        }
        else {
            System.out.println(username.equals(USERNAME));
            System.out.println(password.equals(PASSWORD));
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");

        }

    }
}


