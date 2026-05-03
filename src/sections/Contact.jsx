import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const timerRef = useRef(null);
  const errorTimerRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    let newErrors = {};

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (!name) newErrors.user_name = "Name required";
    if (!email) newErrors.user_email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.user_email = "Invalid email";
    if (!message) newErrors.message = "Message required";

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      if (errorTimerRef.current) clearTimeout(errorTimerRef.current);

      errorTimerRef.current = setTimeout(() => {
        setErrors({});
      }, 5000);

      return;
    }

    emailjs
      emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
      .then(
        () => setStatus("success"),
        () => setStatus("error")
      );

    e.target.reset();

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setStatus("");
    }, 6000);
  };

  return (
    <section
      id="contact"
      className="
      py-20 px-4 md:px-16
      bg-gradient-to-b from-[#120024] via-[#1a0033] to-[#0d001a]
      relative
      "
    >

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.2),transparent_60%)]"></div>

      <div className="max-w-6xl mx-auto relative">

        {/* 🔥 FLOATING LEFT CARD */}
        <div className="
relative md:absolute md:top-16 md:left-0 md:-left-10
bg-gradient-to-br from-purple-600/90 to-purple-800/90 
backdrop-blur-lg 
text-white 
p-12 md:p-14   /* 👈 padding increase */
w-full md:w-[43%] 
min-h-[260px] md:min-h-[300px]   /* 👈 height increase */
shadow-2xl 
rounded-2xl
border border-white/10
z-10
md:-translate-y-6
">

          <h3 className="text-2xl font-semibold mb-4 leading-snug">
            Have a project in mind or just want to say hi?
          </h3>

          <p className="text-sm md:text-base leading-relaxed opacity-90">
  I’m always open to discussing new projects, creative ideas, or opportunities 
  to be part of your vision. Let’s build something amazing together.
  
  <br />

  <span className="font-bold text-black">
    tabindaghazanfar4@gmail.com
  </span>
</p>

        </div>

        {/* FORM BOX */}
        <div className="
        bg-white p-8 md:p-10 rounded-xl shadow-xl 
        w-full md:w-[65%] 
        md:ml-auto
        border border-purple-200
        relative
        mt-10 md:mt-0
        ">

          {/* POPUP */}
          {status && (
            <div className="absolute inset-0 flex items-center justify-center z-50">
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

              <div
                className={`relative px-8 py-4 rounded-lg shadow-xl font-semibold ${
                  status === "success"
                    ? "bg-purple-600 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {status === "success"
                  ? "Message sent successfully!"
                  : "Failed to send. Try again!"}
              </div>
            </div>
          )}

          {/* FORM */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">

            {/* NAME */}
            <div className="relative">
              <FaUser className="absolute top-4 left-4 text-gray-400" />
              <input
                type="text"
                name="user_name"
                placeholder="Enter Your Name"
                className={`w-full pl-12 p-4 border rounded-md outline-none 
                ${errors.user_name ? "border-red-400" : "border-gray-300"} 
                focus:border-purple-500`}
              />
              {errors.user_name && (
                <p className="text-red-500 text-sm mt-2 ml-4">
                  {errors.user_name}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div className="relative">
              <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
              <input
                type="email"
                name="user_email"
                placeholder="Enter Your E-Mail"
                className={`w-full pl-12 p-4 border rounded-md outline-none 
                ${errors.user_email ? "border-red-400" : "border-gray-300"} 
                focus:border-purple-500`}
              />
              {errors.user_email && (
                <p className="text-red-500 text-sm mt-2 ml-4">
                  {errors.user_email}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <FaCommentDots className="absolute top-4 left-4 text-gray-400" />
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                className={`w-full pl-12 p-4 border rounded-md outline-none 
                ${errors.message ? "border-red-400" : "border-gray-300"} 
                focus:border-purple-500`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-2 ml-4">
                  {errors.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
              inline-block 
              bg-purple-600 
              text-white 
              px-6 py-3 
              rounded-full 
              hover:bg-purple-700 
              hover:shadow-purple-500/40 
              transition
              "
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;