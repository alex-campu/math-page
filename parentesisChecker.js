const checker = (str) => {
  let open = 0
  let closed = 0
  let sqr = 0
  let closedSqr = 0
  const arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === ')' || arr[0] === ']') return false
    if (arr[i] === '(') {
      open++
      for (let x = i; x < arr.length; x++) {
        if (arr[x] === ')') {
          closed++
          arr.splice(x, 1)
          arr.splice(i, 1)
          x = arr.length
          i--
        }
      }
    }
    if (arr[i] === '[') {
      sqr++
      for (let x = i; x < arr.length; x++) {
        if (arr[x] === ']') {
          closedSqr++
          arr.splice(x, 1)
          arr.splice(i, 1)
          x = arr.length
          i--
        }
      }
    }
  }
  if (open === closed && sqr === closedSqr) { return true } else { return false }
}

// console.log(checker('()()()()[()()()'))

const secondChecker = (str) => {
  const arr = str.split('')
  let n = 0
  const counters = [0, 0, 0, 0]
  while (n < arr.length) {
    if (arr[0] === ')') return false
    if (arr[n] === '(') {
      counters[0] += 1
      for (let i = n + 1; i + n < arr.length; i++) {
        counters[1] += 1
        if (arr[i] === ')') {
          arr.splice(i, 1)
          arr.splice(n, 1)
          n--
          break
        }
      }
    }

    n++
  }
  if (counters[0] === counters[1]) { return true } else { return false }
}

console.log(secondChecker('(()()()()())'))
