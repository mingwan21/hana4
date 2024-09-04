const moment = require("moment");
const assert = require("assert");

//1) 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.
function p1() {
  const time1 = moment("1970-01-01");
  const time2 = moment("1970-01-02");
  const seconds = moment.duration(time2.diff(time1)).asSeconds();
  console.log("🚀 ~ p1 ~ seconds:", seconds);
}
function ex1() {}

//assert.strictEqual(ex1(), 86400);

//2) 이 달의 날짜 5개를 무작위(rand)로 만들어 역순으로 정렬하시오.
function p2() {
  for (let i = 0; i < 5; i++) {
    const rand = Math.floor(Math.random() * 30 + -2);
    const day = moment().add(rand, "days").format("L");
    console.log("🚀 ~ p2 ~ day:", day);
  }
}

function ex2() {
  const d = new Date();
  d.setMonth(d.getMonth() + 1);
  d.setDate(0);

  const lastDate = d.getDate();
  const r1 = Array(5).fill().map(rand(1, lastDate));
  console.log("🚀 ~ ex2 ~ d:", d);
}
//3) 내년(2025년)의 오늘(9월 3일)의 요일을 출력하시오.
function p3() {
  const day = moment("2025-09-03").format("dddd");
  console.log("🚀 ~ p3 ~ day:", day);
}

//4) 오늘(9월 3일)로 부터 100일 후의 날짜는?
function p4() {
  const day = moment().add(100, "days").format("L");
  console.log("🚀 ~ p4 ~ day:", day);
}
moment().format("LLLL"); // Tuesday, August 30, 2022 4:45 PM    ⇐⇒ .format('llll')
moment().format("MMM MMMM Do D DD"); // Aug August 1st 1 01
moment.locale("ko"); // format ⇒ 2022년 8월 30일 화요일 오후 4:45
moment().format("MMM MMMM Do D DD"); // 8월 8월 1일 1 01
const d0 = new Date(0);
const m = moment("2022-12-04");
moment(d0); // 1970년 1월 1일 목요일 오전 9:00
//moment(d0).tz("America/Los_Angeles").format("LLL"); // 1969년 12월 31일 오후 4:00
moment().format("YYYY-MM-DD HH:mm:ss"); //
moment().format("YYYY-MM-DD HH:mm:ss (dd)"); //
moment().format("YYYY-MM-DD HH:mm:ss (dddd)"); //
moment().format("YY-M-D"); //
moment().format("h:mm a"); //       cf.'a h시 mm분'

moment().startOf("years"); // cf. endOf()
moment().add(3, "days"); // cf. subtract()
moment().diff(moment("1973-10-05"), "M"); // 586
moment(new Date(0)).fromNow(); // 53년 전

p1();
p2();
p3();
p4();
