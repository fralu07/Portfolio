const Footer = ({onLegalOpen}) => (
    <footer className="bg-[#0c0c1d] border-t border-white/10 py-4 px-4 lg:px-6">
        <div className="max-w-[1366px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-customGray">
            <p>© {new Date().getFullYear()} Francesco Lucia</p>
            <nav className="flex gap-6">
                <button
                    onClick={() => onLegalOpen("impressum")}
                    className="hover:text-white transition-colors"
                >
                    Impressum
                </button>
                <button
                    onClick={() => onLegalOpen("datenschutz")}
                    className="hover:text-white transition-colors"
                >
                    Datenschutz
                </button>
            </nav>
        </div>
    </footer>
);

export default Footer;
