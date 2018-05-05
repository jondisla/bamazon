var mysql = require('mysql');
var inquirer = require ('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
  });
  
  function start() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        const result = res;
    for (var i = 0; i < result.length; i++){
        console.log("ID: " + result[i].id);
        console.log("Product: " + result[i].product_name);
        console.log("Price: " + result[i].price);
        console.log("------------------------");
    }
    runProducts();
  });
}
  function runProducts() {
    inquirer
      .prompt([
        {
        name: "id",
        type: "list",
        message: "Enter the ID of the product you would like to buy",
        choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",]
      },

    ])
    .then(function(answer) {
      switch (answer.id) {
      case "1":
        iphone();
        break;

      case "2":
        cellCase();
        break;

      case "3":
        protector();
        break;

      case "4":
        smartWatch();
        break;

      case "5":
        charger();
        break;

      case "6":
        buds();
        break;

      case "7":
        ps();
        break;

      case "8":
        xbox();
        break;

      case "9":
        fitnessWatch();
        break;

      case "10":
        speaker();
        break;
    }
  });
}

  function iphone() {
    inquirer
      .prompt({
        name: "quantity",
        type: "input",
        message: "How many units would you like to buy?"
      })
      .then(function(answer) {
        console.log(answer.quantity);
      // console.log(answer.action);
      if (answer.quantity < answer.action) {
        console.log(answer);
      } else {
        return "Insufficient quantity!";
      }

        // var query = "SELECT stock_quantity FROM products WHERE ?";
        "Update products SET stock_quantity = - ? where item_id = ? ",
        [parseInt(answer.quantity), answer.action],
        function(err, response) {
          if (err) {
            console.log(err);
          }
          console.log(response);
        };
      });
      
    }
