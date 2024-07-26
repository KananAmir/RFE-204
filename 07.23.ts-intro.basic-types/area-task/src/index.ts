// Shape adında bir interface yaradın. Bu interface'in calculateArea() və calculatePerimeter() adlı 2 metodu olacaq (return type'ları number)).
// Daha sonra Circle və Rectangle adlı iki class yaradın, hər ikisi də Shape interfeysini implement etsin.
// Circle class-ında dairənin sahəsini və perimetrini, Rectangle class-ında isə dördbucaqlının sahəsini və perimetrini hesablayan metodlar yazın.

// const circle = new Circle(5);
// console.log("Circle Area:", circle.calculateArea()); //  78.54
// console.log("Circle Perimeter:", circle.calculatePerimeter()); // 31.42

// const rectangle = new Rectangle(4, 6);
// console.log("Rectangle Area:", rectangle.calculateArea()); // 24
// console.log("Rectangle Perimeter:", rectangle.calculatePerimeter()); // 20


interface Shape {
  calculateArea: () => number;
  calculatePerimeter: () => number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius**2;
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle(5);
console.log("Circle Area:", circle.calculateArea()); //  78.54
console.log("Circle Perimeter:", circle.calculatePerimeter()); // 31.42

const rectangle = new Rectangle(4, 6);
console.log("Rectangle Area:", rectangle.calculateArea()); // 24
console.log("Rectangle Perimeter:", rectangle.calculatePerimeter()); // 20
