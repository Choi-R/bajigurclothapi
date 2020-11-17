# Bajigur Cloth API - Tees.co.id Code Test
## Oleh: Choirul Rahmaditya (choirul.rahmaditya@mail.ugm.ac.id)

### Ringkasan
Program ini ditulis dengan NodeJS versi 12.13.1. Teknologi yang digunakan antara lain: express, sequelize, dan swagger. Database yang digunakan adalah PostgreSQL, dengan layanannya adalah ElephantSQL. Jadi, memang tidak perlu ada Postgre di lokal, tetapi akses internet diperlukan untuk menggunakan REST API ini. 

### Cara Menggunakan
1. Download atau clone repo ini ke folder lokal
2. Buka terminal di dalam folder lokal, ketik `npm i`
3. Jalankan program dengan mengetik `npm start`
4. Buka browser, akses http://localhost:3001/documentation. Halaman dokumentasi akan muncul.
    - Alternatif apabila langkah 1-4 terlalu repot, program ini juga dideploy ke heroku. Alamatnya adalah https://bajigurclothapi.herokuapp.com/documentation.
5. Petunjuk lebih lanjut terdapat di dalam halaman dokumentasi.

### Tentang Bajigur Cloth App
Pembuatan aplikasi Bajigur Cloth membutuhkan pertimbangan dari sisi admin dan sisi pengguna. Admin menginginkan seluruh aktivitas di dalam aplikasi terekam rapi sehingga mereka dapat memberikan layanan dan rekomendasi yang lebih personal kepada pengguna. Di sisi lain, pengguna menginginkan aplikasi tersebut memudahkannya untuk berbelanja. Oleh karena itu terciptalah aplikasi Bajigur Cloth -backend side- yang minimalis, efektif, dan efisien. 
