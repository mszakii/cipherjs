// create encription key
const element = [];
for (let i = 0; i < 108; i++) {
  if (i % 4 == 0 && i !== 0) {
    element.push("-");
    element.push("`");
    element.push(Math.ceil(Math.random() * 9));
  } else {
    element.push(Math.ceil(Math.random() * 9));
  }
}
let elementSt = element.join("");

keyElement.innerText = elementSt;

// encription key and array

let key = elementSt.split("`");

let alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  " ",
];

function encript(text, k = key) {
  // for (let i = 0; i < text.length; i++) {
  //   answer = text.replace(alpha[i], key[i]);
  // }
  // done
  let answer = [];
  text = text.toLowerCase();
  text = text.split("");
  text.forEach((e) => {
    for (let i = 0; i < alpha.length; i++) {
      if (e == alpha[i]) {
        answer.push(k[i]);
      }
    }
  });
  answer = answer.join("");
  return answer;
}

function decript(text, key) {
  key = key.split("-`");
  console.log(key);
  let answer = [];
  text = text.split("-");
  text.forEach((e) => {
    for (let i = 0; i < alpha.length; i++) {
      if (e == key[i]) {
        answer.push(alpha[i]);
      }
    }
  });
  answer = answer.join("");
  return answer;
}

// gui
en.onclick = function () {
  output.innerText = encript(inputElement.value);
};

de.onclick = function () {
  output.innerText = decript(inputElement.value, keyElementIn.value);
};
