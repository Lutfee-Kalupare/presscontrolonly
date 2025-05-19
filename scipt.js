const esp32Ip = 'http://192.168.1.10'; // <-- เปลี่ยนเป็น IP ของ ESP32 จริง ๆ

function sendCommand(path) {
  fetch(`${esp32Ip}${path}`)
    .then(response => {
      if (response.ok) {
        document.getElementById('status').textContent = `สถานะ: ส่งคำสั่ง ${path} สำเร็จ`;
      } else {
        document.getElementById('status').textContent = `สถานะ: ส่งคำสั่งไม่สำเร็จ (${response.status})`;
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById('status').textContent = `สถานะ: ไม่สามารถเชื่อมต่อ ESP32`;
    });
}
