"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { AtSymbolIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { SocialIcon } from "react-social-icons";
import { ToastContainer, toast, Flip } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Email: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        cellphone: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send(
            'service_hph3s5a', // replace with your service ID
            'template_78g0q7a', // replace with your template ID
            formData,
            'eUiT93aOz2Lh4PMXQ' // replace with your Public Key
        ).then((result) => {
            toast.success(`Message Sent, I will get back to you shortly: ${result.text}`);
        }, (error) => {
            toast.error(`An error occurred, Please try again: ${error.text}`);
        });
    };

    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 gap-8 py-12 relative items-center "
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10 space-y-6">
                <h5 className="text-xl font-bold text-white">Let&apos;s Connect</h5>
                <p className="text-[#ADB7BE] max-w-md">
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className="socials flex flex-row gap-2">
                    <SocialIcon
                        url="https://www.linkedin.com/in/itumeleng-seema-7b1b3b1b1/"
                        bgColor="transparent"
                        fgColor="#ADB7BE"
                        style={{ height: 50, width: 50 }}
                    />
                    <SocialIcon
                        url="https://github.com/itumelengseema"
                        bgColor="transparent"
                        fgColor="#ADB7BE"
                        style={{ height: 50, width: 50 }}
                    />
                </div>
                <div className="text-[#ADB7BE] flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <AtSymbolIcon className="w-7" />
                        <p>contact@itumelengseema.me</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <PhoneIcon className="w-7" />
                        <p>+27 68 405 2394</p>
                    </div>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Your Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            id="name"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Your Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="jacob@google.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Just saying hi"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="cellphone"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Cellphone Number
                        </label>
                        <input
                            name="cellphone"
                            type="text"
                            id="cellphone"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="123-456-7890"
                            value={formData.cellphone}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-br from-[#F1563c] via-purple-500 to-[#00b3c1] hover:bg-slate-200 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Flip}
            />
        </section>
    );
};

export default Email;
