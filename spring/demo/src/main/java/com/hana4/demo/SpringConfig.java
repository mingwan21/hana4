package com.hana4.demo;

import java.util.Locale;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;

import com.hana4.demo.dao.ApiDAO;
import com.hana4.demo.dao.ApiDAOImpl;
import com.hana4.demo.repository.ApiRepository;
import com.hana4.demo.repository.JpaUserRepository;
import com.hana4.demo.repository.UserRepository;
import com.hana4.demo.service.UserService;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import jakarta.persistence.EntityManager;

@Configuration
public class SpringConfig {

	private final EntityManager em;
	private final ApiRepository apiRepository;

	public SpringConfig(EntityManager em, ApiRepository apiRepository) {
		this.em = em;
		this.apiRepository = apiRepository;
	}

	@Bean
	public UserService userService() {
		return new UserService(userRepository());
	}

	@Bean
	public UserRepository userRepository() {
		// return new VolatileUserRepository();
		return new JpaUserRepository(em);
	}

	@Bean
	public ApiDAO apiDAO() {
		return new ApiDAOImpl(apiRepository);
	}

	@Bean
	public LocaleResolver localeResolver() {
		SessionLocaleResolver sessionResolver = new SessionLocaleResolver();
		sessionResolver.setDefaultLocale(Locale.KOREAN);
		return sessionResolver;
	}

	@Bean
	public OpenAPI openAPI() {
		return new OpenAPI()
			.components(new Components())
			.info(info());
	}

	private Info info() {
		return new Info()
			.version("0.1.0")
			.title("Demo Api Spec.")
			.description("...");
	}

}
