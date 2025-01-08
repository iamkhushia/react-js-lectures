// key and value na pair ma data store

let data = {
    name : "khushi",
    age : 23,
    city : "surat",
    hobbie : ["dance","garba"],
    add : {
        line : "valak patiya surat",
        house : "e-301,alpine green velly", 
    },
    sayHello : function(){
        return 'welcome...'
    }
}

console.log(data);
// console.log(data.sayHello());
// console.log(data.name);
// console.log(data["add"].line);
// console.log(data["add"]['house']);
// console.log(data['hobbie']);
// console.log(data['hobbie'][1]);
// console.log(data['hobbie'][0]);

// ===== methods
// console.log(data.hasOwnProperty('name'));
// console.log(data.hasOwnProperty('hello'));

// console.log(Object.keys(data));
//  console.log(Object.values(data));

// ============

// ===== object ma pachal thi add krva

// data.email = "khushi777@gmail.com"
// console.log(data);

// ===== delete krva

// delete data.hobbie
// console.log(data);

// ======= shallow copy

// ====== arry
// let a = [11,22,33];
// let b = a;

// b.push(345);

// console.log("a===>",a);
// console.log("b===>",b);

// ======= object

// let a = {name : 'khushi', age : 23};
// let b = a;

// b.email ='khushi@gmail.com';

// console.log("a===>",a);
// console.log("b===>",b);

// ====== deep copy arry

// let a = [11,22,33];
//  let b = [...a];

//  b.push(345);

//  console.log("a===>",a);
//  console.log("b===>",b);

// ========= object

// let a = {name : 'khushi',age : 23};
// let b = {...a};

// b.hobbie = 'garba'

// console.log("a===>",a);
// console.log("b===>",b);

// ======= merging

// ===== object

// let a = {name : 'khushi',age : 23};
// let b = {hobbie : "music" , name : 'krishna'};
// // let c = {...a , ...b};
// let c = {...b , ...a};
// console.log(c);

// ===== array

// let a = [1,2,3,4,5];
// let b = [6,7,8,9,0];
// let c = [...a , ...b];
// console.log(c);
