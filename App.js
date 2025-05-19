// ✅ ใส่ IP ของ ESP32 ที่เคยใช้ตอนนั้น
const esp32_ip = "http://192.168.1.10"; // <-- เปลี่ยนตาม IP ที่ใช้งานวันนั้น

function sendCommand(path) {
  fetch(esp32_ip + path)
    .then(response => {
      document.getElementById("status").innerText = "✅ ส่งคำสั่งสำเร็จ: " + path;
    })
    .catch(error => {
      document.getElementById("status").innerText = "❌ ส่งคำสั่งไม่สำเร็จ: " + error;
    });
}
