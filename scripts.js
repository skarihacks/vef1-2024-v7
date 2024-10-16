/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    let longestWord = "";
    let length = 0;
    let words = str.split(' ');

    for (let word of words) {
        if (word.length > length) {
            longestWord = word;
            length = word.length;
        }
    }

    return longestWord;
  }
  return null;
}
console.assert(
  longest('Halló heimur velkominn í verkfeni 7') === 'velkominn','longest: skilar lengsta orði í streng'
)
console.assert(
  longest('') === '', 'ef tómur strengur sem inntak þá skila tómum streng'
)
console.assert(
  longest(123) === null, 'skila null ef ekki string'
)


function shortest(str) {
  if (isString(str)) {
    let words = str.split(' ');
    let shortestWord = words[0];
    let length = shortestWord.length;
    for (let word of words) {
        if (word.length < length) {
            shortestWord = word;
            length = word.length;
        }
    }
    return shortestWord;
  }
  return null;
}
console.assert(
  shortest('Halló heimur velkominn í verkfeni 7') === 'í','shortest: skilar lengsta orði í streng'
)
console.assert(
  shortest('') === '', 'ef tómur strengur sem inntak þá skila tómum streng'
)
console.assert(
  shortest(123) === null, 'skila null ef ekki string'
)

function reverse(str) {
  if (isString(str)) {
    const split = str.split('');
    const reversed = split.reverse();
    return reversed.join('');

  }
  return null;
}
console.assert(
  reverse('hallo') === 'ollah','reverse: skilar öfugum streng'
)

console.assert(
  reverse('') === '', 'ef tómur strengur sem inntak þá skila tómum streng'
)
console.assert(
  reverse(123) === null, 'skila null ef ekki string'
)

function palindrome(str) {
  if (isString(str)) {
    str = str.toLowerCase();
    if (str === ''){
      return false;
    }
    if (str === reverse(str)) {
      return true;  // Return true if it's a palindrome
    }
    return false;

  }
  return false;
}
console.assert(
  palindrome('Hæh') === true,'palindrome: skilar true ef samhverft orð og false ef ekki, hástafir skipta ekki máli'
)
console.assert(
  palindrome('sdfdsfæh') === false,'palindrome: skilar false ef ekki samhverft'
)
console.assert(
  palindrome('') === false, 'ef tómur strengur sem inntak þá skila false'
)
console.assert(
  palindrome(123) === false, 'skila false ef ekki string'
)
function vowels(str) {
  if (isString(str)) {
    let counter = 0;
    for (let letter of str.toLowerCase()){
      if (VOWELS.includes(letter)){
        counter += 1;
      }
    }
    return counter;
  }
  return 0;
}
console.assert(
  vowels('hallo') === 2, 'Skilar alltaf fjölda sérhljóða'
)
console.assert(
  vowels('') === 0, 'Skilar 0 ef tómu strengur'
)
console.assert(
  vowels('hhhhh') === 0, 'Skilar 0 ef engir sérhljóðar'
)
function consonants(str) {
  if (isString(str)) {
    let counter = 0;
    for (let letter of str.toLowerCase()){
      if (CONSONANTS.includes(letter)){
        counter += 1;
      }
    }
    return counter;
  }
  return 0;
}
console.assert(
  consonants('hallo') === 3, 'Skilar alltaf fjölda samhljóða'
)
console.assert(
  consonants('') === 0, 'Skilar 0 ef tómu strengur'
)
console.assert(
  consonants('aaaaa') === 0, 'Skilar 0 ef engir samhljóðar'
)

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  const byrjun = alert(
    'Sláðu inn streng með nokkrum orðum til að fá upplýsingar um: \n- Lengsta orðið\n- Stysta orðið\n- Strenginn snúinn við\n- Fjölda sérhljóða í streng\n- Fjölda samhljóða í streng\n- Hvort strengurinn sé samhverfur'
  )
  const str = prompt(
    'Sláðu inn strenginn sem þú vilt athuga'
  )
  if (!str ||  str == ''){
    return;
  }
  if (palindrome(str)){
    const svar = alert(
    
    'Lengsta orðið er: ' + longest(str) +  '\n- Stysta orðið er: ' + shortest(str) + '\n- Strengurinn snúinn við: ' + reverse(str)+ '\n- Fjölda sérhljóða í streng: ' + vowels(str) + '\n- Fjölda samhljóða í streng: ' + consonants(str) + '\n- Stengurinn er samhverfur'
    
    )
  }else{
    const svar = alert(
    'Lengsta orðið er: ' + longest(str) +  '\n- Stysta orðið er: ' + shortest(str) + '\n- Strengurinn snúinn við: ' + reverse(str) + '\n- Fjölda sérhljóða í streng: ' + vowels(str) + '\n- Fjölda samhljóða í streng: ' + consonants(str) + '\n- Strengurinn er ekki samhverfur'
    )
  }
  const viss = confirm(
    'viltu prófa aftur?'
  )
  if (!viss){
    return;
  }else{
    start();
  }

}
