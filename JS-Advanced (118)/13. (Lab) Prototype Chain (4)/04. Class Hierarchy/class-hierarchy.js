function solve() {
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new Error();
            }
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
            this.area = Math.PI * Math.pow(radius, 2);
        }


        toString() {
            return `Circle - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
            this.area = width * height;
        }

        toString() {
            return `Rectangle - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    };
}