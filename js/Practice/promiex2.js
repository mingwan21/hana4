const promiseFn = (id = 1) =>
  new Promise((resolve, reject) => {
    console.log("id>>", id);
    if (id < 7) resolve(id + 1);
    else reject(new Error("어디로?" + id)); //else  안써도 됨.
  });

promiseFn()
  .then((res) => {
    console.log("res1>>", res);
    promiseFn(res); // Need Return the Promise Object!!

    if (ret instanceof Promise) return ret;
    else return Promise.resolve(ret);
    //return Promise.resolve(undefined);
  })
  .then((res) => {
    console.log("res2>>", res); // res가 undefined 이라면 ⇒ 여기서 throw 하면 될까?
    const error = new Error("xxx");
    //if (res === undefined) throw new Error('xxx');
    return Promise.reject();
  })
  .catch((err) => console.log("Error!!>>", err));
