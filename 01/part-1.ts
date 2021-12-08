import input from './input';

const measurements = input.trim().split('\n');

let i = 0;
const len = measurements.length;
let last = 0;
let increases = 0;

while (i < len) {
  const val = parseInt(measurements[i]);

  if (last !== 0 && last < val) {
    increases++;
  }
  last = val;
  i++;
}

console.log(increases);
