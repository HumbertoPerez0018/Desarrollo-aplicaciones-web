console.log("Registro cargado")

function createNewUser( name, pass, pago, age, Uname){
		var id = localStorage.getItem("NoUsers");
		var NewUser = new User (id, name, pass, pago, age, Uname);
		NewUser.toMemorie();
		console.log("Esta entrando")
		return Number(id) + 1;
}
