import input from './input';

class Submarine {
  position: number;
  depth: number;
  aim: number;

  handlers: { [key: string]: { (val: number): void } } = {
    up: (val: number) => {
      this.aim -= val;
    },
    down: (val: number) => {
      this.aim += val;
    },
    forward: (val: number) => {
      this.position += val;
      this.depth += this.aim * val;
    },
  };

  constructor() {
    this.position = 0;
    this.depth = 0;
    this.aim = 0;
  }

  command(command: string) {
    const parts = command.split(' ');
    const direction = parts[0];
    const val = parseInt(parts[1]);

    if (direction in this.handlers) {
      this.handlers[direction](val);
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
