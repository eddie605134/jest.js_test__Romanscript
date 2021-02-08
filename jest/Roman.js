const signList = [
  {
    word: "IV",
    value : 4,
  },
  {
    word: "IX",
    value : 9,
  },
  {
    word: "XL",
    value : 40,
  },
  {
    word: "XC",
    value : 90,
  },
  {
    word: "CD",
    value : 400,
  },
  {
    word: "CM",
    value : 900,
  },
  {
    word: "D",
    value : 500,
  },
  {
    word: "C",
    value : 100,
  },
  {
    word: "X",
    value : 10,
  },
  {
    word: "L",
    value : 50,
  },
  {
    word: "M",
    value : 1000,
  },
  {
    word: "V",
    value : 5,
  },
  {
    word: "I",
    value : 1
  },
]


export const RomanInput = (signString) => {
  const StringToSign = signString.split(/[\s\n]/).filter(it=> it != "").slice(0,2)
  const [sign1, sign2] = StringToSign

  let abs = getDifferenceAbs(sign1, sign2)
  let finalResult = numberToSign(abs); 
  console.log(finalResult);
  return finalResult
}

export function numberToSign (number) {
  let thousands, hundreds, tens, digit;
  let NumArr = number.toString().split('')
  let result;
  switch (NumArr.length) {
    case 1:
      [digit] = NumArr
      result = calculation(digit, 1)
      break;
    case 2:
      [tens, digit] = NumArr
      digit == 0 ? digit = '' : digit = calculation(digit, 1)
      tens = calculation(tens, 10)
      result = tens + digit
      break;
    case 3:
      [hundreds, tens, digit] = NumArr
      tens == 0 ? tens = '' : tens = calculation(tens, 10)
      digit == 0 ? digit = '' : digit = calculation(digit, 1)
      hundreds = calculation(hundreds, 100)
      result = hundreds + tens + digit
      break;
    case 4:
      [thousands, hundreds, tens, digit] = NumArr
      tens == 0 ? tens = '' : tens = calculation(tens, 10)
      digit == 0 ? digit = '' : digit = calculation(digit, 1)
      hundreds == 0 ? hundreds = '' : hundreds = calculation(hundreds, 100)
      thousands = calculation(thousands, 1000)
      result = thousands + hundreds + tens + digit
      break;
    default:
      result= "ZERO";
      break;
  }
  return result
}

export function calculation (num, digit) {
  let cal = Number(num)
  let preResult = []
  let result = '';
  const compare = [9, 5, 4, 1]

  while (cal > 0) {
    compare.forEach(it=> {
      if (cal >= it) {
        cal = cal - it
        preResult.push(it)
      }
    })
  }
  
  if (preResult.length == 0) {
    return "ZERO"
  } else {
    preResult = preResult.map(item => item * digit)
    preResult.forEach(item=> {
      let sign = signList.find(it=> it.value == item)
      result += sign.word
    })
    return result
  }
}

export function getDifferenceAbs (sign1, sign2) {
  let total1 = signToNum(sign1)
  let total2 = signToNum(sign2)
  return Math.abs(total1 - total2)
}

export function signToNum (signWord, num = 0) {
  let theFind = signWord
  let theTotal = num

  while (theFind) {
    signList.forEach(signObj => {
      let { word, value }  = signObj
      if (theFind.indexOf(word) != -1) {
        theFind = theFind.replace(word, '')
        theTotal += value
      }
    })
  }
  return theTotal
}

RomanInput(`CD
XC
#`
)