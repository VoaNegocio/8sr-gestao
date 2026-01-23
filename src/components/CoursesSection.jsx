import { Calendar, CheckCircle2, DollarSign, LayoutList } from 'lucide-react';

const CourseCard = ({ title, description, benefits, dates, badge, icon: Icon, color, ctaText }) => (
    <div className="bg-white rounded-2xl p-8 border-t-8 border-t-brand-blue border-x-2 border-b-2 border-gray-100 shadow-[0_8px_0_0_#e5e7eb] relative overflow-hidden flex flex-col h-full">
        <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-4">
                {badge}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Icon className="text-brand-blue" />
                {title}
            </h3>
            <p className="text-gray-600 border-l-4 border-gray-200 pl-4 py-1 italic text-sm">
                {description}
            </p>
        </div>

        <div className="space-y-4 mb-8 flex-grow">
            <h4 className="font-semibold text-brand-blue text-sm uppercase tracking-wide">O que você vai aprender:</h4>
            <ul className="space-y-2">
                {benefits.map((bg, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                        <CheckCircle2 size={16} className="text-brand-green mt-0.5 shrink-0" />
                        <span>{bg}</span>
                    </li>
                ))}
            </ul>
        </div>

        <div className="bg-gray-50 -mx-8 -mb-8 p-6 border-t border-gray-100 mt-auto">
            <div className="flex items-center gap-2 text-gray-600 mb-4 font-medium text-sm">
                <Calendar size={18} className="text-brand-blue" />
                <span>Aulas ao vivo: {dates}</span>
            </div>
            <a href="#oferta" className="block w-full text-center bg-brand-blue text-white font-bold py-3 rounded-xl transition-all shadow-[0_6px_0_0_#00095c] hover:shadow-[0_3px_0_0_#00095c] hover:translate-y-[3px] active:shadow-none active:translate-y-[6px] relative overflow-hidden group">
                <span className="relative z-10">{ctaText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer z-0"></div>
            </a>
        </div>
    </div>
);

const CoursesSection = () => {
    return (
        <section id="cursos" className="py-20 bg-white">
            <div className="container mx-auto px-4">

                {/* Section Intro */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Uma capacitação. Dois problemas resolvidos.
                    </h2>
                    <p className="text-xl text-gray-600">
                        Você pode escolher onde agir primeiro, conforme a realidade da sua instituição.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    <CourseCard
                        title="Gestão de Custos em UTI"
                        description="Quando o problema é dinheiro mal alocado e decisões sem prioridade clara."
                        badge="Da Informação à Ação"
                        icon={DollarSign}
                        color="border-t-brand-blue"
                        dates="03/03, 10/03, 17/03"
                        ctaText="Quero otimizar custos"
                        benefits={[
                            "Analisar custos por paciente-dia",
                            "Identificar variações e desperdícios",
                            "Priorizar ações por impacto financeiro",
                            "Construir um plano de ação (60 dias)"
                        ]}
                    />

                    <CourseCard
                        title="Mapa de Processos (SIPOC)"
                        description="Quando o problema é processo confuso, retrabalho e desalinhamento entre áreas."
                        badge="Matriz SIPOC na Prática"
                        icon={LayoutList}
                        color="border-t-brand-green"
                        dates="25/02, 04/03, 11/03"
                        ctaText="Quero organizar processos"
                        benefits={[
                            "Mapear processos críticos com clareza",
                            "Identificar gargalos, falhas e desperdícios",
                            "Alinhar responsabilidades entre áreas",
                            "Estruturar melhorias simples e sustentáveis"
                        ]}
                    />

                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
