import { motion } from "framer-motion";
import { useState, FormEvent, ChangeEvent } from "react";
import {
  ChevronRight,
  Send,
  Building,
  Users,
  PenToolIcon as Tools,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage(): JSX.Element {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted with email:", email);
  };

  return (
    <div className="bg-white text-gray-800 font-montserrat">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 bg-gradient-to-br from-[#204647]/10 to-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-garet font-bold mb-4 text-[#204647]">
            Welcome to Renty
          </h1>
          <p className="text-xl text-gray-600">
            Simplifying property management for you.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className="w-full p-2 mb-4 border-b-2 border-[#204647] text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#E1C38E]"
            />
            <button
              type="submit"
              className="w-full bg-[#E1C38E] text-[#204647] py-2 mb-2 rounded hover:bg-[#E1C38E]/80 transition duration-300"
            >
              Register Now
            </button>
            <div className="flex text-sm space-x-1">
              <p className="">Already Registered?</p>
              <Link to="/admin">
                <p className="hover:underline">Login</p>
              </Link>
            </div>
          </form>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-8"
      >
        <h2 className="text-3xl md:text-5xl font-garet font-bold mb-8 text-center text-[#204647]">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#204647]/10 hover:shadow-lg transition duration-300">
            <Building className="w-12 h-12 text-[#204647] mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[#204647]">
              Property Management
            </h3>
            <p className="text-gray-600">
              Efficient solutions for managing your properties.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#204647]/10 hover:shadow-lg transition duration-300">
            <Users className="w-12 h-12 text-[#204647] mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[#204647]">
              Tenant Screening
            </h3>
            <p className="text-gray-600">
              Find the right tenants for your properties.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#204647]/10 hover:shadow-lg transition duration-300">
            <Tools className="w-12 h-12 text-[#204647] mb-4" />
            <h3 className="text-xl font-bold mb-2 text-[#204647]">
              Maintenance Coordination
            </h3>
            <p className="text-gray-600">
              Keep your properties in top condition.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Community Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-8 bg-[#204647]/10"
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=500&auto=format&fit=crop&q=60&height=400&width=400"
              alt="Community"
              width={400}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl md:text-5xl font-garet font-bold mb-4 text-[#204647]">
              Join Our Community
            </h2>
            <p className="text-gray-600 mb-8">
              Connect with other property managers and stay updated on the
              latest trends.
            </p>
            <a
              href="https://t.me/rentcommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E1C38E] text-[#204647] py-2 px-6 rounded flex items-center hover:bg-[#E1C38E]/80 transition duration-300"
            >
              Join our Telegram Group <Send className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </motion.section>

      {/* News Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl md:text-5xl font-garet font-bold mb-8 text-center text-[#204647]">
          Latest News
        </h2>
        <div className="overflow-x-auto whitespace-nowrap pb-8">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="inline-flex gap-8"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md border border-[#204647]/10 w-80 inline-block"
              >
                <img
                  src={`https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&h=1400&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&text=News+${i}`}
                  alt={`News ${i}`}
                  width={280}
                  height={150}
                  className="rounded mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-[#204647]">
                  News Title {i}
                </h3>
                <p className="mb-4 text-gray-600">
                  Short description of the news item goes here...
                </p>
                <a
                  href="#"
                  className="text-[#204647] hover:text-[#E1C38E] transition duration-300 flex items-center"
                >
                  Read more <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="bg-[#E1C38E] text-[#204647] py-2 px-6 rounded inline-flex items-center hover:bg-[#E1C38E]/80 transition duration-300"
          >
            Subscribe to Our Newsletter <Send className="ml-2" size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
