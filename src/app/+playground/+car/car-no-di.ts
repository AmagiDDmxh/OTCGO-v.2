import { Engine, Tires } from "./car";

export class CarNoDi {
  public engine: Engine
  public tires: Tires
  public description = 'No DI'

  constructor () {
    this.engine = new Engine()
    this.tires = new Tires()
  }

  drive () {
    return `${this.description} car with ` +
      `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
  }
}