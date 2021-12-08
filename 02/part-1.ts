import input from './input';

export class Submarine {
  position: number;
  depth: number;

  constructor() {
    this.position = 0;
    this.depth = 0;
  }

  command(command: string) {
    const parts = command.split(' ');
    const direction = parts[0];
    const val = parseInt(parts[1]);

    if (['up', 'down'].includes(direction)) {
      const sign = direction === 'down' ? 1 : -1;
      const diff = sign * val;
      this.depth += diff;
    } else if (direction === 'forward') {
      this.position += val;
    }
  }
}

const sub = new Submarine();

input
  .trim()
  .split('\n')
  .forEach((command) => sub.command(command));

const pos = sub.position;
const depth = sub.depth;

console.log('Position: ' + pos);
console.log('Depth: ' + depth);

console.log('Result: ' + pos * depth);
