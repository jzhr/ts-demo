// Interfaces for classes
export interface Shape {
  area: number;
  computeArea(): number;
}

// Nested interface
export interface Course {
  description: {
    name: string;

    instructor: {
      name: string;
    };

    prerequisites: {
      courses: string[];
    };
  };
}

// Example #2
interface SimpleDate {
  month: number;
  day: number;
  year: number;
}

export interface Passport {
  name: string;
  expiration: SimpleDate;
}

interface typeA {
  name: string;
}

type typeB = typeA;
