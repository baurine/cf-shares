
class Fridge {
  constructor() {
    this.container = []
    this.door_open = false
    this.temperature = 20
  }

  open() {
    this.door_open = true
  }

  close() {
    this.door_open = false
  }

  add(obj) {
    // 微观上，还是面向过程
    // 宏观上，面向对象
    if (this.door_open) {
      this.container.push(obj)
      console.log('success');
    } else {
      console.log('failed, the door is closed');
    }
  }

  run() {
    this.temperature = 10
  }

  inspect() {
    console.log('temperature:', this.temperature);
    console.log('container:', this.container);
  }

}

function main() {
  const fridge1 = new Fridge();
  fridge1.open()
  fridge1.add('🐶')
  fridge1.add('🐶')
  fridge1.close()
  fridge1.add('🐶')
  fridge1.run()
  fridge1.inspect()
  // 代码是不是简洁一些了呢




}

main()