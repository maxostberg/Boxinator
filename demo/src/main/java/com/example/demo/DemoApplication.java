package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	/*@Bean
	public WebMvcAutoConfiguration configure(){
		return new WebMvcAutoConfiguration() {
			@Override
			public void addCorsMapping(CorsRegistry reg){
				reg.addMapping("/").allowedOrigins("*");
			}
		};
	}*/

}
