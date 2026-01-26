import { ChevronRight, Activity } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-white overflow-hidden">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src="/assets/hero-bg.webp"
                    alt="Abstract Medical Background"
                    width="1024"
                    height="1024"
                    fetchPriority="high"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-surface/50 to-transparent"></div>
                {/* Hero Background Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent -translate-x-full animate-[shimmer_3s_infinite] opacity-30 sm:block hidden"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Icon/Badge - Decision/Method */}
                    <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full mb-8 shadow-sm animate-fade-in-up">
                        <Activity size={18} className="text-brand-blue" />
                        <span className="text-brand-blue font-semibold text-sm uppercase tracking-wide">Método e Prática</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        Gestão na saúde não se <br className="hidden md:block" />
                        <span className="text-brand-blue">resolve com teoria.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Se resolve com método, dados e decisão prática. <br />
                        <span className="font-bold text-gray-800">Aprenda com quem atua na prática: Professores que são Profissionais da Saúde atuantes</span>
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#cursos" className="group relative bg-brand-blue text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_6px_0_0_#00095c] hover:shadow-[0_3px_0_0_#00095c] hover:translate-y-[3px] active:shadow-none active:translate-y-[6px] flex items-center gap-2 overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Ver Capacitações
                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer z-0"></div>
                        </a>
                        <span className="text-sm text-gray-500 mt-4 sm:mt-0 max-w-xs text-center sm:text-left">
                            Cursos online e ao vivo para profissionais que precisam organizar processos e reduzir desperdícios.
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
