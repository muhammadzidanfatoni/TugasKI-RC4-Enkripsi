'use client'

import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Algoritma = () => {
  // State untuk menyimpan plain text, private key, dan hasil enkripsi/dekripsi
  const [plainText, setPlainText] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [result, setResult] = useState("");

  // Fungsi untuk menangani proses enkripsi/dekripsi
  const handleEncryption = (e : any) => {
    e.preventDefault();

    // Implementasi algoritma RC4 di sini
    let key = [];
    let S = [];
    let keyStream = [];
    let pesan = plainText;
    let keyLength = privateKey.length;

    // Inisialisasi S-box dan kunci berdasarkan private key
    for (let i = 0; i < 256; i++) {
      S[i] = i;
      key[i] = privateKey.charCodeAt(i % keyLength);
    }

    // Inisialisasi S-box secara acak berdasarkan kunci
    let j = 0;
    for (let i = 0; i < 256; i++) {
      j = (j + S[i] + key[i]) % 256;
      let temp : any = S[i];
      S[i] = S[j];
      S[j] = temp;
    }

    // Menghasilkan keystream berdasarkan S-box yang telah diacak
    let i = 0;
    j = 0;
    for (let n = 0; n < pesan.length; n++) {
      i = (i + 1) % 256;
      j = (j + S[i]) % 256;
      let temp : any = S[i];
      S[i] = S[j];
      S[j] = temp;
      let t = (S[i] + S[j]) % pesan.length;
      keyStream[n] = S[t].toString(2).padStart(8, "0");
    }

    // Memanggil fungsi enkripsi/dekripsi dengan pesan dan keystream yang telah dihasilkan
    enkripsiDekripsi(pesan, keyStream);
  };

  // Fungsi untuk melakukan enkripsi/dekripsi berdasarkan pesan dan keystream
  const enkripsiDekripsi = (pesan : any, keyStream : any) => {
    let hasil = "";
    for (let i = 0; i < pesan.length; i++) {
      // Mengonversi karakter pesan dan keystream menjadi bilangan bulat
      let binaryToInt = parseInt(pesan[i].charCodeAt().toString(2), 2);
      let keyStreamToInt = parseInt(keyStream[i], 2);
      // Melakukan operasi XOR antara bilangan bulat pesan dan keystream
      let result = binaryToInt ^ keyStreamToInt;
      // Mengonversi hasil XOR kembali menjadi karakter dan menyimpannya
      hasil += String.fromCharCode(result);
    }
    // Menyimpan hasil enkripsi/dekripsi ke dalam state
    setResult(hasil);
  };

  return (
    <section id="algoritma">
      <div className="relative flex flex-col w-full px-4 sm:px-10 xl:container justify-center items-center my-40">
        <h1 className="text-blue-400 text-4xl md:text-6xl xl:text-7xl font-bold mx-auto px-2">Implementation of RC4 Algorithm</h1>
        <p className="w-full text-justify sm:text-center mt-4 px-8 text-2xl">Provides encryption services using RC4 algorithm with rivest chiper system, based on private key with symmetric algorithm.</p>
        <div className="max-w-full w-[800px] p-8 h-full border-2 border-gray-700 rounded-lg my-6 shadow-lg">
          <form className="flex flex-col gap-6">
            {/* Input untuk plain text */}
            <Textarea placeholder="Silahkan Masukan Plain Text" value={plainText} onChange={(e) => setPlainText(e.target.value)} />
            {/* Input untuk private key */}
            <Textarea placeholder="Silahkan Masukan Private Key" value={privateKey} onChange={(e) => setPrivateKey(e.target.value)} />
            {/* Hasil enkripsi/dekripsi akan ditampilkan di sini */}
            <Textarea placeholder="Hasil enkripsi maupun dekripsi akan tampil disini" value={result} readOnly />
            {/* Tombol untuk memulai proses enkripsi/dekripsi */}
            <Button className="w-full bg-[#5652ce]" variant="default" onClick={handleEncryption}>Enkripsi Dekripsi</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Algoritma;
