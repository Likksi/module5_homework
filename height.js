let myMap = new Map();

 myMap.set("apple", "green");

 myMap.set("strawberry", "red");
 
 myMap.set("blueberry",  "blue");


for (let name of myMap.keys ()) {

   console.log('Ключ — ', name);

}

for (let name of myMap.values ()) {

   console.log('Значение — ', name);

}