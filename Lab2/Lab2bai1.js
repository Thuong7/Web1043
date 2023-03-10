var a = parseInt(prompt("Nhập a: "));
var b = parseInt(prompt("Nhập b: "));
var c = parseInt(prompt("Nhập c: "));
var delta = b * b - 4 * a * c;
if(delta<0){
    document.writeln("Phương trình vô nghiệm!");

}
else if(delta == 0){
     var x3 = (-b)/2*a;
     document.write("Phương trình có nghiệm kép là: ");
     document.writeln("X ="+x3);
}
else {
    var x1 =(-b- Math.sqrt(delta))/2*a;
     var x2 =(-b + Math.sqrt(delta))/2*a;
     document.writeln("Phương trình có hai nghiệm phân biệt");
     document.writeln("X1 = "+x1);
     document.writeln("X2= "+x2);
}