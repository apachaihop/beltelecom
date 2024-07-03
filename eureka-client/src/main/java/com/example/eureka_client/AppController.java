package com.example.eureka_client;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import com.example.eureka_client.entities.Filial;
import com.example.eureka_client.entities.Tariff;
import com.example.eureka_client.entities.User;



import java.util.List;

@RestController
@RequestMapping("/api")
public class AppController {

    @Autowired
    private DiscoveryClient discoveryClient;

    private final RestTemplate restTemplate = new RestTemplate();

    @PostMapping("/filials")
    public ResponseEntity<Filial> postFilial(@RequestBody Filial filial) {
        String url = getServiceUrl("MICROSERVICES") + "/filials";
        ResponseEntity<Filial> response = restTemplate.postForEntity(url, filial, Filial.class);
        return ResponseEntity.ok(response.getBody());
    }

    @PostMapping("/filials/find")
    public ResponseEntity<List<Filial>> getFilials(@RequestBody Filial filial) {
        String url = getServiceUrl("MICROSERVICES") + "/filials/find";
        ResponseEntity<List> response = restTemplate.postForEntity(url, filial, List.class);
        return ResponseEntity.ok(response.getBody());
    }

    @PostMapping("/tariffs")
    public ResponseEntity<Tariff> postTariff(@RequestBody Tariff tariff) {
        String url = getServiceUrl("MICROSERVICES") + "/tariffs";
        ResponseEntity<Tariff> response = restTemplate.postForEntity(url, tariff, Tariff.class);
        return ResponseEntity.ok(response.getBody());
    }

    @PostMapping("/tariffs/find")
    public ResponseEntity<List<Tariff>> getTariffs(@RequestBody Tariff tariff) {
        String url = getServiceUrl("MICROSERVICES") + "/tariffs/find";
        ResponseEntity<List> response = restTemplate.postForEntity(url, tariff, List.class);
        return ResponseEntity.ok(response.getBody());
    }

    @PostMapping("/users")
    public ResponseEntity<User> postUser(@RequestBody User user) {
        String url = getServiceUrl("MICROSERVICES") + "/users";
        ResponseEntity<User> response = restTemplate.postForEntity(url, user, User.class);
        return ResponseEntity.ok(response.getBody());
    }

    @PostMapping("/users/find")
    public ResponseEntity<List<User>> getUsers(@RequestBody User user) {
        String url = getServiceUrl("MICROSERVICES") + "/users/find";
        ResponseEntity<List> response = restTemplate.postForEntity(url, user, List.class);
        return ResponseEntity.ok(response.getBody());
    }

    private String getServiceUrl(String serviceName) {
        List<ServiceInstance> instances = discoveryClient.getInstances(serviceName);
        if (instances != null && !instances.isEmpty()) {
            return instances.get(0).getUri().toString();
        }
        return null;
    }
}

