function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (var i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(facts) {
  var dec = []
  var i = 0

  while (i < facts.length) {
    dec.push(`${facts[i]}!!!`)
    i++
  }
  return dec
}

function iLoveTheBeatles(num) {
  var array = []
  do {
    array.push("I love the Beatles!")
    num++
  }
  while (num < 15)
  return array 
}
