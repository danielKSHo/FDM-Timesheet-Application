package com.seprojectgroup41.timesheetAPI.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173/") // Can you insert whatever link that you like here
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowCredentials(true);

    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
