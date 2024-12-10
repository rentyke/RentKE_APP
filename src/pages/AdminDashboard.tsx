import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Menu,
  UserCircle,
  Home,
  ShoppingCart,
  Package,
  Plus,
  Building2,
  Users,
  Banknote,
  Calendar,
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

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
    status: "Paid",
    customer: "Olivia Martin",
    products: 2,
    total: "Kes. 4,225",
  },
  {
    id: "#3209",
    status: "Processing",
    customer: "Ava Johnson",
    products: 1,
    total: "Kes. 7,499",
  },
  {
    id: "#3208",
    status: "Paid",
    customer: "Michael Johnson",
    products: 3,
    total: "Kes. 6,475",
  },
  {
    id: "#3207",
    status: "Pending",
    customer: "Sarah Lee",
    products: 2,
    total: "Kes. 5,450",
  },
  {
    id: "#3206",
    status: "Paid",
    customer: "Emily Chen",
    products: 1,
    total: "Kes. 2,999",
  },
];

const cities = [
  { name: "Apartment Units", sales: 9800 },
  { name: "Houses", sales: 4567 },
  { name: "Commsercial", sales: 3908 },
];

const properties = [
  {
    id: 1,
    name: "Sunset Apartments",
    type: "Apartment Complex",
    address: "123 Sunset Blvd",
    units: 24,
    occupied: 20,
    vacant: 4,
    monthlyRevenue: 480000,
    status: "Operational",
  },
  {
    id: 2,
    name: "Green Valley Houses",
    type: "Single Family Homes",
    address: "456 Valley Road",
    units: 12,
    occupied: 10,
    vacant: 2,
    monthlyRevenue: 360000,
    status: "Operational",
  },
  {
    id: 3,
    name: "Downtown Commercial Center",
    type: "Commercial",
    address: "789 Business Ave",
    units: 8,
    occupied: 6,
    vacant: 2,
    monthlyRevenue: 800000,
    status: "Under Maintenance",
  },
];

