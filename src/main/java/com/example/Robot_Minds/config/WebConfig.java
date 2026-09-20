package com.example.Robot_Minds.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Serves admin-uploaded media from the ./uploads directory at /uploads/**.
 * Files live outside the classpath (unlike src/main/resources/static) so
 * uploads persist across rebuilds and don't get bundled into the jar.
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:uploads/");
    }
}