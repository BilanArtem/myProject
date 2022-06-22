var n=9;

function my_function(n) {
    var x='';
    if(n>1){
        x += n 
        return x -=  my_function(n-1);
    }
    return x ;
    
}

