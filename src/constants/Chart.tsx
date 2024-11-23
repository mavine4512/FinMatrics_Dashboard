import React from "react";
import { LineChart, BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ChartProps {
  data: { name: string; volume: number }[];
  chartType: "line" | "bar";
  color: string;
}

const Chart: React.FC<ChartProps> = ({ data, chartType, color }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      {chartType === "line" ? (
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="volume" stroke={color} />
        </LineChart>
      ) : (
        <BarChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="volume" fill={color} />
        </BarChart>
      )}
    </ResponsiveContainer>
  );
};

export default Chart;
