let dataJurnal = JSON.parse(localStorage.getItem("dataJurnalIPA")) || [];

function simpanData() {
    const tanggal = document.getElementById("tanggal").value;
    const kelas = document.getElementById("kelas").value;
    const materi = document.getElementById("materi").value;
    const hadir = document.getElementById("hadir").value;

    if (!tanggal || !kelas || !materi || !hadir) {
        alert("Semua data wajib diisi!");
        return;
    }

    dataJurnal.push({ tanggal, kelas, materi, hadir });
    localStorage.setItem("dataJurnalIPA", JSON.stringify(dataJurnal));

    tampilkanJurnal();
    document.getElementById("jurnalForm").reset();
}

function tampilkanJurnal() {
    const tbody = document.querySelector("#tabelJurnal tbody");
    tbody.innerHTML = "";

    dataJurnal.forEach((item, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${item.tanggal}</td>
            <td>${item.kelas}</td>
            <td>${item.materi}</td>
            <td>${item.hadir}</td>
            <td>
                <button onclick="hapusData(${index})">Hapus</button>
            </td>
        </tr>
        `;
    });
}

function hapusData(index) {
    if (confirm("Yakin ingin menghapus data ini?")) {
        dataJurnal.splice(index, 1);
        localStorage.setItem("dataJurnalIPA", JSON.stringify(dataJurnal));
        tampilkanJurnal();
    }
}

tampilkanJurnal();
function hapusData(index) {
    const yakin = confirm("Yakin ingin menghapus data ini?");
    if (!yakin) return;

    let data = JSON.parse(localStorage.getItem("jurnal")) || [];
    data.splice(index, 1);
    localStorage.setItem("jurnal", JSON.stringify(data));
    tampilkanData();
}