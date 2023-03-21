
//Khai báo và nhập điểm thành phần gồm toán , lý , hóa
var toan = parseFloat(prompt("Nhập điểm toán: "));
var ly = parseFloat(prompt("Nhập điểm lý: "));
var hoa = parseFloat(prompt("Nhập điểm hóa: "));
var sinh = parseFloat(prompt("Nhập điểm sinh: "));
//Khai báo học lực và điểm tb
let hocluc;
var diemtb = (toan + ly + hoa + sinh )/4;
//Khai báo biến number nhằm phục vụ việc thực thi switch case 
let number = parseInt(prompt("Menu chương trình\n1. Tính điểm trung bình (switch case)\n2. Tính điểm trung bình (if else)\n0. Thoát \nVui lòng chọn chương trình: "));
//Thực thi switch case để chạy menu chương trình
switch(number){
    case 1:
        document.writeln("Tính điểm trung bình (switch case)\n");
        //Thực thi switch case để xét học lực 
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
        // In kết quả ra màn hình
        document.writeln("Điểm trung bình của bạn là: " + diemtb + "  học lực của bạn là: " + hocluc);
        break;
        case 2:
            // Sử dụng if else để kiểm tra học lực 
            document.writeln("Tính điểm trung bình (if else)\n");
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
            case 0:
                window.close();
}




