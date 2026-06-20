// === halaman voting===//
let pilihanTempat = "";
let pilihanTanggal = "";

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".btn-group .btn");
    const currentPath = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPath || (currentPath === "" && link.getAttribute("href") === "index.html")) {
            link.style.backgroundColor = "#d9a752";
            link.style.borderColor = "#d9a752";
            link.style.color = "#0f3424"; 
            link.style.fontWeight = "bold";
        }
    });
});

// === review tempat ===//

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const namaTempatKey = urlParams.get('tempat');
    if (!document.getElementById("nama-tempat")) return;

    const dataReview = {
        hoco: {
            nama: "H.O.C.O",
            lokasi: "Jl. Seulanga, Lambhuk, Kec. Ulee Kareng, Kota Banda Aceh.",
            rating: "4.8/5",
            harga: "Rp 25-50 rb",
            kapasitas: "150+",
            parkiran: "LUAS",
            foto: ["hocoo1.jpg", "hoco2.jpg", "hoco3.jpg", "hoco4.jpg"],
            menu: ["Nasi Ayam Sambal Matah", "Avocado Coffee", "Pizza", "HOCA Latte"]
        },
        limabelas: {
            nama: "LIMA BELAS Cafe",
            lokasi: "Geuceu Kayee Jato, Kec. Banda Raya, Kota Banda Aceh.",
            rating: "4.6/5",
            harga: "Rp 20-50 rb",
            kapasitas: "80+",
            parkiran: "CUKUP LUAS",
            foto: ["limabelas1.jpg", "limabelas2.jpg", "limabelas3.jpg", "limabelas4.jpg"],
            menu: ["Strawberi Squash", "Kentang Goreng", "Spaghetti Carbonara", "mango Mojito"]
        },
        aacoffee: {
            nama: "AA COFFEE PREMIUM",
            lokasi: "Jl. Laksamana Malahayati, Cadek, Kec. Baitussalam, Kab. Aceh Besar.",
            rating: "4.3/5",
            harga: "Rp 15-50 rb",
            kapasitas: "140+",
            parkiran: "SANGAT LUAS",
            foto: ["aa coffee 1.jpg", "aa coffee 2.jpg", "aa coffee 3.jpg", "aa coffee 4.jpg"],
            menu: ["Nasi Ayam Katsu", "Kwetiau Tuna", "Timun Kerok", "Tempe Mendoan"]
        },
        areacoffee: {
            nama: "AREA COFFEE",
            lokasi: "Jl. Moh. Daud Beureuh No.49, Kuta Alam, Kec. Kuta Alam.",
            rating: "3.8/5",
            harga: "Rp 20-55 rb",
            kapasitas: "100+",
            parkiran: "LUAS",
            foto: ["limabelas1.jpg", "limabelas2.jpg", "limabelas3.jpg", "limabelas4.jpg"],
            menu: ["Kopi Susu", "Nasi Ayam Lada Hitam", "Mie Goreng", "Dimsum"]
        }
    };

    if (namaTempatKey && dataReview[namaTempatKey]) {
        const tempat = dataReview[namaTempatKey];

        document.getElementById("nama-tempat").innerText = tempat.nama;
        document.getElementById("lokasi-tempat").innerHTML = `<i class="bi bi-geo-alt-fill text-danger"></i> ${tempat.lokasi}`;
        document.getElementById("rating-tempat").innerHTML = `<i class="bi bi-star-fill"></i> ${tempat.rating}`;
        document.getElementById("harga-tempat").innerText = tempat.harga;
        document.getElementById("kapasitas-tempat").innerText = `${tempat.kapasitas} orang`;
        document.getElementById("parkiran-tempat").innerText = tempat.parkiran;

        const sliderFoto = document.getElementById("slider-foto");
        const indicatorsContainer = document.getElementById("carousel-indicators-dynamic");

        if(sliderFoto && indicatorsContainer) {
            tempat.foto.forEach((url, index) => {
                const isActive = index === 0 ? 'active' : '';
                const isCurrent = index === 0 ? 'aria-current="true"' : '';

                indicatorsContainer.innerHTML += `
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="${index}" class="${isActive}" ${isCurrent} aria-label="Slide ${index + 1}"></button>
                `;
                sliderFoto.innerHTML += `
                    <div class="carousel-item ${isActive}" data-bs-interval="4000">
                        <img src="${url}" class="d-block w-100" alt="Foto ${tempat.nama}">
                    </div>
                `;
            });
        }

        const listMenu = document.getElementById("list-menu");
        if(listMenu) {
            tempat.menu.forEach(menuName => {
                listMenu.innerHTML += `<span class="badge-menu-bulat shadow-sm">${menuName}</span>`;
            });
        }
    } else {
        document.getElementById("nama-tempat").innerText = "Data Review Tidak Ditemukan";
    }
});

