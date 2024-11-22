package com.hana4.demo.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.apache.coyote.BadRequestException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hana4.demo.domain.User;
import com.hana4.demo.service.UserService;

import org.springframework.ui.Model;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class UserController {

	private final UserService service;

	public UserController(UserService service) {
		this.service = service;
	}

	@GetMapping("/users")
	@ResponseBody
	public List<User> getUsers() {
		return service.getList();
	}

	@GetMapping("/users/list")
	public String userList(Model model) {
		model.addAttribute("users", service.getList());
		return "users/list";
	}

	@PostMapping("/users")
	@ResponseBody
	public User regist(@RequestBody User user) throws BadRequestException {
		System.out.println("user = " + user);
		Long newerId = service.regist(user);
		Optional<User> newer = service.getUser(newerId);
		if (newer.isPresent())
			return newer.get();
		else
			throw new BadRequestException("InsertError");
	}

	@GetMapping("/users/{id}")
	@ResponseBody
	public User getUser(@PathVariable("id")Long id, HttpServletResponse res) throws IOException {
		Optional<User> user = service.getUser(id);
		if (user.isPresent())
			return user.get();
		else {
			res.sendError(404, "Not Found");
			return null;
		}
	}

	private void checkExists(Long id, HttpServletResponse res) throws IOException {
		if(service.getUser(id).isEmpty()){
			res.sendError(404,"Not Found");
		}
	}

	@RequestMapping(value = {"/users/{id}"}, method={RequestMethod.PATCH,RequestMethod.PUT})
	public User updateUser(@RequestBody User user){
		return service.updateUser(user);
	}

	@DeleteMapping("/user/{id}")
	public User deleteUser(@PathVariable Long id, HttpServletResponse res) throws IOException {
		checkExists(id, res);
		return service.deleteUser(id);
	}
}
