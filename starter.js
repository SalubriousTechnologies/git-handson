function add(a, b) {
  return a + b;
}

const shivansh = () => {
  console.log("Hi There !!");
};

function looper() {
  return Array(5)
    .keys()
    .map((_i) => ".");
}
console.log(add());

console.log(looper());
