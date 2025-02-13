function generateQR() {
  const input = document.getElementById("input");

  const value = input.value;

  const cont = document.getElementById("img_cont");

  cont.innerHTML = "";

  if (value.trim()) {
    const qr_url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      value
    )}`;

    const image = document.createElement("img");
    image.src = qr_url;

    cont.appendChild(image);
  } else {
    alert("Please enter text!");
  }
}
