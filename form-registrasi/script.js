function validateForm() {
    const name = document.getElementById('name').value.trim();
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (name === '' || gender === '' || phone === '' || email === '' || password === '') {
      alert('Silakan isi semua kolom.');
      return false;
    }

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name.match(nameRegex)) {
      alert('Harap masukkan nama yang valid (hanya huruf dan spasi yang diperbolehkan).');
      return false;
    }
  
    if (gender !== 'male' && gender !== 'female') {
      alert('Please select a valid gender.');
      return false;
    }
  
    const phoneRegex = /^\d{10}$/;
    if (!phone.match(phoneRegex)) {
      alert('Harap masukkan 10 digit nomor telepon yang valid.');
      return false;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      alert('Silakan masukkan alamat email yang valid.');
      return false;
    }
  
    if (password.length < 6) {
      alert('Panjang kata sandi minimal harus 6 karakter.');
      return false;
    }
  
    alert('Registrasi Berhasil!');
  document.getElementById('registrationForm').reset(); 
  window.location.href = 'index.html';
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  validateForm();
});






  