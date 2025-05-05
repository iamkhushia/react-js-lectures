// let arr = [11,22,33,44,55,66,77,88,99];
// console.log(arr);
// console.log(arr.length);

// ===== push and pop method :-

// let arr = [10,20,30,40,50,60]; // pop method jema last mathi remove thay
// arr.pop();
// console.log(arr);

// arr.push(101);     // push method jema last ma add thay
// console.log(arr);


// ====== shift and unshift 

//  let arr = [10,20,"khushi",30,40,"abc"];

//  arr.shift();              // shift method aagl thi remove thay
//  console.log(arr);

    // arr.unshift("hello");    // unsift method aagl thi add thay
    // console.log(arr);

// ========= index-of ============  

    //   let arr = [10,20,30,"hy",50];  // index-of method ma index-number find kri ne ape
    //   console.log(arr);
    //   let data = arr.indexOf("hy");  // variabel ma stor krvi pde
    // let data = arr.indexOf(30);
    // let data = arr.indexOf(10);
    //   console.log(data);

// ======== ...copy || spread ========  (4)

        // let copy = "welcome";   // copy ma pela variaebl declear krvo pde
        // let arr = [10.20,30,...copy,40,50];
        // console.log(arr);


  // ======== include ========  (5)

    //  let arr = [10,20,30,"hello",40,50,"abc"];  // aa method ma index ma value che ke ny mins k true or false
    //  let demo = arr.includes("hello");  // variabel ma stor krvi pde
    //  let data = arr.includes("khushi");  // variabel ma stor krvi pde
    //  console.log(data);
    //  console.log(demo);

//  ======== filter ========= (6)

        // let arr = [10,20,30,"Namste",100,400,300] ;  // mageli vastu che to ae print thay or aatla thi aatla sudhi ma  
        // let clean = arr.filter((val,index) => val > 50); // variabel ma stor krvi pde
        // console.log(clean);

        // let arr = [10,20,30,"Namste",100,400,300] ;  
        // let clean = arr.filter((val,index) => val < 50);
        // console.log(clean);

        //  let arr = [10,20,30,30,"Namste",100,400,300] ;  
        //  let clean = arr.filter((val,index) => val === 30);
        //  console.log(clean);

        // even-number  ????

        //  let arr = [10,20,4,3,7,6,0,3.4,2.5,7,8,200,500,400,55.34,800,900];
        //  let even = arr.filter((val,index) => val % 2 == 0) ;
        //  console.log(even);

        // odd-number   ????

        // let arr = [10,20,4,3,7,6,0,3.4,2.5,7,8,200,500,400,55.34,800,900];
        // let odd = arr.filter((val,index) => val % 2 !== 0) ;
        // console.log(odd);

// ========== map =========  (7)

        //  let arr = [300,2.3,"khushi",400,5.4,"hello",50];
        //  arr.map((val,index) => console.log(val,index));  // index declare

//  ======== slice & spice ============(10)

        // let arr = [10,20,30,40,50,60,70,80,90,44,67,43,78,67,50];
        // console.log(arr);

       // spice-method =====================

        // arr.splice(3,5,300);      //()index number koy b and aama value delet thay and add thay
        // console.log(arr);

      // arr.splice(0,4);
      // console.log(arr);

      // arr.splice(9,6);
      // console.log(arr);

      // arr.splice(5,-3);
      // console.log(arr);

      // arr.splice(-5,3);
      // console.log(arr);

      // slice-method ============================

    //   let arr = [10,20,30,40,50,60,70,80,90,44,67,43,78,67,50];
    //     console.log(arr);

    //    let demo = arr.slice(5,3);       // koy b 2 inde number vacheni value print thay bt add thay ny
    //    console.log(demo);

      // let name = arr.slice(3,5);      
      // console.log(name);

      // let name = arr.slice(2,7);       
      // console.log(name);

      // let name = arr.slice(5,-3);       
     // console.log(name);

     // let name = arr.slice(0,-3);       
     // console.log(name);

     // let name = arr.slice(0,1);       
     // console.log(name);


//======== every ========= 

        // let arr=[10,20,30,40,50,60];    // every ma badhi condition true hovi pde nhti to false aave
        // let data = arr.every((val,index) => val<=60); // condition koy b chale
        // console.log(data);

        // let arr = [1,2,3,4,5,6,7,8,9];
        // let data = arr.every((val,index) => val>4);
        // console.log(data);

        // let arr = [1,2,3,4,5,6,7,8,9];
        // let data = arr.every((val,index) => val<=9 );
        // console.log(data);


