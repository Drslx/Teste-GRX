/*
 */

class User {
  constructor() {
    this.arrayUser = [];
  }

  save() {
    let user = this.readData();

    if (this.validateData(user)) {
      this.add(user);
    }
    console.log(this.arrayUser);
    // Pega os dados do inputs no metodo readData
  }

  add(user) {
    this.arrayUser.push(user);
  }

  readData() {
    const user = {};

    // Pega as entradas de dados
    user.userName = document.getElementById("name").value;
    user.userAge = document.getElementById("age").value;
    event.preventDefault();

    return user;
  }

  validateData(user) {
    let msg = "";

    if (user.userName == "") {
      msg += "Informe seu nome \n";
    }

    if (user.userAge == "") {
      msg += "Informe sua idade \n";
    }

    if (msg != "") {
      alert(msg);
      return false;
    }

    // Adiciona um novo nome e idade
    let elName = "<td>" + user.userName + "</td>";
    let elAge = "<td>" + user.userAge + "</td>";

    let table = document.querySelector("tbody");
    table.innerHTML = table.innerHTML + elName + elAge;

    return true;
  }
}

let user = new User();
