import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="p-12 bg-gray-50 dark:bg-gray-900">
      <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Contact
      </h3>
      <form className="max-w-2xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Nom"
          className="w-full p-3 border rounded dark:bg-gray-700 dark:text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded dark:bg-gray-700 dark:text-white"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 border rounded dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
