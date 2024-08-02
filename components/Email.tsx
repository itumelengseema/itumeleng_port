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
            'service_hph3s5a',
            'template_78g0q7a',
            formData,
            'eUiT93aOz2Lh4PMXQ'
        ).then((result) => {
            toast.success(`Message Sent, I will get back to you shortly: ${result.text}`);
        }, (error) => {
            toast.error(`An error occurred, Please try again: ${error.text}`);
        });
    };

    return (
        <section
            id="contact"
            className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 py-12 px-1 md:px-20 items-center min-h-screen"
        >
            {/* Background Gradient */}
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-64 w-64 lg:h-80 lg:w-80 blur-lg absolute top-1/2 lg:top-1/3 left-1/2 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Contact Info */}
            <div className="z-10 space-y-6 text-center lg:text-left">
                <h5 className="text-xl lg:text-2xl font-bold text-white">Let&apos;s Connect</h5>
                <p className="text-[#ADB7BE] max-w-md mx-auto lg:mx-0">
                    I&apos;m currently looking for new opportunities. My inbox is always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className="flex justify-center lg:justify-start gap-4">
                    <SocialIcon url="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" bgColor="transparent" fgColor="#ADB7BE" style={{ height: 40, width: 40 }} />
                    <SocialIcon url="https://github.com/itumelengseema/" bgColor="transparent" fgColor="#ADB7BE" style={{ height: 40, width: 40 }} />
                </div>
                <div className="text-[#ADB7BE] space-y-2 flex flex-col items-center lg:items-start">
                    <div className="flex items-center gap-2">
                        <AtSymbolIcon className="w-6" />
                        <p>contact@itumelengseema.me</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <PhoneIcon className="w-6" />
                        <p>+27 68 405 2394</p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="z-10 w-full lg:w-3/4 mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {[
                        { label: "Your Name", id: "name", type: "text", placeholder: "John Doe" },
                        { label: "Your Email", id: "email", type: "email", placeholder: "jacob@google.com" },
                        { label: "Subject", id: "subject", type: "text", placeholder: "Just saying hi" },
                        { label: "Cellphone Number", id: "cellphone", type: "text", placeholder: "123-456-7890" },
                        { label: "Message", id: "message", type: "textarea", placeholder: "Let's talk about..." }
                    ].map(({ label, id, type, placeholder }) => (
                        <div key={id}>
                            <label htmlFor={id} className="text-white block mb-2 text-sm lg:text-base font-medium">
                                {label}
                            </label>
                            {type === "textarea" ? (
                                <textarea
                                    name={id}
                                    id={id}
                                    required
                                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm lg:text-base rounded-lg block w-full p-2.5"
                                    placeholder={placeholder}
                                    value={formData[id as keyof typeof formData]}
                                    onChange={handleChange}
                                />
                            ) : (
                                <input
                                    name={id}
                                    type={type}
                                    id={id}
                                    required
                                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm lg:text-base rounded-lg block w-full p-2.5"
                                    placeholder={placeholder}
                                    value={formData[id as keyof typeof formData]}
                                    onChange={handleChange}
                                />
                            )}
                        </div>
                    ))}
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
