package oop;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

public class Person extends SuperPerson {
	private final double age;
	private final String addr;

	public Person() {
		this("엄마의 아이", 1);
		// System.out.println("Person1");
	}

	public Person(String name, int age) {
		this(name, age, "");
		// super();
		// System.out.println("Person2");
	}

	public Person(String name, int age, String addr) {
		super(name, age);
		this.age = age;
		this.addr = addr;
	}

	@Override
	public int getAge() {
		System.out.println("age = " + age);
		return (int)age;
	}

	public String getAddr() {
		return this.addr;
	}

	public void walk() {
		System.out.println("Walking!!");
	}

	@Override
	public boolean equals(Object person) {
		return super.equals(person) && ((Person)person).getAddr().equals(this.getAddr());
	}

	@Override
	public int hashCode() {
		return Objects.hash(super.hashCode(), addr);
	}

	@Override
	public String toString() {
		return "Person{ name='%s', age=%d, addr='%s'}".formatted(getName(), getAge(), getAddr());
	}

	public static void main(String[] args) {
		Set<Person> set = new HashSet<>();
		set.add(new Person("Conan", 10));
		set.add(new Person("Conan", 10));
		System.out.println("set.size() = " + set.size());
	}
}
