import React, { useContext, useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import Context from "../context";
import axios from "axios";

const Payment = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    cardno: "",
    expirydate: "",
    cvv: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { res } = await axios.post(
        "http://localhost:8080/api/insertOrderDetails",
        {
          data,
        }
      );
      const response = await fetch(SummaryApi.deleteAllCartProduct.url, {
        method: SummaryApi.deleteAllCartProduct.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
      });
      window.location.reload();
      toast.success("Order Placed Successfully");
    } catch (error) {
      toast.error("Some error occured.");
    }
  };

  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Card Number </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder=""
                  name="cardno"
                  value={data.cardno}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div>
              <label>Expiry Date </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type="text"
                  placeholder="MM / YY"
                  value={data.expirydate}
                  name="expirydate"
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div>
              <label>CVV </label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder=""
                  value={data.cvv}
                  name="cvv"
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[250px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Make Payment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Payment;
