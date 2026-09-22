// Print numbers from 1 to 10.

for (a = 1;a <=10;a++){
    console.log( "print numbers  from one to ten: ",a);
}

// 2. Print numbers from 10 to 1.
for(let b=10;b>=1;b--){
    console.log("Print numbers from 10 to 1.",b);
}

// 3. Print all even numbers from 1 to 20.
for(let c = 1;c <=20;c++){
    if(c % 2 === 0){
    console.log("even nos :",c);
    }
}

// 4. Print all odd numbers from 1 to 20.
for(let d = 1;d<=20;d++){
    if(d % 2 != 0){
        console.log("odd numbers:",d);
        
    }
}


// 5. Print multiples of 5 up to 50.
let num = 5;
for(let e =1;e<=10;e++){
    console.log(`5 x ${e} = ${5 * e}`);
    
}

// 6. Find the sum of numbers from 1 to 100.
let sum =0;
for(let f = 1;f<=100;f++){
    sum += f;
}
 console.log("sum of numbers: ",sum);

// 7. Find the product of numbers from 1 to 5.
let product  =1;
for(g = 1;g<=5;g++){
    product *=g; 
}
console.log("product of numbers:",product);

// level 2 

// 11. Count how many even numbers exist from 1 to 100.
let count = 0;
let number =20;
for(let  h = 1;h<=100;h++){
    if(h % 2 === 0){
        console.log("even number",h);
        count++;
        
    }else{
        console.log("odd number",h);
        
    }
}
console.log("Total count of even numbers :",count);

// 8. Count how many odd numbers exist from 1 to 100.
let counts=0;
for(let i =1;i<=100;i++){
    if(i% 2 != 0){
        
        counts++;
        
    }
    

    
}
    console.log("Total no of odd numbers:",counts);

    // Print squares of numbers from 1 to 10.
    
    for(let z = 1;z<=10;z++){
        let square = z * z;
        console.log(`${z}^2 = ${square}`);
    }
    
    //  Print numbers from 1 to 50 except multiples of 5.
    
    for(let x =1;x<=50;x++){
        if(x % 5 == 0){
            continue;
            
        }
        console.log("printing values except multiple of 5:",x);
        
    }
    // other method 
    for(let y =1;y<=50;y++){
        if(y % 5 != 0){
            
            console.log(y);
        }
        
        
    }

    // 11. Print squares of numbers from 1 to 10.

for(let i =1;i<=10;i++){
  console.log(i * i)
}

// 15. Reverse counting by 2.

for(let m = 20;m>=2;m-=2){
  console.log(m)
}
    // 16. Print numbers from 1 to 100 divisible by 3.


for(let p =1;p<=100;p++){
  if(p % 3 === 0){
    console.log(p);
  }
}

// 17. Print numbers divisible by both 3 and 5.

for(let r = 1;r<=100;r++){
  if(r % 5 === 0 && r % 3 === 0){
    console.log(r)
  }
}

// 20. Print the first 20 multiples of 8.

for(let e =1;e<=160;e++){
  if(e % 8 === 0){
    console.log(e)
  }
}
// other method
for(let t = 1;t <=20;t++){
  console.log(t * 8);
}

// 24. Print only numbers divisible by 4 using continue.

for(let l = 1;l<=100;l++){
  if(l %  4 !== 0){
   
    continue
  }
   console.log(l)
}

// square star pattern

for(let o = 1; o <= 4; o++) {
let row = "";
for(let p = 1; p <= 4; p++) {
row = row + "* ";
}
console.log(row);

}