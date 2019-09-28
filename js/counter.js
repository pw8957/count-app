const counterApp = {
	count : 0,
	increment : function() {
		this.count = this.count + 1;
	},
	decrement : function() {
		this.count = this.count - 1;
	}
}