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

var key = Object.keys(obj);
var val = Object.values(obj);
var p_count = 1;

for ( var i = 0 ; i < listOfProducts.length ; i++){
    var sum = listOfProducts[i].quantity;
    for ( var j = 1 ; j< listOfProducts.length ; j++){
     
        if (listOfProducts[i].productName == key[i] && p_count != val[i]){
            if ( listOfProducts[i].productName == listOfProducts[j].productName){
                sum +=  listOfProducts[j].quantity;

                p_count++;
            } 
        } 
      
    }
  
   var p = true;
    listOfProducts[i].quantity = sum;
    sum = 0;

       
    p_count = 1;

}


const uniqueProducts = [];

const listOfProduct = listOfProducts.filter(element => {
  const isDuplicate = uniqueProducts.includes(element.productName);

  if (!isDuplicate) {
    uniqueProducts.push(element.productName);

    return true;
  }

  return false;
});


console.log(listOfProduct);
