// Nhập vào 3 cạnh của tam giác
var a = parseInt(prompt("Nhập a: "));
var b = parseInt(prompt("Nhập b: "));
var c = parseInt(prompt("Nhập c: "));
// Xét xem 3 cạnh a b c có phải là 3 cạnh của 1 tam giác không
if(a + b > c && a + c > b && c + b > a){
    //Xét điều kiện tam giác cân
    if( a == b || a == c || b == c){
        document.writeln("Đây là tam giác cân");

    }
    //Xét điều kiện tam giác vuông
    else if(a*a +b*b == c*c ||a*a + c*c == b*b ||b*b + c*c == a*a){
        document.writeln("Đây là tam giác vuông")
    }else{
        document.writeln("Đây là tam giác thường")
    }
}else{
    document.writeln("a b c không phải là 3 cạnh của 1 tam giác");
}