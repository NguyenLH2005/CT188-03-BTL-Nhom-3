document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) {
    alert("Bạn chưa đăng nhập.");
    window.location.href = "dangnhap.html";
    return;
  }

  // Gán thông tin nếu tồn tại thẻ
  const nameEl = document.getElementById("userName");
  const emailEl = document.getElementById("userEmail");
  const displayEl = document.getElementById("displayName");

  if (nameEl) nameEl.textContent = user.username;
  if (emailEl) emailEl.textContent = user.email;
  if (displayEl) displayEl.textContent = user.username;
});
