const fetchDataAsync = (call) => {
  setTimeout(() => {
    console.log("Done !" + " " + call)
  }, call * 1000)
}

setTimeout(() => {
  console.log("Timer is Done!")


  fetchDataAsync(1)
  fetchDataAsync(2)
  fetchDataAsync(4)
  fetchDataAsync(3)
  fetchDataAsync(6)
  fetchDataAsync(5)


}, 2000);

console.log("Hello !")
console.log("Hi!")
