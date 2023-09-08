export namespace First {
  export function testFunc() {
    console.log('First');
  }
}

export namespace Second {
  export function testFunc() {
    console.log('Second');
  }
}

First.testFunc();
Second.testFunc();
