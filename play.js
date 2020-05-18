const fetchData = (call) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!" + " " + call)
    }, 1000 * call)
  })

  return promise
}

const fetchDataAsync = (call) => {
  setTimeout(() => {
    console.log("Done !" + " " + call)
  }, call * 1000)
}


// if you return anything in then it is also a promise (it will convert into a promise which resolves immediately)

setTimeout(() => {
  console.log("Timer is Done!")


  // fetchDataAsync(1)
  // fetchDataAsync(2)
  // fetchDataAsync(4)
  // fetchDataAsync(3)
  // fetchDataAsync(6)
  // fetchDataAsync(5)



  fetchData(1).then((text) => {
    console.log(text)
    return fetchData(2)
  }).then((text2) => {
    console.log(text2)
    return fetchData(4)
  }).then(text3 => {
    console.log(text3)
    return fetchData(3)
  })
    .then(text4 => {
      console.log(text4)
      return fetchData(6)
    }).then(text5 => {
      console.log(text5)
      return fetchData(5)
    }).then(text6 => {
      console.log(text6)
    })


}, 2000);

console.log("Hello !")
console.log("Hi!")