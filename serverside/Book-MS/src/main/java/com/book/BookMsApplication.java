package com.book;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
//@EnableDiscoveryClient
public class BookMsApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookMsApplication.class, args);
		System.out.println("hello");
	}

}
