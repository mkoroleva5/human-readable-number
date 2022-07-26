module.exports = function toReadable (number) {
  const array1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const array2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (number >= 0 && number < 20) {
    return array1[number];
  } else if (number >= 20 && number < 100) {
    return number%10 === 0 ? array2[Math.floor(number/10)-2] : array2[Math.floor(number/10)-2] + ' ' + array1[number%10];
  } else if (number >= 100 && number < 1000) { 
    return array1[Math.floor(number/100)] + ' hundred' + (number%100 === 0 ? '' : ' ' + toReadable(number%100));
  }
}