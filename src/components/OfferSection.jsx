import { MessageCircle } from 'lucide-react';


const OfferSection = () => {
    return (
        <section id="oferta" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-blue to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white border-2 border-blue-800 shadow-[0_8px_0_0_#00095c] relative overflow-hidden flex flex-col items-center">

                    {/* Background pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Condição especial via WhatsApp</h2>

                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Garanta sua vaga com desconto exclusivo falando diretamente com nossa equipe.
                            As vagas são limitadas para manter a qualidade da interação ao vivo.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
                            <div className="text-center">
                                <span className="block text-sm text-blue-200 uppercase tracking-widest mb-1">Investimento por curso</span>
                                <span className="block text-5xl font-bold">
                                    <span className="text-2xl text-blue-300 line-through mr-2">De R$260</span>
                                    por R$199,00
                                </span>
                            </div>
                        </div>

                        <a
                            href={`https://api.whatsapp.com/send?phone=5516992206074&text=${encodeURIComponent("Olá quero informações sobre os cursos disponíveis")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                                const pixelFired = sessionStorage.getItem('pixel_fired');
                                if (!pixelFired) {
                                    console.log("🔥 Pixel Fired: Lead Converted");
                                    sessionStorage.setItem('pixel_fired', 'true');
                                }
                            }}
                            className="inline-flex items-center gap-3 bg-green-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all shadow-[0_6px_0_0_#14532d] hover:shadow-[0_3px_0_0_#14532d] hover:translate-y-[3px] hover:bg-green-600 active:shadow-none active:translate-y-[6px] relative overflow-hidden group"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                <MessageCircle size={24} fill="white" />
                                Fale com a nossa equipe agora!
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer z-0"></div>
                        </a>

                        <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm text-blue-200 opacity-80 max-w-2xl mx-auto">
                            <div className="flex items-center justify-center gap-2">✓ Confirme sua vaga</div>
                            <div className="flex items-center justify-center gap-2">✓ Tire dúvidas</div>
                            <div className="flex items-center justify-center gap-2">✓ Receba orientações</div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;
