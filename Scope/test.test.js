console.log("function");
try {
  function fun() {
    var a = 3;
    console.log(a);
  }

  fun();
} catch (err) {
  console.log(err.name + err.message);
}

console.log("block");
try {
  if (true) {
    console.log(a);
  }
} catch (err) {
  console.log(err.name + err.message);
}

console.log("global");
try {
  console.log(a);
} catch (err) {
  console.log(err.name + err.message);
}
