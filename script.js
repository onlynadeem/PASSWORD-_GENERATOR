// Lowercase Alphabets
let lowercaseAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Uppercase Alphabets
let uppercaseAlphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Special symbols
let specialSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ';', ':', '<', '>', '?', '/', '|', '~'];

class password_generator {
  strong_password() {
    let a = lowercaseAlphabets
    a = a.sort(function() {
      return Math.random() - 0.5;
    })
    a = a.slice(0, 4)
    let b = uppercaseAlphabets
    b = b.sort(function() {
      return Math.random() - 0.5;
    })
    b = b.slice(0, 4)
    let c = specialSymbols
    c = c.sort(function() {
      return Math.random() - 0.5;
    })
    c = c.slice(0, 4)
    let d = a.concat(b, c)
    d = d.sort(function() {
      return Math.random() - 0.5;
    })
    d = d.join("")
    return d
  }
  weak_password() {
    let a = lowercaseAlphabets
    a = a.sort(function() {
      return Math.random() - 0.5;
    })
    a = a.slice(0, 10)
    a = a.join('')
    return a
  }
  funny_password() {
    let a = [
      "password",
      "admin",
      "123456",
      "letmein",
      "qwerty",
      "abc123",
      "monkey",
      "iloveyou",
      "trustno1",
      "sunshine",
      "master",
      "dragon",
      "football",
      "password1",
      "admin123",
      "welcome"
    ];
    let index = Math.floor(Math.random() * a.length)
    a = a[index]
    return a
  }
}

let me = new password_generator()
me.strong_password()
me.weak_password()
me.funny_password()
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let result = document.getElementById("result")

b1.onclick = () => {
  let x = me.strong_password()
  result.innerHTML = x
}
b2.onclick = () => {
  let x = me.weak_password()
  result.innerHTML = x
}
b3.onclick = () => {
  let x = me.funny_password()
  result.innerHTML = x
}

let btn = document.getElementById("btn")
btn.onclick = () => {
  let a = result.innerHTML
  navigator.clipboard.writeText(a)
  alert("You have copied the password: " + a)
}