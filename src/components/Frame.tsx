import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, MapPin } from 'lucide-react';

const Frame = () => {
  // Data
  const barChartData = [
    { month: 'Jan', value: 15 },
    { month: 'Feb', value: 12 },
    { month: 'Mar', value: 20 },
    { month: 'Apr', value: 18 },
    { month: 'May', value: 25 },
    { month: 'Jun', value: 22 },
  ];

  const lineChartData = [
    { month: 'Jan', value: 10 },
    { month: 'Feb', value: 14 },
    { month: 'Mar', value: 8 },
    { month: 'Apr', value: 18 },
    { month: 'May', value: 15 },
    { month: 'Jun', value: 20 },
  ];

  const topProducts = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
    { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' },
  ];

  const locationData = [
    { city: 'New York', value: 72 },
    { city: 'San Francisco', value: 39 },
    { city: 'Sydney', value: 25 },
    { city: 'Singapore', value: 61 },
  ];

  const salesData = [
    { name: 'Direct', value: 300.56, color: '#60A5FA' },
    { name: 'Affiliate', value: 135.18, color: '#F97316' },
    { name: 'Sponsored', value: 154.02, color: '#A78BFA' },
    { name: 'Email', value: 48.96, color: '#EC4899' },
  ];

  const StatCard = ({ title, value, change, bgColor }: { title: string; value: string; change: string; bgColor: string }) => (
    <div className={`${bgColor} rounded-[16px] p-6 w-[202px] h-[112px] min-w-[200px] flex flex-col gap-2`}>
      <p className="text-gray-600 text-sm font-medium">{title}</p>
      <p className="text-gray-900 text-2xl font-bold">{value}</p>
      <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
        <TrendingUp size={16} />
        {change}
      </div>
    </div>
  );

  return (
    <div className="w-[892px] h-[970px] flex flex-col gap-7 bg-white rounded-lg">
      {/* Top Stats - Row 1 */}
      <div className="flex gap-7">
        <StatCard title="Customers" value="3,781" change="+11.01%" bgColor="bg-[#E3F5FF]" />
        <StatCard title="Orders" value="1,219" change="-0.03%" bgColor="bg-[#E3F5FF]" />
        <StatCard title="Revenue" value="$695" change="+15.03%" bgColor="bg-[#E5ECF6]" />
        <StatCard title="Growth" value="30.1%" change="+6.08%" bgColor="bg-[#E5ECF6]" />
      </div>

      {/* Charts Row - Projections and Revenue by Location */}
      <div className="flex gap-7">
        {/* Projections vs Actuals Card */}
        <div className="bg-white border border-gray-200 rounded-[16px] p-6 w-[432px] h-[252px] flex flex-col gap-4">
          <h3 className="text-gray-900 font-semibold text-lg">Projections vs Actuals</h3>
          <ResponsiveContainer width="100%" height={168}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue by Location Card */}
        <div className="bg-white border border-gray-200 rounded-[16px] p-6 w-[202px] h-[252px] flex flex-col gap-4">
          <h3 className="text-gray-900 font-semibold text-lg">Revenue by Location</h3>
          <div className="space-y-3 flex-1">
            {locationData.map((loc, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-700">{loc.city}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{loc.value}K</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue Chart Row */}
      <div className="flex gap-7">
        {/* Revenue Line Chart */}
        <div className="bg-[#F7F9FB] border-[3px] border-[#A8C5DA] rounded-[16px] p-6 w-[662px] h-[318px] flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-gray-900 font-semibold text-lg">Revenue</h3>
            <div className="flex gap-6 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Current Week $58,211
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                Previous Week $68,768
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Total Sales Pie Chart */}
        <div className="bg-white border border-gray-200 rounded-[16px] p-6 w-[202px] h-[318px] flex flex-col gap-4">
          <h3 className="text-gray-900 font-semibold text-lg">Total Sales</h3>
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie
                data={salesData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={65}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {salesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 text-xs">
            {salesData.map((item, idx) => (
              <div key={idx} className="flex justify-between">
                <span className="text-gray-600">
                  <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                  {item.name}
                </span>
                <span className="text-gray-900 font-semibold">${item.value.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Selling Products Table */}
      <div className="bg-white border border-gray-200 rounded-[16px] p-6 w-[662px] h-[336px] flex flex-col gap-4">
        <h3 className="text-gray-900 font-semibold text-lg">Top Selling Products</h3>
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-2 text-gray-600 font-medium">Name</th>
                <th className="text-left py-3 px-2 text-gray-600 font-medium">Price</th>
                <th className="text-left py-3 px-2 text-gray-600 font-medium">Quantity</th>
                <th className="text-left py-3 px-2 text-gray-600 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-2 text-gray-900">{product.name}</td>
                  <td className="py-3 px-2 text-gray-600">{product.price}</td>
                  <td className="py-3 px-2 text-gray-600">{product.quantity}</td>
                  <td className="py-3 px-2 text-gray-900 font-semibold">{product.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Frame;