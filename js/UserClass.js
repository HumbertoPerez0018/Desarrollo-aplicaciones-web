class user{
		constructor(id, name, pass, pago, age){
				this.id = id;
				this.name = name;
				this.pass = pass;
				this.pago = pago;
				this.age = age;
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
						"age" : this.age
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
		changeCard(id, name, number, expDate){
				this.id = id;
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
