package com.realTime.realTime;

import org.springframework.http.MediaType;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import java.util.ArrayList;
import java.util.List;

@RestController
public class EventController {

    @CrossOrigin
    @GetMapping(value = "/api/events",  produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<ServerSentEvent> pushData(){
        List<String> fruitList = new ArrayList<>();
        fruitList.add("Apple");
        fruitList.add("Orange");
        return Flux.fromIterable(fruitList)
                .map(s -> ServerSentEvent.builder(s).build());
    }

}
