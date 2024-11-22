package thread;

public class ThreadMain {
	public static void main(String[] args) {
		MyThread myThread = new MyThread();
		Thread yourThread = new Thread(new YourThread());
		/*Thread t1 = new Thread(myThread);
		Thread t2 = new Thread(yourThread);*/
		myThread.start();
		yourThread.start();
	}
}
