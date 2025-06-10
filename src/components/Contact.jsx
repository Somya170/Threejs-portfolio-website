import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Somya Jaiswal",
          from_email: form.email,
          to_email: "somya@example.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-purple-500 transition-all duration-300'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-purple-500 transition-all duration-300'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-purple-500 transition-all duration-300'
            />
          </label>

          <button
            type='submit'
            className='bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-8 flex gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-300"
          >
            <span className="text-white font-bold">Li</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-300"
          >
            <span className="text-white font-bold">Gh</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-300"
          >
            <span className="text-white font-bold">Tw</span>
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");