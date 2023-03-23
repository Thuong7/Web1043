class SinhVien{
    constructor(id,firstname,lastname,classid,email,phonenumber,dob){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.classid = classid;
        this.email = email;
        this.phonenumber = phonenumber;
        this.dob = new Date(dob); 
    }
    getfullname(){
        return this.firstname + "" + this.lastname;
    }
    getday(){
        const today = new Date();
        const timemls = today.getTime() - this.dob.getTime();
        const day = Math.floor(timemls/(1000*60*60*24));
        return day;
       
    }
    getage(){
        const day = this.getday();
        const age = Math.floor(day/365);
        return age;
    }
}
let sv1 = new SinhVien('MDS001','Lê Văn','Thường','GI01','hayhayhatt6@gmail.com','863656000','2004-01-16');
let sv2 = new SinhVien('MDS002','Lê Văn','Thịnh','GI02','hayhayhatt3@gmail.com','854623089','2006-12-25');
let sv3 = new SinhVien('MDS003','Trần Quang','Hiếu','GI01','hieunho2611@gmail.com','846437996','2004-11-26');
let sv4 = new SinhVien('MDS004','Mai Hoàng','Long','GI01','longmth@gmail.com','842364336','2004-12-20');
let sv5 = new SinhVien('MDS005','Lê Văn','Hiệp','GI01','darknight@gmail.com','874563464','2004-09-16');

let danhsach = [sv1,sv2,sv3,sv4,sv5];
danhsach.sort((a ,b) => a.getday() - b.getday());
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

