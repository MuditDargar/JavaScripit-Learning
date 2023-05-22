
object_1 ={name:"Mudit",length:1 , a:{this : 'tha\\"t'}}
p_1 = JSON.stringify(object_1)
console.log(p_1);
console.log(typeof p_1) 
console.log(typeof object_1) 

parsed=JSON.parse(`{"name":"Mudit","length":1,"a":{"this":"tha\\\"t"}}`)
console.log(parsed);

