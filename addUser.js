class User {
  constructor() {
   
    this.listUser = [];
  }

  save() {
    let users = this.readData();

    if (this.validateData(users)) {
      this.add(users);
    }

    console.log(this.listUser);
  }

  listTable() {
    let tbody = document.getElementById("tbody");

    for (let i = 0; i < this.listUser.length; i++) {
    

      let elName = "<td>" + users.userName + "</td>";
      let elAge = "<td>" + users.userAge + "</td>";
      table.innerHTML = table.innerHTML + elName + elAge;
    }
  }

  add() {
    this.listUser.push(users);
 
  }

  readData() {
    const users = {};

    users.userName = document.getElementById("name").value;
    users.userAge = document.getElementById("age").value;
    event.preventDefault();
    return users;
  }

  validateData(users) {
    let msg = "";

    if (users.userName == "") {
      msg += "Informe seu nome \n";
    }

    if (users.userAge == "") {
      msg += "Informe sua idade \n";
    }

    if (msg != "") {
      alert(msg);
      return false;
    }
    return true;
  }
  // end class
}

let users = new User();
