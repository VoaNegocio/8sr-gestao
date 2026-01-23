import { AlertTriangle, TrendingDown, RefreshCcw } from 'lucide-react';

const ProblemSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-brand-surface/50 to-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">

                    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                        O problema não é falta de esforço.<br />
                        <span className="text-brand-blue">É falta de método simples para decidir melhor.</span>
                    </h2>

                    <div className="space-y-6">
                        {/* Item 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                            <div className="bg-red-50 p-3 rounded-lg shrink-0">
                                <TrendingDown className="text-red-600" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg mb-1">Custos que crescem sem clareza</h3>
                                <p className="text-gray-600">Você vê o orçamento estourar, mas não sabe exatamente onde cortar sem afetar a segurança.</p>
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

                    <p className="text-center text-gray-600 mt-10 italic">
                        "Esses cursos foram criados para quem já está no jogo e precisa agir com mais critério."
                    </p>

                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
