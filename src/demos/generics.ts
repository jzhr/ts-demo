/*
Generics allow for improved reusability through parametrization
*/
export interface GenericInterface<G> {
  name: string;
  id: number;
  props: G;
}

export interface Props1 {
  color: string;
}

export interface Props2 {
  size: number;
}

/*
Generic Arrays
*/
const strings: Array<string> = ['hi', 'hey', 'hello'];
const s: string = strings[0];
console.log(s.substr(0, 1));

const matrix: Array<Array<number>> = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(matrix[0][0], matrix[2][1]);

// Generic Function
function printOut<A>(args: Array<A>): void {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

printOut<number>([1, 2, 3, 4, 5]);
