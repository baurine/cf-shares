# Modern JavaScript

Something new about JavaScript

![](../ekohe-logo.png)

baurine@2017/08/18

the slides are generated by [Marp](https://github.com/yhatt/marp)

---

# Modern JavaScript

- ES6
- Promise
- Generator
- Async / Await

Playground: https://jsfiddle.net/

---

## ES6 (ECMAScript 2015)

Choose some I most like and most use:

1. Template String
1. Destructuring Assignment
1. Object Spread Operator (...)
1. var -> let / const
1. class / extends
1. arrow function
1. module

Learn More:
1. [ES 6 介绍](http://javascript.ruanyifeng.com/advanced/ecmascript6.html#toc8)
1. [前端开发者不得不知的 ES6 十大特性](http://www.alloyteam.com/2016/03/es6-front-end-developers-will-have-to-know-the-top-ten-properties/)

---

### Template String

Before:

    var boss = 'maxime'
    var desc = 'our boss is ' + boss + '.'

ES6:

    const boss = 'maxime'
    const desc = `our boss is ${boss}.`

Ruby:

    boss = 'maxime'
    desc = "our boss is #{boss}."

---

### Destructuring Assignment

Before:

    var data = {
      a: 1,
      b: 2,
      c: 3,
    }
    var a = data.a
    var b = data.b
    var c = data.c
    var d = a + b + c

---

### Destructuring Assignment

ES6:

    const data = {
      a: 1,
      b: 2,
      c: 3,
    }
    const { a, b, c } = data
    let d = a + b + c

We usually use it in React:

    this.state = { sa: 1, sb: 2, sc: 3 }
    this.props = { pa: 1, pb: 2, pc: 3 }

    render() {
      const { sa, sb, sc } = this.state
      const { pa, pb, pc } = this.props
    }
    // to avoid always use this.props.pa, this.state.sa

Show some project code.

---

### Object Spread Operator (...)

    const foo = { a: 1, b: 2, c: 3 }
    const bar = { d: 4, ...foo }
    // guess what's the value of bar

    // so you don't need to write like this:
    const bar = { d: 4, a: foo.a, b: foo.b, c: foo.c }

    // or
    const bar = Object.assign({}, foo, { d: 4 })

---

### Object Spread Operator (...)

It is a very common usage in Redux:

    function todoApp(state = initialState, action) {
      switch (action.type) {
        case SET_VISIBILITY_FILTER:
          return {
            ...state,
            visibilityFilter: action.filter
          }
        default:
          return state
      }
    }

Show some project code.

---

### var -> let/const

Some problems about var:

1. No block scope, if you define it in a method, it is accessible anywhere in the method. a classic sample:

        function foo() {
          var a = []
          for (var i = 0; i < 10; i++) {
            var c = i;
            a[i] = function() {
              console.log(c);
            }
          }
          // guess what's the output
          console.log( i );
          console.log( c );
          a[6]();
        }

        foo();

---

It equals:

     function foo() {
       var a = []
       var i
       var c
       for (i = 0; i < 10; i++) {
         c = i;
         a[i] = function() {
           console.log(c);
         }
       }
       // guess what's the output
       console.log( i );
       console.log( c );
       a[6]();
       console.log( a[6] );  // ??
     }

---

How to fix it, the way before ES6 - closure:

    function foo() {
      var a = []
      for (var i = 0; i < 10; i++) {
        var c = i;
        a[i] = (function(j) {
            return function() {
              console.log(j);
          }
        }(c));
      }
      console.log( i );
      console.log( c );
      a[6]();
    }

    foo();

---

By ES6, it is easy, because let/const works in block scope:

    function foo() {
      var a = []
      for (let i = 0; i < 10; i++) {
        let c = i;
        a[i] = function() {
          console.log(c);
        }
      }
      // console.log( i );
      // console.log( c );
      a[6]();
    }

    foo();

---

BTW, what's closure?

Simply say, a function return a function, the returned function we can call it a closure.

Because, in fact, it doesn't only return a function, but also include a context that returned functinon refers to.

---

Example:

    function counter(begin) {
      var cnt = begin
      function inc() {
        cnt++
        console.log(cnt)
      }
      return inc
    }

    var counter5 = counter(5)
    counter5()
    counter5()

    var counter10 = counter(10)
    counter10()
    counter10()

---

2. Would contaminate global variables when define outside method

        // a.js
        var foo = 'foo'

        var funA = function() {
          console.log(foo)
        }

        // b.js
        var foo = 'bar'

        var funB = function() {
          console.log(foo)
        }

        // html
        <script>
          funA() // the result depends the load order of a.js and b.js
          funB()
        </script>

---

Solution before ES6, famous IIFE (Immediately Invoke Function Expression)

    // a.js
    var moduleA =
    (function() {
      var foo = 'foo'
      return {
        funA: function() {
          console.log(foo)
        }}
    } ())
    // b.js
    var moduleB =
    (function() {
      var foo = 'foo'
      return {
        funB: function() {
          console.log(foo)
        }}
    } ())
    // html
    <script>
      moduleA.funA()
      moduleB.funB()
    </script>

---

After ES6

1. Change var to let/const. let/const work in block scope, they are not global variables any more, so they would not contaminate the global variables when defined outside method. IIFE is outdate!
2. ES6 support module manage (we will talk about it later), only the variables and methods are explictly exported, then they can be accessed in other files by explicitly importing.

---

### Class

Just grammar sugar, not real class like Ruby / Java.

---

Old style:

    var Person = function(firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName
    }

    Person.prototype.fullName = function() {
      return this.firstName + ' ' + this.lastName
    }

    new Person('foo', 'bar').fullName()  // "foo bar"

ES6:

    class Person {
      constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
      }
      fullName() {
        return `${this.firstName} ${this.lastName}`
      }
    }

---

Inherit:

Old Style:

    var Employee = function(firstName, lastName, job) {
      this.firstName = firstName
      this.lastName = lastName
      this.job = job
    }
    Employee.prototype = new Person()

    new Employee('foo', 'bar', 'coder').fullName()

ES6:

    class Employee extends Person {
      constructor(firstName, lastName, job) {
        super(firstName, lastName)
        this.job = job
      }
    }

---

### Arrow Function

Similar with anonymous function, lambda expression, but not exactly same.

    var f = v => v + 1;

    // equals
    var f = function(v) {
      return v + 1;
    }

    var sum = (num1, num2) => num1 + num2;

    // equals
    var sum = function(num1, num2) {
      return num1 + num2;
    }

---

Arrow function simplify the callback function:

    var a = [1,2,3,4,5,6,7,8,9]

    a.filter(i => i<5).map(i => i*10).reduce((a,b)=>a+b, 0)

    a.filter(function(i) {
      return i < 5
    }).map(function(i) {
      return i*10
    }).reduce(function(a,b) {
      return a+b
    }, 0)

---

Arrow function change the `this` behavior. It is determind when it is defined, not in run time.

`this`? It is a big problem in JavaScript. Simply say, the `this` in the method point to object where the method run on. The problem is you will be confused what's the object the method run on.

    this.cnt = 100  // var cnt = 100
    const counter = {
      cnt: 50,

      inc: function() {
        console.log("$$$$$$" + this.cnt++)

        setTimeout(function() {
          console.log("######" + this.cnt++)
        }, 1000)
      }
    }

    counter.inc()
    counter.inc()

---

Why?

    counter.inc()
    // `inc()` run on counter obj
    // `this` in `inc()` point to counter object

    setTimeout( fn, 1000 )
    // fn, not run on any object, so `this` point to global

---

Solution before ES6 (clsoure):

    this.cnt = 100
    const counter = {
      cnt: 50,

      inc: function() {
        var self = this
        setTimeout(function() {
          console.log(self.cnt++)
        }, 1000)
      }
    }

    counter.inc()
    counter.inc()

---

By ES6:

    this.cnt = 100
    const counter = {
      cnt: 50,

      inc: function() {
        setTimeout(() => console.log(this.cnt++), 1000)
      }
    }

    counter.inc()
    counter.inc()

---

Quiz:

    this.cnt = 100
    const counter = {
      cnt: 50,

      inc: () => console.log(this.cnt++) // what's the this?

      foo: this.cnt
    }

    counter.inc()
    counter.inc()

    console.log( counter.foo )

---

### Module

Not much to say. JavaScript finally close to most of languages.

    // a.js
    const foo = 'foo'
    function bar() {
      console.log('bar')
    }

    export { foo, bar }

    // b.js
    import { foo, bar } from 'a.js'

    console.log(foo)
    bar()

Show some project code.
