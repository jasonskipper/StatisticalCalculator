//----------
function calcMean(array) {
  return calcSum(array)/array.length;
}
//----------
function calcMedian(array) {
  if(array.length === 0) return 0;
  array.sort(function(a, b) { return a-b;});
  var half = Math.floor(array.length / 2);
  if(array.length % 2) return array[half];
  return (array[half-1] + array[half+1]) / 2.0;
}
//----------
function calcMode(array) {
  var modes = [], count = [], i, number, max = 0;
  for(i = 0; i < array.length; i++) {
    value = array[i];
    count[value] = (count[value] || 0) + 1;
    if(count[value] > max) {
      max = count[value];
    }
  }
  for(i in count) {
    if(count.hasOwnProperty(i)) {
      if(count[i] === max) {
        modes.push(Number(i));
      }
    }
  }
  return modes;
}
//----------
function calcStdDev(array) {
  return Math.sqrt(calcVariance(array));
}
//----------
function calcSum(array) {
  // return array.reduce((a, b) => a + b, 0);
  let sum = 0;
  for(i = 0; i < array.length; i++) {
    sum += parseInt(array[i].valueOf());
  }
  return sum;
}
//----------
function calcVariance(array) {
  let mean = calcMean(array);
  let variance = 0;
  for(let index of array) {
    variance += Math.pow((index-mean), 2);
  }
  return variance / array.length;
}
//----------
function findMax(array) {
  return Math.max.apply(null, array.sort());
}
function findMin(array) {
  // return Math.min.apply(null, array.sort());
  let min = parseInt(array[0].valueOf());
  for(let index of array) {
    if(index < min) {
      min = index;
    }
  }
  return min;
}
//----------
function performStatistics() {
  let userinput = document.querySelector("#userinput").value.split(" ");
  if(userinput.length < 5 || userinput.length > 20 || findMin(userinput) < 0 || findMax(userinput) > 100) {
    alert("invalid range");
    return false;
  }

  document.getElementById("mean").value = calcMean(userinput).toFixed(2);
  document.getElementById("median").value = calcMedian(userinput);
  document.getElementById("mode").value = calcMode(userinput);
  document.getElementById("StdDev").value = calcStdDev(userinput).toFixed(2);
  document.getElementById("sum").value = calcSum(userinput).toFixed(2);
  document.getElementById("variance").value = calcVariance(userinput).toFixed(2);
  document.getElementById("max").value = findMax(userinput).toFixed(2);
  document.getElementById("min").value = findMin(userinput).toFixed(2);
  return false;
}
//----------
