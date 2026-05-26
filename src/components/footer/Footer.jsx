const Footer = () => (
    <footer className="bg-[#0c0c1d] border-t border-white/10 py-6 px-4 lg:px-6">
        <div className="max-w-[1366px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-customGray">
            <p>© {new Date().getFullYear()} Francesco Lucia</p>
            <nav className="flex gap-6">
                <a href="/impressum.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Impressum
                </a>
                <a href="/datenschutz.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Datenschutz
                </a>
            </nav>
        </div>
    </footer>
);

export default Footer;
