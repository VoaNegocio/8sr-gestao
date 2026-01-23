import { MonitorPlay, Users, MessageCircleQuestion, GraduationCap } from 'lucide-react';

const Differentials = () => {
    const items = [
        { icon: MonitorPlay, title: "100% Online e Ao Vivo", desc: "Interação real, nada de aulas gravadas há anos." },
        { icon: Users, title: "Professores Atuantes", desc: "Quem vive o dia a dia da saúde, não apenas teóricos." },
        { icon: MessageCircleQuestion, title: "Tira-dúvidas na Hora", desc: "Troca real durante a aula para resolver seus problemas." },
        { icon: GraduationCap, title: "Certificado Incluso", desc: "Reconhecimento oficial da sua capacitação." },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-brand-surface to-white border-y border-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">
                    Por que esses cursos são diferentes?
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-4">
                            <div className="bg-white p-4 rounded-full shadow-md mb-4 text-brand-blue">
                                <item.icon size={32} />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Differentials;
