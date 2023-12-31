class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  public tenants: Person[] = [];
  constructor(protected key: Key, public door: boolean = false) {}

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
    } else {
      console.log("Door is closed!");
    }
  }

  openDoor(key: Key): void {}
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    } else {
      console.log("There is an invalid key!");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
