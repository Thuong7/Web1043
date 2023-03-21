
var toan = parseFloat(prompt("Nhập điểm toán: "));
var ly = parseFloat(prompt("Nhập điểm lý: "));
var hoa = parseFloat(prompt("Nhập điểm hóa: "));
var sinh = parseFloat(prompt("Nhập điểm sinh: "));
let hocluc;
var diemtb = (toan + ly + hoa + sinh )/4;

let number = parseInt(prompt("Menu chương trình\n1. Tính điểm trung bình (switch case)\n2. Tính điểm trung bình (if else)\n0. Thoát \nVui lòng chọn chương trình: "));
switch(number){
    case 1:
        document.writeln("Tính điểm trung bình (switch case)");
        switch(true){
            case diemtb >= 9 && diemtb <= 10:
                hocluc = "Giỏi";
                break;
            case diemtb >= 7 && diemtb < 9:
                hocluc= "Khá";
                break;
            case diemtb >= 5 && diemtb < 7:
                hocluc = "Trung bình";
                break;
            default:
                hocluc = "Yếu";
                break;
            
        }
        document.writeln("Điểm trung bình của bạn là: " + diemtb + "  học lực của bạn là: " + hocluc);
        break;
        case 2:
            document.writeln("Tính điểm trung bình (if else)");
            if(diemtb >= 9 && diemtb <= 10){
                hocluc = "Giỏi";
            }else if(diemtb >= 7 && diemtb < 9){
                hocluc = "Khá";
            }else if(diemtb >= 5 && diemtb < 7){
                hocluc = "Trung bình";
            }else{
                hocluc = "Yếu";
            }
            document.writeln("Điểm trung bình của bạn là: " + diemtb + "  học lực của bạn là: " + hocluc);
            break;
            case "0":
                window.close();
}




