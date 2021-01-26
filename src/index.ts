import { xEnum } from './demos/enum';
import { GenericInterface, Props1, Props2 } from './demos/generics';
import { Shape, Passport } from './demos/interfaces';
import { obj } from './demos/objects';

/* Enums */
const x: xEnum = xEnum.ChoiceD;
console.log(`Choice D is ${x}`);

/* Interfaces */
// example #1
class Circle implements Shape {
  radius: number;
  area: number;

  constructor(radius: number) {
    this.radius = radius;
    this.area = this.computeArea();
  }

  computeArea = () => {
    return (22 / 7) * this.radius * this.radius;
  };
}

const demoCircle = new Circle(3);
console.log(`Area of circle w/ radius 3: ${demoCircle.computeArea()}`);

// example #2
const myPassport: Passport = {
  name: 'Jason',
  expiration: {
    month: 1,
    day: 1,
    year: 2050,
  },
};

console.log(`Expiration Year: ${myPassport.expiration.year}`);

/* Generics */
// component #1 has color in props because it is generic w/ Props1
const component1: GenericInterface<Props1> = {
  name: 'My Component One',
  id: 1,
  props: {
    color: 'red',
  },
};

// component #2 that has size in props because it is generic w/ Props2
const component2: GenericInterface<Props2> = {
  name: 'My Component Two',
  id: 2,
  props: {
    size: 100,
  },
};

console.log(`Component #1 props: ${component1.props.color}`);
console.log(`Component #2 props: ${component2.props.size}`);

/* Objects */
const randomObj: obj = {
  name: 'randomObj',
  num: 3,
  doThing(str) {
    return str;
  },
};

console.log(`Random object number: ${randomObj.num}`);
