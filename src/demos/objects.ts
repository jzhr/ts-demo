export interface obj {
  name: string;
  num: number;
  // function type annotation
  doThing: (arg: string) => string;
}

// difference b/w call signature and func type:
// https://stackoverflow.com/questions/32043487/difference-between-call-signature-and-function-type/32043715#32043715
type func = (arg: number) => number;
const randomFunc: func = (x) => {
  return x;
};
