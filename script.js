let keranjang = [];
let total = 0;


function tambahKeKeranjang(nama, harga) {
keranjang.push({ nama, harga });
total += harga;
updateKeranjang();
}

// Hapus item dari keranjang
function hapusItem(index) {
    total -= keranjang[index].harga;
    keranjang.splice(index, 1);
    updateKeranjang();
}


function updateKeranjang() {
const list = document.getElementById("listKeranjang");
const totalHarga = document.getElementById("totalHarga");
list.innerHTML = "";


keranjang.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.nama} - Rp ${item.harga}
            <button class="hapus-btn" onclick="hapusItem(${index})">X</button>
        `;
        list.appendChild(li);
    });


totalHarga.textContent = `Total: Rp ${total}`;
}
function checkoutWhatsApp() {
    if (keranjang.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    let nomorTujuan = "6281216842207"; // Ganti dengan nomor WhatsApp kamu
    let pesan = "Halo, saya ingin memesan produk ini:%0A";

    keranjang.forEach(item => {
        pesan += `- ${item.nama} (Rp ${item.harga})%0A`;
    });

    pesan += `%0ATotal: Rp ${total}%0A%0ATerima kasih!`;

    let url = `https://wa.me/${nomorTujuan}?text=${pesan}`;
    window.open(url, "_blank");
}
