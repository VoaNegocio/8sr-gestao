import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CheckCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ThankYouPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(3);

    // Default WhatsApp number (same as FloatingWhatsApp)
    const defaultPhone = "5519996671304";
    const defaultText = "Olá! Me cadastrei no site e gostaria de saber mais sobre os cursos 8SR.";

    useEffect(() => {
        // 0. Scroll to top (UX Standard)
        window.scrollTo(0, 0);

        // 1. Anti-duplication logic (Simulated Pixel Fire)
        const pixelFired = sessionStorage.getItem('pixel_fired');
        if (!pixelFired) {
            console.log("🔥 Pixel Fired: Lead Converted");
            // Here you would put your actual fbq('track', 'Lead')
            sessionStorage.setItem('pixel_fired', 'true');
        }

        // 2. Countdown Interval
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        // 3. Auto-Redirect Logic
        const timer = setTimeout(() => {
            const phone = searchParams.get('phone') || defaultPhone;
            const text = searchParams.get('text') || defaultText;

            const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;

            window.location.replace(whatsappUrl);
        }, 3000);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [searchParams]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full flex flex-col items-center"
            >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Inscrição Recebida!
                </h1>

                <p className="text-gray-600 mb-8">
                    Tudo certo. Estamos te redirecionando para o WhatsApp para confirmar sua vaga...
                </p>

                <div className="flex items-center gap-2 text-brand-blue font-medium bg-blue-50 px-4 py-2 rounded-full min-w-[240px] justify-center">
                    <Loader2 className="animate-spin w-4 h-4" />
                    <span>Redirecionando em {timeLeft}s...</span>
                </div>

                <div className="mt-8 text-sm text-gray-400">
                    Se não for redirecionado, <a href={`https://api.whatsapp.com/send?phone=${defaultPhone}&text=${encodeURIComponent(defaultText)}`} className="underline hover:text-green-600">clique aqui</a>.
                </div>
            </motion.div>
        </div>
    );
};

export default ThankYouPage;
