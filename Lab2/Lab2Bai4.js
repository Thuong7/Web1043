let days = ["Tue", "Thu", "Sat", "Nine"];

// Thêm các phần tử mới vào mảng bằng phương thức push
days.push("Sun");
days.unshift("Mon");
days.splice(3, 0, "Wed", "Fri");

// Xóa phần tử "Nine" bằng phương thức splice
days.splice(days.indexOf("Nine"), 1);

document.writeln(days); // Kết quả: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]