let namsinh = prompt("Bạn sinh năm bao nhiêu?");
let tuoi = 2024 - namsinh;

if (tuoi < 2024) {
    document.write("Tuổi của bạn là " + tuoi );
} else {
    document.write("Không hợp lệ.");
}