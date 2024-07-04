package com.example.eureka_client;


import java.util.Collections;
import java.util.stream.Collectors;
import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;


@EnableDiscoveryClient
@SpringBootApplication
public class EurekaClientApplication {
    public static final int PORT = 8081;

    public static void main(String[] args) {

        SpringApplication app = new SpringApplication(EurekaClientApplication.class);
        app.setDefaultProperties(Collections
                .singletonMap("server.port", PORT));
        app.run(args);
    }
    
}
