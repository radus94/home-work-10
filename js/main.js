var myCurrentAge = 26;

if (myCurrentAge >= 25) {
    document.write("<div class='ifElse'>Method If-Else: <span class='red'>I am over 25 years old</span></div>");
}
else {
    document.write("<div  class='ifElse'>Method If-Else: <span class='green'>I am under 25</span></div>");
}

var result = ( myCurrentAge >= 18 )?"<div>Method Ternary Operator: <span class='red'>I am over 25 years old</span></div>" : "<div>Method Ternary Operator: <span class='green'>I am under 25</span></div>";
 document.write(result)