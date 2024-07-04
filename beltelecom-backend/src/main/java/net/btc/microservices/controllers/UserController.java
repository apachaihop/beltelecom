package net.btc.microservices.controllers;

import net.btc.microservices.DataBase;
import net.btc.microservices.entities.Network;
import net.btc.microservices.entities.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/users")
public class UserController {

    @PostMapping
    @ResponseBody
    public ResponseEntity<User> postUser(@RequestBody User user) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException {
        
          try {
        String jsonUser = new ObjectMapper().writeValueAsString(user);
        System.out.println("Received User: " + jsonUser);
    } catch (JsonProcessingException e) {
        e.printStackTrace();
    }
        System.out.println(user.getId());
        System.out.println(user.getDescription());
        System.out.println(user.getName());
        System.out.println(user.getPhoto());
        for (Network network : user.getNetworks()) {
            System.out.println(network.getNetwork());
            System.out.println(network.getUrl());
        }
        User us = DataBase.persistObject(user);
        if(us.getNetworks() == null)
            System.out.println("Networks is null after persistobject!!!");
        return ResponseEntity.ok(us);
    }

    @PostMapping(value = "/find")
    @ResponseBody
    public ResponseEntity<List<User>> findUser(@RequestBody User User) {
        List<User> users = (List<User>) DataBase.getObjectQueryResult(User);

        return ResponseEntity.ok(users);
    }


}
