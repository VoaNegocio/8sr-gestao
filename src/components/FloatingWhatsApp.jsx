import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';


const FloatingWhatsApp = () => {
    const handleClick = (e) => {
        // e.preventDefault(); // Do not prevent default, we want the link to open
        const pixelFired = sessionStorage.getItem('pixel_fired');
        if (!pixelFired) {
            console.log("🔥 Pixel Fired: Lead Converted");
            sessionStorage.setItem('pixel_fired', 'true');
        }
    };

    return (
        <motion.a
            href={`https://api.whatsapp.com/send?phone=5516992206074&text=${encodeURIComponent("Olá quero informações sobre os cursos disponíveis")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_16px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1
            }}
            whileHover={{ scale: 1.1 }}
            aria-label="Falar no WhatsApp"
        >
            <MessageCircle size={32} fill="white" className="relative z-10" />
            <span className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping-slow"></span>
        </motion.a>
    );
};

export default FloatingWhatsApp;