const tenants = [
  {
    id: 1,
    name: "John Smith",
    unit: "A101",
    property: "Sunset Apartments",
    leaseStart: "2024-01-01",
    leaseEnd: "2024-12-31",
    rentAmount: 25000,
    paymentStatus: "Paid",
    phone: "+254 712 345 678",
    email: "john.smith@email.com",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    unit: "B205",
    property: "Green Valley Houses",
    leaseStart: "2023-08-01",
    leaseEnd: "2024-07-31",
    rentAmount: 30000,
    paymentStatus: "Late",
    phone: "+254 723 456 789",
    email: "sarah.j@email.com",
  },
  {
    id: 3,
    name: "Michael Chen",
    unit: "C103",
    property: "Downtown Commercial",
    leaseStart: "2024-03-01",
    leaseEnd: "2025-02-28",
    rentAmount: 45000,
    paymentStatus: "Pending",
    phone: "+254 734 567 890",
    email: "m.chen@email.com",
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
      case "Properties":
        return <PropertiesContent />;
      case "Tenants":
        return <TenantsContent />;
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
              <Link to="/">
                <span className="text-2xl font-garet font-bold">Renty.ke</span>
              </Link>
            </div>
            <nav className="mt-6">
              {[
                { name: "Dashboard", icon: Home },
                { name: "Finances", icon: ShoppingCart },
                { name: "Tenants", icon: Users },
                { name: "Properties", icon: Building2 },
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
          <div className="flex items-center space-x-2">
            <p>Hi, Admin</p>
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
          </div>
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
          { title: "Rent Collected", value: "Kes. 34,743", color: "#3B82F6" },
          { title: "Profit", value: "Kes. 45,699", color: "#8B5CF6" },
          { title: "Tenants", value: "1,072", color: "#10B981" },
          { title: "Occupied", value: "573", color: "#F59E0B" },
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
            {item.title === "Rent Collected" && (
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
            Rent Collection Overview
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
            Collection Trend
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
            Recent Payments
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pymt ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tenant</TableHead>
                <TableHead>Item</TableHead>
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
            Property Distribution
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

function PropertiesContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      filterType === "all" ||
      property.type.toLowerCase().includes(filterType.toLowerCase());
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#204647]">Properties</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#204647] hover:bg-[#204647]/90">
              <Plus className="mr-2 h-4 w-4" />
              Add Property
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Property</DialogTitle>
              <DialogDescription>
                Enter the details of the new property
              </DialogDescription>
            </DialogHeader>
            {/* Add Property Form would go here */}
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Properties
            </CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{properties.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Units</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {properties.reduce((acc, prop) => acc + prop.units, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vacancy Rate</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(
                (properties.reduce((acc, prop) => acc + prop.vacant, 0) /
                  properties.reduce((acc, prop) => acc + prop.units, 0)) *
                100
              ).toFixed(1)}
              %
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b border-gray-200 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
              <Input
                type="search"
                placeholder="Search properties..."
                className="pl-8 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Units</TableHead>
              <TableHead>Occupied</TableHead>
              <TableHead>Vacant</TableHead>
              <TableHead>Monthly Revenue</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProperties.map((property) => (
              <TableRow
                key={property.id}
                className="cursor-pointer hover:bg-gray-50"
              >
                <TableCell className="font-medium">{property.name}</TableCell>
                <TableCell>{property.type}</TableCell>
                <TableCell>{property.address}</TableCell>
                <TableCell>{property.units}</TableCell>
                <TableCell>{property.occupied}</TableCell>
                <TableCell>{property.vacant}</TableCell>
                <TableCell>
                  Kes. {property.monthlyRevenue.toLocaleString()}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="default"
                    className={
                      property.status === "Operational"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }
                  >
                    {property.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function TenantsContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredTenants = tenants.filter((tenant) => {
    const matchesSearch =
      tenant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.unit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      filterStatus === "all" ||
      tenant.paymentStatus.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#204647]">Tenants</h1>
        <Button className="bg-[#204647] hover:bg-[#204647]/90">
          <Plus className="mr-2 h-4 w-4" />
          Add Tenant
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tenants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tenants.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Occupied Units
            </CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tenants.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Rent Collection
            </CardTitle>
            <Banknote className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(
                (tenants.filter((t) => t.paymentStatus === "Paid").length /
                  tenants.length) *
                100
              ).toFixed(1)}
              %
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Expiring Leases
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {
                tenants.filter((t) => {
                  const monthsToExpiry = Math.floor(
                    (new Date(t.leaseEnd).getTime() - new Date().getTime()) /
                      (1000 * 60 * 60 * 24 * 30)
                  );
                  return monthsToExpiry <= 2;
                }).length
              }
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b border-gray-200 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
              <Input
                type="search"
                placeholder="Search tenants..."
                className="pl-8 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Payment Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="late">Late</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Lease Period</TableHead>
              <TableHead>Rent Amount</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Contact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTenants.map((tenant) => (
              <TableRow
                key={tenant.id}
                className="cursor-pointer hover:bg-gray-50"
              >
                <TableCell className="font-medium">{tenant.name}</TableCell>
                <TableCell>{tenant.unit}</TableCell>
                <TableCell>{tenant.property}</TableCell>
                <TableCell>
                  {new Date(tenant.leaseStart).toLocaleDateString()} -
                  {new Date(tenant.leaseEnd).toLocaleDateString()}
                </TableCell>
                <TableCell>Kes. {tenant.rentAmount.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge
                    variant="default"
                    className={
                      tenant.paymentStatus === "Paid"
                        ? "bg-green-100 text-green-800"
                        : tenant.paymentStatus === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }
                  >
                    {tenant.paymentStatus}
                  </Badge>
                </TableCell>
                <TableCell>
                  {tenant.phone}
                  <br />
                  {tenant.email}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
