let Thuong ={
   fistname : "Le Van",
   lastname :"Thuong",
   age : "19",
   getFullname:function(){
    let fullname = this.fistname +""+ this.lastname;
    return fullname;
   }

};
console.log(Thuong.getFullname());

class SinhVien{
    constructor(masv,ho,ten,namsinh,email){
        this.masv = masv;
        this.ho = ho;
        this.ten = ten;
        this.namsinh = namsinh;
        this.email = email;
    }
    getAge(){
        const date = new Date();
        let currentYear = date.getFullYear();
        let age = currentYear - this.namsinh;
        return age;
    }
    getfullname(){
        return this.ho + "" + this.ten;
    }
}
let sv1 = new SinhVien('sv01','Le','Van Thuong','2004','hayhatt6@gmail.com');
console.log(sv1.getfullname() + " "+ sv1.getAge());
let w = window.innerWidth;
let h = window.innerHeight;
