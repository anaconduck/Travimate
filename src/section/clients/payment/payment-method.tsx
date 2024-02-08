import { Fragment } from "react";
import { TbCheck, TbCreditCard, TbShoppingCart } from "react-icons/tb";

interface IPilihMetode {
    step: number;
    changeStep: (e: number) => void;
}

const PilihMetode = ({step, changeStep}:IPilihMetode) => {
    const active = `bg-blue-500 p-2 rounded-full text-white`;
    const inactive = `p-2 rounded-full`;
    return (
      <Fragment>
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
      </Fragment>
    );
};

export default PilihMetode