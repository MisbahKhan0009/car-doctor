import React, { useEffect, useState } from "react";
import { MdOutlinePendingActions } from "react-icons/md";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const { _id, serviceName, message, phone, customer, price, service, status } =
    order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-semibold text-lg">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="rounded-lg w-16 h-16">
              {orderService?.img && (
                <img
                  src={orderService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>

          <div>
            <span className="text-lg">{serviceName}</span>
            <br />
            <span className="badge badge-ghost p-2 badge-md bg-red-200 ">
              ${price}
            </span>
          </div>
        </div>
      </td>
      <td>{message}</td>
      <th className="text-center">
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn btn-ghost "
        >
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default OrderRow;
