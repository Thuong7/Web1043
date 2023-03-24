//Tạo class sinh viên
class SinhVien{
    //Tạo các thuộc tính cho class sinh viên
    constructor(id,firstname,lastname,classid,email,phonenumber,dob){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.classid = classid;
        this.email = email;
        this.phonenumber = phonenumber;
        this.dob = new Date(dob); 
    }
    //Tạo phương thức với giá trị trả về đầy đủ họ và tên
    getfullname(){
        return this.firstname + "" + this.lastname;
    }
    //Tạo phương thức với giá trị trả về là số ngày hoạt động
    getday(){
        const today = new Date();
        const timemls = today.getTime() - this.dob.getTime();
        const day = Math.floor(timemls/(1000*60*60*24));
        return day;
       
    }
    //Tạo phương thức với giá trị trả về là số tuổi
    getage(){
        const day = this.getday();
        const age = Math.floor(day/365);
        return age;
    }
}
//Tạo danh sách sinh viên
let sv1 = new SinhVien('MDS001','Lê Văn','Thường','GI01','hayhayhatt6@gmail.com','863656000','2004-01-16');
let sv2 = new SinhVien('MDS002','Lê Văn','Thịnh','GI02','hayhayhatt3@gmail.com','854623089','2006-12-25');
let sv3 = new SinhVien('MDS003','Trần Quang','Hiếu','GI01','hieunho2611@gmail.com','846437996','2004-11-26');
let sv4 = new SinhVien('MDS004','Mai Hoàng','Long','GI01','longmth@gmail.com','842364336','2004-12-20');
let sv5 = new SinhVien('MDS005','Lê Văn','Hiệp','GI01','darknight@gmail.com','874563464','2004-09-16');
//Tạo mảng danhsach
let danhsach = [sv1,sv2,sv3,sv4,sv5];
//Sử dụng sort để sắp xếp sinh viên theo ngày 
danhsach.sort((a ,b) => a.getday() - b.getday());
//Sử dụng vòng lặp for để in ra danh sách sinh viên
for(let i = 0; i< danhsach.length; i++){
    let sv = danhsach[i];
    console.log(`Mã sinh viên: ${sv.id}`);
    console.log("Họ tên: " ,sv.getfullname());
    console.log(`Ngày sinh: ${sv.dob}`);
    console.log(`Lớp: ${sv.classid}`);
    console.log(`Email: ${sv.email}`);
    console.log(`Số điện thoại: ${sv.phonenumber}`);
    console.log(`Tuổi: ${sv.getage()}`);
    console.log(`Số ngày hoạt động: ${sv.getday()}`);
   
}
//In ra bao gồm một số thông tin từ BOM
console.log(`Chiều rộng của màn hình là: ${window.innerWidth}px`);
console.log(`Chiều cao của màn hình là: ${window.innerHeight}px`);
