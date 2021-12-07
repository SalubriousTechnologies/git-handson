function looper() {
  return Array(5)
    .keys()
    .map((_i) => ".");
}

console.log(looper());
