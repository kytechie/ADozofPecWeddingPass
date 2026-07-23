"use client";

import { useState } from "react";
import Papa from "papaparse";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

function downloadTemplate() {
  const csv =
`Full Name,Email,Phone,Seats
John Doe,john@gmail.com,08012345678,2
Jane Doe,jane@gmail.com,08087654321,4`;

  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "Guest-Import-Template.csv";

  link.click();

  URL.revokeObjectURL(url);
}

export default function ImportGuestsPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  function handleFile(file: File) {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete(results) {
        setRows(results.data as any[]);
      },
    });
  }

  async function importGuests() {
    if (rows.length === 0) {
      alert("No guests to import.");
      return;
    }

    setLoading(true);

    const guests = rows.map((row) => ({
      full_name: row["Full Name"] || "",
      email: row["Email"] || "",
      phone: row["Phone"] || "",
      seats: Number(row["Seats"] || 1),
    }));

    const { error } = await supabase
      .from("guests")
      .insert(guests);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert(`${guests.length} guests imported successfully!`);
    setRows([]);
  }

  return (
    <main className="min-h-screen bg-[#FAF8F2] p-10">

      <div className="max-w-5xl mx-auto">

        <div className="flex items-center justify-between">

          <div>
            <p className="uppercase tracking-[0.35em] text-xs text-[#C9A96A]">
              Forever Wedding
            </p>

            <h1 className="mt-3 text-5xl font-light">
              Import Guests
            </h1>

            <p className="mt-4 text-gray-500">
              Upload a CSV file to add multiple guests at once.
            </p>
          </div>

          <Link
            href="/admin/guests"
            className="rounded-full border border-[#E7D6B8] px-6 py-3 hover:bg-white"
          >
            Back
          </Link>

        </div>

        <div className="mt-12 rounded-3xl bg-white shadow-lg p-10">

         <div className="flex items-center gap-4">

  <button
    onClick={downloadTemplate}
    className="rounded-full border border-[#C9A96A] px-6 py-3 hover:bg-[#FAF8F2]"
  >
    📄 Download Template
  </button>

  <input
    type="file"
    accept=".csv"
    onChange={(e) => {
      if (e.target.files?.length) {
        handleFile(e.target.files[0]);
      }
    }}
  />

</div>

          {rows.length > 0 && (

            <>
              <h2 className="mt-10 mb-6 text-2xl font-light">
                Preview ({rows.length} Guests)
              </h2>

              <div className="overflow-auto rounded-xl border">

                <table className="w-full">

                  <thead className="bg-gray-100">

                    <tr>

                      <th className="p-4 text-left">Name</th>

                      <th className="p-4 text-left">Email</th>

                      <th className="p-4 text-left">Phone</th>

                      <th className="p-4 text-left">Seats</th>

                    </tr>

                  </thead>

                  <tbody>

                    {rows.map((row, index) => (

                      <tr key={index} className="border-t">

                        <td className="p-4">{row["Full Name"]}</td>

                        <td className="p-4">{row["Email"]}</td>

                        <td className="p-4">{row["Phone"]}</td>

                        <td className="p-4">{row["Seats"]}</td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

              <button
                onClick={importGuests}
                disabled={loading}
                className="mt-8 rounded-full bg-[#C9A96A] px-8 py-4 text-white hover:opacity-90"
              >
                {loading ? "Importing..." : "Import Guests"}
              </button>

            </>

          )}

        </div>

      </div>

    </main>
  );
}