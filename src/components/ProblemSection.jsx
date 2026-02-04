import { AlertTriangle, TrendingDown, RefreshCcw } from 'lucide-react';


const ProblemSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-brand-surface/50 to-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">

                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                        O problema não é falta de esforço.<br />
                        <span className="text-brand-blue">É falta de método simples para tomar a melhor decisão.</span>
                    </h2>

                    <div className="space-y-6">
                        {/* Item 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                            <div className="bg-red-50 p-3 rounded-lg shrink-0">
                                <TrendingDown className="text-red-600" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">Os gastos sobem sem clareza</h3>
                                <p className="text-gray-600">Você vê os custos aumentarem, mas não sabe exatamente onde cortar sem comprometer a segurança do paciente.</p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                            <div className="bg-amber-50 p-3 rounded-lg shrink-0">
                                <RefreshCcw className="text-amber-600" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">Processos confusos e retrabalho</h3>
                                <p className="text-gray-600">Equipes batendo cabeça, informações perdidas e a sensação constante de apagar incêndios.</p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                            <div className="bg-blue-50 p-3 rounded-lg shrink-0">
                                <AlertTriangle className="text-brand-blue" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">Decisões baseadas em percepção</h3>
                                <p className="text-gray-600">Sem dados claros, a gestão vira um jogo de opiniões, dificultando a justificativa técnica.</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-gray-600 mt-10 mb-8 italic">
                        "Esses cursos foram criados para quem já está no jogo e precisa agir com mais critério."
                    </p>

                    <div className="text-center">
                        <a
                            href="#oferta"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-brand-blue rounded-xl shadow-[0_6px_0_0_#00095c] hover:shadow-[0_3px_0_0_#00095c] hover:translate-y-[3px] active:shadow-none active:translate-y-[6px] overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Ver Soluções Práticas
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer z-0"></div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
