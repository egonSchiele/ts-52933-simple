export class Dog {
  config: Dog.Config;
  constructor(config: Dog.Config) {
    this.config = config;
  }
}

export namespace Dog {
  export interface Config {
    name?: string;
  }
}
