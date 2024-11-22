for (let i = 0; i < 5; i++) {
  setTimeOut(() => console.log, 100, i);
}

for (var i = 0; i < 5; i++) {
  setTimeOut(() => console.log(i), 100);
}
