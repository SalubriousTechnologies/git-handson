function add() {
  return 2 + 9;
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
