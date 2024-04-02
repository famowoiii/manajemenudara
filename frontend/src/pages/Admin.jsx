import React, { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token || document.cookie.includes("access_token")) {
      // Memeriksa apakah token ada di localStorage atau cookies
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  const handleDownloadExcel = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/data/download-excel",
        {
          responseType: "blob",
          withCredentials: true, // Mengonfigurasi respons untuk menerima tipe blob (file)
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "semua_data.xlsx");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error downloading Excel file:", error);
    }
  };

  if (!authenticated) {
    return (
      <div className="flex justify-center items-center h-screen bg-blue-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-center text-gray-800">
            Anda tidak diizinkan mengakses halaman ini. Silakan login terlebih
            dahulu.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Halaman Admin</h1>
      {/* Tombol untuk mengunduh file Excel */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleDownloadExcel}
      >
        Download Excel
      </button>
    </div>
  );
}

export default Admin;
