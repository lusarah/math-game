'use strict'

function format_problem (a,b,c) {
    var problem = ""
    if (a==1){
        problem += "x^2 ";
    } else if (a==-1){
        problem += "-x^2 ";
    } else {
        problem = String(a)+"x^2 ";
    }

    if (b<-1){
        problem += String(b)+"x "
    } else if (b==-1){
        problem += "-x"
    }else if (b==1){
        problem += "x "  
    } else if (b>1){
        problem += "+"+String(b)+"x "
    }

    if (c<0){
        problem += String(c)
    } else if (c>0){
        problem += "+"+String(c)
    }
    return problem
}

function factorable_problem (max) {
    //(ix+h)(jx+k)= 0, solutions are h/i and k/j
    var h = Math.floor(Math.random() * 2 * max - max); 
    var k = Math.floor(Math.random() * 2 * max - max); 
    var i = Math.floor(Math.random() * 2 * max - max); 
    var j = Math.floor(Math.random() * 2 * max - max); 
    while(i == 0){  //because if one of these were 0, not only would it not be a quadratic but it would also yield a divide by 0 error
        var i = Math.floor(Math.random() * 2 * max - max); 
    }
    while(j==0){
        var j = Math.floor(Math.random() * 2 * max - max);
    }
    var a = i*j
    var b = h*k + j*i
    var c = k*h
    if (h/i==k/j){
        var solution = h/i
    } else {
        //var solution = [`${h}/${i}`,`${k}/${j}`]
        var solution = [Math.round((h/i)*1000)/1000,Math.round((k/j)*1000)/1000]
    }
    var problem = format_problem(a,b,c)
    console.log(problem, solution)
    return problem
}
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    console.log(factorable_problem(8));
    //document.writeln(random_problem(10))
});