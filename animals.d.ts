import type { Dog } from "./animals";

declare module "./animals" {
  namespace Dog {
    export interface Config {
      age?: number;
    }
  }
}
