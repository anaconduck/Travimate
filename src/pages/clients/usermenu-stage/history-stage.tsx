import React from "react";
import { HistoryIllustration } from "../../../assets/ilustrations";
import EmptyState from "../../../components/layout-clients/empty-state/empty-state";
import { GoArrowSwitch } from "react-icons/go";
import HistoryCardBlue from "../../../components/layout-clients/part/history-card-blue";
import HistoryCardOrange from "../../../components/layout-clients/part/history-card-orange";
import InformasiPenumpang from "../../../components/layout-clients/part/informasi-penumpang";

interface IHistoryStage {
  setRiwayat: (state: string) => void;
  riwayat: string;
}

const HistoryStage = ({ setRiwayat, riwayat }: IHistoryStage) => {
  const renderDetails = (
    <>
      <div className="bg-white w-full rounded-[27.51px] relative">
        <div className="bg-[#3E7BFA] w-full rounded-t-[27.51px] pb-8">
          <div className="flex p-8 gap-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M31.41 33.18L22.25 24L31.41 14.82L28.59 12L16.59 24L28.59 36L31.41 33.18Z"
                  fill="white"
                />
              </svg>
            </span>
            <div className="flight text-white font-sans">
              <h2 className="text-3xl font-bold leading-10">
                Jakarta (CGK) - Bali (DPS)
              </h2>
              <h3 className="text-2xl font-semibold leading-10">Order ID: 1</h3>
            </div>
          </div>
        </div>

        {/* Circle */}
        <div className="w-[116px] h-[116px] bg-[#3E7BFA] rounded-full absolute top-20 left-80 z-10"></div>

        {/* Booking */}
        <div className="bg-white w-full rounded-[27.51px] py-10 mt-[-30px]">
          <div className="w-full p-8 font-sans text-[#757575]">
            <p className="text-2xl font-bold leading-10">Kode booking</p>
            <div className="flex gap-2 items-center">
              <h1 className="text-[32px] font-bold leading-10 text-[#3E7BFA]">
                JB8TN4
              </h1>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M21.9999 1.33398H5.99992C4.53325 1.33398 3.33325 2.53398 3.33325 4.00065V22.6673H5.99992V4.00065H21.9999V1.33398ZM25.9999 6.66732H11.3333C9.86658 6.66732 8.66658 7.86732 8.66658 9.33398V28.0006C8.66658 29.4673 9.86658 30.6673 11.3333 30.6673H25.9999C27.4666 30.6673 28.6666 29.4673 28.6666 28.0006V9.33398C28.6666 7.86732 27.4666 6.66732 25.9999 6.66732ZM25.9999 28.0006H11.3333V9.33398H25.9999V28.0006Z"
                    fill="#3E7BFA"
                  />
                </svg>
              </span>
            </div>
            <h2 className="text-2xl font-bold leading-10">PNR: JB8TN4</h2>
          </div>
          {/* Line */}
          <span className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="690"
              height="4"
              viewBox="0 0 795 4"
              fill="none"
            >
              <path
                d="M2 2L793 2.00007"
                stroke="#EDEDED"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <HistoryCardBlue />

          {/* Line */}
          <span className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="690"
              height="4"
              viewBox="0 0 795 4"
              fill="none"
            >
              <path
                d="M2 2L793 2.00007"
                stroke="#EDEDED"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <HistoryCardOrange />

          {/* Line */}
          <span className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="690"
              height="4"
              viewBox="0 0 795 4"
              fill="none"
            >
              <path
                d="M2 2L793 2.00007"
                stroke="#EDEDED"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <div className="p-8">
            <h1 className="text-[#505050] text-[32px] font-bold leading-10 mb-8">
              Informasi Penumpang
            </h1>
            <InformasiPenumpang />
          </div>
        </div>
      </div>
    </>
  );

  if (true) {
    return <>{renderDetails}</>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white p-8 w-full rounded-[27.51px]">
        <h2 className="font-bold text-lg text-gray-600">Riwayat Pembayaran</h2>
        <div className="flex flex-row gap-3 mt-4 text-blue-800">
          <button onClick={() => setRiwayat("pending")}>
            <div
              className={`px-12 py-4 rounded-full ${
                riwayat === "pending"
                  ? "bg-blue-400 bg-opacity-20 font-semibold "
                  : "ring-1 ring-blue-700"
              }`}
            >
              Menunggu Pembayaran
            </div>
          </button>
          <button onClick={() => setRiwayat("etiket")}>
            <div
              className={`px-12 py-4 rounded-full ${
                riwayat === "etiket"
                  ? "bg-blue-400 bg-opacity-20 font-semibold "
                  : "ring-1 ring-blue-700"
              }`}
            >
              E-Tiket aktif
            </div>
          </button>
        </div>
      </div>

      <div className="bg-white p-8 w-full rounded-[27.51px]">
        {riwayat === "pending" && (
          <div>
            <div className="flex flex-col gap-2 mb-2">
              <p className="text-xl font-semibold">Order ID : 1</p>
              <div className="flex flex-row gap-2 w-full items-center font-semibold text-xl">
                <p>Jakarta (CGK) </p>
                <GoArrowSwitch className="w-6 h-6" />
                <p>Bali (DPS)</p>
              </div>
              <p className="font-semibold text-xl">Rp1.368.000 </p>
            </div>
            <button className="w-full">
              <div className="rounded-full px-12 py-4 bg-amber-500 font-bold text-lg text-white">
                Pembayaran berakhir 00:59:59
              </div>
            </button>
          </div>
        )}
        {riwayat === "pending" && (
          <div className="mt-4">
            <EmptyState
              ilustration={<HistoryIllustration />}
              title="Tidak ada order aktif, nih"
              description="Yuk, pesan tiket dulu, dan rencanakan perjalananmu! "
            />
          </div>
        )}

        {riwayat === "etiket" && (
          <div>
            <div className="flex flex-col mb-2 gap-2">
              <div className="flex flex-row gap-2 w-full items-center font-semibold text-xl">
                <p>Jakarta (CGK) </p>
                <GoArrowSwitch className="w-6 h-6" />
                <p>Bali (DPS)</p>
              </div>
              <p className="text-xl font-normal">
                Senin, 7 Juli 2024 * 07.00-08.35
              </p>
              <p className="font-normal text-xl">
                Lion Air * Bandara Internasional Soekarno-Hatta, Terminal,
                Terminal 2E{" "}
              </p>
            </div>
            <button className="w-1/3">
              <div className="rounded-full px-12 py-4 bg-green-600 font-bold text-lg text-white">
                E-ticket diterbitkan
              </div>
            </button>
          </div>
        )}
        {riwayat === "etiket" && (
          <div className="mt-4">
            <EmptyState
              ilustration={<HistoryIllustration />}
              title="Kamu belum memiliki e-ticket"
              description="Yuk, pesan tiket dulu, dan rencanakan perjalananmu! "
            />
          </div>
        )}
      </div>

      {/* Empty State */}
    </div>
  );
};

export default HistoryStage;
