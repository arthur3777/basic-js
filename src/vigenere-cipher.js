class VigenereCipheringMachine {
  constructor (mod) {
      if (mod == false) {
          this.mod = false;
      } else {
          this.mod = true;
      }
  }

  encrypt(message, key) {
      if (!message || !key) { throw new Error(); }

      message = message.toUpperCase();
      key = key.toUpperCase();

      while (key.length - 1 < message.length) {
        key += key;
      }

      let result = '', num;

      for (let j = 0, k = 0; j < message.length; j++, k++) {
        if (alphabet.includes(message[j])) {
          num = alphabet.indexOf(message[j]) + alphabet.indexOf(key[k]);

          if (num >= alphabet.length) {
            result += alphabet[num - alphabet.length];
          } else {
            result += alphabet[num];
          }
        } else {
          result += message[j];
          k--;
        }
      }

      if (this.mod == true) { return result; }
      else { return result.split('').reverse().join(''); }
  }

  decrypt(encryptedMessage, key) {
      if (!encryptedMessage || !key) { throw new Error(); }

      encryptedMessage = encryptedMessage.toUpperCase();
      key = key.toUpperCase();

      while (key.length - 1 < encryptedMessage.length) {
        key += key;
      }

      let result = '', num;

      for (let j = 0, k = 0; j < encryptedMessage.length; j++, k++) {
        if (alphabet.includes(encryptedMessage[j])) {
          num = alphabet.indexOf(encryptedMessage[j]) - alphabet.indexOf(key[k]);

          if (num < 0) {
            result += alphabet[num + alphabet.length];
          } else {
            result += alphabet[num];
          }
        } else {
          result += encryptedMessage[j];
          k--;
        }
      }

      if (this.mod == true) { return result; }
      else { return result.split('').reverse().join(''); }
  }
};

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

module.exports = VigenereCipheringMachine;
