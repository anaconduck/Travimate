import React, { useState } from "react";
import { TbShoppingCart } from "react-icons/tb";
import { TbBell } from "react-icons/tb";
import { TbCreditCard } from "react-icons/tb";
import { TbUserFilled } from "react-icons/tb";
import { TbCheck } from "react-icons/tb";
import { TbPhone } from "react-icons/tb";
import CardPayment from "./card-payment";
import WaitingPayment from "./waiting-payment";
import PaymentAccepted from "./payment-accepted";

const PaymentNavbar = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <div className="">
      <div className="flex justify-between mt-36 px-36 pb-4">
        <PilihMetode step={step} changeStep={(e: number) => setStep(e)} />
      </div>
      {step === 1 && <CardPayment handlePayment={(e: any) => setStep(2)} />}
      {step === 2 && <WaitingPayment />}
      {step === 3 && <PaymentAccepted />}
    </div>
  );
};

export default PaymentNavbar;

const PilihMetode = ({step, changeStep}: {step: number, changeStep: (e: number) => void}) => {
  const active = `bg-blue-500 p-2 rounded-full text-white`;
  const inactive = `p-2 rounded-full`;
  return (
    <React.Fragment>
      <div className="flex justify-between items-center">
        <button
          onClick={() => changeStep(1)}
          className="flex justify-start items-center gap-2"
        >
          <TbShoppingCart
            className={step === 1 ? active : inactive}
            size={30}
          />
          <div className="ml-1">Pilih metode</div>
        </button>
        <div className="ml-2 border-b-2 border-slate-800 w-10 h-1"></div>
        <button
          onClick={() => changeStep(2)}
          className="flex justify-start items-center gap-2 ml-2"
        >
          <TbCreditCard className={step === 2 ? active : inactive} size={30} />
          <div className="ml-1">Bayar</div>
        </button>
        <div className="ml-2 border-b-2 border-slate-800 w-10 h-1"></div>
        <button
          onClick={() => changeStep(3)}
          className="flex justify-start items-center gap-2 ml-2"
        >
          <TbCheck className={step === 3 ? active : inactive} size={30} />
          <div className="ml-1">Selesai</div>
        </button>
      </div>
      <div className="flex justify-between gap-2">
        <div>Lakukan pembayaran dalam</div>
        <div className="text-red-500">02:59:59</div>
      </div>
    </React.Fragment>
  );
};
