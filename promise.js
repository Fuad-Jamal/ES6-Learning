const waka = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Waka Waka!");
    rej("don kd");
  }, 2000);
});
// console.log(waka)
waka.then((res) => {
    console.log("promise olevoir");
    console.log(res);
    console.log(waka)
    return "impala";
  })
  .then((chr) => {
    console.log(chr);
  })
  .catch((error) => {
    console.log(error);
    console.log(waka)
  });
