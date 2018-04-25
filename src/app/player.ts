export class Player {
    id: number;
    score: number = 0;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}

let player = new Player({
    id: 1,
    score: 15
  })
