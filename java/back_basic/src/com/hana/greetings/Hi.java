package com.hana.greetings;

import java.util.Scanner;

public class Hi {
	public static void main(String[] args) {
		printArr();
	}

	private static void printArr() {
		Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();
		int num = sc.nextInt();
		for (int i = 0; i < num; i++) {
			System.out.println(str);
		}
	}

	private static void playArray() {
		Scanner sc = new Scanner(System.in);
		System.out.print("학생 수를 입력하세요 : ");
		int num = sc.nextInt();
		int[] arr = new int[num];
		for (int i = 0; i < num; i++) {
			System.out.println(i + "번 학생의 점수를 입력하세요");
			arr[i] = sc.nextInt();
		}
		System.out.print(num + "명의 학생 성적은 다음과 같습니다.");
		for (int i = 0; i < num; i++) {
			System.out.print(arr[i] + " ");
		}
		System.out.println();
		for (int i = 0; i < num; i++) {
			int score = arr[i];
			char grade = switch (score / 10) {
				case 10, 9 -> 'A';
				case 8 -> 'B';
				case 7 -> 'C';
				case 6 -> 'D';
				default -> 'F';
			};
			System.out.println(i + "번 학생의 등급은 " + grade + "입니다.");
		}
	}

	private static void playSwitch() {
		Scanner sc = new Scanner(System.in);
		System.out.print("점수를 입력하시오 --> ");
		int score = sc.nextInt();
		char grade = switch (score / 10) {
			case 10, 9 -> 'A';
			case 8 -> 'B';
			case 7 -> 'C';
			case 6 -> 'D';
			default -> 'F';
		};
		System.out.println("학점 : " + grade);
		switch (grade) {
			case 'A', 'B':
				System.out.println("참 잘했음");
				break;
			case 'C', 'D':
				System.out.println("좀 더 노력해");
				break;
			case 'F':
				System.out.println("다음학기에 다시 만나요");
		}
	}
}
