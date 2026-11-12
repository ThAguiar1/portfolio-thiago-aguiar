const form = document.getElementById("form-contato");
const popup = document.getElementById("popup");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  popup.style.display = "flex";

  form.reset();

  // fecha automático após 3s
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
});

function fecharPopup() {
  popup.style.display = "none";
}