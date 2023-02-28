import Link from "next/link";
import React, { useState } from "react";
import Papa from 'papaparse'

function ImportPage() {
  const [csvFile, setCSVFile] = useState();

  return (
    <div className="p-5">
      <Link href="/">go back</Link>

      <div className="my-8 text-center flex flex-col gap-y-10 ">
        <span className="mr-5">Select File:</span>{" "}
        <input
          className="mx-auto"
          type="file"
          accept=".csv"
          onChange={(e) => {
            setCSVFile(e.target.files[0]);
          }}
        />
        {csvFile ? (
          <div>
            <button
              onClick={() => {
                if (csvFile) {
                  Papa.parse(csvFile, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                      if (typeof results.task !== undefined) {
                        localStorage.setItem(
                          "tasks",
                          JSON.stringify(results.data)
                        );
                      }
                    },
                  });
                }
              }}
              className="bg-gray-700 px-5 py-2 text-xl rounded-lg hover:bg-gray-800 hover:text-gray-400 transition"
            >
              Upload
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ImportPage;