// ========== some =========== (12)

        // let arr = [1,2,3,4,5,6,7,8,9];    //koy b ek conditin sachi hovi pde
        // let data = arr.some((val,index) => val>4);   // condition koy b chale 
        // console.log(data);

        // let arr = [1,2,3,4,5,6,7,8,9];
        // let data = arr.some((val,index) => val<0);
        // console.log(data);

        // let arr = [1,2,3,4,5,6,7,8,9];
        // let data = arr.some((val,index) => val<2 && val<0);
        // console.log(data);

        // let arr = [1,2,3,4,5,6,7,8,9];
        // let data = arr.some((val,index) => val<2 || val<0);
        // console.log(data);

// ========= length ========== (13)

        // let text = "welcome";   // string ma vdhare vapray
        // let demo = text.length;
        // console.log(demo);

        // let arr = "khushi  ......";
        // let demo = arr.length;
        // console.log(demo);

        // let arr = [30,20,"hello"];
        // let demo = arr.length;
        // console.log(demo);

// ========= concat ==========  (14)

        // let arr = [12,4,7,4,7];   // mearg thay aetle ke be arr ne jodvanu kam
        // let arr2 = [8,90,65,34];
        // let name = arr.concat(arr2);
        // console.log(name);

        // let arr = ["khushi"];
        // let arr2 = ["hello"];
        // let name = arr.concat(arr2);
        // console.log(name);

// ========= miltipal-array-delet ========   (15)

        // let arr = [12,56,34,9,7,8,4,5,23,6,8,0,5,2.6,8,4,2,5,8,6,5.4,6,8,5,3,7];
        // let name = arr.length;
        // console.log(name);

// ========= sort =========  (16)

       // let arr = ['khushi', 'hello', 'welcome', 'namste']; //abcd.... ma je aalfa bet pela aavto hoy ae prmane arr chenge thy jay
       // arr.sort();
       // console.log(arr);
       // let arr2 = [20,76,45,1,98]; // 123.....number prmane cheng thy ne aave 
       // arr2.sort();
       // console.log(arr2);

// ======== revers ======== (17)

       // let arr = ["khushi",12,6,90];
       // arr.reverse();
       // console.log(arr);

// ======== reduceRight ==========  (18)

        // let arr = [                // mearge thy ne aave aetle k concat jem
        //         [0,1],
        //         [2,3],
        //         [4,5],
        // ];
        // console.log(arr);
        // let data = arr.reduceRight((val,index) => val.concat(index));
        // console.log(data);

// ======== reduce ======== (19)

        // let arr = [1,5,3,8];          // sum thay aa method thi
        // let sum =arr.reduce((val,index) => val+index);
        // console.log(sum);

// ======= join =========(20)

        // let arr = ['hello', 'namste', 'welcome'];  // string k value hoy to ae join thay
        // console.log(arr.join);
        // console.log(arr.join());
        // console.log(arr.join(''));
        // console.log(arr.join('-'));

        // let arr = [12, 45, 6, 4];
        // console.log(arr.join());
        // console.log(arr.join(''));
        // console.log(arr.join('-'));

// ======= string ========= (21)

        // let str = "JavaScript,Python,C++,PHP,C,angular";
       //     console.log(str);

       //let string = str.split(",");
       //console.log(string);

// ======== flat ======== 

        // let arr = [1,2,[5,6]];    // mix thy jay bdhu
        // console.log(arr.flat());

        // let arr = [1,2,[3,[4,5]]];
        // console.log(arr.flat());

        // let arr = [1,2,[3,[4,5]]];
        // console.log(arr.flat(2));

        // let arr = [1,2,[3,[4,5,[6]]]];
        // console.log(arr.flat(3));

        // let arr = [1,2,[3,[4,5,[6]]]];
        // console.log(arr.flat(Infinity));

// ======== isArray()

// let arr = [1,2,3,4,5];
// console.log(Array.isArray(arr));
// let arr = '1,9,3,4,5,6;'
// console.log(Array.isArray(arr));

// ===== entires 

// let obj = {a:1,b:2,c:3,d:4};
// const entires = Object.entries(obj);
// console.log(entires);


