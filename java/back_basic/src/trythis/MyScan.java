package trythis;

import java.util.Scanner;

// MyScan ms = new MyScan();
public class MyScan {
	public static void main(String[] args) {
		scanTemp();
	}

	private static void scanTemp() {
		final int currTemp = 20;
		Scanner scanner = new Scanner(System.in);
		System.out.print("수심 : ");
		double depth = scanner.nextDouble();
		double result = currTemp - Math.floor(depth / 10) * 0.7;
		System.out.println(result);
	}

	private static void scanUserInfo() {
		Scanner scanner = new Scanner(System.in);
		System.out.print("당신의 이름을 입력하세요 ==> ");
		String name = scanner.nextLine();
		System.out.print("당신의 주소를 입력하세요 ==> ");
		String addr = scanner.nextLine();
		System.out.print("당신의 키를 입력하세요 ==> ");
		double height = scanner.nextDouble();
		System.out.print("당신의 나이를 입력하세요 ==> ");
		int age = scanner.nextInt();

		System.out.println("이름 : " + name);
		System.out.println("주소 : " + addr);
		System.out.println("키 : " + height);
		System.out.println("나이 :" + age);
	}
}
