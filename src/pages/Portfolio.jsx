import { navData } from "../data/navData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


function calculateReturns(data) {
  if (data.length < 2) return null;

  const sorted = data
    .map(d => ({ ...d, dateObj: new Date(d.date) }))
    .sort((a, b) => a.dateObj - b.dateObj);

  const latest = sorted[sorted.length - 1];
  const latestNav = latest.nav;

  const getNavBefore = (days) => {
    const target = new Date(latest.dateObj);
    target.setDate(target.getDate() - days);

    let old = sorted.find((d) => d.dateObj >= target);
    return old?.nav || null;
  };

  const calc = (days) => {
    const oldNav = getNavBefore(days);
    if (!oldNav) return "-";
    return (((latestNav - oldNav) / oldNav) * 100).toFixed(2) + "%";
  };

  return {
    "1D": calc(1),
    "1W": calc(7),
    "1M": calc(30),
    "3M": calc(90),
    "6M": calc(180),
    "1Y": calc(365),
    YTD: calc(
      Math.floor(
        (latest.dateObj - new Date(latest.dateObj.getFullYear(), 0, 1)) /
          86400000
      )
    ),
    SI: calc(
      Math.floor((latest.dateObj - sorted[0].dateObj) / 86400000)
    ),
  };
}

const returns = calculateReturns(navData);


const equityCurve = navData.map((d) => {
  const base = navData[0].nav;
  return {
    date: d.date,
    value: ((d.nav / base) * 100).toFixed(2),
  };
});

export default function Portfolio() {
  return (
    <div className="px-10 py-8">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>

      
      <div className="bg-white rounded-xl shadow p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Trailing Returns</h2>

        <table className="w-full text-sm border">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="p-2 text-left">Name</th>
              {Object.keys(returns).map((key) => (
                <th key={key} className="p-2 text-left">{key}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-2 font-medium">Fund</td>
              {Object.values(returns).map((val, i) => (
                <td key={i} className="p-2">{val}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Equity Curve</h2>

        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer>
            <LineChart data={equityCurve}>
              <XAxis dataKey="date" hide />
              <YAxis />
              <Tooltip />
              <Line dataKey="value" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
