tampilkanSemua();
// Fungsi untuk menampilkan semua produk
function tampilkanSemua() {
  tampilkanProduk("");
}

// Fungsi untuk menampilkan produk berdasarkan jenis
function tampilkanProduk(jenis) {
  const containerProduk = document.getElementById("produk-container");
  ubahJenis(jenis);

  // Kosongkan container produk sebelum menambahkan produk baru
  containerProduk.innerHTML = "";

  // Ambil data dari file JSON
  fetch("data.json")
    .then((response) => response.json())
    .then((dataProduk) => {
      // Filter produk berdasarkan jenis
      const produkTampil = jenis
        ? dataProduk.filter((produk) => produk.jenis === jenis)
        : dataProduk;

      // Tampilkan produk pada container
      produkTampil.forEach((produk) => {
        const cardProduk = document.createElement("div");
        cardProduk.className = "produk";

        cardProduk.innerHTML = `
                       <img src="${produk.gambar}" alt="" />
                       <p>${produk.tipe}</p>
                       <h7>${produk.nama}</h7>
                       <p><b>${produk.harga}</b></p>
                    `;

        containerProduk.appendChild(cardProduk);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function ubahJenis(jenis) {
  var judul = document.getElementById("judul");
  var semua = document.getElementById("Semua");
  var jersey = document.getElementById("Jersey");
  var celana = document.getElementById("Celana");
  var sepatu = document.getElementById("Sepatu");

  semua.classList.remove("active");
  jersey.classList.remove("active");
  celana.classList.remove("active");
  sepatu.classList.remove("active");

  if (jenis != "") {
    var nav = document.getElementById(jenis);
    judul.innerHTML = jenis;
    nav.classList.add("active");
  } else {
    var nav = document.getElementById("Semua");
    nav.classList.add("active");
    judul.innerHTML = "Semua";
  }
}
