package com.bootcamp.backsistemagestion;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
public class BackSistemaGestionApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackSistemaGestionApplication.class, args);
		
		/* 
		 * 
		 * PARA FORMATEAR LOS CREATED Y UPDATED
		 * 
		ZoneId zone = ZoneId.of("America/Argentina/Buenos_Aires"); 
		Instant i = Instant.now();
		ZonedDateTime inArg = ZonedDateTime.ofInstant(i, zone);
		System.out.println("Ahora es: " + inArg);
		
		 DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
	     String formattedDateTime = inArg.format(formatter);

	     System.out.println("Fecha y hora en Argentina: " + formattedDateTime);
	     */
	    }
	

	@Bean
	public CorsFilter corsFilter() {
	     CorsConfiguration corsConfiguration = new CorsConfiguration();
	     corsConfiguration.setAllowCredentials(true);
	     corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
	     corsConfiguration.setAllowedHeaders(Arrays.asList("Origin", "Access-Control-Allow-Origin", "Content-Type",
	       "Accept", "Authorization", "Origin, Accept", "X-Requested-With",
	       "Access-Control-Request-Method", "Access-Control-Request-Headers"));
	     corsConfiguration.setExposedHeaders(Arrays.asList("Origin", "Content-Type", "Accept", "Authorization",
	       "Access-Control-Allow-Origin", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"));
	     corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
	     UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
	     urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);
	     return new CorsFilter(urlBasedCorsConfigurationSource);
	    }
}
