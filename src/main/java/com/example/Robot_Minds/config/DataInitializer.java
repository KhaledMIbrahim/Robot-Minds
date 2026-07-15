package com.example.Robot_Minds.config;

import com.example.Robot_Minds.enums.Role;
import com.example.Robot_Minds.repository.UserRepository;
import com.example.Robot_Minds.user.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * Seeds a default admin account (and a demo regular user) on startup so the
 * app is usable immediately. Passwords are hashed via UserService, which
 * delegates to BCryptPasswordEncoder -- plain text is never persisted.
 *
 * Default credentials can be overridden with the ADMIN_USERNAME/ADMIN_EMAIL/
 * ADMIN_PASSWORD environment variables; change them after first login in a
 * real deployment.
 */
@Component
public class DataInitializer implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataInitializer.class);

    private final UserService userService;
    private final UserRepository userRepository;

    @Value("${app.admin.username:admin}")
    private String adminUsername;

    @Value("${app.admin.email:admin@robotminds.local}")
    private String adminEmail;

    @Value("${app.admin.password:admin123}")
    private String adminPassword;

    public DataInitializer(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) {
        if (!userRepository.existsByUsername(adminUsername)) {
            userService.register(adminUsername, adminEmail, adminPassword, Role.ROLE_ADMIN);
            log.info("Seeded default admin user '{}'. Change the password after first login.", adminUsername);
        }

        if (!userRepository.existsByUsername("demo")) {
            userService.register("demo", "demo@robotminds.local", "demo1234", Role.ROLE_USER);
            log.info("Seeded default demo user 'demo'.");
        }
    }
}
