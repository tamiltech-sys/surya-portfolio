import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-16 px-6 md:px-20">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-400 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Contact Info */}
        <motion.div
          className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Get in Touch</h3>
          <p className="text-gray-300 mb-4">Feel free to reach out for collaborations or job opportunities.</p>

          <div className="space-y-3">
            <p className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-blue-400" /> suriyanarayanan1331@gmail.com
            </p>
            <p className="flex items-center gap-3 text-gray-300">
              <FaPhone className="text-blue-400" /> +91 6374286960
            </p>
            <p className="flex items-center gap-3 text-gray-300">
              <FaMapMarkerAlt className="text-blue-400" /> Madurai, Tamil Nadu
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Send a Message</h3>

          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Your Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Message</label>
            <textarea
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full px-4 py-2 bg-black text-white border  rounded-md hover:transition duration-300 shadow-md"
            whileHover={{ scale: 1.1 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
