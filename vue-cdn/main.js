new Vue({
	el: '#app',
	data: {
		result: '',
		operators: ['+', '-', '*', '/'],
		numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.']
	},
	methods: {
		addNumber: function(number) {
			this.result += number;
		},
		addOperation: function(operator) {
			if (this.result === '') {
				return;
			}
			if (this.result.slice(-1) === operator) {
				return;
			}
			this.result += operator;
		},
		calculate: function() {
			this.result = eval(this.result);
		},
		clear: function() {
			this.result = '';
		},
		backspace: function() {
			this.result = this.result.slice(0, -1);
		}
	}
});
