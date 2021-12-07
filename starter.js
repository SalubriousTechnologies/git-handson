function looper() {
  return Array(5)
    .keys()
    .map((_i) => ".");
}

function add(){
  return 2+5;
}
console.log(add());

console.log(looper());

const shivansh = () => {
  console.log("Hi There !!");
};

shivansh();