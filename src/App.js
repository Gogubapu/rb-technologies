import logo from './logo.svg';
import './App.css';

import React from "react";
import { motion } from "framer-motion";
import './index.css';

function App() {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <Topbar />

            <main className="px-6 md:px-20 py-12">
                {/* Hero Section */}
                <section className="flex flex-col-reverse md:flex-row items-center gap-10">
                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">RB Technologies</h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Empowering Identity, Security & Cloud Transformation Worldwide
                        </p>
                        <div className="flex gap-4">
                            <button className="button-primary">Get Started</button>
                            <button className="button-secondary">Our Services</button>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src="/rb-hero-illustration.png" alt="RB Technologies Hero" className="rounded-xl shadow-lg" />
                    </div>
                </section>

                {/* Statistics Section */}
                <section className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <MiniStat title="Projects" value="150+" />
                    <MiniStat title="Countries" value="12" />
                    <MiniStat title="Clients" value="75+" />
                    <MiniStat title="Global Impact" value="24/7 Support" />
                </section>

                {/* Services Section */}
                <section id="services" className="mt-16 grid md:grid-cols-3 gap-6">
                    <ServiceCard title="SailPoint Implementation" desc="End-to-end SailPoint Identity Governance & Administration solutions." />
                    <ServiceCard title="IdentityNow Migration" desc="Smooth migration from IIQ to IdentityNow for better cloud integration." />
                    <ServiceCard title="Cloud Security" desc="Comprehensive cloud security and API integration services." />
                </section>

                {/* Global Offices */}
                <section className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Global Presence</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <OfficeCard location="USA" contact="contact@rbtech.global" />
                        <OfficeCard location="India" contact="india@rbtech.global" />
                        <OfficeCard location="Europe" contact="europe@rbtech.global" />
                    </div>
                </section>

                {/* Partners Section */}
                <section id="partners" className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Partners</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <Partner logoText="Microsoft Entra" />
                        <Partner logoText="ForgeRock" />
                        <Partner logoText="Okta" />
                        <Partner logoText="IBM Security Verify" />
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="mt-16 grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <h5 className="text-lg font-semibold">Contact</h5>
                        <p className="text-slate-600">hello@rbtech.global</p>
                        <p className="text-slate-600">+91-9910339578 / +966-541045831</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg glass-card">
                        <h6 className="font-medium">Quick Contact</h6>
                        <form className="mt-3 grid gap-3">
                            <input className="px-3 py-2 border rounded-md" placeholder="Your name" />
                            <input className="px-3 py-2 border rounded-md" placeholder="Email" />
                            <textarea className="px-3 py-2 border rounded-md" placeholder="Message" rows={4}></textarea>
                            <button className="button-primary">Send</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="mt-16 border-t py-8 bg-white">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
                    <div>© {new Date().getFullYear()} RB Technologies — Global Identity & Security Services</div>
                    <div>Follow: LinkedIn · Twitter · GitHub</div>
                </div>
            </footer>
        </div>
    );
}

// Components
function Topbar() {
    return (
        <div className="bg-white/50 backdrop-blur sticky top-0 z-40 border-b">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold">RB</div>
                    <div>
                        <div className="font-semibold">RB Technologies</div>
                        <div className="text-xs text-slate-500">Global Identity & Security</div>
                    </div>
                </div>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    <a className="hover:text-indigo-600" href="#services">Services</a>
                    <a className="hover:text-indigo-600" href="#partners">Partners</a>
                    <a className="hover:text-indigo-600" href="#contact">Contact</a>
                    <button className="ml-2 button-primary">Talk to us</button>
                </nav>
            </div>
        </div>
    );
}

function MiniStat({ title, value }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg transition">
            <div className="text-xl font-bold">{value}</div>
            <div className="text-xs text-slate-500">{title}</div>
        </div>
    );
}

function ServiceCard({ title, desc }) {
    return (
        <motion.div whileHover={{ y: -6 }} className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-xl transition">
            <div className="font-semibold">{title}</div>
            <div className="mt-2 text-slate-600">{desc}</div>
        </motion.div>
    );
}

function OfficeCard({ location, contact }) {
    return (
        <div className="bg-white p-4 rounded-lg border text-sm glass-card hover:shadow-lg transition">
            <div className="font-medium">{location}</div>
            <div className="text-xs text-slate-500">{contact}</div>
        </div>
    );
}

function Partner({ logoText }) {
    return (
        <div className="bg-white p-4 rounded-lg border flex items-center justify-center shadow-sm hover:shadow-lg transition">
            {logoText}
        </div>
    );
}

export default App;
