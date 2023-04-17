<template>
  <h1>{{ courseName }}</h1>
  <p>Course By {{mentor}}</p>

  <button @click="count++"> + </button>
  <h3>{{ count }}</h3>
  <button @click="count--"> - </button>

</template>



<script>
  import { ref } from 'vue';
  export default {
    setup(){
      let count = ref(0);
      const courseName = ref('Vue JS 3 MasterClass') ;
      const mentor = ref('Md Niaj Makdhum');

      return { count, courseName, mentor }

    }
  }
  
</script>

<scrip>
 import {  ref } from "vue";
  export default {
    setup() {
      let count = ref(0);
      const courseName = ref("Vue JS 3 MasterClass");
      const mentor = ref("Md Niaj Makdhum");
  
      return { count, courseName, mentor };
    },
  };


</script>

 <script>
  import { ref } from "vue";
  export default {
    setup() {
      let count = ref(0);
      const courseName = ref("Vue JS 3 MasterClass");
      const mentor = ref("Md Niaj Makdhum");
  
      return { count, courseName, mentor };
    },
  };
</script>

<template>
  <h1>{{ courseName }}</h1>
  <p>Course By {{ mentor }}</p>

  <button @click="count++"> + </button>
  <h3>{{ count }}</h3>
  <button @click="count--"> - </button>
</template>

<template>
  <div class="todo-list">
    <h1>Todo List</h1>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.completed" />
        <span>{{ todo.text }}</span>
        <button @click="deleteTodo(todo)">Delete</button>
      </li>
    </ul>
    <input type="text" v-model="newTodoText" placeholder="Add a new todo" />
    <button @click="addTodo">Add Todo</button>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      todos: [
        {
          text: 'Buy milk',
          completed: false,
        },
        {
          text: 'Wash the car',
          completed: false,
        },
      ],
      newTodoText: '',
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        text: this.newTodoText,
        completed: false,
      });
      this.newTodoText = '';
    },
    deleteTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
  },
};
</script>

<style>
.todo-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.todo-list li {
  margin-bottom: 10px;
}

.todo-list li input {
  margin-right: 5px;
}

.todo-list li button {
  margin-left: 5px;
}
</style>
<template>
  <div class="calculator">
    <h1>Calculator</h1>
    <input type="text" v-model="expression" />
    <button @click="evaluate">Evaluate</button>
    <div class="results">
      <span>{{ result }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      expression: '',
      result: '',
    };
  },
  methods: {
    evaluate() {
      const parser = new CalculatorParser(this.expression);
      const result = parser.evaluate();
      this.result = result;
    },
  };
};
class CalculatorParser {
  constructor(expression) {
    this.expression = expression;
    this.tokens = this.tokenize(this.expression);
  }

  tokenize(expression) {
    const tokens = [];
    let currentToken = '';
    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];
      if (char === '+' || char === '-' || char === '*' || char === '/' || char === '(' || char === ')') {
        if (currentToken !== '') {
          tokens.push(currentToken);
          currentToken = '';
        }
        tokens.push(char);
      } else {
        currentToken += char;
      }
    }
    if (currentToken !== '') {
      tokens.push(currentToken);
    }
    return tokens;
  }

  evaluate() {
    const stack = [];
    for (let i = 0; i < this.tokens.length; i++) {
      const token = this.tokens[i];
      if (token === '+') {
        const right = stack.pop();
        const left = stack.pop();
        stack.push(left + right);
      } else if (token === '-') {
        const right = stack.pop();
        const left = stack.pop();
        stack.push(left - right);
      } else if (token === '*') {
        const right = stack.pop();
        const left = stack.pop();
        stack.push(left * right);
      } else if (token === '/') {
        const right = stack.pop();
        const left = stack.pop();
        stack.push(left / right);
      } else if (token === '(') {
        stack.push(token);
      } else if (token === ')') {
        const operator = stack.pop();
        while (operator !== '(') {
          const right = stack.pop();
          const left = stack.pop();
          stack.push(left + right);
          operator = stack.pop();
        }
      } else {
        stack.push(Number(token));
      }
    }
    return stack.pop();
  },
};
</script>

<style>
.calculator {
  width: 200px;
  margin: 0 auto;
}

.calculator input {
  width: 100%;
}

.calculator .results {
  font-size: 2em;
}
</style>

<template>
  <div class="todo-list">
    <h1>Todo List</h1>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.completed" />
        <span>{{ todo.text }}</span>
        <button @click="deleteTodo(todo)">Delete</button>
      </li>
    </ul>
    <input type="text" v-model="newTodoText" placeholder="Add a new todo" />
    <button @click="addTodo">Add Todo</button>
  </div>
</template>

<script>

export default {
  name: 'TodoList',
  data() {
    return {
      todos: [
        {
          text: 'Buy milk',
          completed: false,
        },
        {
          text: 'Wash the car',
          completed: false,
        },
      ],
      newTodoText: '',
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        text: this.newTodoText,
        completed: false,
      });
      this.newTodoText = '';
    },
    deleteTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
  },
};

</script>

<style>
.todo-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.todo-list li {
  margin-bottom: 10px;
}

.todo-list li input {
  margin-right: 5px;
}

.todo-list li button {
  margin-left: 5px;
}
