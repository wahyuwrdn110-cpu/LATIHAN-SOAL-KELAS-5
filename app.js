        // =========================================================================
        // METADATA MISI (MENGGANTIKAN PAKET SOAL A, B, C)
        // =========================================================================
        const MISSION_META = {
            A: {
                code: "MISI ORBIT ALPHA",
                title: "Algoritma Bintang",
                subtitle: "Susun jalur navigasi logika komputasional & benteng pertahanan galaksi!",
                icon: "fa-user-astronaut",
                textClass: "text-cyan-400",
                badgeClass: "bg-cyan-500/20 border-cyan-400/50 text-cyan-300"
            },
            B: {
                code: "MISI NEBULA BETA",
                title: "Perisai Siber Angkasa",
                subtitle: "Kendalikan sistem komputer pesawat & lindungi data kru dari ancaman luar angkasa!",
                icon: "fa-shuttle-space",
                textClass: "text-violet-400",
                badgeClass: "bg-violet-500/20 border-violet-400/50 text-violet-300"
            },
            C: {
                code: "MISI GALAKSI GAMMA",
                title: "Logika Stasiun Induk",
                subtitle: "Uji ketepatan instruksi terstruktur & analisis alur kerja teknologi antariksa!",
                icon: "fa-satellite",
                textClass: "text-emerald-400",
                badgeClass: "bg-emerald-500/20 border-emerald-400/50 text-emerald-300"
            }
        };

        // =========================================================================
        // BANK SOAL LENGKAP: 90 SOAL (MISI ALPHA = 30, MISI BETA = 30, MISI GAMMA = 30)
        // Setiap Misi: 10 Soal Level 1 (Dasar), 10 Soal Level 2 (Terapan), 10 Soal Level 3 (Analisis)
        // =========================================================================
        const QUIZ_BANK = {
            // ---------------------------------------------------------------------
            // MISI ORBIT ALPHA (30 SOAL)
            // ---------------------------------------------------------------------
            A: [
                // LEVEL 1 (No. 1 - 10)
                {
                    level: 1,
                    topic: "Bab 1 • Pemecahan Masalah",
                    q: "Keadaan yang terasa janggal, kurang tepat, atau membuat bingung ketika sesuatu tidak berjalan sesuai harapan disebut ....",
                    options: ["Masalah", "Hiburan", "Perayaan", "Hadiah"],
                    ans: 0,
                    explanation: "Pada materi Bab 1 hal. 6, masalah muncul ketika sesuatu tidak berjalan sebagaimana mestinya atau tidak sesuai harapan."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Berpikir Komputasional",
                    q: "Berpikir komputasional secara ringkas dapat dipahami sebagai kemampuan ....",
                    options: ["Menghafal semua kode rumit", "Berpikir secara logis dan sistematis seperti komputer", "Bermain gim sepanjang hari", "Menghindari semua kesulitan"],
                    ans: 1,
                    explanation: "Berpikir komputasional adalah cara berpikir menyelesaikan masalah secara logis, teratur, dan sistematis seperti cara kerja komputer (hal. 8 & 62)."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Dekomposisi",
                    q: "Komponen berpikir komputasional yang berarti memecah masalah besar menjadi bagian-bagian kecil agar lebih mudah diselesaikan adalah ....",
                    options: ["Abstraksi", "Dekomposisi", "Pengenalan Pola", "Flowchart"],
                    ans: 1,
                    explanation: "Dekomposisi berarti memecah masalah atau tugas besar menjadi bagian-bagian kecil yang lebih mudah dipahami dan dikerjakan (hal. 9)."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Pengenalan Pola",
                    q: "Kemampuan menemukan kesamaan atau kejadian yang berulang dalam suatu masalah atau peristiwa disebut ....",
                    options: ["Pengenalan pola", "Dekomposisi", "Abstraksi", "Peretasan"],
                    ans: 0,
                    explanation: "Pengenalan pola adalah kemampuan melihat hal-hal yang berulang atau hubungan yang sama dalam suatu masalah (hal. 9 & 11)."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Abstraksi",
                    q: "Memilih informasi yang penting saja dan mengabaikan hal yang tidak diperlukan merupakan pengertian dari ....",
                    options: ["Algoritma", "Abstraksi", "Dekomposisi", "Biner"],
                    ans: 1,
                    explanation: "Abstraksi membantu kita fokus pada informasi penting dan menyaring detail yang tidak relevan (hal. 9 & 12)."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Algoritma",
                    q: "Langkah-langkah yang disusun secara urut dan logis untuk menyelesaikan masalah disebut ....",
                    options: ["Pseudocode", "Algoritma", "Malware", "Browser"],
                    ans: 1,
                    explanation: "Algoritma adalah urutan langkah-langkah terstruktur dan logis untuk mencapai tujuan atau menyelesaikan masalah (hal. 12 & 62)."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Pseudocode",
                    q: "Penulisan langkah instruksi secara logis dan terstruktur menggunakan bahasa yang mudah dipahami disebut ....",
                    options: ["Pseudocode", "Antivirus", "Keyboard", "Spam"],
                    ans: 0,
                    explanation: "Pseudocode menuliskan urutan instruksi dengan bahasa sederhana yang mudah dipahami sebelum dibuat menjadi program komputer (hal. 15)."
                },
                {
                    level: 1,
                    topic: "Bab 2 • Teknologi Digital",
                    q: "Teknologi yang bekerja menggunakan alat elektronik untuk mengolah, menyimpan, dan mengirim informasi disebut teknologi ....",
                    options: ["Analog", "Digital", "Tradisional", "Manual"],
                    ans: 1,
                    explanation: "Teknologi digital menggunakan perangkat elektronik (seperti komputer, ponsel, dan internet) untuk mengolah serta mengirim data (hal. 36)."
                },
                {
                    level: 1,
                    topic: "Bab 2 • Perangkat Keras",
                    q: "Bagian fisik dari komputer atau perangkat digital yang dapat dilihat dan disentuh disebut ....",
                    options: ["Perangkat lunak (software)", "Perangkat keras (hardware)", "Sistem operasi", "Aplikasi"],
                    ans: 1,
                    explanation: "Hardware atau perangkat keras adalah komponen fisik komputer seperti monitor, keyboard, mouse, dan CPU (hal. 38)."
                },
                {
                    level: 1,
                    topic: "Bab 2 • Keamanan Informasi",
                    q: "Informasi pribadi adalah data yang dapat digunakan untuk mengenali atau mengidentifikasi seseorang. Contohnya adalah ....",
                    options: ["Warna kesukaan", "Hobi", "Alamat rumah dan kata sandi", "Makanan favorit"],
                    ans: 2,
                    explanation: "Alamat rumah, kata sandi, nomor telepon, dan tanggal lahir adalah informasi pribadi yang harus dijaga kerahasiaannya (hal. 43-44)."
                },

                // LEVEL 2 (No. 11 - 20)
                {
                    level: 2,
                    topic: "Bab 1 • Mencari Penyebab",
                    q: "Untuk menemukan akar penyebab utama sebuah masalah secara bertahap, kita dapat bertanya '....' berulang kali.",
                    options: ["Siapa", "Mengapa", "Berapa", "Kapan"],
                    ans: 1,
                    explanation: "Pada materi hal. 7, bertanya 'Mengapa?' berulang kali membantu menelusuri hingga ke akar penyebab masalah."
                },
                {
                    level: 2,
                    topic: "Bab 1 • Pengenalan Pola",
                    q: "Perhatikan deretan bilangan berikut: 2, 5, 8, 11, .... Angka berikutnya sesuai pola tersebut adalah ....",
                    options: ["13", "14", "15", "16"],
                    ans: 1,
                    explanation: "Pola bilangan tersebut selalu bertambah 3 (2+3=5, 5+3=8, 8+3=11), sehingga angka berikutnya adalah 11 + 3 = 14 (hal. 11)."
                },
                {
                    level: 2,
                    topic: "Bab 1 • Pseudocode & Flowchart",
                    q: "Dalam aturan penulisan pseudocode pada bahan ajar, instruksi diawali dengan kata 'Mulai' dan ditutup dengan kata ....",
                    options: ["Ulangi", "Selesai", "Batal", "Jeda"],
                    ans: 1,
                    explanation: "Pseudocode diawali dengan 'Mulai' dan ditutup dengan 'Selesai' agar awal dan akhir proses jelas (hal. 15-16)."
                },
                {
                    level: 2,
                    topic: "Bab 1 • Algoritma Sehari-hari",
                    q: "Pada proses membuat geblek khas Kulon Progo (hal. 13), urutan langkah yang tepat setelah menyiapkan tepung tapioka dan mencampur bumbu adalah ....",
                    options: ["Membentuk adonan lalu menggoreng hingga matang", "Langsung menyajikannya mentah", "Menyimpan tepung di kulkas tanpa diolah", "Menghancurkan bumbu setelah digoreng"],
                    ans: 0,
                    explanation: "Urutan membuat geblek: menyiapkan tepung tapioka, mencampur bumbu, membentuk adonan, lalu menggoreng hingga matang (hal. 13)."
                },
                {
                    level: 2,
                    topic: "Bab 1 • ScratchJr",
                    q: "Pada aktivitas koding sederhana menggunakan ScratchJr, menyusun blok perintah secara runtut membantu kita memahami bahwa komputer ....",
                    options: ["Bekerja mengikuti instruksi yang tersusun teratur", "Tidak membutuhkan urutan perintah", "Hanya bisa menampilkan gambar diam", "Selalu menebak perintah sendiri"],
                    ans: 0,
                    explanation: "Di ScratchJr, urutan blok perintah menentukan gerakan karakter; jika urutannya salah, karakter tidak bergerak sesuai tujuan (hal. 29-30)."
                },
                {
                    level: 2,
                    topic: "Bab 2 • Analog vs Digital",
                    q: "Pasangan kegiatan teknologi analog dan teknologi digital yang tepat berdasarkan Tabel 2.1 adalah ....",
                    options: [
                        "Analog: e-book | Digital: buku cetak",
                        "Analog: surat/kartu pos | Digital: chat melalui aplikasi pesan",
                        "Analog: smart TV | Digital: televisi tabung",
                        "Analog: uang digital | Digital: uang tunai"
                    ],
                    ans: 1,
                    explanation: "Mengirim pesan dengan surat/kartu pos termasuk teknologi analog, sedangkan chat di aplikasi pesan termasuk teknologi digital (hal. 36-37)."
                },
                {
                    level: 2,
                    topic: "Bab 2 • Perangkat Keras & Lunak",
                    q: "Perangkat yang berfungsi memindai dokumen atau gambar fisik menjadi file digital di komputer disebut ....",
                    options: ["Printer", "Scanner", "Mouse", "Speaker"],
                    ans: 1,
                    explanation: "Scanner digunakan untuk memindai dokumen/gambar fisik menjadi file digital, sedangkan printer untuk mencetak ke kertas (hal. 39)."
                },
                {
                    level: 2,
                    topic: "Bab 2 • Sistem Operasi & Aplikasi",
                    q: "Program utama yang wajib ada di setiap komputer atau ponsel seperti Windows dan Android disebut ....",
                    options: ["Sistem operasi (Operating System)", "Perangkat keras pendukung", "Pesan tautan", "Bumbu halus"],
                    ans: 0,
                    explanation: "Sistem operasi (seperti Windows dan Android) adalah program utama wajib agar perangkat dapat digunakan (hal. 39-40)."
                },
                {
                    level: 2,
                    topic: "Bab 2 • Konsep IPO",
                    q: "Pada contoh membuat jus mangga (hal. 42), buah mangga, air, dan gula pasir yang dimasukkan ke blender disebut tahap ....",
                    options: ["Input (Masukan)", "Proses", "Output (Keluaran)", "Penyimpanan awan"],
                    ans: 0,
                    explanation: "Bahan-bahan yang dimasukkan ke dalam sistem/blender merupakan Input (masukan), blender berputar adalah Proses, dan jus adalah Output."
                },
                {
                    level: 2,
                    topic: "Bab 2 • Keamanan & Budaya Digital",
                    q: "Menerapkan sikap tepa selira dan unggah-ungguh di ruang digital dapat dilakukan dengan cara ....",
                    options: [
                        "Menyebarkan rahasia teman agar viral",
                        "Menggunakan bahasa sopan dan tidak menyebarkan data orang lain tanpa izin",
                        "Mengedit foto teman untuk mengejek",
                        "Membagikan kata sandi akun ke grup umum"
                    ],
                    ans: 1,
                    explanation: "Nilai tepa selira dan unggah-ungguh di era digital berarti bersikap sopan, menghargai perasaan orang lain, dan menjaga privasi bersama (hal. 47)."
                },

                // LEVEL 3 (No. 21 - 30)
                {
                    level: 3,
                    topic: "Bab 1 • Analisis Penyebab Masalah",
                    q: "Regi sering terlambat ke sekolah karena bangun kesiangan akibat bermain gawai sampai larut malam. Solusi sistematis yang paling tepat setelah merumuskan cara adalah ....",
                    options: [
                        "Menerapkan solusi (memasang alarm & tidur lebih awal) lalu mengevaluasi hasilnya",
                        "Menyalahkan jadwal pelajaran yang terlalu pagi",
                        "Berhenti bersekolah selama satu minggu",
                        "Mengabaikan masalah karena sudah biasa"
                    ],
                    ans: 0,
                    explanation: "Setelah merumuskan solusi, langkah sistematis berikutnya adalah menerapkan solusi dan mengevaluasi hasilnya (hal. 8)."
                },
                {
                    level: 3,
                    topic: "Bab 1 • Dekomposisi Kasus",
                    q: "Saat kerja bakti kelas, tugas membersihkan kelas belum terbagi sehingga ada bagian yang disapu dua kali sementara jendela belum dibersihkan. Komponen yang paling tepat diterapkan adalah ....",
                    options: [
                        "Dekomposisi, dengan membagi tugas per area (lantai, jendela, papan tulis, meja)",
                        "Menghapus semua jadwal piket kelas",
                        "Membiarkan semua siswa menyapu satu sudut saja",
                        "Menunda kerja bakti tanpa batas waktu"
                    ],
                    ans: 0,
                    explanation: "Dekomposisi memecah tugas besar membersihkan kelas menjadi bagian-bagian tugas yang jelas agar tidak tumpang tindih atau terlewat (hal. 9 & 29)."
                },
                {
                    level: 3,
                    topic: "Bab 1 • Abstraksi Kasus",
                    q: "Beni mencari jalan menuju Pantai Mlarangan Asri. Ia hanya memperhatikan papan petunjuk arah dan jalan utama tanpa memikirkan warna cat rumah warga. Mengapa tindakan Beni tepat?",
                    options: [
                        "Karena warna cat rumah tidak membantu menentukan arah menuju tujuan (abstraksi)",
                        "Karena papan petunjuk arah selalu salah",
                        "Karena berjalan tanpa arah lebih menantang",
                        "Karena warna rumah selalu berubah setiap detik"
                    ],
                    ans: 0,
                    explanation: "Beni menerapkan abstraksi dengan fokus pada informasi penting (papan petunjuk & jalan utama) dan mengabaikan detail yang tidak relevan (hal. 12 & 33)."
                },
                {
                    level: 3,
                    topic: "Bab 1 • Dampak Instruksi Tidak Jelas",
                    q: "Raka meminta Dimas membuat gula semut dengan instruksi singkat 'Masak saja nira kelapanya sampai jadi gula' tanpa menyebut menyaring nira dan terus mengaduk. Akibatnya gula menggumpal. Pelajaran utamanya adalah ....",
                    options: [
                        "Instruksi yang kurang jelas dan tidak urut dapat menyebabkan hasil kerja keliru",
                        "Memasak gula semut tidak perlu memperhatikan langkah",
                        "Instruksi cukup diucapkan secara terburu-buru",
                        "Bahan baku tidak memengaruhi hasil akhir"
                    ],
                    ans: 0,
                    explanation: "Instruksi yang tidak lengkap dan tidak berurutan membuat pelaksana salah memahami langkah sehingga hasilnya tidak sesuai (hal. 22-23)."
                },
                {
                    level: 3,
                    topic: "Bab 1 • Keseimbangan & Pengenalan Pola",
                    q: "Rani berlatih Tari Angguk setiap sore hingga lupa belajar menghadapi Asesmen Tengah Semester. Komponen berpikir komputasional yang membantu Rani mengatur rutinitas latihan dan belajar secara berulang adalah ....",
                    options: [
                        "Pengenalan pola (mengenali kebiasaan/jadwal berulang) dan algoritma penyusunan jadwal",
                        "Mengabaikan waktu belajar sama sekali",
                        "Menghapus latihan menari selamanya",
                        "Mengerjakan ujian tanpa persiapan"
                    ],
                    ans: 0,
                    explanation: "Mengenali pola waktu luang harian serta menyusun urutan jadwal latihan dan belajar secara teratur membantu menyeimbangkan keduanya (hal. 4 & 29)."
                },
                {
                    level: 3,
                    topic: "Bab 2 • Sinyal Analog vs Digital",
                    q: "Teknologi analog menggunakan sinyal kontinu yang kualitasnya mudah menurun saat sinyal lemah, sedangkan teknologi digital menggunakan sinyal diskrit (0 dan 1) sehingga ....",
                    options: [
                        "Kualitas suara atau gambar cenderung lebih jernih dan stabil",
                        "Hanya bisa digunakan untuk menulis surat kertas",
                        "Tidak memerlukan alat elektronik sama sekali",
                        "Selalu lebih lambat daripada mengirim surat pos"
                    ],
                    ans: 0,
                    explanation: "Pada Gambar 2.2 (hal. 36), teknologi digital memakai sinyal diskrit (0 dan 1) sehingga kualitas suara/gambar lebih jernih dan stabil."
                },
                {
                    level: 3,
                    topic: "Bab 2 • Kerja Sama Hardware & Software",
                    q: "Mengapa perangkat keras dan perangkat lunak harus saling bekerja sama agar komputer dapat berfungsi dengan baik?",
                    options: [
                        "Perangkat keras menyediakan bagian fisik dan perangkat lunak mengatur/menjalankan perintah agar tugas terlaksana",
                        "Perangkat keras bisa bekerja sendiri tanpa program apa pun",
                        "Perangkat lunak adalah kabel listrik utama komputer",
                        "Keduanya memiliki fungsi yang sama persis"
                    ],
                    ans: 0,
                    explanation: "Perangkat keras dan perangkat lunak saling terhubung; perangkat lunak menggerakkan/mengolah perintah pada perangkat keras (hal. 38-42)."
                },
                {
                    level: 3,
                    topic: "Bab 2 • Alur IPO Pesan Digital",
                    q: "Saat kita mengetik pesan di ponsel lalu mengirimkannya lewat internet hingga terbaca oleh teman, urutan alur IPO yang sesuai adalah ....",
                    options: [
                        "Input: mengetik pesan -> Proses: aplikasi & internet mengolah/mengirim -> Output: pesan diterima & dibaca teman",
                        "Input: pesan dibaca teman -> Proses: mematikan layar -> Output: mengetik huruf",
                        "Input: baterai habis -> Proses: layar mati -> Output: mengetik pesan",
                        "Input: menghapus aplikasi -> Proses: mengunduh game -> Output: mengirim surat pos"
                    ],
                    ans: 0,
                    explanation: "Mengetik pesan adalah input, pengolahan & pengiriman data lewat internet adalah proses, dan pesan tampil/terbaca adalah output (hal. 41)."
                },
                {
                    level: 3,
                    topic: "Bab 2 • Ancaman Tautan & Malware",
                    q: "Reno mendapat pesan dari nomor tidak dikenal berisi tautan hadiah undian dan diminta mengisi alamat rumah serta kata sandi. Tindakan paling aman bagi Reno adalah ....",
                    options: [
                        "Tidak mengklik tautan, tidak memberi data/sandi, lalu melaporkannya kepada orang tua atau guru",
                        "Segera mengklik tautan dan mengisi kata sandi utama",
                        "Meneruskan tautan ke semua teman agar ikut mencoba",
                        "Membagikan kode OTP agar hadiah cepat cair"
                    ],
                    ans: 0,
                    explanation: "Tautan mencurigakan bisa berujung pencurian data atau malware; jangan diklik dan mintalah bantuan orang tua/guru (hal. 46-47 & 55)."
                },
                {
                    level: 3,
                    topic: "Bab 2 • Risiko Kebocoran Data",
                    q: "Tia mengunggah foto kartu pelajar ke media sosial yang menampilkan nama lengkap, sekolah, dan tanggal lahir. Risiko yang dapat muncul dari tindakan tersebut adalah ....",
                    options: [
                        "Data pribadi dapat disalahgunakan pihak tidak bertanggung jawab untuk penipuan atau pencurian identitas",
                        "Foto kartu pelajar otomatis menghapus akun media sosial",
                        "Kuota internet menjadi berkurang setengahnya",
                        "Kualitas kamera ponsel meningkat drastis"
                    ],
                    ans: 0,
                    explanation: "Mengunggah foto kartu pelajar membeberkan informasi pribadi yang berisiko disalahgunakan untuk pencurian identitas atau penipuan (hal. 43-44 & 55)."
                }
            ],

            // ---------------------------------------------------------------------
            // MISI NEBULA BETA (30 SOAL)
            // ---------------------------------------------------------------------
            B: [
                // LEVEL 1 (No. 1 - 10)
                {
                    level: 1,
                    topic: "Bab 1 • Pemecahan Masalah",
                    q: "Saat buku pelajaran tertinggal di rumah ketika sudah tiba di sekolah, perasaan yang wajar muncul adalah ....",
                    options: ["Panik atau bingung", "Sangat kenyang", "Mengantuk berat", "Tidak peduli"],
                    ans: 0,
                    explanation: "Pada materi Bab 1 hal. 5, lupa membawa buku ke sekolah dapat membuat seseorang merasa panik, takut, bingung, atau tidak tenang."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Komponen Berpikir Komputasional",
                    q: "Berikut ini yang bukan termasuk empat komponen utama berpikir komputasional adalah ....",
                    options: ["Dekomposisi", "Pengenalan pola", "Abstraksi", "Peretasan"],
                    ans: 3,
                    explanation: "Empat komponen utama berpikir komputasional adalah dekomposisi, pengenalan pola, abstraksi, dan algoritma (hal. 9)."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Dekomposisi",
                    q: "Memecah pekerjaan besar menjadi bagian-bagian kecil supaya lebih mudah dipahami dan dikerjakan disebut ....",
                    options: ["Dekomposisi", "Pengenalan pola", "Output", "Cyberbullying"],
                    ans: 0,
                    explanation: "Dekomposisi membantu mengurangi rasa bingung saat menghadapi tugas besar dengan membaginya menjadi bagian kecil (hal. 9)."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Pengenalan Pola",
                    q: "Jadwal pelajaran di sekolah yang berulang setiap minggu merupakan contoh penerapan ....",
                    options: ["Pengenalan pola", "Malware", "Scanner", "Kata sandi"],
                    ans: 0,
                    explanation: "Jadwal pelajaran mingguan serta urutan hari dan bulan adalah contoh pengenalan pola dalam kehidupan sehari-hari (hal. 11)."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Abstraksi",
                    q: "Saat mencari nama teman di daftar yang panjang, kita langsung melihat huruf awalnya saja. Cara ini disebut ....",
                    options: ["Abstraksi", "Peretasan", "Input", "Flowchart"],
                    ans: 0,
                    explanation: "Fokus pada bagian penting (huruf awal) dan mengabaikan bagian lain yang belum perlu merupakan contoh abstraksi (hal. 12)."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Algoritma",
                    q: "Urutan langkah menyikat gigi dari mengambil sikat hingga menyimpannya kembali adalah contoh ....",
                    options: ["Algoritma", "Sistem operasi", "Phishing", "CPU"],
                    ans: 0,
                    explanation: "Pada Gambar 1.9 (hal. 13), langkah-langkah terurut menyikat gigi merupakan contoh algoritma dalam kehidupan sehari-hari."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Flowchart",
                    q: "Diagram yang menunjukkan urutan langkah penyelesaian masalah menggunakan simbol dan panah disebut ....",
                    options: ["Flowchart (diagram alur)", "Keyboard", "Webcam", "E-book"],
                    ans: 0,
                    explanation: "Flowchart atau diagram alur menggambarkan urutan langkah menggunakan simbol dan panah agar mudah dibaca (hal. 16 & 63)."
                },
                {
                    level: 1,
                    topic: "Bab 2 • Teknologi Analog",
                    q: "Contoh teknologi analog dalam kehidupan sehari-hari berdasarkan materi Bab 2 adalah ....",
                    options: ["E-book di tablet", "Radio analog dan surat", "Marketplace", "Belanja daring"],
                    ans: 1,
                    explanation: "Teknologi analog bekerja secara manual atau dengan alat sederhana seperti radio, surat, dan televisi tabung (hal. 36-37)."
                },
                {
                    level: 1,
                    topic: "Bab 2 • Perangkat Keras",
                    q: "Bagian komputer yang digunakan untuk mengetik huruf dan angka adalah ....",
                    options: ["Keyboard (papan ketik)", "Monitor", "Printer", "Flashdisk"],
                    ans: 0,
                    explanation: "Keyboard atau papan ketik adalah perangkat keras untuk mengetik teks atau memasukkan perintah (hal. 38)."
                },
                {
                    level: 1,
                    topic: "Bab 2 • Keamanan Data",
                    q: "Kode rahasia sementara yang dikirim untuk verifikasi akun atau transaksi disebut ....",
                    options: ["OTP (One Time Password)", "Flowchart", "Browser", "Speaker"],
                    ans: 0,
                    explanation: "Pada glosarium hal. 63, OTP adalah kode rahasia sementara untuk verifikasi akun atau transaksi dan tidak boleh dibagikan."
                },

                // LEVEL 2 (No. 11 - 20)
                {
                    level: 2,
                    topic: "Bab 1 • Langkah Sistematis",
                    q: "Urutan awal pemecahan masalah secara sistematis pada Bab 1 hal. 8 dimulai dari ....",
                    options: [
                        "Mengidentifikasi masalah lalu mencari penyebab masalah",
                        "Mengevaluasi hasil sebelum menentukan masalah",
                        "Menyerah tanpa mencoba solusi",
                        "Menyembunyikan masalah dari guru"
                    ],
                    ans: 0,
                    explanation: "Langkah sistematis dimulai dengan mengidentifikasi masalah, mencari penyebabnya, merumuskan solusi, menerapkannya, lalu mengevaluasi (hal. 8)."
                },
                {
                    level: 2,
                    topic: "Bab 1 • Pola Bilangan",
                    q: "Deretan bilangan 1, 3, 5, 7, 9 pada contoh bahan ajar membentuk ....",
                    options: ["Pola bilangan ganjil", "Pola bilangan kelipatan 10", "Pola acak tanpa aturan", "Pola bilangan prima saja"],
                    ans: 0,
                    explanation: "Bilangan 1, 3, 5, 7, 9 adalah contoh pola bilangan ganjil yang selalu bertambah 2 (hal. 11)."
                },
                {
                    level: 2,
                    topic: "Bab 1 • Aturan Pseudocode",
                    q: "Salah satu kaidah menulis pseudocode yang baik adalah ....",
                    options: [
                        "Menggunakan kata kerja aktif dan satu langkah untuk satu perintah",
                        "Menggabungkan banyak perintah rumit dalam satu kalimat panjang",
                        "Wajib memakai kode mesin yang sulit dibaca manusia",
                        "Menghilangkan kata awal dan akhir proses"
                    ],
                    ans: 0,
                    explanation: "Pseudocode sebaiknya menggunakan kata kerja aktif, satu langkah satu perintah, serta diawali 'Mulai' dan ditutup 'Selesai' (hal. 15-16)."
                },
                {
                    level: 2,
                    topic: "Bab 1 • Algoritma Menyiapkan Tas",
                    q: "Saat menyiapkan perlengkapan sekolah malam hari (hal. 13), langkah yang dilakukan setelah mengecek jadwal pelajaran besok adalah ....",
                    options: [
                        "Memasukkan buku dan alat tulis sesuai jadwal",
                        "Pergi tidur tanpa memeriksa isi tas",
                        "Mengosongkan seluruh tas sekolah",
                        "Menyimpan sepatu di atas meja belajar"
                    ],
                    ans: 0,
                    explanation: "Setelah mengecek jadwal pelajaran besok, langkah berikutnya adalah memasukkan buku dan alat tulis sesuai jadwal tersebut (hal. 13)."
                },
                {
                    level: 2,
                    topic: "Bab 1 • Koding & ScratchJr",
                    q: "Kegiatan menuliskan perintah atau instruksi agar komputer atau perangkat digital menjalankan tugas tertentu disebut ....",
                    options: ["Koding", "Perundungan", "Abstraksi", "Pemindaian"],
                    ans: 0,
                    explanation: "Koding adalah kegiatan menuliskan instruksi menggunakan bahasa pemrograman (seperti ScratchJr atau Python) agar perangkat menjalankan tugas (hal. 29)."
                },
                {
                    level: 2,
                    topic: "Bab 2 • Manfaat Teknologi Digital",
                    q: "Dibandingkan cara manual dahulu, teknologi digital membuat komunikasi dan pengolahan informasi menjadi ....",
                    options: ["Lebih cepat, mudah, dan praktis", "Selalu memakan waktu berhari-hari", "Tidak bisa menyimpan gambar atau suara", "Hanya berfungsi tanpa listrik atau data"],
                    ans: 0,
                    explanation: "Teknologi digital membantu menyimpan, mengolah, dan mengirim informasi secara lebih cepat, mudah, dan efisien (hal. 35-36)."
                },
                {
                    level: 2,
                    topic: "Bab 2 • Perangkat Keras Pendukung",
                    q: "Perangkat keras yang terletak di bagian atas layar laptop dan digunakan untuk merekam video atau video call adalah ....",
                    options: ["Kamera (Webcam)", "Keyboard", "Mousepad", "Printer"],
                    ans: 0,
                    explanation: "Kamera atau webcam digunakan untuk mengambil foto/video atau melakukan panggilan video (hal. 39)."
                },
                {
                    level: 2,
                    topic: "Bab 2 • Jenis Aplikasi",
                    q: "Contoh aplikasi penjelajah internet (browser) yang disebutkan pada materi Bab 2 hal. 40 adalah ....",
                    options: ["Google Chrome, Safari, dan Mozilla Firefox", "Microsoft Word dan Google Docs", "Zoom dan Google Meet", "Minecraft dan Roblox"],
                    ans: 0,
                    explanation: "Google Chrome, Safari, dan Mozilla Firefox adalah contoh aplikasi penjelajah internet untuk mencari informasi daring (hal. 40)."
                },
                {
                    level: 2,
                    topic: "Bab 2 • Konsep IPO",
                    q: "Dalam alur kerja IPO (Input - Proses - Output), bagian yang bertugas mengolah perintah atau data sesuai aturan disebut ....",
                    options: ["Proses", "Input", "Output", "Kabel"],
                    ans: 0,
                    explanation: "Proses adalah tahap pengolahan data atau perintah di dalam sistem berdasarkan aturan yang ditentukan untuk menghasilkan output (hal. 41-42)."
                },
                {
                    level: 2,
                    topic: "Bab 2 • Informasi Aman Dibagikan",
                    q: "Di antara pilihan berikut, informasi yang relatif aman dibagikan dengan tetap berhati-hati adalah ....",
                    options: ["Kata sandi akun", "Alamat rumah lengkap", "Hobi dan warna kesukaan", "Nomor telepon pribadi"],
                    ans: 2,
                    explanation: "Hobi, warna favorit, dan makanan kesukaan relatif aman dibagikan, berbeda dengan alamat rumah, nomor telepon, dan kata sandi (hal. 43-44)."
                },

                // LEVEL 3 (No. 21 - 30)
                {
                    level: 3,
                    topic: "Bab 1 • Akar Masalah Kamar Berantakan",
                    q: "Pada contoh penelusuran 'Mengapa?' di halaman 7, kamar berantakan berawal dari terburu-buru pergi dan tidak punya jadwal harian teratur. Solusi tepat untuk mencegahnya adalah ....",
                    options: [
                        "Membuat jadwal harian yang teratur dan membiasakan merapikan barang setelah digunakan",
                        "Menutup pintu kamar agar tidak terlihat berantakan",
                        "Memindahkan semua barang ke luar rumah",
                        "Menunggu orang lain merapikannya setiap hari"
                    ],
                    ans: 0,
                    explanation: "Mengetahui akar masalahnya membantu kita menyusun jadwal harian teratur dan melaksanakannya secara konsisten (hal. 7)."
                },
                {
                    level: 3,
                    topic: "Bab 1 • Dekomposisi Masalah Nino",
                    q: "Nino memecah masalah 'sering ada barang tertinggal' menjadi bangun terlambat, sarapan tergesa-gesa, dan tidak memeriksa tas. Manfaat memecah masalah tersebut adalah ....",
                    options: [
                        "Memudahkan menemukan penyebab tiap bagian dan menentukan solusi yang tepat",
                        "Membuat masalah menjadi semakin rumit",
                        "Menghilangkan kebutuhan menyiapkan perlengkapan sekolah",
                        "Mengganti peran alarm sepenuhnya"
                    ],
                    ans: 0,
                    explanation: "Dekomposisi membantu mengurai masalah menjadi bagian kecil agar penyebabnya terlihat jelas dan mudah diatasi (hal. 10)."
                },
                {
                    level: 3,
                    topic: "Bab 1 • Abstraksi Cerita",
                    q: "Dalam cerita 'Pita Merah yang Hilang' (hal. 20-21), Nisa melihat burung membawa pita merah lalu mengikuti arahnya ke taman tempat Bimo kebingungan mencari pitanya. Informasi paling inti untuk membantu Bimo adalah ....",
                    options: [
                        "Burung kecil membawa pita merah milik Bimo ke arah taman",
                        "Warna pot bunga di depan rumah Nisa",
                        "Jam berapa burung berkicau pagi hari",
                        "Nama penjual layang-layang di kota lain"
                    ],
                    ans: 0,
                    explanation: "Abstraksi membantu Nisa menghubungkan fakta penting (burung membawa pita merah dan Bimo kehilangan pita) untuk menemukan solusinya (hal. 20-21)."
                },
                {
                    level: 3,
                    topic: "Bab 1 • Urutan Algoritma",
                    q: "Ibu memberi instruksi membuat teh manis: 'Ambil gelas, masukkan teh, masukkan gula, lalu tuangkan air.' Mengapa urutan atau kelengkapan instruksi penting diperhatikan?",
                    options: [
                        "Karena langkah yang kurang tepat atau tidak urut dapat membuat hasil tidak sesuai keinginan",
                        "Karena air panas tidak diperlukan saat membuat teh",
                        "Karena gula harus dimasukkan setelah teh diminum",
                        "Karena urutan tidak berpengaruh pada rasa"
                    ],
                    ans: 0,
                    explanation: "Instruksi harus jelas, logis, dan berurutan agar tujuan tercapai tanpa kesalahan atau hasil yang meleset (hal. 15)."
                },
                {
                    level: 3,
                    topic: "Bab 1 • Gabungan Komponen",
                    q: "Saat menyiapkan pesta ulang tahun teman (Aktivitas 2 hal. 18), langkah membagi pekerjaan menjadi tempat, dekorasi, konsumsi, dan hiburan merupakan penerapan ....",
                    options: ["Dekomposisi", "Peretasan", "Virus komputer", "Penyimpanan awan"],
                    ans: 0,
                    explanation: "Membagi rencana pesta besar menjadi beberapa pos tugas kecil adalah contoh nyata dekomposisi (hal. 18)."
                },
                {
                    level: 3,
                    topic: "Bab 2 • Perubahan Cara Belajar",
                    q: "Rani mencari materi pelajaran lewat video pembelajaran di tablet dan mendapatkan informasi cepat, sementara Dinda memakai buku ensiklopedia. Kelebihan teknologi digital pada situasi tersebut adalah ....",
                    options: [
                        "Akses informasi lebih cepat dan dapat menampilkan media interaktif seperti video",
                        "Tidak memerlukan pemahaman membaca sama sekali",
                        "Menggantikan seluruh peran guru di kelas",
                        "Selalu bebas dari kebutuhan mengecek kebenaran informasi"
                    ],
                    ans: 0,
                    explanation: "Teknologi digital memudahkan pencarian informasi lebih cepat serta menyajikan teks, gambar, suara, dan video (hal. 36 & 55)."
                },
                {
                    level: 3,
                    topic: "Bab 2 • Fungsi CPU & Perangkat",
                    q: "Jika diibaratkan tubuh manusia (hal. 38), bagian komputer yang memproses semua informasi atau aktivitas ibarat ....",
                    options: ["CPU (Central Processing Unit)", "Kabel mouse", "Kertas cetak", "Baki keyboard"],
                    ans: 0,
                    explanation: "CPU memproses semua informasi dan aktivitas komputer sebagaimana otak mengatur gerak dan kerja tubuh (hal. 38)."
                },
                {
                    level: 3,
                    topic: "Bab 2 • Alur IPO Mesin Cuci",
                    q: "Pada contoh mesin cuci di materi hal. 41, pakaian kotor, deterjen, dan air termasuk ....",
                    options: ["Input (masukan)", "Output (keluaran)", "Proses pencucian", "Hasil akhir"],
                    ans: 0,
                    explanation: "Baju kotor, deterjen, dan air adalah bahan masukan (input); mencuci/membilas/mengeringkan adalah proses; baju bersih kering adalah output (hal. 41)."
                },
                {
                    level: 3,
                    topic: "Bab 2 • Ancaman Peretasan & Cyberbullying",
                    q: "Tindakan mengejek, menghina, mengancam, atau mempermalukan seseorang melalui media sosial disebut ....",
                    options: ["Cyberbullying", "Dekomposisi", "Flowchart", "Input"],
                    ans: 0,
                    explanation: "Cyberbullying adalah perundungan atau pelecehan melalui internet/media sosial yang merugikan dan menyakiti korban (hal. 45-46)."
                },
                {
                    level: 3,
                    topic: "Bab 2 • Keamanan Akun & Perangkat Umum",
                    q: "Setelah menggunakan komputer di perpustakaan atau perangkat umum, tindakan yang wajib dilakukan untuk menjaga keamanan akun adalah ....",
                    options: [
                        "Keluar dari akun (Log out) dan tidak membagikan kata sandi kepada siapa pun",
                        "Membiarkan akun tetap terbuka agar orang lain mudah masuk",
                        "Menuliskan kata sandi di papan tulis kelas",
                        "Mengunduh aplikasi asing tanpa izin"
                    ],
                    ans: 0,
                    explanation: "Pada Tips Menjaga Informasi Pribadi (hal. 47), kita perlu log out setelah memakai perangkat umum agar akun tidak diakses orang lain."
                }
            ],

            // ---------------------------------------------------------------------
            // MISI GALAKSI GAMMA (30 SOAL)
            // ---------------------------------------------------------------------
            C: [
                // LEVEL 1 (No. 1 - 10)
                {
                    level: 1,
                    topic: "Bab 1 • Pemecahan Masalah",
                    q: "Mengetahui terlebih dahulu apa yang terjadi dan apa penyebab masalah membantu kita ....",
                    options: [
                        "Menentukan solusi yang lebih tepat dan tidak mudah panik",
                        "Membuat masalah makin tidak jelas",
                        "Menghindari tanggung jawab",
                        "Melupakan tugas sekolah"
                    ],
                    ans: 0,
                    explanation: "Memahami masalah dan penyebabnya membuat langkah penyelesaian lebih terarah, tepat, dan menenangkan (hal. 6-7)."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Berpikir Komputasional",
                    q: "Salah satu manfaat berpikir komputasional dalam kehidupan sehari-hari adalah ....",
                    options: [
                        "Membantu menyelesaikan masalah dengan lebih mudah dan terstruktur",
                        "Membuat pekerjaan selalu lebih lambat",
                        "Menghapus semua aturan",
                        "Menjadikan keputusan selalu acak"
                    ],
                    ans: 0,
                    explanation: "Berpikir komputasional membantu menyelesaikan masalah lebih mudah, mengambil keputusan baik, berpikir terstruktur, dan hemat waktu (hal. 9)."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Dekomposisi",
                    q: "Saat kamar sangat berantakan, membersihkannya sedikit demi sedikit (merapikan meja, menyapu, lalu menyusun buku) merupakan contoh ....",
                    options: ["Dekomposisi", "Peretasan", "Malware", "Biner"],
                    ans: 0,
                    explanation: "Membagi pekerjaan merapikan kamar menjadi beberapa bagian kecil adalah contoh dekomposisi sehari-hari (hal. 9)."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Pengenalan Pola",
                    q: "Susunan nama bulan dari Januari sampai Desember yang polanya tetap setiap tahun merupakan contoh ....",
                    options: ["Pengenalan pola", "Abstraksi", "Input", "Output"],
                    ans: 0,
                    explanation: "Urutan bulan dan hari yang berulang dengan susunan tetap termasuk contoh pengenalan pola (hal. 11)."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Abstraksi",
                    q: "Fokus pada informasi penting dan mengabaikan informasi yang tidak diperlukan adalah ciri utama dari ....",
                    options: ["Abstraksi", "Algoritma", "Dekomposisi", "Cyberbullying"],
                    ans: 0,
                    explanation: "Abstraksi menyaring hal penting agar kita tidak bingung oleh informasi yang tidak relevan (hal. 9 & 12)."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Algoritma",
                    q: "Mengapa langkah-langkah dalam algoritma harus dilakukan secara berurutan?",
                    options: [
                        "Agar tujuan tercapai dengan benar dan tidak terjadi kesalahan urutan",
                        "Agar langkahnya bisa dilewati sembarangan",
                        "Karena urutan tidak memengaruhi hasil",
                        "Agar proses menjadi tidak teratur"
                    ],
                    ans: 0,
                    explanation: "Jika urutan langkah salah atau tidak berurutan, tujuan bisa gagal atau hasil tidak maksimal (hal. 13-15)."
                },
                {
                    level: 1,
                    topic: "Bab 1 • Pseudocode",
                    q: "Pseudocode ditulis menggunakan bahasa yang mudah dimengerti agar ....",
                    options: [
                        "Mudah dipahami sebelum disusun menjadi program komputer",
                        "Hanya bisa dibaca oleh satu mesin saja",
                        "Menyembunyikan urutan langkah",
                        "Mempersulit rencana kerja"
                    ],
                    ans: 0,
                    explanation: "Pseudocode membantu merancang ide langkah logis dengan bahasa sederhana sebelum dibuat menjadi kode program (hal. 15)."
                },
                {
                    level: 1,
                    topic: "Bab 2 • Teknologi Digital",
                    q: "Perangkat yang termasuk contoh teknologi digital berdasarkan materi Bab 2 adalah ....",
                    options: ["Ponsel, komputer, dan smart TV", "Kartu pos dan surat", "Congklak dan papan tulis", "Arsip kertas di map"],
                    ans: 0,
                    explanation: "Ponsel, komputer, tablet, dan smart TV bekerja menggunakan sistem elektronik/digital (hal. 36-37)."
                },
                {
                    level: 1,
                    topic: "Bab 2 • Perangkat Keras",
                    q: "Bagian komputer yang berfungsi menampilkan gambar dan teks kepada pengguna adalah ....",
                    options: ["Monitor (layar)", "Mouse", "Keyboard", "Scanner"],
                    ans: 0,
                    explanation: "Layar atau monitor adalah perangkat keras tempat kita melihat tampilan teks, gambar, atau video (hal. 38)."
                },
                {
                    level: 1,
                    topic: "Bab 2 • Keamanan Informasi",
                    q: "Contoh informasi pribadi yang tidak boleh dibagikan sembarangan di internet adalah ....",
                    options: ["Kata sandi akun dan nomor telepon", "Warna kesukaan", "Hobi menggambar", "Makanan favorit"],
                    ans: 0,
                    explanation: "Kata sandi, nomor telepon, alamat rumah, nama sekolah, dan foto kartu pelajar adalah data pribadi sensitif (hal. 43-44)."
                },

                // LEVEL 2 (No. 11 - 20)
                {
                    level: 2,
                    topic: "Bab 1 • Memahami Masalah",
                    q: "Dita sering lupa membawa buku ke sekolah. Hal pertama yang sebaiknya dilakukan Dita agar masalah teratasi dengan tepat adalah ....",
                    options: [
                        "Mencari tahu penyebab masalahnya terlebih dahulu",
                        "Menyalahkan cuaca pagi hari",
                        "Membeli buku baru setiap hari",
                        "Berhenti mencatat pelajaran"
                    ],
                    ans: 0,
                    explanation: "Pada Asesmen Formatif Bab 1 hal. 31, memahami penyebab masalah adalah langkah awal untuk menemukan solusi yang tepat."
                },
                {
                    level: 2,
                    topic: "Bab 1 • Pengenalan Pola",
                    q: "Setiap kali Beni bermain gim terlalu lama pada malam hari, ia terlambat bangun pagi. Kebiasaan berulang yang disadari Beni menunjukkan ....",
                    options: ["Pengenalan pola", "Abstraksi", "Peretasan", "Output"],
                    ans: 0,
                    explanation: "Beni mengenali hubungan kejadian yang berulang antara begadang bermain gim dan terlambat bangun pagi (hal. 11 & 31)."
                },
                {
                    level: 2,
                    topic: "Bab 1 • Pseudocode Wedang Uwuh",
                    q: "Pada contoh pseudocode membuat wedang uwuh (hal. 16), setelah bahan direbus hingga harum dan warna berubah, langkah berikutnya adalah ....",
                    options: [
                        "Memasukkan gula batu dan mengaduk hingga larut",
                        "Membuang seluruh air rebusan",
                        "Menyimpan bahan mentah tanpa dimasak",
                        "Langsung menutup program tanpa menyajikan"
                    ],
                    ans: 0,
                    explanation: "Setelah merebus bahan hingga harum dan berubah warna, langkah selanjutnya adalah memasukkan gula batu lalu mengaduk hingga larut (hal. 16)."
                },
                {
                    level: 2,
                    topic: "Bab 1 • Algoritma Berkemah",
                    q: "Pada langkah persiapan berkemah (Gambar 1.9 hal. 13), langkah terakhir sebelum berangkat adalah ....",
                    options: [
                        "Memeriksa kembali semua barang dan memastikan tidak ada yang tertinggal",
                        "Mengacak-acak isi tenda",
                        "Melupakan daftar perlengkapan",
                        "Membiarkan tas terbuka di halaman"
                    ],
                    ans: 0,
                    explanation: "Langkah terakhir adalah memeriksa kembali kelengkapan barang agar tidak ada yang tertinggal (hal. 13)."
                },
                {
                    level: 2,
                    topic: "Bab 1 • Koding & ScratchJr",
                    q: "Di ScratchJr, setelah memilih karakter dan menyusun blok perintah gerakan, tombol yang ditekan untuk melihat gerakan karakter adalah ....",
                    options: ["Tombol Play", "Tombol hapus data", "Tombol matikan layar", "Tombol cetak"],
                    ans: 0,
                    explanation: "Pada langkah penggunaan ScratchJr (hal. 30), tombol Play ditekan untuk menjalankan dan mengamati gerakan karakter."
                },
                {
                    level: 2,
                    topic: "Bab 2 • Analog vs Digital",
                    q: "Menyimpan data menggunakan penyimpanan cloud atau flashdisk termasuk teknologi ....",
                    options: ["Digital", "Analog", "Kertas manual", "Surat pos"],
                    ans: 0,
                    explanation: "Pada Tabel 2.1 (hal. 37), penyimpanan cloud atau flashdisk adalah contoh teknologi digital, sedangkan arsip kertas di map adalah analog."
                },
                {
                    level: 2,
                    topic: "Bab 2 • Perangkat Keras Utama",
                    q: "Alat yang digunakan untuk menggerakkan kursor di layar komputer adalah ....",
                    options: ["Mouse (tetikus)", "Printer", "Scanner", "Speaker"],
                    ans: 0,
                    explanation: "Mouse atau tetikus berfungsi menggerakkan kursor dan memilih perintah pada layar komputer (hal. 38)."
                },
                {
                    level: 2,
                    topic: "Bab 2 • Aplikasi Pengolah Kata & Konferensi",
                    q: "Contoh aplikasi pengolah kata dan aplikasi video konferensi pada materi Bab 2 hal. 40 berturut-turut adalah ....",
                    options: [
                        "Microsoft Word/Google Docs dan Zoom/Google Meet",
                        "Google Chrome dan Safari",
                        "Windows dan Android",
                        "Monitor dan keyboard"
                    ],
                    ans: 0,
                    explanation: "Microsoft Word/Google Docs/LibreOffice Writer adalah aplikasi pengolah kata, sedangkan Zoom/Google Meet/Teams adalah video konferensi (hal. 40)."
                },
                {
                    level: 2,
                    topic: "Bab 2 • Konsep IPO",
                    q: "Hasil akhir yang ditampilkan atau dihasilkan setelah proses dijalankan dalam sistem disebut ....",
                    options: ["Output (keluaran)", "Input (masukan)", "Baterai", " Kabel daya"],
                    ans: 0,
                    explanation: "Output adalah hasil akhir setelah proses selesai dijalankan, seperti jus yang siap minum atau pesan yang terbaca (hal. 41-42)."
                },
                {
                    level: 2,
                    topic: "Bab 2 • Kata Sandi Kuat",
                    q: "Berdasarkan Aktivitas 3 (hal. 48), ciri kata sandi yang kuat dan aman antara lain ....",
                    options: [
                        "Cukup panjang (minimal 8 karakter), memadukan huruf kapital/kecil, angka, dan simbol, serta tidak mudah ditebak",
                        "Menggunakan tanggal lahir atau nama panggilan yang mudah ditebak semua orang",
                        "Diberitahukan kepada teman sekelas agar mudah diingat",
                        "Hanya satu huruf saja"
                    ],
                    ans: 0,
                    explanation: "Kata sandi yang kuat menggabungkan huruf besar, huruf kecil, angka, dan simbol serta tidak dibagikan kepada orang lain (hal. 47-48)."
                },

                // LEVEL 3 (No. 21 - 30)
                {
                    level: 3,
                    topic: "Bab 1 • Penyebab Utama Masalah",
                    q: "Aldi sering terlambat masuk sekolah karena bangun kesiangan, sehingga terburu-buru dan sering lupa membawa buku. Penyebab utama dari rangkaian masalah tersebut adalah ....",
                    options: [
                        "Aldi bangun kesiangan",
                        "Guru datang terlalu pagi",
                        "Teman-teman datang lebih cepat",
                        "Pintu kelas selalu terbuka"
                    ],
                    ans: 0,
                    explanation: "Seperti pada soal Asesmen Formatif hal. 31, bangun kesiangan memicu terburu-buru dan lupa membawa buku."
                },
                {
                    level: 3,
                    topic: "Bab 1 • Abstraksi Perjalanan",
                    q: "Saat mencari jalan menuju Pantai Glagah, Ayu hanya memperhatikan arah jalan dan papan petunjuk tanpa memikirkan warna rumah di sepanjang jalan. Peristiwa tersebut mencerminkan ....",
                    options: ["Abstraksi", "Dekomposisi", "Pengenalan pola", "Peretasan akun"],
                    ans: 0,
                    explanation: "Memfokuskan perhatian pada petunjuk jalan dan mengabaikan warna rumah adalah contoh abstraksi (hal. 12 & 59)."
                },
                {
                    level: 3,
                    topic: "Bab 1 • Analisis Kasus Siti",
                    q: "Siti sering panik saat berangkat karena perlengkapan sekolahnya banyak yang tertinggal akibat tidak pernah memeriksa isi tas sebelum tidur. Cara paling tepat untuk mengatasinya adalah ....",
                    options: [
                        "Membiasakan mengecek jadwal dan perlengkapan tas pada malam hari sebelum tidur",
                        "Menyalahkan tas sekolah yang terlalu kecil",
                        "Tidak membawa buku sama sekali ke sekolah",
                        "Berangkat sekolah tanpa memeriksa perlengkapan"
                    ],
                    ans: 0,
                    explanation: "Memeriksa tas sesuai jadwal sebelum tidur mencegah barang tertinggal dan mengurangi kepanikan di pagi hari (hal. 13 & 33)."
                },
                {
                    level: 3,
                    topic: "Bab 1 • Dampak Instruksi Tidak Terurut",
                    q: "Edo membantu membuat nasi goreng, tetapi petunjuk temannya kurang jelas dan tidak urut sehingga bumbu tertukar dan rasanya terlalu asin. Hal ini menunjukkan bahwa ....",
                    options: [
                        "Instruksi yang tidak jelas dan tidak berurutan berdampak buruk pada hasil pekerjaan",
                        "Bumbu tidak perlu ditakar saat memasak",
                        "Petunjuk tidak diperlukan dalam kegiatan praktik",
                        "Hasil masakan selalu sama meski langkahnya acak"
                    ],
                    ans: 0,
                    explanation: "Pada soal hal. 32, instruksi yang tidak jelas dan tidak urut menyebabkan kesalahan langkah dan hasil yang tidak sesuai."
                },
                {
                    level: 3,
                    topic: "Bab 1 • Menyusun Solusi Komputasional",
                    q: "Ketika menghadapi masalah yang berulang setiap hari, langkah paling bijak setelah mengetahui penyebabnya adalah ....",
                    options: [
                        "Merancang solusi logis, menerapkannya secara konsisten, lalu mengevaluasi hasilnya",
                        "Mengabaikan masalah sampai menimbulkan kerugian lebih besar",
                        "Meniru tindakan yang justru memperparah keadaan",
                        "Menyerah sebelum mencoba"
                    ],
                    ans: 0,
                    explanation: "Pemecahan masalah yang baik meliputi mengenali masalah, mencari penyebab, menyusun & menerapkan solusi, serta mengevaluasi hasilnya (hal. 8)."
                },
                {
                    level: 3,
                    topic: "Bab 2 • Radio vs Ponsel Digital",
                    q: "Mengapa ponsel digital memungkinkan kita memilih lagu sendiri dan membuat daftar putar, sedangkan radio hanya memutar siaran yang sedang disiarkan?",
                    options: [
                        "Ponsel menggunakan teknologi digital dan internet/penyimpanan data, sedangkan radio menerima siaran gelombang radio",
                        "Radio tidak memiliki komponen elektronik sama sekali",
                        "Ponsel tidak dapat memutar suara",
                        "Siaran radio selalu berupa teks tertulis"
                    ],
                    ans: 0,
                    explanation: "Radio memutar siaran gelombang radio yang sedang dipancarkan, sedangkan ponsel digital memungkinkan pemilihan lagu dan pembuatan playlist (hal. 35-36)."
                },
                {
                    level: 3,
                    topic: "Bab 2 • Dampak Ketidaklengkapan Sistem",
                    q: "Jika salah satu bagian penting tidak ada atau tidak berfungsi dengan baik pada sistem komputer (misalnya perangkat lunak tidak ada), maka ....",
                    options: [
                        "Perangkat digital tidak dapat menjalankan fungsinya dengan baik",
                        "Komputer tetap berjalan normal tanpa kendala",
                        "Semua data otomatis tersimpan di udara",
                        "Monitor berubah menjadi keyboard"
                    ],
                    ans: 0,
                    explanation: "Perangkat keras dan perangkat lunak saling bergantung; jika salah satunya tidak ada, fungsi perangkat terganggu (hal. 42 & 53)."
                },
                {
                    level: 3,
                    topic: "Bab 2 • Alur IPO Koding",
                    q: "Pada contoh alur IPO dalam koding (Gambar 2.8 hal. 41), menekan tombol 'Start' dan aplikasi menjalankan perintah hingga karakter bergerak ke kanan berturut-turut adalah ....",
                    options: [
                        "Input (menekan Start) -> Proses (aplikasi menjalankan perintah) -> Output (karakter bergerak)",
                        "Output (karakter diam) -> Proses (mematikan komputer) -> Input (mencabut kabel)",
                        "Proses (menghapus game) -> Input (menutup layar) -> Output (muncul suara)",
                        "Input (mengetik nama) -> Output (mengunduh file) -> Proses (menekan tombol)"
                    ],
                    ans: 0,
                    explanation: "Aksi pengguna menekan tombol adalah Input, program mengolah instruksi adalah Proses, dan gerakan karakter di layar adalah Output (hal. 41)."
                },
                {
                    level: 3,
                    topic: "Bab 2 • Kebocoran Data & Penipuan",
                    q: "Jika informasi sensitif seperti NIK, alamat rumah, email, atau tanggal lahir bocor dan disalahgunakan, dampak yang dapat terjadi adalah ....",
                    options: [
                        "Data dapat dipakai pihak tidak bertanggung jawab untuk penipuan atau pendaftaran/transaksi tanpa izin",
                        "Kecepatan internet di rumah menjadi lebih tinggi",
                        "Akun media sosial otomatis menjadi milik umum secara sah",
                        "Perangkat menjadi kebal terhadap segala ancaman"
                    ],
                    ans: 0,
                    explanation: "Pada materi investigasi kebocoran data (hal. 49), data sensitif yang bocor berisiko disalahgunakan untuk penipuan atau tindakan merugikan."
                },
                {
                    level: 3,
                    topic: "Bab 2 • Sikap Bijak Berinternet",
                    q: "Berikut ini yang merupakan kombinasi sikap aman dan beretika saat menggunakan teknologi digital adalah ....",
                    options: [
                        "Menjaga kerahasiaan kata sandi/OTP, tidak mengklik tautan mencurigakan, dan berkomunikasi dengan sopan",
                        "Membagikan kode OTP ke teman, mengklik semua tautan hadiah, dan mengejek di kolom komentar",
                        "Mengunggah alamat rumah dan jadwal liburan keluarga secara terbuka",
                        "Menyebarkan foto pribadi teman tanpa izin"
                    ],
                    ans: 0,
                    explanation: "Menjaga rahasia akun/OTP, waspada terhadap tautan/orang asing, dan beretika sopan adalah kunci aman berinternet (hal. 46-47)."
                }
            ]
        };

        // =========================================================================
        // STATE APLIKASI & ALGORITMA PENGACAKAN MISI OTOMATIS
        // =========================================================================
        const state = {
            studentName: "",
            studentAbsen: "",
            selectedPaket: null, // 'A', 'B', atau 'C'
            cardOrder: ['A', 'B', 'C'],
            currentQuestionIndex: 0,
            userAnswers: Array(30).fill(null),
            flaggedQuestions: Array(30).fill(false),
            reviewFilter: 'all',
            shuffleTimer: null,
            revealTimer: null
        };

        /**
         * Mengacak urutan array menggunakan algoritma Fisher-Yates.
         */
        function shuffleArray(arr) {
            const copy = [...arr];
            for (let i = copy.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [copy[i], copy[j]] = [copy[j], copy[i]];
            }
            return copy;
        }

        function showScreen(screenId) {
            ['screen-login', 'screen-draw', 'screen-quiz', 'screen-result'].forEach(id => {
                document.getElementById(id).classList.add('hidden');
            });
            document.getElementById(screenId).classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: window.matchMedia('(max-width: 639px)').matches ? 'auto' : 'smooth' });
        }

        function clearDrawTimers() {
            if (state.shuffleTimer) {
                clearInterval(state.shuffleTimer);
                state.shuffleTimer = null;
            }
            if (state.revealTimer) {
                clearTimeout(state.revealTimer);
                state.revealTimer = null;
            }
        }

        // Tangani submit form masuk siswa -> langsung masuk ke halaman pengacakan otomatis
        document.getElementById('login-form').addEventListener('submit', function (e) {
            e.preventDefault();
            const namaInput = document.getElementById('input-nama').value.trim();
            const absenInput = document.getElementById('input-absen').value.trim();
            const errorBox = document.getElementById('login-error');
            const errorText = document.getElementById('login-error-text');

            if (!namaInput || namaInput.length < 2) {
                errorText.textContent = "Harap masukkan Nama Lengkap siswa terlebih dahulu.";
                errorBox.classList.remove('hidden');
                return;
            }

            const absenNum = parseInt(absenInput, 10);
            if (!absenInput || isNaN(absenNum) || absenNum < 1) {
                errorText.textContent = "Harap masukkan Nomor Absen yang valid (minimal 1).";
                errorBox.classList.remove('hidden');
                return;
            }

            errorBox.classList.add('hidden');
            state.studentName = namaInput;
            state.studentAbsen = String(absenNum).padStart(2, '0');

            document.getElementById('header-student-info').classList.remove('hidden');
            document.getElementById('header-student-info').classList.add('flex');
            document.getElementById('nav-student-name').textContent = state.studentName;
            document.getElementById('nav-student-absen').textContent = `Absen: ${state.studentAbsen}`;
            document.getElementById('nav-paket-badge').classList.add('hidden');

            prepareAutomaticMissionDraw();
            showScreen('screen-draw');
        });

        /**
         * Menjalankan animasi kartu misi bergerak/berputar otomatis tanpa perlu diklik,
         * lalu mengunci misi yang wajib dikerjakan siswa.
         */
        function prepareAutomaticMissionDraw() {
            clearDrawTimers();
            document.getElementById('draw-student-name').textContent = state.studentName;
            document.getElementById('draw-student-absen').textContent = state.studentAbsen;

            const paketKeys = ['A', 'B', 'C'];
            state.selectedPaket = paketKeys[Math.floor(Math.random() * paketKeys.length)];
            document.getElementById('draw-status-pill').className = "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-4";
            document.getElementById('draw-status-text').innerHTML = '<i class="fa-solid fa-satellite-dish fa-spin mr-1"></i>Persiapan peluncuran...';
            document.getElementById('draw-instruction').textContent = 'Roket sedang meluncur menuju orbit. Paket soalmu akan segera diterima dari Mission Control.';

            const drawScreen = document.getElementById('screen-draw');
            drawScreen.classList.remove('mission-revealed');
            const scene = document.getElementById('launch-scene');
            scene.classList.remove('launch-active', 'launch-complete');
            void scene.offsetWidth;
            scene.classList.add('launch-active');
            document.getElementById('shuffling-indicator').classList.remove('hidden');
            document.getElementById('draw-result-box').classList.add('hidden');
            document.getElementById('draw-result-box').classList.remove('flex');
            document.getElementById('shuffle-progress-bar').style.width = '0%';

            const subtexts = [
                'Mengisi bahan bakar roket...',
                'Menyelaraskan koordinat orbit...',
                'Mengirim sinyal ke Mission Control...',
                'Membuka paket soal astronot...'
            ];
            let step = 0;
            const totalSteps = 14;
            state.shuffleTimer = setInterval(() => {
                step++;
                const pct = Math.min(95, Math.round((step / totalSteps) * 95));
                document.getElementById('shuffle-progress-bar').style.width = pct + '%';
                document.getElementById('shuffling-subtext').textContent = subtexts[(step - 1) % subtexts.length];
                if (step >= totalSteps) {
                    clearInterval(state.shuffleTimer);
                    state.shuffleTimer = null;
                    document.getElementById('shuffle-progress-bar').style.width = '100%';
                    revealSelectedMissionCard();
                }
            }, 200);
        }

        function revealSelectedMissionCard() {
            const chosenMeta = MISSION_META[state.selectedPaket];
            const scene = document.getElementById('launch-scene');
            scene.classList.add('launch-complete');
            document.getElementById('screen-draw').classList.add('mission-revealed');

            const code = document.getElementById('revealed-paket-code');
            code.textContent = chosenMeta.code;
            code.className = 'inline-flex px-3 py-1 rounded-full text-[11px] font-mono font-bold border mb-3 ' + chosenMeta.badgeClass;
            document.getElementById('revealed-paket-title').textContent = chosenMeta.title;
            document.getElementById('revealed-paket-subtitle').textContent = chosenMeta.subtitle;
            document.getElementById('mission-icon').className = 'fa-solid ' + chosenMeta.icon + ' text-3xl ' + chosenMeta.textClass;
            document.getElementById('mission-icon-wrap').className = 'mission-icon-wrap mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ' + chosenMeta.textClass;
            document.getElementById('locked-paket-label').textContent = chosenMeta.code;
            document.getElementById('btn-start-quiz-text').textContent = 'Mulai ' + chosenMeta.code;

            // Tutup adegan roket dahulu, baru tampilkan kartu paket soal.
            state.revealTimer = setTimeout(() => {
                document.getElementById('shuffling-indicator').classList.add('hidden');
                const resultBox = document.getElementById('draw-result-box');
                resultBox.classList.remove('hidden');
                resultBox.classList.add('flex');
            }, 440);
        }

        // =========================================================================
        // LOGIKA PENGERJAAN MISI (30 SOAL)
        // =========================================================================
        function startQuiz() {
            if (!state.selectedPaket) return;
            const meta = MISSION_META[state.selectedPaket];

            state.currentQuestionIndex = 0;
            state.userAnswers = Array(30).fill(null);
            state.flaggedQuestions = Array(30).fill(false);

            const badge = document.getElementById('nav-paket-badge');
            badge.textContent = meta.code;
            badge.classList.remove('hidden');

            document.getElementById('quiz-paket-tag').textContent = `${meta.code} • ${meta.title.toUpperCase()}`;

            renderQuestionGrid();
            renderQuestion(0);
            showScreen('screen-quiz');
        }

        function getLevelBadgeInfo(level) {
            if (level === 1) {
                return {
                    text: "Level 1 • Dasar",
                    cls: "px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-semibold"
                };
            }
            if (level === 2) {
                return {
                    text: "Level 2 • Terapan",
                    cls: "px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-500/40 text-amber-300 font-mono text-xs font-semibold"
                };
            }
            return {
                text: "Level 3 • Analisis",
                cls: "px-3 py-1 rounded-lg bg-rose-500/15 border border-rose-500/40 text-rose-300 font-mono text-xs font-semibold"
            };
        }

        function renderQuestion(index) {
            const questions = QUIZ_BANK[state.selectedPaket];
            const q = questions[index];
            state.currentQuestionIndex = index;

            document.getElementById('quiz-current-num').textContent = index + 1;
            document.getElementById('quiz-progress-bar').style.width = `${((index + 1) / 30) * 100}%`;

            const lvlInfo = getLevelBadgeInfo(q.level);
            const lvlBadge = document.getElementById('quiz-level-badge');
            lvlBadge.textContent = lvlInfo.text;
            lvlBadge.className = lvlInfo.cls;

            document.getElementById('question-topic-badge').innerHTML = `<i class="fa-solid fa-bookmark text-cyan-400 mr-1.5"></i>${q.topic}`;
            document.getElementById('question-number-pill').textContent = index + 1;
            document.getElementById('question-text').textContent = q.q;

            const flagBtn = document.getElementById('btn-flag');
            const flagText = document.getElementById('btn-flag-text');
            if (state.flaggedQuestions[index]) {
                flagBtn.className = "px-3 py-1.5 rounded-lg text-xs font-semibold border border-amber-400 bg-amber-500/20 text-amber-300 transition-all flex items-center gap-1.5 cursor-pointer";
                flagText.textContent = "Ditandai Ragu-ragu";
            } else {
                flagBtn.className = "px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-700 bg-slate-900/80 text-slate-300 hover:border-amber-400/60 hover:text-amber-300 transition-all flex items-center gap-1.5 cursor-pointer";
                flagText.textContent = "Tandai Ragu-ragu";
            }

            const optionsContainer = document.getElementById('options-container');
            optionsContainer.innerHTML = '';
            const letters = ['A', 'B', 'C', 'D'];

            q.options.forEach((optText, optIdx) => {
                const isSelected = state.userAnswers[index] === optIdx;
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.onclick = () => selectAnswer(index, optIdx);
                btn.className = isSelected
                    ? "w-full text-left p-4 rounded-2xl border-2 border-cyan-400 bg-cyan-500/15 text-white transition-all flex items-center gap-3.5 shadow-md shadow-cyan-500/10 cursor-pointer"
                    : "w-full text-left p-4 rounded-2xl border border-slate-700/80 bg-slate-900/65 hover:bg-slate-800/80 hover:border-slate-500 text-slate-200 transition-all flex items-center gap-3.5 cursor-pointer";

                btn.innerHTML = `
                    <span class="flex-shrink-0 w-8 h-8 rounded-xl font-mono font-bold text-xs flex items-center justify-center ${isSelected ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-300 border border-slate-700'}">
                        ${letters[optIdx]}
                    </span>
                    <span class="text-sm sm:text-base font-medium leading-snug">${optText}</span>
                `;
                optionsContainer.appendChild(btn);
            });

            document.getElementById('btn-prev').disabled = (index === 0);
            const btnNext = document.getElementById('btn-next');
            const btnSubmit = document.getElementById('btn-submit-quiz');

            if (index === 29) {
                btnNext.classList.add('hidden');
                btnSubmit.classList.remove('hidden');
            } else {
                btnNext.classList.remove('hidden');
                btnSubmit.classList.add('hidden');
            }

            updateAnsweredCounter();
            highlightCurrentNavButton();
        }

        function selectAnswer(qIndex, optIdx) {
            state.userAnswers[qIndex] = optIdx;
            renderQuestion(qIndex);
            renderQuestionGrid();
        }

        function toggleFlag() {
            const idx = state.currentQuestionIndex;
            state.flaggedQuestions[idx] = !state.flaggedQuestions[idx];
            renderQuestion(idx);
            renderQuestionGrid();
        }

        function prevQuestion() {
            if (state.currentQuestionIndex > 0) {
                renderQuestion(state.currentQuestionIndex - 1);
            }
        }

        function nextQuestion() {
            if (state.currentQuestionIndex < 29) {
                renderQuestion(state.currentQuestionIndex + 1);
            }
        }

        function updateAnsweredCounter() {
            const count = state.userAnswers.filter(a => a !== null).length;
            document.getElementById('quiz-answered-count').textContent = count;
        }

        function renderQuestionGrid() {
            const grid = document.getElementById('question-nav-grid');
            grid.innerHTML = '';

            for (let i = 0; i < 30; i++) {
                const isAnswered = state.userAnswers[i] !== null;
                const isFlagged = state.flaggedQuestions[i];
                const isCurrent = state.currentQuestionIndex === i;

                let cls = "h-9 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center cursor-pointer ";
                if (isFlagged) {
                    cls += "bg-amber-500 text-slate-950 ";
                } else if (isAnswered) {
                    cls += "bg-cyan-500 text-slate-950 ";
                } else {
                    cls += "bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-500 ";
                }

                if (isCurrent) {
                    cls += "ring-2 ring-white scale-105";
                }

                const btn = document.createElement('button');
                btn.type = 'button';
                btn.textContent = i + 1;
                btn.className = cls;
                btn.onclick = () => renderQuestion(i);
                grid.appendChild(btn);
            }
        }

        function highlightCurrentNavButton() {
            renderQuestionGrid();
        }

        // =========================================================================
        // KONFIRMASI & PERHITUNGAN HASIL AKHIR
        // =========================================================================
        function confirmSubmitQuiz() {
            const answeredCount = state.userAnswers.filter(a => a !== null).length;
            const unansweredCount = 30 - answeredCount;
            const modalTitle = document.getElementById('modal-title');
            const modalMsg = document.getElementById('modal-message');

            modalTitle.textContent = "Konfirmasi Penyelesaian Misi";
            if (unansweredCount > 0) {
                modalMsg.innerHTML = `Masih ada <strong class="text-amber-400">${unansweredCount} tantangan</strong> yang belum kamu jawab (terjawab ${answeredCount} dari 30 tantangan). Apakah kamu tetap yakin ingin menyelesaikan misi sekarang?`;
            } else {
                modalMsg.innerHTML = `Seluruh <strong class="text-emerald-400">30 tantangan</strong> sudah terjawab. Apakah kamu yakin ingin menyelesaikan misi dan melihat hasil nilaimu?`;
            }

            document.getElementById('custom-modal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('custom-modal').classList.add('hidden');
        }

        function finalizeQuiz() {
            closeModal();
            const questions = QUIZ_BANK[state.selectedPaket];
            const meta = MISSION_META[state.selectedPaket];

            let totalCorrect = 0;
            let lvlCorrect = { 1: 0, 2: 0, 3: 0 };
            let lvlTotal = { 1: 10, 2: 10, 3: 10 };

            questions.forEach((q, idx) => {
                if (state.userAnswers[idx] === q.ans) {
                    totalCorrect++;
                    lvlCorrect[q.level]++;
                }
            });

            const totalWrong = 30 - totalCorrect;
            const finalScore = Math.round((totalCorrect / 30) * 100);

            document.getElementById('res-name').textContent = state.studentName;
            document.getElementById('res-absen').textContent = state.studentAbsen;
            document.getElementById('res-paket').textContent = `${meta.code} - ${meta.title}`;
            document.getElementById('res-score').textContent = finalScore;
            document.getElementById('res-correct').textContent = totalCorrect;
            document.getElementById('res-wrong').textContent = totalWrong;

            const predicateEl = document.getElementById('res-predicate');
            const badgeIcon = document.getElementById('result-badge-icon');
            if (finalScore >= 85) {
                predicateEl.textContent = "Komandan Astronot Terbaik (Sangat Baik)";
                predicateEl.className = "inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30";
                badgeIcon.className = "inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 mb-4 shadow-lg";
                badgeIcon.innerHTML = `<i class="fa-solid fa-trophy text-4xl"></i>`;
            } else if (finalScore >= 70) {
                predicateEl.textContent = "Penjelajah Handal (Baik)";
                predicateEl.className = "inline-block px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30";
                badgeIcon.className = "inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-400 mb-4 shadow-lg";
                badgeIcon.innerHTML = `<i class="fa-solid fa-award text-4xl"></i>`;
            } else {
                predicateEl.textContent = "Kadet Berproses (Perlu Latihan Ulang Materi)";
                predicateEl.className = "inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30";
                badgeIcon.className = "inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-amber-500/15 border border-amber-500/40 text-amber-400 mb-4 shadow-lg";
                badgeIcon.innerHTML = `<i class="fa-solid fa-book-open-reader text-4xl"></i>`;
            }

            [1, 2, 3].forEach(lvl => {
                const c = lvlCorrect[lvl];
                const t = lvlTotal[lvl];
                const pct = Math.round((c / t) * 100);
                document.getElementById(`res-lvl${lvl}-text`).textContent = `${c}/${t}`;
                document.getElementById(`res-lvl${lvl}-pct`).textContent = `${pct}%`;
                document.getElementById(`res-lvl${lvl}-bar`).style.width = `${pct}%`;
            });

            state.reviewFilter = 'all';
            document.getElementById('review-section').classList.add('hidden');
            renderReviewList();
            showScreen('screen-result');
        }

        // =========================================================================
        // REVIEW JAWABAN & PEMBAHASAN + UNDUH LAPORAN HASIL NILAI
        // =========================================================================
        function toggleReviewSection() {
            const section = document.getElementById('review-section');
            section.classList.toggle('hidden');
            if (!section.classList.contains('hidden')) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        function downloadResultReport() {
            try {
                const questions = QUIZ_BANK[state.selectedPaket] || [];
                const meta = MISSION_META[state.selectedPaket] || { code: "MISI", title: "KKA" };
                const letters = ['A', 'B', 'C', 'D'];

                let totalCorrect = 0;
                let lvlCorrect = { 1: 0, 2: 0, 3: 0 };

                questions.forEach((q, idx) => {
                    if (state.userAnswers[idx] === q.ans) {
                        totalCorrect++;
                        lvlCorrect[q.level]++;
                    }
                });

                const totalWrong = 30 - totalCorrect;
                const finalScore = Math.round((totalCorrect / 30) * 100);
                const predicate = document.getElementById('res-predicate').textContent.trim();
                const timestamp = new Date().toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'short' });

                let detailLines = questions.map((q, idx) => {
                    const uAns = state.userAnswers[idx];
                    const isRight = uAns === q.ans;
                    const uLabel = uAns !== null ? `${letters[uAns]}. ${q.options[uAns]}` : "Tidak Dijawab";
                    const cLabel = `${letters[q.ans]}. ${q.options[q.ans]}`;
                    return [
                        `No. ${String(idx + 1).padStart(2, '0')} [Level ${q.level} | ${q.topic}] - ${isRight ? "BENAR" : "SALAH"}`,
                        `  Soal           : ${q.q.replace(/\n/g, ' ')}`,
                        `  Jawaban Siswa  : ${uLabel}`,
                        `  Kunci Jawaban  : ${cLabel}`
                    ].join('\n');
                }).join('\n\n');

                const reportContent = [
                    "======================================================================",
                    "LAPORAN HASIL NILAI - ASESMEN DIGITAL KKA KELAS 5 (TEMA ASTRONOT)",
                    "======================================================================",
                    `Nama Astronot  : ${state.studentName}`,
                    `Nomor Absen    : ${state.studentAbsen}`,
                    `Misi Ditugaskan: ${meta.code} - ${meta.title}`,
                    `Waktu Selesai  : ${timestamp}`,
                    "----------------------------------------------------------------------",
                    `SKOR AKHIR     : ${finalScore} / 100 (${predicate})`,
                    `Jawaban Benar  : ${totalCorrect} dari 30 soal`,
                    `Jawaban Salah  : ${totalWrong} dari 30 soal`,
                    `Level 1 Dasar  : ${lvlCorrect[1]}/10 (${Math.round((lvlCorrect[1] / 10) * 100)}%)`,
                    `Level 2 Terapan: ${lvlCorrect[2]}/10 (${Math.round((lvlCorrect[2] / 10) * 100)}%)`,
                    `Level 3 Analis.: ${lvlCorrect[3]}/10 (${Math.round((lvlCorrect[3] / 10) * 100)}%)`,
                    "======================================================================",
                    "RINCIAN JAWABAN PER SOAL",
                    "======================================================================",
                    detailLines
                ].join('\n');

                const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                const cleanName = (state.studentName || 'Siswa').toLowerCase().replace(/[^a-z0-9]+/g, '_');
                const link = document.createElement('a');
                link.href = url;
                link.download = `Hasil_Nilai_KKA_Absen_${state.studentAbsen}_${cleanName}.txt`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                setTimeout(() => URL.revokeObjectURL(url), 1000);
            } catch (err) {
                document.getElementById('modal-title').textContent = "Unduhan Gagal";
                document.getElementById('modal-message').textContent = "Terjadi kendala saat menyiapkan berkas hasil nilai. Silakan coba kembali.";
                document.getElementById('custom-modal').classList.remove('hidden');
            }
        }

        function filterReview(type) {
            state.reviewFilter = type;
            renderReviewList();
        }

        function renderReviewList() {
            const listEl = document.getElementById('review-list');
            listEl.innerHTML = '';
            const questions = QUIZ_BANK[state.selectedPaket];
            const letters = ['A', 'B', 'C', 'D'];

            questions.forEach((q, idx) => {
                const userAns = state.userAnswers[idx];
                const isCorrect = userAns === q.ans;

                if (state.reviewFilter === 'wrong' && isCorrect) return;

                const card = document.createElement('div');
                card.className = isCorrect
                    ? "p-5 rounded-2xl bg-slate-900/80 border border-emerald-500/30 space-y-3"
                    : "p-5 rounded-2xl bg-slate-900/80 border border-rose-500/40 space-y-3";

                const statusBadge = isCorrect
                    ? `<span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-300"><i class="fa-solid fa-check mr-1"></i>BENAR</span>`
                    : `<span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-rose-500/20 text-rose-300"><i class="fa-solid fa-xmark mr-1"></i>SALAH</span>`;

                const userAnswerText = userAns !== null
                    ? `${letters[userAns]}. ${q.options[userAns]}`
                    : `<em class="text-slate-500">Tidak dijawab</em>`;

                const correctAnswerText = `${letters[q.ans]}. ${q.options[q.ans]}`;

                card.innerHTML = `
                    <div class="flex flex-wrap items-center justify-between gap-2">
                        <div class="flex items-center gap-2">
                            <span class="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-800 text-cyan-300">No. ${idx + 1}</span>
                            <span class="font-mono text-[11px] text-slate-400">Level ${q.level} • ${q.topic}</span>
                        </div>
                        ${statusBadge}
                    </div>
                    <p class="text-sm sm:text-base font-semibold text-white whitespace-pre-line">${q.q}</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm pt-1">
                        <div class="p-3 rounded-xl ${isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-200' : 'bg-rose-500/10 border border-rose-500/30 text-rose-200'}">
                            <span class="block text-[10px] font-mono uppercase opacity-75 mb-0.5">Jawaban Kamu:</span>
                            <strong>${userAnswerText}</strong>
                        </div>
                        <div class="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-200">
                            <span class="block text-[10px] font-mono uppercase opacity-75 mb-0.5">Kunci Jawaban Benar:</span>
                            <strong>${correctAnswerText}</strong>
                        </div>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                        <strong class="text-cyan-400"><i class="fa-solid fa-lightbulb mr-1"></i>Pembahasan:</strong> ${q.explanation}
                    </div>
                `;
                listEl.appendChild(card);
            });

            if (listEl.innerHTML === '') {
                listEl.innerHTML = `<div class="text-center py-8 text-emerald-400 font-semibold text-sm"><i class="fa-solid fa-star mr-2"></i>Luar biasa! Tidak ada jawaban yang salah.</div>`;
            }
        }
    

// Handler untuk atribut onclick pada markup statis.
Object.assign(window, { startQuiz, toggleFlag, prevQuestion, nextQuestion, confirmSubmitQuiz, downloadResultReport, toggleReviewSection, filterReview, closeModal, finalizeQuiz });
