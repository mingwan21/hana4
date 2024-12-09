package com.hana4.demo.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PostDTO {
	private String id;
	private String title;
	private String writer;
	private LocalDateTime createdate;
	private LocalDateTime workdate;
	private String body;
}
