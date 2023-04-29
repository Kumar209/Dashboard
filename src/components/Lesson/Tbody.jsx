/* eslint-disable react/prop-types */
import React from "react";

const Tbody = ({data}) => {
  return (
    <tr className="h-[50px] text-center">
      <td className="border border-slate-300 font-semibold whitespace-nowrap">{data.Date}</td>
      <td className="border border-slate-300 font-semibold whitespace-nowrap">{data.Class}</td>
      <td className="border border-slate-300 font-semibold whitespace-nowrap">{data.Subject}</td>
      <td className="border border-slate-300 font-semibold whitespace-nowrap">{data.Unit}</td>
      <td className="border border-slate-300 font-semibold whitespace-nowrap">{data.Topic}</td>
      <td className="border border-slate-300 font-semibold whitespace-nowrap">{data.Lesson}</td>
      <td className="border border-slate-300 font-semibold whitespace-nowrap">{data.Approval}</td>
    </tr>
  );
};

export default Tbody;
