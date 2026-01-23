const Footer = () => {
    return (
        <footer className="bg-brand-surface pt-20 pb-10 border-t border-gray-200">
            <div className="container mx-auto px-4 text-center">

                <div className="max-w-2xl mx-auto mb-16">
                    <div className="inline-block bg-white px-6 py-3 rounded-full shadow-sm mb-6 border border-gray-200">
                        <span className="text-gray-600 font-medium">⚠️ Reflexão honesta</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-gray-800 italic leading-relaxed">
                        "Se nada mudar na forma como as decisões são tomadas hoje, os mesmos problemas continuam se repetindo amanhã."
                    </h3>
                </div>

                <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} 8SR - Gestão & Valor em Saúde.</p>
                    <p>Política de Privacidade</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
