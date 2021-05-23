console.log("user class loaded");
// pago y name son objetos, no strings
function CreateUser(id, name, pass, pago, age, Uname){
		var probUser = new User(id, name, pass, pago, age, Uname);
		return probUser;
}
class User{
		constructor(id, name, pass, pago, age, Uname){
				this.id = id;
				this.name = name;
				this.pass = pass;
				this.pago = pago;
				this.age = age;
				this.Uname = Uname;
		}
		changePass(NewPass){
				this.pass = NewPass;
		}
		changePago(pago){
				this.pago = pago;
		}
		toMemorie(){
				var jsonOb = {
						"name" : this.name,
						"pass" : this.pass,
						"pago" : this.pago,
						"age" : this.age,
						"UserName" : this.Uname
				};
				jsonOb = JSON.stringify(jsonOb);
				localStorage.setItem(this.id, jsonOb);
		}
}

class Pago{
		constructor( name, number, expDate){
				this.name = name;
				this.number = number;
				this.age = expDate;
		}
		changeCard( name, number, expDate){
				this.name = name;
				this.number = number;
				this.age = expDate;
		}
		toJson(){
				var jsonObj = {
						"name" : this.name,
						"number" : this.number,
						"expDate" : this.expDate,
				};
				return jsonObj;
		}
}
