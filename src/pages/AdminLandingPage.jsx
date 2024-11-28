import React, { useState } from "react";
import {
  Card,
  Text,
  Metric,
  Flex,
  ProgressBar,
  BarChart,
  DonutChart,
  Title,
  LineChart,
} from "@tremor/react";
import { SearchIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";

const salesData = [
  {
    name: "Jan",
    Sales: 2890,
    Profit: 2400,
  },
  {
    name: "Feb",
    Sales: 1890,
    Profit: 1398,
  },
  {
    name: "Mar",
    Sales: 3890,
    Profit: 2980,
  },
  {
    name: "Apr",
    Sales: 2890,
    Profit: 2300,
  },
  {
    name: "May",
    Sales: 3890,
    Profit: 2980,
  },
  {
    name: "Jun",
    Sales: 3490,
    Profit: 2780,
  },
];

const recentOrders = [
  {
    id: "#3210",
    status: "Shipped",
    customer: "Olivia Martin",
    products: 2,
    total: "$42.25",
  },
  {
    id: "#3209",
    status: "Processing",
    customer: "Ava Johnson",
    products: 1,
    total: "$74.99",
  },
  {
    id: "#3208",
    status: "Shipped",
    customer: "Michael Johnson",
    products: 3,
    total: "$64.75",
  },
  {
    id: "#3207",
    status: "Pending",
    customer: "Sarah Lee",
    products: 2,
    total: "$54.50",
  },
  {
    id: "#3206",
    status: "Shipped",
    customer: "Emily Chen",
    products: 1,
    total: "$29.99",
  },
];

const cities = [
  { name: "New York", sales: 9800 },
  { name: "London", sales: 4567 },
  { name: "Hong Kong", sales: 3908 },
  { name: "San Francisco", sales: 2400 },
  { name: "Singapore", sales: 1908 },
];

const valueFormatter = (number) =>
  `Kes. ${Intl.NumberFormat("ke").format(number).toString()}`;

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-600">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } lg:block lg:w-64 bg-white`}
      >
        <div className="flex items-center justify-center h-16 border-b">
          <span className="text-2xl font-semibold">Renty Ke</span>
        </div>
        <nav className="mt-6">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 bg-gray-100"
          >
            <span className="mx-4">Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-100"
          >
            <span className="mx-4">Orders</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-100"
          >
            <span className="mx-4">Products</span>
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-100"
          >
            <span className="mx-4">Customers</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-500 focus:outline-none lg:hidden"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
            <div className="relative mx-4 lg:mx-0">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <SearchIcon className="h-5 w-5 text-gray-500" />
              </span>
              <input
                className="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex items-center">
            <UserCircleIcon className="h-8 w-8 text-gray-500" />
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>

            <div className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card decoration="top" decorationColor="indigo">
                  <Text>Sales</Text>
                  <Metric>Kes. 34,743</Metric>
                  <Flex className="mt-4">
                    <Text>32% of annual target</Text>
                    <Text>Kes. 225,000</Text>
                  </Flex>
                  <ProgressBar percentageValue={32} className="mt-2" />
                </Card>
                <Card decoration="top" decorationColor="fuchsia">
                  <Text>Profit</Text>
                  <Metric>Kes. 45,699</Metric>
                  <Flex className="mt-4">
                    <Text>12% increase from last month</Text>
                  </Flex>
                </Card>
                <Card decoration="top" decorationColor="emerald">
                  <Text>Customers</Text>
                  <Metric>1,072</Metric>
                  <Flex className="mt-4">
                    <Text>New customers</Text>
                    <Text>145</Text>
                  </Flex>
                </Card>
                <Card decoration="top" decorationColor="orange">
                  <Text>Active Now</Text>
                  <Metric>573</Metric>
                  <Flex className="mt-4">
                    <Text>+201 since last hour</Text>
                  </Flex>
                </Card>
              </div>
            </div>

            <div className="mt-8">
              <Card>
                <Title>Overview</Title>
                <BarChart
                  className="mt-6"
                  data={salesData}
                  index="name"
                  categories={["Sales", "Profit"]}
                  colors={["blue", "fuchsia"]}
                  valueFormatter={valueFormatter}
                  yAxisWidth={48}
                />
              </Card>
            </div>

            <div className="mt-8">
              <Card>
                <Title>Sales Trend</Title>
                <LineChart
                  className="mt-6"
                  data={salesData}
                  index="name"
                  categories={["Sales"]}
                  colors={["blue"]}
                  valueFormatter={valueFormatter}
                  yAxisWidth={48}
                />
              </Card>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <Title>Recent Orders</Title>
                <div className="overflow-x-scroll">
                  <table className="min-w-full divide-y divide-gray-200 mt-4">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Order
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Customer
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Products
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentOrders.map((order) => (
                        <tr key={order.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {order.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {order.status}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {order.customer}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {order.products}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {order.total}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              <Card>
                <Title>Sales by City</Title>
                <DonutChart
                  className="mt-6"
                  data={cities}
                  category="sales"
                  index="name"
                  valueFormatter={valueFormatter}
                  colors={["emerald", "violet", "lime", "rose", "cyan"]}
                />
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
