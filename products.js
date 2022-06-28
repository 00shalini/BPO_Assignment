const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

var obj = {};
var p_count = 0;
var value = 1;

for (var i = 0; i < listOfProducts.length; i++) {
    
  if ( obj[listOfProducts[i].productName] == undefined){
    obj[listOfProducts[i].productName] = value;
  } else {
    obj[listOfProducts[i].productName] == listOfProducts[i].productName;
    value = obj[listOfProducts[i].productName];
    obj[listOfProducts[i].productName] = value+1;

  }
}
console.log(obj);
