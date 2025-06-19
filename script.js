document.getElementById('rsvpForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nama = e.target.nama.value;
  const status = e.target.kehadiran.value;
  const result = document.getElementById('rsvpResult');
  result.textContent = `Terima kasih, ${nama}. Kehadiran Anda: ${status}.`;
  e.target.reset();
});
