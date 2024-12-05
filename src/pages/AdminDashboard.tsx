import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Menu,
  UserCircle,
  Home,
  ShoppingCart,
  Package,
  Users,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const salesData = [
  { name: "Jan", Sales: 2890, Profit: 2400 },
  { name: "Feb", Sales: 1890, Profit: 1398 },
  { name: "Mar", Sales: 3890, Profit: 2980 },
  { name: "Apr", Sales: 2890, Profit: 2300 },
  { name: "May", Sales: 3890, Profit: 2980 },
  { name: "Jun", Sales: 3490, Profit: 2780 },
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

const products = [
  {
    id: 1,
    name: "Ergonomic Chair",
    category: "Furniture",
    price: "$299.99",
    stock: 45,
  },
  {
    id: 2,
    name: "Wireless Mouse",
    category: "Electronics",
    price: "$49.99",
    stock: 120,
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: "$129.99",
    stock: 75,
  },
  {
    id: 4,
    name: '27" 4K Monitor',
    category: "Electronics",
    price: "$399.99",
    stock: 30,
  },
  {
    id: 5,
    name: "Standing Desk",
    category: "Furniture",
    price: "$499.99",
    stock: 25,
  },
];

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    orders: 5,
    totalSpent: "$549.95",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    orders: 3,
    totalSpent: "$324.97",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    orders: 7,
    totalSpent: "$789.93",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    orders: 2,
    totalSpent: "$159.98",
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charlie@example.com",
    orders: 4,
    totalSpent: "$429.96",
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const valueFormatter = (number: number) =>
  `Kes. ${Intl.NumberFormat("ke").format(number).toString()}`;

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return <DashboardContent />;
      case "Orders":
        return <OrdersContent />;
      case "Products":
        return <ProductsContent />;
      case "Customers":
        return <CustomersContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-montserrat">
      {/* Sidebar */}
      <AnimatePresence>
        {(sidebarOpen || window.innerWidth >= 1024) && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#204647] text-white overflow-y-auto
                        ${window.innerWidth >= 1024 ? "lg:relative" : ""}`}
          >
            <div className="flex items-center justify-center h-16 border-b border-[#E1C38E]/20">
              <span className="text-2xl font-garet font-bold">Renty Ke</span>
            </div>
            <nav className="mt-6">
              {[
                { name: "Dashboard", icon: Home },
                { name: "Orders", icon: ShoppingCart },
                { name: "Products", icon: Package },
                { name: "Customers", icon: Users },
              ].map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={`w-full justify-start px-6 py-3 text-sm ${
                    activeSection === item.name
                      ? "bg-[#E1C38E] text-[#204647]"
                      : "text-gray-300 hover:bg-[#E1C38E]/10"
                  }`}
                  onClick={() => {
                    setActiveSection(item.name);
                    if (window.innerWidth < 1024) setSidebarOpen(false);
                  }}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Button>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
              aria-label="Toggle sidebar"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <div className="relative mx-4 lg:mx-0">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500 pointer-events-none" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-full md:w-[300px]"
              />
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <UserCircle className="h-6 w-6 text-[#204647]" />
                <span className="sr-only">Open user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>
    </div>
  );
}

function DashboardContent() {
  return (
    <>
      <h1 className="text-3xl font-bold text-[#204647] mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[
          { title: "Sales", value: "Kes. 34,743", color: "#3B82F6" },
          { title: "Profit", value: "Kes. 45,699", color: "#8B5CF6" },
          { title: "Customers", value: "1,072", color: "#10B981" },
          { title: "Active Now", value: "573", color: "#F59E0B" },
        ].map((item) => (
          <div key={item.title} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">
              {item.title}
            </h2>
            <p
              className="text-2xl font-bold mt-2"
              style={{ color: item.color }}
            >
              {item.value}
            </p>
            {item.title === "Sales" && (
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>32% of annual target</span>
                  <span>Kes. 225,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "32%" }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Sales & Profit Overview
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Sales" fill="#3B82F6" />
              <Bar dataKey="Profit" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Sales Trend
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Sales" stroke="#3B82F6" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Orders
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.products}</TableCell>
                  <TableCell>{order.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Sales by City
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={cities}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="sales"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {cities.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

function OrdersContent() {
  return (
    <>
      <h1 className="text-3xl font-bold text-[#204647] mb-6">Orders</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Orders
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.products}</TableCell>
                <TableCell>{order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

function ProductsContent() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#204647] mb-6">Products</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Product Inventory
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function CustomersContent() {
  return (
    <>
      <h1 className="text-3xl font-bold text-[#204647] mb-6">Customers</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Customer List
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Total Spent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.orders}</TableCell>
                <TableCell>{customer.totalSpent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
