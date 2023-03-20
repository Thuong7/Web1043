// Nhập họ và tên
let fullName = prompt("Nhập họ và tên:");

// Nhập giới tính
let gender = prompt("Nhập giới tính (Nam/Nữ):");

// Tách chuỗi họ và tên thành 3 phần: họ, tên đệm, tên riêng
let nameParts = fullName.split(" ");
let firstName = nameParts[nameParts.length - 1];
let lastName = nameParts[0];
let middleName = "";
for (let i = 1; i < nameParts.length - 1; i++) {
  middleName += nameParts[i] + " ";
}
middleName = middleName.trim();

// In ra 3 giá trị họ, tên đệm, tên riêng
document.writeln("Họ: " + lastName);
document.writeln("Tên đệm: " + middleName);
document.writeln("Tên: " + firstName);

// Tạo tên mới dựa trên giới tính
if (gender.toLowerCase() === "nam") {
  middleName = "Văn";
} else if (gender.toLowerCase() === "nữ") {
  middleName = "Vẽ";
}

// In ra tên mới
document.writeln("Tên mới: " + lastName + " " + middleName + " " + firstName);