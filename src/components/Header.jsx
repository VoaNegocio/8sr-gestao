import { Menu } from 'lucide-react';

const Header = () => {
    return (
        <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo Placeholder */}
                <div className="flex items-center gap-2">
                    <img
                        src="/assets/imgs/logo/logo-fundo-transparente.webp"
                        alt="8SR Logo"
                        width="144"
                        height="48"
                        className="h-12 w-auto object-contain"
                    />

                </div>

                {/* Desktop Nav - Empty for now as per LP request (focus on conversion) */}

                {/* Mobile Menu Icon (Visual only for now) */}
                <button className="md:hidden text-brand-blue" aria-label="Menu">
                    <Menu size={24} />
                </button>
            </div>
        </header>
    );
};

export default Header;
