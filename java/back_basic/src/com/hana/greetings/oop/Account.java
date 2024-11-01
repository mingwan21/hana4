package com.hana.greetings.oop;

import java.util.Scanner;

public class Account {
	Scanner sc = new Scanner(System.in);

	private int accountNumber = 11111;
	private String accountName = "Conan";
	private double balance = 10000;

	public Account(int accountNumber, String accountName, double balance) {
		this.accountNumber = accountNumber;
		this.accountName = accountName;
		this.balance = balance;
	}

	public void display() {
		String output = """
			-----------------------
			계좌번호 : %d
			예금주 : %n
			
			"""
	}

	public Account() {
		String command = sc.nextLine();
		System.out.println("-----------------------");
		System.out.println("계좌번호 : " + accountName);
		System.out.println("예금주 :" + accountNumber);
		System.out.println("잔액 : " + balance);
		System.out.println("-----------------------");
		switch (command) {
			case "deposit":
				deposit(accountNumber);
				break;
			case "withdraw":
		}
	}

	public int getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(int accountNumber) {
		this.accountNumber = accountNumber;
	}

	public String getAccountName() {
		return accountName;
	}

	public void setAccountName(String accountName) {
		this.accountName = accountName;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public void deposit(double amnt) {
		double input = sc.nextDouble();
		amnt = balance + input;
	}

	public void withdraw(double amnt) {
		double input = sc.nextDouble();
		amnt = balance - input;
	}

	public void checkBalance() {

	}

	public void printBalance() {
	}
}
