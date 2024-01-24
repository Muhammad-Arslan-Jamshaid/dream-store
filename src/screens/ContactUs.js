import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fvrxqii",
        "template_l1xtld2",
        form.current,
        "sfYFaIQG9-BxiiBZM"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            alert(
              "Thank you for your message, you will get a response shortly"
            );
          }
          console.log(result.text);
        },
        (error) => {
          if (error) {
            alert("Cannot send email right now. Please try again later");
          }
          console.log(error.text);
        }
      );
  };

  return (
    <>
  <div className="bg-gradient-to-r from-gray-900 to-blue-950 -mt-2 pb-10">
  <div className="contactForm  mt-20 pt-10  flex h-screen items-center justify-center ">
        <div className="w-full max-w-md space-y-8">
          <div className="bg-gradient-to-l from-gray-900 to-blue-950 shadow-md rounded-lg p-5">
          
            <h2 className="my-3 pb-4 text-center text-3xl font-bold tracking-tight text-gray-100">
              Contact
            </h2>
            <form ref={form} onSubmit={sendEmail} className="max-w-sm mx-auto">
              <div className="mb-4">
              <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-100 pb-2"
                >
                  Name
                </label>
                <input
                  name="from_name"
                  type="text"
                  id="name"
                  className="bg-gradient-to-l from-gray-900 to-blue-950 border  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
              <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-100 pb-2"
                >
                  Email
                </label>
                <input
                  name="from_email"
                  type="email"
                  id="email"
                  className="bg-gradient-to-l from-gray-900 to-blue-950 border  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-100 pb-2"
                >
                  Subject
                </label>
              <div className="mb-4">
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  className="bg-gradient-to-l from-gray-900 to-blue-950 border  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-100 pb-2"
                >
                 Message
                </label>
              <div className="mb-4">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-white bg-gradient-to-l from-gray-900 to-blue-950 rounded-lg border  focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                value="Send"
                className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
              >
                Send message
              </button>
              <p className="text-center mb-2 text-sm text-gray-400 ">
                <Link
                  target="__blank"
                  to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqXPHmlHvcGSfxhSHxvNBbnCqddLXbrDZQDLNTRVKCVNKpdQrhmMGBMQzbZWRxrLJzBfdq"
                  className="hover:underline"
                >
                  Email directly at: dreamstore.org@gmail.com
                </Link>
              </p>
              <p className="text-center text-sm text-gray-400">
                <Link to="tel:+92-325-2550066" className="hover:underline">
                  Helpline: +92-325-2550066
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
  </div>  
    </>
  );
};

export default ContactUs;
