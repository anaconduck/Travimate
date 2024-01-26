import React from "react";

const CardPayment = () => {
  return (
    <div className="bg-blue-100 min-h-screen w-full font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-8">
          <div className="w-full bg-white col-span-2 p-8 rounded-xl max-h-screen">
            <CardLeft />
          </div>
          <div>
            <div className="w-full bg-white rounded-xl p-8 max-h-screen">
              <CardRight />
            </div>
            <div className="mt-8">
              <button className="p-2 bg-amber-500 text-white text-lg font-bold rounded-3xl w-full">Bayar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;

const CardLeft = () => {
  const [checked, setChecked] = React.useState<"bca" | "credit">("bca");
  return (
    <React.Fragment>
      <div className="font-bold text-xl text-slate-700">
        Pilih Metode Pembayaran
      </div>
      <div className="mt-4 text-lg text-slate-600">
        <form>
          <div className="flex justify-start items-center gap-2">
            <input
              id="va"
              className="p-2"
              type="radio"
              name="status"
              checked={checked === "bca"}
              onChange={() => setChecked("bca")}
            />
            <label htmlFor="va">
              BCA Virtual Account
            </label>
          </div>
          <div className="flex justify-start items-center gap-2">
            <input
              id="card-payment"
              className="peer/card-payment"
              type="radio"
              name="status"
              checked={checked === "credit"}
              onChange={() => setChecked("credit")}
            />
            <label
              htmlFor="card-payment"
            >
              Kartu kredit/debit
            </label>
          </div>
        </form>
      </div>
      <div className="mt-4 text-lg text-slate-600">
        <form action="" method="POST">
          <div className="mb-4">
            <label
              htmlFor="card-number"
              className="block text-gray-600 font-medium"
            >
              Nomor Kartu
            </label>
            <input
              type="text"
              id="card-number"
              name="card-number"
              className="mt-1 p-2 w-full border rounded-3xl bg-gray-200"
            />
          </div>

          <div className="mb-4 flex justify-between gap-6">
            <div className="w-full">
              <label
                htmlFor="val-period"
                className="block text-gray-600 font-medium"
              >
                Masa berlaku
              </label>
              <input
                type="text"
                id="val-period"
                name="val-period"
                className="mt-1 p-2 border w-full rounded-3xl bg-gray-200"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="val-period"
                className="block text-gray-600 font-medium"
              >
                CVC / CVV
              </label>
              <input
                type="text"
                id="val-period"
                name="val-period"
                className="mt-1 p-2 border w-full rounded-3xl bg-gray-200"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="card-owner-name"
              className="block text-gray-600 font-medium"
            >
              Nama pemilik kartu
            </label>
            <input
              type="text"
              id="card-owner-name"
              name="card-owner-name"
              className="mt-1 p-2 w-full border rounded-3xl bg-gray-200"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="payment-option"
              className="block text-gray-600 font-medium"
            >
              Pilih pembayaran
            </label>
            <input
              type="text"
              id="payment-option"
              name="payment-option"
              className="mt-1 p-2 w-full border rounded-3xl bg-gray-200"
            />
          </div>

          <div className="mb-6"></div>
        </form>
      </div>
    </React.Fragment>
  );
};

const CardRight = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="">
        <div className="text-lg text-slate-600">Order ID : 1</div>
        <div className="font-bold text-xl text-slate-700 capitalize mt-2">
          Ringkasan Pesanan
        </div>
        <div className="mt-2 text-lg text-slate-600">
          Jul 7, 2024 - Jul 11, 2024
        </div>
        <div className="flex justify-start items-center gap-2 mt-2 text-lg text-slate-600">
          <div>CGK</div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.875 9.28125C20.0312 9.125 20.0312 8.90625 19.875 8.75L16.875 5.75C16.625 5.5 16.2188 5.6875 16.2188 6V8.25H4.375C4.15625 8.25 4 8.4375 4 8.625V9.375C4 9.59375 4.15625 9.75 4.375 9.75H16.2188V12.0312C16.2188 12.3438 16.625 12.5312 16.875 12.2812L19.875 9.28125ZM4.09375 15.2812L7.09375 18.2812C7.34375 18.5312 7.75 18.3438 7.75 18.0312V15.75H19.625C19.8125 15.75 20 15.5938 20 15.375V14.625C20 14.4375 19.8125 14.25 19.625 14.25H7.75V12C7.75 11.6875 7.34375 11.5 7.09375 11.75L4.09375 14.75C3.9375 14.9062 3.9375 15.125 4.09375 15.2812Z"
                fill="#333333"
              />
            </svg>
          </div>
          <div>Bali (DPS)</div>
        </div>
        <div className="flex justify-center items-center text-blue-600 font-bold my-5 text-lg">
          <button>Detail</button>
        </div>
      </div>
      <div className="border-t-2 border-slate-200 pt-4">
        <div>
          <form action="">
            <label
              htmlFor="promo-code"
              className="block text-gray-600 font-medium"
            >
              Masukkan kode promo
            </label>
            <input
              type="text"
              id="promo-code"
              name="promo-code"
              className="mt-1 p-2 w-full border rounded-3xl bg-gray-200"
            />
          </form>
        </div>
        <div>
          <button
            type="submit"
            className="w-full mt-4 font-bold bg-blue-500 text-white p-2 rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Terapkan
          </button>
        </div>
      </div>
      <div className="border-t-2 border-slate-200 pt-4">
        <div className="flex justify-between items-center">
          <div className="text-sm">Total Pembayaran</div>
          <div className="flex justify-end items-center">
            <div className="font-bold text-2xl">Rp1.368.000</div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41 8.29492L12 12.8749L16.59 8.29492L18 9.70492L12 15.7049L6 9.70492L7.41 8.29492Z"
                  fill="#505050"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
