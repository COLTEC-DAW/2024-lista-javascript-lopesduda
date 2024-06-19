for(let i = 0; i < 101; i++){
    if (i%3 == 0 && i%5 == 0){
        console.log (i+ "-FizzBuzz");
        continue;
   
    }else if( i%3 == 0){
        console.log(i+ "-Fizz");
        continue;
        
    }else if (i%5 == 0){
        console.log(i+ "-Buzz"); 
        continue;
    }
    console.log(i);
}