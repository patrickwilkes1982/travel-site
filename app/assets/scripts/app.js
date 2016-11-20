var $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {
	payTaxes(){
		console.log(this.name+" now owes $0 in taxes");
	}
}

var john = new Person("JohnDoo", "blue");
john.greet();

var jane = new Adult("JaneSmith", "green");
jane.greet();
jane.payTaxes();