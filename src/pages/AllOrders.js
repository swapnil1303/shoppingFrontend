import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import moment from "moment";

const AllOrders = () => {
  const [allOrder, setAllOrders] = useState([]);

  const fetchAllOrders = async () => {
    const fetchData = await fetch(SummaryApi.allOrders.url, {
      method: SummaryApi.allOrders.method,
      credentials: "include",
    });

    const dataResponse = await fetchData.json();

    if (dataResponse.success) {
      setAllOrders(dataResponse.data);
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="bg-white pb-4">
      <table className="w-full userTable">
        <thead>
          <tr className="bg-black text-white">
            <th>Sr.</th>
            <th>Order Id</th>
            <th>Order Date</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody className="">
          {allOrder.map((el, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{el?._id}</td>
                <td>{moment(el?.orderDate).format("LL")}</td>
                <td>{el?.orderState}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrders;
