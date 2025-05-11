import React, { useState } from 'react';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Thank you for contacting JobTrack! We will get back to you soon.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="  px-2  md:px-12 lg:px-16 xl:px-24mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-600">Contact Us</h1>
        <p className="text-gray-700 mt-4 text-lg">
          We'd love to hear from you! Whether you're a job seeker, employer, or just curious about JobTrack — reach out to us anytime.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Reason for contact"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="text-sm text-gray-600 mt-6">
          <p><strong>Email:</strong> support@jobtrack.com</p>
          <p><strong>Phone:</strong> +880 1234 567890</p>
          <p><strong>Address:</strong> Level 5, Gulshan Tower, Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
