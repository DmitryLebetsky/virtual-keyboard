window.onload = function onLoad() {
  class CreateElement {
    constructor(selector, classes, innerText) {
      this.element = document.createElement(selector);
      if (selector === 'textarea') {
        this.createTextarea('textarea', '50', '5');
        return this.element;
      }
      for (let i = 0; i < classes.length; i += 1) {
        this.element.classList.add(classes[i]);
      }
      if (innerText) {
        this.element.innerText = innerText;
      }
      return this.element;
    }

    createTextarea(id, cols, rows) {
      this.element.setAttribute('id', id);
      this.element.setAttribute('cols', cols);
      this.element.setAttribute('rows', rows);
    }
  }
  const whichCollection = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69,
    82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222,
    13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 37, 40, 39, 17];
  function createKeyboard() {
    function createRussianLayout(keyboard) {
      Array.from(keyboard.querySelectorAll('.keyboard__row')).forEach((row, index) => {
        if (index + 1 === 1) {
          for (let i = 0; i < 14; i += 1) {
            if (i === 0) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'ё'));
            } else if (i > 0 && i < 10) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], `${i}`));
            } else if (i === 10) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '0'));
            } else if (i === 11) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '-'));
            } else if (i === 12) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '='));
            } else if (i === 13) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key'], 'Backspace'));
            }
          }
        } else if (index + 1 === 2) {
          for (let i = 14; i < 29; i += 1) {
            if (i === 14) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key'], 'Tab'));
            } else if (i === 15) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'й'));
            } else if (i === 16) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'ц'));
            } else if (i === 17) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'у'));
            } else if (i === 18) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'к'));
            } else if (i === 19) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'е'));
            } else if (i === 20) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'н'));
            } else if (i === 21) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'г'));
            } else if (i === 22) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'ш'));
            } else if (i === 23) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'щ'));
            } else if (i === 24) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'з'));
            } else if (i === 25) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'х'));
            } else if (i === 26) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'ъ'));
            } else if (i === 27) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '\\'));
            } else if (i === 28) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key'], 'Del'));
            }
          }
        } else if (index + 1 === 3) {
          for (let i = 29; i < 42; i += 1) {
            if (i === 29) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key'], 'CapsLock'));
            } else if (i === 30) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'ф'));
            } else if (i === 31) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'ы'));
            } else if (i === 32) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'в'));
            } else if (i === 33) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'а'));
            } else if (i === 34) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'п'));
            } else if (i === 35) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'р'));
            } else if (i === 36) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'о'));
            } else if (i === 37) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'л'));
            } else if (i === 38) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'д'));
            } else if (i === 39) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'ж'));
            } else if (i === 40) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'э'));
            } else if (i === 41) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key'], 'Enter'));
            }
          }
        } else if (index + 1 === 4) {
          for (let i = 42; i < 55; i += 1) {
            if (i === 42) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key', 'left'], 'Shift'));
            } else if (i === 43) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'я'));
            } else if (i === 44) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'ч'));
            } else if (i === 45) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'с'));
            } else if (i === 46) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'м'));
            } else if (i === 47) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'и'));
            } else if (i === 48) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'т'));
            } else if (i === 49) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'ь'));
            } else if (i === 50) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'б'));
            } else if (i === 51) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'ю'));
            } else if (i === 52) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '.'));
            } else if (i === 53) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '▲'));
            } else if (i === 54) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key', 'right'], 'Shift'));
            }
          }
        } else if (index + 1 === 5) {
          for (let i = 55; i < 64; i += 1) {
            if (i === 55) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key', 'left'], 'Ctrl'));
            } else if (i === 56) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key', 'left'], 'Win'));
            } else if (i === 57) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key', 'left'], 'Alt'));
            } else if (i === 58) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`]));
            } else if (i === 59) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key', 'right'], 'Alt'));
            } else if (i === 60) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '◄'));
            } else if (i === 61) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '▼'));
            } else if (i === 62) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '►'));
            } else if (i === 63) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key', 'right'], 'Ctrl'));
            }
          }
        }
      });
    }
    function createEnglishLayout(keyboard) {
      Array.from(keyboard.querySelectorAll('.keyboard__row')).forEach((row, index) => {
        if (index + 1 === 1) {
          for (let i = 0; i < 14; i += 1) {
            if (i === 0) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '`'));
            } else if (i > 0 && i < 10) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], `${i}`));
            } else if (i === 10) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '0'));
            } else if (i === 11) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '-'));
            } else if (i === 12) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '='));
            } else if (i === 13) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key'], 'Backspace'));
            }
          }
        } else if (index + 1 === 2) {
          for (let i = 14; i < 29; i += 1) {
            if (i === 14) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key'], 'Tab'));
            } else if (i === 15) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'q'));
            } else if (i === 16) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'w'));
            } else if (i === 17) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'e'));
            } else if (i === 18) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'r'));
            } else if (i === 19) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 't'));
            } else if (i === 20) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'y'));
            } else if (i === 21) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'u'));
            } else if (i === 22) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'i'));
            } else if (i === 23) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'o'));
            } else if (i === 24) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'p'));
            } else if (i === 25) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '['));
            } else if (i === 26) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], ']'));
            } else if (i === 27) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '\\'));
            } else if (i === 28) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key'], 'Del'));
            }
          }
        } else if (index + 1 === 3) {
          for (let i = 29; i < 42; i += 1) {
            if (i === 29) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key'], 'CapsLock'));
            } else if (i === 30) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'a'));
            } else if (i === 31) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 's'));
            } else if (i === 32) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'd'));
            } else if (i === 33) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'f'));
            } else if (i === 34) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'g'));
            } else if (i === 35) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'h'));
            } else if (i === 36) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'j'));
            } else if (i === 37) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'k'));
            } else if (i === 38) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'l'));
            } else if (i === 39) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], ';'));
            } else if (i === 40) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '\''));
            } else if (i === 41) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key'], 'Enter'));
            }
          }
        } else if (index + 1 === 4) {
          for (let i = 42; i < 55; i += 1) {
            if (i === 42) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key', 'left'], 'Shift'));
            } else if (i === 43) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'z'));
            } else if (i === 44) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'x'));
            } else if (i === 45) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'c'));
            } else if (i === 46) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'v'));
            } else if (i === 47) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'b'));
            } else if (i === 48) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'n'));
            } else if (i === 49) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], 'm'));
            } else if (i === 50) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], ','));
            } else if (i === 51) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '.'));
            } else if (i === 52) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '/'));
            } else if (i === 53) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '▲'));
            } else if (i === 54) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key', 'right'], 'Shift'));
            }
          }
        } else if (index + 1 === 5) {
          for (let i = 55; i < 64; i += 1) {
            if (i === 55) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key', 'left'], 'Ctrl'));
            } else if (i === 56) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key', 'left'], 'Win'));
            } else if (i === 57) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key', 'left'], 'Alt'));
            } else if (i === 58) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`]));
            } else if (i === 59) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key', 'right'], 'Alt'));
            } else if (i === 60) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '◄'));
            } else if (i === 61) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '▼'));
            } else if (i === 62) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`], '►'));
            } else if (i === 63) {
              row.appendChild(new CreateElement('span', ['key', `which-${whichCollection[i]}`, 'special-key', 'right'], 'Ctrl'));
            }
          }
        }
      });
      return keyboard;
    }
    const container = new CreateElement('div', ['container']);
    container.appendChild(new CreateElement('textarea'));
    const keyboard = new CreateElement('div', ['keyboard']);
    for (let i = 1; i < 6; i += 1) {
      keyboard.appendChild(new CreateElement('div', ['keyboard__row']));
    }
    if (localStorage.getItem('lang') === 'russian') {
      createRussianLayout(keyboard);
    } else {
      createEnglishLayout(keyboard);
    }
    container.appendChild(keyboard);
    document.body.insertBefore(container, document.querySelector('script'));
  }
  const lowerCaseFromEnglishToRussian = {
    '`': 'ё',
    q: 'й',
    w: 'ц',
    e: 'у',
    r: 'к',
    t: 'е',
    y: 'н',
    u: 'г',
    i: 'ш',
    o: 'щ',
    p: 'з',
    '[': 'х',
    ']': 'ъ',
    a: 'ф',
    s: 'ы',
    d: 'в',
    f: 'а',
    g: 'п',
    h: 'р',
    j: 'о',
    k: 'л',
    l: 'д',
    ';': 'ж',
    '\'': 'э',
    z: 'я',
    x: 'ч',
    c: 'с',
    v: 'м',
    b: 'и',
    n: 'т',
    m: 'ь',
    ',': 'б',
    '.': 'ю',
    '/': '.',
  };
  const lowerCaseFromRussianToEnglish = {
    ё: '`',
    й: 'q',
    ц: 'w',
    у: 'e',
    к: 'r',
    е: 't',
    н: 'y',
    г: 'u',
    ш: 'i',
    щ: 'o',
    з: 'p',
    х: '[',
    ъ: ']',
    ф: 'a',
    ы: 's',
    в: 'd',
    а: 'f',
    п: 'g',
    р: 'h',
    о: 'j',
    л: 'k',
    д: 'l',
    ж: ';',
    э: '\'',
    я: 'z',
    ч: 'x',
    с: 'c',
    м: 'v',
    и: 'b',
    т: 'n',
    ь: 'm',
    б: ',',
    ю: '.',
    '.': '/',
  };
  const upperCaseFromEnglishToRussian = {
    '`': 'Ё',
    '@': '"',
    '#': '№',
    $: ';',
    '^': ':',
    '&': '?',
    Q: 'Й',
    W: 'Ц',
    E: 'У',
    R: 'К',
    T: 'Е',
    Y: 'Н',
    U: 'Г',
    I: 'Ш',
    O: 'Щ',
    P: 'З',
    '{': 'Х',
    '}': 'Ъ',
    '|': '/',
    A: 'Ф',
    S: 'Ы',
    D: 'В',
    F: 'А',
    G: 'П',
    H: 'Р',
    J: 'О',
    K: 'Л',
    L: 'Д',
    ':': 'Ж',
    '"': 'Э',
    Z: 'Я',
    X: 'Ч',
    C: 'С',
    V: 'М',
    B: 'И',
    N: 'Т',
    M: 'Ь',
    '<': 'Б',
    '>': 'Ю',
    '?': ',',
  };
  const upperCaseFromRussianToEnglish = {
    Ё: '`',
    '"': '@',
    '№': '#',
    ';': '$',
    ':': '^',
    '?': '&',
    Й: 'Q',
    Ц: 'W',
    У: 'E',
    К: 'R',
    Е: 'T',
    Н: 'Y',
    Г: 'U',
    Ш: 'I',
    Щ: 'O',
    З: 'P',
    Х: '{',
    Ъ: '}',
    '/': '|',
    Ф: 'A',
    Ы: 'S',
    В: 'D',
    А: 'F',
    П: 'G',
    Р: 'H',
    О: 'J',
    Л: 'K',
    Д: 'L',
    Ж: ':',
    Э: '"',
    Я: 'Z',
    Ч: 'X',
    С: 'C',
    М: 'V',
    И: 'B',
    Т: 'N',
    Ь: 'M',
    Б: '<',
    Ю: '>',
    ',': '?',
  };
  const onShiftPressEnglish = {
    '`': '~',
    1: '!',
    2: '@',
    3: '#',
    4: '$',
    5: '%',
    6: '^',
    7: '&',
    8: '*',
    9: '(',
    0: ')',
    '-': '_',
    '=': '+',
    '[': '{',
    ']': '}',
    '\\': '|',
    ';': ':',
    '\'': '"',
    ',': '<',
    '.': '>',
    '/': '?',
  };
  const onShiftUpEnglish = {
    '~': '`',
    '!': '1',
    '@': '2',
    '#': '3',
    $: '4',
    '%': '5',
    '^': '6',
    '&': '7',
    '*': '8',
    '(': '9',
    ')': '0',
    _: '-',
    '+': '=',
    '{': '[',
    '}': ']',
    '|': '\\',
    ':': ';',
    '"': '\'',
    '<': ',',
    '>': '.',
    '?': '/',
  };
  const onShiftPressRussian = {
    1: '!',
    2: '"',
    3: '№',
    4: ';',
    5: '%',
    6: ':',
    7: '?',
    8: '*',
    9: '(',
    0: ')',
    '-': '_',
    '=': '+',
    '\\': '/',
    '.': ',',
  };
  const onShiftUpRussian = {
    '!': '1',
    '"': '2',
    '№': '3',
    ';': '4',
    '%': '5',
    ':': '6',
    '?': '7',
    '*': '8',
    '(': '9',
    ')': '0',
    _: '-',
    '+': '=',
    '/': '\\',
    ',': '.',
  };
  let isCapsLockActive = false;
  let isRegisterChangedByShift = false;
  let isRegisterChangedByCapsLock = false;
  function EnglishLayoutToUpperCase() {
    const keys = Array.from(document.querySelectorAll('.key'));
    const keysToBeChanged = [];
    keys.forEach((key) => {
      if (!key.classList.contains('special-key')) {
        keysToBeChanged.push(key);
      }
    });
    keysToBeChanged.forEach((key) => {
      const keyItem = key;
      if (Object.prototype.hasOwnProperty.call(onShiftPressEnglish, key.innerText)) {
        keyItem.innerText = onShiftPressEnglish[key.innerText];
      } else {
        keyItem.innerText = key.innerText.toUpperCase();
      }
    });
  }
  function EnglishLayoutToLowerCase() {
    const keys = Array.from(document.querySelectorAll('.key'));
    const keysToBeChanged = [];
    keys.forEach((key) => {
      if (!key.classList.contains('special-key')) {
        keysToBeChanged.push(key);
      }
    });
    keysToBeChanged.forEach((key) => {
      const keyItem = key;
      if (Object.prototype.hasOwnProperty.call(onShiftUpEnglish, key.innerText)) {
        keyItem.innerText = onShiftUpEnglish[key.innerText];
      } else {
        keyItem.innerText = key.innerText.toLowerCase();
      }
    });
  }
  function RussianLayoutToUpperCase() {
    const keys = Array.from(document.querySelectorAll('.key'));
    const keysToBeChanged = [];
    keys.forEach((key) => {
      if (!key.classList.contains('special-key')) {
        keysToBeChanged.push(key);
      }
    });
    keysToBeChanged.forEach((key) => {
      const keyItem = key;
      if (Object.prototype.hasOwnProperty.call(onShiftPressRussian, key.innerText)) {
        keyItem.innerText = onShiftPressRussian[key.innerText];
      } else {
        keyItem.innerText = key.innerText.toUpperCase();
      }
    });
  }
  function RussianLayoutToLowerCase() {
    const keys = Array.from(document.querySelectorAll('.key'));
    const keysToBeChanged = [];
    keys.forEach((key) => {
      if (!key.classList.contains('special-key')) {
        keysToBeChanged.push(key);
      }
    });
    keysToBeChanged.forEach((key) => {
      const keyItem = key;
      if (Object.prototype.hasOwnProperty.call(onShiftUpRussian, key.innerText)) {
        keyItem.innerText = onShiftUpRussian[key.innerText];
      } else {
        keyItem.innerText = key.innerText.toLowerCase();
      }
    });
  }
  function changeLanguage(language) {
    const spans = Array.from(document.querySelectorAll('.key'));
    spans.forEach((span) => {
      const spanItem = span;
      if (Object.prototype.hasOwnProperty.call(language, span.innerText)) {
        spanItem.innerText = language[span.innerText];
      }
    });
  }
  createKeyboard();
  // onKeyDown Events
  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (whichCollection.indexOf(+event.which) !== -1) {
      const pressedKey = document.querySelector(`.which-${event.which}`);
      //  Key backlight onKeyDown
      if (event.location === 0) {
        pressedKey.classList.add('key-pressed');
      } else if (event.location === 1) {
        document.querySelector(`.which-${event.which}.left`).classList.add('key-pressed');
      } else if (event.location === 2) {
        document.querySelector(`.which-${event.which}.right`).classList.add('key-pressed');
      }
      // Change case onShiftPress
      if (event.code === 'ShiftLeft') {
        document.querySelector('.which-16.left').classList.add('shift-pinched');
        if (!isRegisterChangedByShift) {
          if (localStorage.getItem('lang') === 'russian') {
            if (document.querySelector('.which-68').innerText === 'В') {
              RussianLayoutToLowerCase();
              isRegisterChangedByShift = true;
            } else if (document.querySelector('.which-68').innerText === 'в') {
              RussianLayoutToUpperCase();
              isRegisterChangedByShift = true;
            }
          } else if (document.querySelector('.which-68').innerText === 'D') {
            EnglishLayoutToLowerCase();
            isRegisterChangedByShift = true;
          } else if (document.querySelector('.which-68').innerText === 'd') {
            EnglishLayoutToUpperCase();
            isRegisterChangedByShift = true;
          }
        }
      }
      // Change case on CapsLockDown
      if (event.code === 'CapsLock') {
        document.querySelector('.which-20').classList.add('caps-pinched');
        if (!isRegisterChangedByCapsLock) {
          isCapsLockActive = !isCapsLockActive;
          if (localStorage.getItem('lang') === 'russian') {
            if (document.querySelector('.which-68').innerText === 'в') {
              RussianLayoutToUpperCase();
              isRegisterChangedByCapsLock = true;
            } else if (document.querySelector('.which-68').innerText === 'В') {
              RussianLayoutToLowerCase();
              isRegisterChangedByCapsLock = true;
            }
          } else if (document.querySelector('.which-68').innerText === 'd') {
            EnglishLayoutToUpperCase();
            isRegisterChangedByCapsLock = true;
          } else if (document.querySelector('.which-68').innerText === 'D') {
            EnglishLayoutToLowerCase();
            isRegisterChangedByCapsLock = true;
          }
        }
      }
      // Change textarea value onkeypress
      if (!pressedKey.classList.contains('special-key') && event.code !== 'Space') {
        const textarea = document.querySelector('textarea');
        const textareaArr = textarea.value.split('');
        const textareaSelectionStart = textarea.selectionStart;
        const textareaSelectionEnd = textarea.selectionEnd;
        if (textareaSelectionStart === textareaSelectionEnd) {
          textareaArr.splice(textareaSelectionStart, 0, pressedKey.innerText);
          textarea.value = textareaArr.join('');
          textarea.selectionStart = textareaSelectionStart + 1;
          textarea.selectionEnd = textareaSelectionEnd + 1;
        }
      }
      // Change lang on ctrl+alt
      if (event.altKey && event.ctrlKey) {
        if (localStorage.getItem('lang') === 'russian') {
          if (document.querySelector('.which-68').innerText === 'в') {
            changeLanguage(lowerCaseFromRussianToEnglish);
          } else if (document.querySelector('.which-68').innerText === 'В') {
            changeLanguage(upperCaseFromRussianToEnglish);
          }
          localStorage.setItem('lang', 'english');
        } else {
          if (document.querySelector('.which-68').innerText === 'd') {
            changeLanguage(lowerCaseFromEnglishToRussian);
          } else if (document.querySelector('.which-68').innerText === 'D') {
            changeLanguage(upperCaseFromEnglishToRussian);
          }
          localStorage.setItem('lang', 'russian');
        }
      }
      // OnBackSpaceDown
      if (event.code === 'Backspace') {
        const textarea = document.querySelector('textarea');
        const textareaArr = textarea.value.split('');
        const textareaSelectionStart = textarea.selectionStart;
        const textareaSelectionEnd = textarea.selectionEnd;
        if (textareaSelectionStart === textareaSelectionEnd
           && textareaSelectionStart !== 0
           && textareaSelectionEnd !== 0) {
          textareaArr.splice(textarea.selectionStart - 1, 1);
          textarea.value = textareaArr.join('');
          textarea.selectionStart = textareaSelectionStart - 1;
          textarea.selectionEnd = textareaSelectionEnd - 1;
        }
      }
      // OnDelDown
      if (event.code === 'Delete') {
        const textarea = document.querySelector('textarea');
        const textareaArr = textarea.value.split('');
        const textareaSelectionStart = textarea.selectionStart;
        const textareaSelectionEnd = textarea.selectionEnd;
        if (textareaSelectionStart === textareaSelectionEnd
           && textareaSelectionStart !== textarea.value.length
           && textareaSelectionEnd !== textarea.value.length) {
          textareaArr.splice(textarea.selectionStart, 1);
          textarea.value = textareaArr.join('');
          textarea.selectionStart = textareaSelectionStart;
          textarea.selectionEnd = textareaSelectionEnd;
        }
      }
      // OnSpaceDown
      if (event.code === 'Space') {
        const textarea = document.querySelector('textarea');
        const textareaArr = textarea.value.split('');
        const textareaSelectionStart = textarea.selectionStart;
        const textareaSelectionEnd = textarea.selectionEnd;
        if (textareaSelectionStart === textareaSelectionEnd) {
          textareaArr.splice(textareaSelectionStart, 0, ' ');
          textarea.value = textareaArr.join('');
          textarea.selectionStart = textareaSelectionStart + 1;
          textarea.selectionEnd = textareaSelectionEnd + 1;
        }
      }
      // OnTabDown
      if (event.code === 'Tab') {
        const textarea = document.querySelector('textarea');
        const textareaArr = textarea.value.split('');
        const textareaSelectionStart = textarea.selectionStart;
        const textareaSelectionEnd = textarea.selectionEnd;
        if (textareaSelectionStart === textareaSelectionEnd) {
          textareaArr.splice(textareaSelectionStart, 0, '\t');
          textarea.value = textareaArr.join('');
          textarea.selectionStart = textareaSelectionStart + 1;
          textarea.selectionEnd = textareaSelectionEnd + 1;
        }
      }
      // OnEnterDown
      if (event.code === 'Enter') {
        document.getElementById('textarea').value += '\n';
      }
    }
  });
  // onKeyUp Events
  document.addEventListener('keyup', (event) => {
    if (whichCollection.indexOf(+event.which) !== -1) {
      const pressedKey = document.querySelector(`.which-${event.which}`);
      //  Key Dimming onKeyUp
      if (event.code !== 'CapsLock') {
        if (event.location === 0) {
          pressedKey.classList.remove('key-pressed');
        } else if (event.location === 1) {
          document.querySelector(`.which-${event.which}.left`).classList.remove('key-pressed');
        } else if (event.location === 2) {
          document.querySelector(`.which-${event.which}.right`).classList.remove('key-pressed');
        }
      }
      // Change case onCapsLockUp
      if (event.code === 'CapsLock') {
        document.querySelector('.which-20').classList.remove('caps-pinched');
        isRegisterChangedByCapsLock = false;
      }
      if (!isCapsLockActive) {
        pressedKey.classList.remove('key-pressed');
      }
      // Change case onShiftUp
      if (event.code === 'ShiftLeft') {
        document.querySelector('.which-16.left').classList.remove('shift-pinched');
        if (localStorage.getItem('lang') === 'russian') {
          if (document.querySelector('.which-68').innerText === 'В') {
            RussianLayoutToLowerCase();
            isRegisterChangedByShift = false;
          } else if (document.querySelector('.which-68').innerText === 'в') {
            RussianLayoutToUpperCase();
            isRegisterChangedByShift = false;
          }
        } else if (document.querySelector('.which-68').innerText === 'D') {
          EnglishLayoutToLowerCase();
          isRegisterChangedByShift = false;
        } else if (document.querySelector('.which-68').innerText === 'd') {
          EnglishLayoutToUpperCase();
          isRegisterChangedByShift = false;
        }
      }
    }
  });
  // onMouseDown
  document.addEventListener('mousedown', (event) => {
    if (event.target.tagName === 'SPAN') {
      const spanTarget = event.target;
      // Key backlight onMouseDown
      spanTarget.classList.add('key-pressed');
      // Show status of key (clicked or not)
      if (!spanTarget.classList.contains('which-20')) {
        spanTarget.classList.add('key-clicked');
      }
      // Change case onShiftMouseDown
      if (spanTarget.classList.contains('which-16') && spanTarget.classList.contains('left')) {
        if (!isRegisterChangedByShift) {
          if (localStorage.getItem('lang') === 'russian') {
            if (document.querySelector('.which-68').innerText === 'В') {
              RussianLayoutToLowerCase();
              isRegisterChangedByShift = true;
            } else if (document.querySelector('.which-68').innerText === 'в') {
              RussianLayoutToUpperCase();
              isRegisterChangedByShift = true;
            }
          } else if (document.querySelector('.which-68').innerText === 'D') {
            EnglishLayoutToLowerCase();
            isRegisterChangedByShift = true;
          } else if (document.querySelector('.which-68').innerText === 'd') {
            EnglishLayoutToUpperCase();
            isRegisterChangedByShift = true;
          }
        }
      }
      // onTabMouseDown
      if (spanTarget.classList.contains('which-9')) {
        const textarea = document.querySelector('textarea');
        const textareaArr = textarea.value.split('');
        const textareaSelectionStart = textarea.selectionStart;
        const textareaSelectionEnd = textarea.selectionEnd;
        if (textareaSelectionStart === textareaSelectionEnd) {
          textareaArr.splice(textareaSelectionStart, 0, '\t');
          textarea.value = textareaArr.join('');
          textarea.selectionStart = textareaSelectionStart + 1;
          textarea.selectionEnd = textareaSelectionEnd + 1;
        }
      }
      // Change case on CapsLockMouseDown
      if (spanTarget.classList.contains('which-20')) {
        if (!isRegisterChangedByCapsLock) {
          isCapsLockActive = !isCapsLockActive;
          if (localStorage.getItem('lang') === 'russian') {
            if (document.querySelector('.which-68').innerText === 'в') {
              RussianLayoutToUpperCase();
              isRegisterChangedByCapsLock = true;
            } else if (document.querySelector('.which-68').innerText === 'В') {
              RussianLayoutToLowerCase();
              isRegisterChangedByCapsLock = true;
            }
          } else if (document.querySelector('.which-68').innerText === 'd') {
            EnglishLayoutToUpperCase();
            isRegisterChangedByCapsLock = true;
          } else if (document.querySelector('.which-68').innerText === 'D') {
            EnglishLayoutToLowerCase();
            isRegisterChangedByCapsLock = true;
          }
        }
      }
      // OnSpaceMouseDown
      if (spanTarget.classList.contains('which-32')) {
        const textarea = document.querySelector('textarea');
        const textareaArr = textarea.value.split('');
        const textareaSelectionStart = textarea.selectionStart;
        const textareaSelectionEnd = textarea.selectionEnd;
        if (textareaSelectionStart === textareaSelectionEnd) {
          textareaArr.splice(textareaSelectionStart, 0, ' ');
          textarea.value = textareaArr.join('');
          textarea.selectionStart = textareaSelectionStart + 1;
          textarea.selectionEnd = textareaSelectionEnd + 1;
        }
      }
      // OnEnterMouseDown
      if (spanTarget.classList.contains('which-13')) {
        document.getElementById('textarea').value += '\n';
      }
      // OnDeleteMouseDown
      if (spanTarget.classList.contains('which-46')) {
        const textarea = document.querySelector('textarea');
        const textareaArr = textarea.value.split('');
        const textareaSelectionStart = textarea.selectionStart;
        const textareaSelectionEnd = textarea.selectionEnd;
        if (textareaSelectionStart === textareaSelectionEnd
           && textareaSelectionStart !== textarea.value.length
           && textareaSelectionEnd !== textarea.value.length) {
          textareaArr.splice(textarea.selectionStart, 1);
          textarea.value = textareaArr.join('');
          textarea.selectionStart = textareaSelectionStart;
          textarea.selectionEnd = textareaSelectionEnd;
        }
      }
      // OnBackSpaceMouseDown
      if (spanTarget.classList.contains('which-8')) {
        const textarea = document.querySelector('textarea');
        const textareaArr = textarea.value.split('');
        const textareaSelectionStart = textarea.selectionStart;
        const textareaSelectionEnd = textarea.selectionEnd;
        if (textareaSelectionStart === textareaSelectionEnd
           && textareaSelectionStart !== 0
           && textareaSelectionEnd !== 0) {
          textareaArr.splice(textarea.selectionStart - 1, 1);
          textarea.value = textareaArr.join('');
          textarea.selectionStart = textareaSelectionStart - 1;
          textarea.selectionEnd = textareaSelectionEnd - 1;
        }
      }
      // Change textarea value when mouseDown on letters or numbers
      if (!spanTarget.classList.contains('special-key') && !spanTarget.classList.contains('which-32')) {
        const textarea = document.querySelector('textarea');
        const textareaArr = textarea.value.split('');
        const textareaSelectionStart = textarea.selectionStart;
        const textareaSelectionEnd = textarea.selectionEnd;
        if (textareaSelectionStart === textareaSelectionEnd) {
          textareaArr.splice(textareaSelectionStart, 0, spanTarget.innerText);
          textarea.value = textareaArr.join('');
          textarea.selectionStart = textareaSelectionStart + 1;
          textarea.selectionEnd = textareaSelectionEnd + 1;
        }
      }
    }
    //
  });
  // onMouseUp
  document.addEventListener('mouseup', () => {
    // Change case onShiftMouseUp
    if (document.querySelector('.which-16.left').classList.contains('key-pressed')
     && document.querySelector('.which-16.left').classList.contains('key-clicked')
     && !document.querySelector('.which-16.left').classList.contains('shift-pinched')) {
      if (localStorage.getItem('lang') === 'russian') {
        if (document.querySelector('.which-68').innerText === 'В') {
          RussianLayoutToLowerCase();
          isRegisterChangedByShift = false;
        } else if (document.querySelector('.which-68').innerText === 'в') {
          RussianLayoutToUpperCase();
          isRegisterChangedByShift = false;
        }
      } else if (document.querySelector('.which-68').innerText === 'D') {
        EnglishLayoutToLowerCase();
        isRegisterChangedByShift = false;
      } else if (document.querySelector('.which-68').innerText === 'd') {
        EnglishLayoutToUpperCase();
        isRegisterChangedByShift = false;
      }
    }
    // Change case onCapsLockMouseUp
    if (!document.querySelector('.which-20').classList.contains('caps-pinched')) {
      isRegisterChangedByCapsLock = false;
    }
    if (!isCapsLockActive) {
      document.querySelector('.which-20').classList.remove('key-pressed');
    }
    // Key Dimming onMouseUp
    document.querySelectorAll('.key').forEach((key) => {
      if (!key.classList.contains('which-20') && key.classList.contains('key-clicked')) {
        key.classList.remove('key-pressed');
        key.classList.remove('key-clicked');
      }
    });
  });
  // onMouseDrag
  document.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
  // onMouseMove
  document.addEventListener('mousemove', (e) => {
    e.preventDefault();
  });
  // focus textarea
  document.getElementById('textarea').focus();
  document.getElementById('textarea').addEventListener('blur', (event) => {
    event.target.focus();
  })
};