// ==== stelah tekan vote ===//

function kirimVote(jenis, namaPilihan) {

    if (jenis === 'tempat') {
        pilihanTempat = namaPilihan;
        alert("Tempat pilihanmu (" + namaPilihan + ") berhasil disimpan. Sekarang silakan pilih tanggalnya!");
    } else if (jenis === 'tanggal') {
        pilihanTanggal = namaPilihan;
        alert("Tanggal pilihanmu (" + namaPilihan + ") berhasil disimpan. Jangan lupa pilih tempatnya jika belum!");
    }


    if (pilihanTempat !== "" && pilihanTanggal !== "") {
        alert("Semua pilihanmu (Tempat & Tanggal) sudah lengkap dan berhasil direkam oleh sistem!");
        
        const kontenVoting = document.getElementById("konten-voting");
        const kontenTerimaKasih = document.getElementById("konten-terimakasih");
        
        if(kontenVoting) kontenVoting.style.display = "none";
        if(kontenTerimaKasih) kontenTerimaKasih.style.display = "block";
        
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}

// ==== menu ====//
const menuData = {
    takjil: [
        { id: "takjil-0", name: "Kurma", price: 10000, img: "kurma.jpeg" },
        { id: "takjil-1", name: "Kolak ", price: 12000, img: "kolak.jpeg" },
        { id: "takjil-2", name: "biji salak", price: 8000, img: "bijisalak.jpeg" },
        { id: "takjil-3", name: "bubur sumsum", price: 10000, img: "bubursumsum.jpeg" },
        { id: "takjil-4", name: "cenil", price: 6000, img: "cenil.jpeg" },
        { id: "takjil-5", name: "gorengan", price: 17000, img: "gorengan.jpeg" },
        { id: "takjil-6", name: "klepon", price: 7000, img: "klepon.jpeg" },
        { id: "takjil-7", name: "kueh lapis", price: 7000, img: "lapis.jpeg" },
        { id: "takjil-8", name: "nona manis", price: 10000, img: "nonamanis.jpeg" },
        { id: "takjil-9", name: "onde-onde", price: 9000, img: "onde.jpeg" },
        { id: "takjil-10", name: "pastel", price: 10000, img: "pastel.jpeg" },
        { id: "takjil-11", name: "putu ayu", price: 12000, img: "putuayu.jpeg" },
        { id: "takjil-12", name: "putu bambu", price: 14000, img: "putubambu.jpeg" },
        { id: "takjil-13", name: "salad buah", price: 20000, img: "salad.jpeg" },
        { id: "takjil-15", name: "sop buah", price: 15000, img: "sopbuah.jpeg" },
        { id: "takjil-16", name: "pisang ijo", price: 15000, img: "pisangijo.jpeg" }
    ],
    makanan: [
        { id: "makanan-0", name: "Nasi + Ayam samabal pecak", price: 20000, img: "ayampecak.jpeg" },
        { id: "makanan-1", name: "Nasi + Ayam penyet", price: 15000, img: "ayampenyet.jpeg" },
        { id: "makanan-2", name: "Gualai Ayam", price: 20000, img: "gulaiayam.jpeg" },
        { id: "makanan-3", name: "Ikan Bakar", price: 45000, img: "ikanbakar.jpeg" },
        { id: "makanan-4", name: "Kangkung", price: 10000, img: "kangkung.jpeg" },
        { id: "makanan-5", name: "Kepiting sambal padang", price: 62000, img: "kepitingsambalpadang.jpeg" },
        { id: "makanan-6", name: "Kerang", price: 55000, img: "kerang.jpeg" },
        { id: "makanan-7", name: "Kuah beulangong", price: 50000, img: "kuahbeulangong.jpeg" },
        { id: "makanan-8", name: "Nasi", price: 5000, img: "nasi.jpeg" },
        { id: "makanan-9", name: "Tumis Pakis", price: 10000, img: "pakis.jpeg" },
        { id: "makanan-10", name: "Rendang", price: 25000, img: "rendang.jpeg" },
        { id: "makanan-11", name: "Soto", price: 23000, img: "soto.jpeg" },
        { id: "makanan-12", name: "Tumis cumi-cumi", price: 30000, img: "tumiscumi-cumi.jpeg" },
        { id: "makanan-13", name: "Tumis udang", price: 28000, img: "udang.jpeg" },
        { id: "makanan-14", name: "Mie Goreng aceh", price: 20000, img: "mie.jpeg" }
    ],
    minuman: [
        { id: "minuman-0", name: "Coklat", price: 15000, img: "coklat.jpeg" },
        { id: "minuman-1", name: "Espreso", price: 16000, img: "espreso.jpeg" },
        { id: "minuman-2", name: "Iced americano", price: 10000, img: "icedamericano.jpeg" },
        { id: "minuman-3", name: "Jus Jeruk", price: 15000, img: "jeruk.jpeg" },
        { id: "minuman-4", name: "jus Mangga", price: 15000, img: "mangga.jpeg" },
        { id: "minuman-5", name: "Manggo Milk Shake", price: 20000, img: "manggomilkshake.jpeg" },
        { id: "minuman-6", name: "Mocha coffee", price: 18000, img: "mochacoffee.jpeg" },
        { id: "minuman-7", name: "Jus Naga", price: 16000, img: "naga.jpeg" },
        { id: "minuman-8", name: "Jus Semangka", price: 15000, img: "semangka.jpeg" },
        { id: "minuman-9", name: "Strawbery soda", price: 19000, img: "strawberysoda.jpeg" },
        { id: "minuman-10", name: "Teh Hangat", price: 4000, img: "tehhangat.jpeg" },
        { id: "minuman-11", name: "Thai Iced Tea", price: 16000, img: "thaiicedtea.jpeg" },
        { id: "minuman-12", name: "Thai Pink Milk", price: 17000, img: "thaipinkmilk.jpeg" },
        { id: "minuman-13", name: "jus alpukat", price: 17000, img: "alpukat.jpeg" },
        { id: "minuman-14", name: "korean strawbery mikl", price: 17000, img: "koreanstrawberymilk.jpeg" },
        { id: "minuman-15", name: "lemon tea", price: 17000, img: "lemontei.jpeg" },
        { id: "minuman-16", name: "Thai Pink Milk", price: 17000, img: "thaipinkmilk.jpeg" },
        { id: "minuman-17", name: "virtuoso latte", price: 3000, img: "virtuosolatte.jpeg" },
        { id: "minuman-18  ", name: "mineral", price: 3000, img: "mineral.jpeg" }
    ],
    paket: [
        { id: "paket-0", name: "Paket 1", price: 35000, img: "paket1.jpeg" },
        { id: "paket-1", name: "Paket 2", price: 40000, img: "paket2.jpeg" },
        { id: "paket-2", name: "Paket 3", price: 45000, img: "peket3.jpeg" },
        { id: "paket-3", name: "Paket spesial", price: 60000, img: "paketspesial.jpeg" }
    ]
};


const currentIndices = { takjil: 0, makanan: 0, minuman: 0, paket: 0 };
let cartStorage = JSON.parse(sessionStorage.getItem("tempCart")) || {};

// === +dan - ===//
function changeMenu(category, direction) {
    let nextIndex = currentIndices[category] + direction;
    
    if (nextIndex < 0) nextIndex = menuData[category].length - 1;
    if (nextIndex >= menuData[category].length) nextIndex = 0;
    
    currentIndices[category] = nextIndex;
    const currentItem = menuData[category][nextIndex];
    
    document.getElementById(`name-${category}`).innerText = currentItem.name;
    document.getElementById(`price-${category}`).innerText = currentItem.price;
    document.getElementById(`img-${category}`).src = currentItem.img;
    
    const savedQty = cartStorage[currentItem.id] || 0;
    document.getElementById(`qty-${category}`).innerText = savedQty;
}

function changeQty(category, change) {
    const activeItem = menuData[category][currentIndices[category]];
    let currentQty = cartStorage[activeItem.id] || 0;
    
    currentQty += change;
    if (currentQty < 0) currentQty = 0;
    
    if (currentQty === 0) {
        delete cartStorage[activeItem.id];
    } else {
        cartStorage[activeItem.id] = currentQty;
    }
    
    //=== kalo di geser menunya tetaptercatat ===//
    sessionStorage.setItem("tempCart", JSON.stringify(cartStorage));
    
    document.getElementById(`qty-${category}`).innerText = currentQty;
}

function saveCartToPayment() {
    let totalBelanja = 0;
    let itemDetails = [];

    for (let category in menuData) {
        menuData[category].forEach(item => {
            if (cartStorage[item.id] && cartStorage[item.id] > 0) {
                const qty = cartStorage[item.id];
                const subTotal = item.price * qty;
                totalBelanja += subTotal;
                
                itemDetails.push({
                    name: item.name,
                    text: item.name,
                    qty: qty,
                    price: item.price,
                    sub: subTotal
                });
            }
        });
    }

    localStorage.setItem("totalTagihan", totalBelanja);
    localStorage.setItem("rincianPesanan", JSON.stringify(itemDetails));
    localStorage.removeItem("statusBayar");
    
    sessionStorage.removeItem("tempCart");
}

// ==== bayar ===//
function muatHalamanPembayaran() {
    const totalTagihan = localStorage.getItem("totalTagihan") || 0;
    const rincianPesanan = JSON.parse(localStorage.getItem("rincianPesanan")) || [];
    
    const rincianContainer = document.getElementById("rincian-list");
    const totalContainer = document.getElementById("total-pembayaran");
    
    if (rincianContainer && totalContainer) {
        rincianContainer.innerHTML = "";
        
        if (rincianPesanan.length === 0) {
            rincianContainer.innerHTML = `<div class="text-center text-muted py-3">Belum ada pesanan menu.</div>`;
        } else {
            rincianPesanan.forEach(item => {
                const row = document.createElement("div");
                row.className = "d-flex justify-content-between mb-2 fw-semibold border-bottom pb-1";
                row.innerHTML = `
                    <span>${item.name || item.text} <span class="text-success">x${item.qty}</span></span>
                    <span>Rp ${item.sub.toLocaleString('id-ID')}</span>
                `;
                rincianContainer.appendChild(row);
            });
        }
        totalContainer.innerText = `Rp ${parseInt(totalTagihan).toLocaleString('id-ID')}`;
    }
    
    updateTampilanStatus();
}

function tampilkanHalamanMetode() {
    document.getElementById("box-rincian-utama").style.display = "none";
    document.getElementById("box-metode-upload").style.display = "block";
    window.scrollTo(0, 0);
}

function kembaliKeRincian() {
    document.getElementById("box-metode-upload").style.display = "none";
    document.getElementById("box-rincian-utama").style.display = "block";
    window.scrollTo(0, 0);
}

function salinTeks(text) {
    navigator.clipboard.writeText(text);
    alert("Nomor rekening berhasil disalin: " + text);
}

function kirimKonfirmasi() {
    const fileInput = document.getElementById("input-file-bukti");
    if (fileInput && fileInput.files.length === 0) {
        alert("Silakan pilih file bukti transfer Anda terlebih dahulu!");
        return;
    }
    
    alert("Bukti transfer telah dikirim! Menunggu konfirmasi data dari panitia...");
    localStorage.setItem("statusBayar", "PENDING");
    
    kembaliKeRincian();
    updateTampilanStatus();
}

function updateTampilanStatus() {
    const statusBadge = document.getElementById("badge-status");
    if (!statusBadge) return;
    
    const status = localStorage.getItem("statusBayar") || "BELUM_LUNAS";
    
    if (status === "LUNAS") {
        statusBadge.className = "btn bg-success text-white fw-bold px-5 py-2 rounded-pill text-uppercase btn-sm shadow-sm";
        statusBadge.innerText = "STATUS : LUNAS";
    } else if (status === "PENDING") {
        statusBadge.className = "btn bg-warning text-dark fw-bold px-5 py-2 rounded-pill text-uppercase btn-sm shadow-sm";
        statusBadge.innerText = "STATUS : MENUNGGU KONFIRMASI PANITIA";
    } else {
        statusBadge.className = "btn bg-danger text-white fw-bold px-5 py-2 rounded-pill text-uppercase btn-sm shadow-sm";
        statusBadge.innerText = "STATUS : BELUM LUNAS";
    }
}

function konfirmasiOlehPanitia() {
    const status = localStorage.getItem("statusBayar") || "BELUM_LUNAS";
    if (status === "PENDING") {
        localStorage.setItem("statusBayar", "LUNAS");
        updateTampilanStatus();
        alert("Sistem Panitia: Pembayaran Terkonfirmasi! Status diubah menjadi LUNAS ");
    } else if (status === "LUNAS") {
        localStorage.setItem("statusBayar", "BELUM_LUNAS");
        updateTampilanStatus();
        alert("Sistem Panitia: Status dikembalikan ke BELUM LUNAS.");
    } else {
        localStorage.setItem("statusBayar", "PENDING");
        updateTampilanStatus();
        alert("Sistem Panitia: Simulasi kirim bukti berhasil!");
    }
}


document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("total-pembayaran")) {
        muatHalamanPembayaran();
    }
});



// ====kontak===//
function simpanKontak(event) {
    event.preventDefault();

    const namaValue = document.getElementById("inputNama").value;
    const telpValue = document.getElementById("inputTelp").value;

    document.getElementById("text-nama-tercatat").innerText = ": " + namaValue;
    document.getElementById("text-telp-tercatat").innerText = ": " + telpValue;

    const boxInput = document.getElementById("form-kontak-input");
    const boxDisplay = document.getElementById("hasil-kontak-display");

    if (boxInput) boxInput.style.display = "none";
    if (boxDisplay) boxDisplay.style.display = "block";
  
    alert("Data kontak Anda berhasil disimpan! ");
}