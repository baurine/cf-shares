class ContainerMachine {
  constructor(cap = 2) {
    this.container = []
    this.door_open = false
    this.cap = cap
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
      if (this.container.length < this.cap) {
        this.container.push(obj)
        console.log('success');
      } else {
        console.log('failed, beyond capability');
      }
    } else {
      console.log('failed, the door is closed');
    }
  }

  run() {
    // TODO
    console.log('run');
  }

  inspect() {
    // console.log('temperature:', this.temperature);
    console.log('container:', this.container);
  }

}

class Fridge extends ContainerMachine {
  constructor(cap = 2) {
    super(cap)
    this.temperature = 20
  }

  run() {
    this.temperature = 10
  }

  inspect() {
    console.log('temperature:', this.temperature);
    super.inspect()
  }

}

class WashMachine extends ContainerMachine {
  constructor(cap = 4) {
    super(cap)
    this.water = 0
  }

  run() {
    this.water = 50
  }

  inspect() {
    console.log('water:', this.water);
    super.inspect()
  }
}

// 你还可以继续扩展
// 微波炉
// 高级洗衣机

function main() {
  const fridge1 = new Fridge();
  fridge1.open()
  fridge1.add('🐶')
  fridge1.add('🐶')
  fridge1.add('🐶')
  fridge1.close()
  fridge1.run()
  fridge1.inspect()
  // 代码是不是简洁一些了呢


  // fridge 不需要知道内部实现，只需要知道接口
  const fridge2 = new Fridge(4)
  fridge2.open()
  fridge2.add('🐱')
  fridge2.add('🐱')
  fridge2.add('🐱')
  fridge2.add('🐱')
  fridge2.inspect()
  // ...
  // 我们来增加一些不同
  // 不同的冰箱，容量不同

  const washmachine = new WashMachine(3)
  washmachine.open()
  washmachine.add('🦁')
  washmachine.add('🦁')
  washmachine.add('🦁')
  washmachine.close()
  washmachine.run()
  washmachine.inspect()
}

main()
