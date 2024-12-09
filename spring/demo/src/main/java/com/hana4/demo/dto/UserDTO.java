package com.hana4.demo.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude = "age")
@EqualsAndHashCode
@Builder
public class UserDTO {
	private Long id;

	@Schema(description = "고개명", example = "홍길동")
	private String name;

	@Schema(description = "나이", example = "33")
	private short age;

	// @Singular("user")
	// private List<User> list;
	// builder().id(0).name(xx).user(hong).user(kim).list()
}
