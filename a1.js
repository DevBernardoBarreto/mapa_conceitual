import React, { useState } from 'react';
import { Globe, ShieldCheck, Zap, Database, Server, FileCode, X } from 'lucide-react';

const ProtocolCard = ({ title, icon: Icon, color, description, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 bg-slate-900 ${color.border} ${color.shadow} hover:bg-slate-800`}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-3 rounded-lg ${color.bg} text-white`}>
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-slate-400 text-sm line-clamp-2">{description}</p>
        <button className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white flex items-center gap-2">
          Ver mais detalhes ➔
        </button>
      </div>

      {/* Modal de Informações Extras */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 p-8 rounded-3xl max-w-2xl w-full relative animate-in fade-in zoom-in duration-200">
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-white">
              <X size={24} />
            </button>5
            
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-4 rounded-xl ${color.bg} text-white`}>
                <Icon size={32} />
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight">{title}</h2>
            </div>

            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-relaxed">{details.fullDescription}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-xl">
                  <h4 className="font-bold text-white mb-2 underline decoration-indigo-500">Portas Comuns</h4>
                  <p>{details.ports}</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl">
                  <h4 className="font-bold text-white mb-2 underline decoration-indigo-500">Camada OSI</h4>
                  <p>{details.osiLayer}</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">💡 Curiosidade Técnica</h4>
                <p className="italic text-slate-400 text-sm">{details.proTip}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function TechMap() {
  const protocols = [
    {
      title: "HTTP / HTTPS",
      icon: Globe,
      color: { border: "border-blue-500/50", shadow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]", bg: "bg-blue-600" },
      description: "A base da web moderna. Protocolo de transferência de hipertexto.",
      details: {
        fullDescription: "O HTTPS utiliza TLS (Transport Layer Security) para criptografar a comunicação. O modelo é baseado em Requisição-Resposta.",
        ports: "80 (HTTP), 443 (HTTPS)",
        osiLayer: "Camada 7 (Aplicação)",
        proTip: "O HTTP/3 agora utiliza QUIC em vez de TCP para reduzir a latência de conexão."
      }
    },
    {
      title: "DNS",
      icon: Database,
      color: { border: "border-orange-500/50", shadow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]", bg: "bg-orange-600" },
      description: "A lista telefônica da internet que traduz nomes em IPs.",
      details: {
        fullDescription: "Resolve nomes de domínio (google.com) em endereços IP (142.250.185.46). Funciona em uma hierarquia de Root, TLD e Autoritativo.",
        ports: "53 (UDP/TCP)",
        osiLayer: "Camada 7 (Aplicação)",
        proTip: "DNS over HTTPS (DoH) é uma tendência crescente para aumentar a privacidade dos usuários."
      }
    },
    {
      title: "WebSockets",
      icon: Zap,
      color: { border: "border-teal-500/50", shadow: "hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]", bg: "bg-teal-600" },
      description: "Comunicação full-duplex em tempo real para chats e jogos.",
      details: {
        fullDescription: "Diferente do HTTP, o WebSocket mantém uma conexão aberta, permitindo que o servidor envie dados ao cliente sem ser solicitado.",
        ports: "80 / 443 (Upgrade de Handshake)",
        osiLayer: "Camada 7 (Aplicação)",
        proTip: "Ideal para Dashboards financeiros e sistemas de trading onde cada milissegundo conta."
      }
    },
    {
      title: "TCP/IP",
      icon: Server,
      color: { border: "border-purple-500/50", shadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]", bg: "bg-purple-600" },
      description: "O alicerce de toda a comunicação em rede global.",
      details: {
        fullDescription: "O TCP garante que os pacotes cheguem na ordem correta e sem erros (Orientado à conexão). O IP cuida do endereçamento.",
        ports: "N/A (Protocolo Base)",
        osiLayer: "Camada 4 (Transporte) e 3 (Rede)",
        proTip: "O famoso 'Handshake de 3 vias' (SYN, SYN-ACK, ACK) acontece aqui."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-8 font-sans text-slate-100">
      <header className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Infraestrutura de Rede Global
        </h1>
        <p className="text-slate-400 text-lg">Clique nos cards para explorar as camadas da comunicação digital.</p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card Central de Destaque */}
        <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-indigo-900 to-slate-900 p-8 rounded-3xl border border-indigo-500/30 flex flex-center flex-col justify-center text-center">
          <h2 className="text-3xl font-bold mb-4">Comunicação na Internet</h2>
          <p className="text-indigo-200">A base tecnológica que sustenta a troca de dados entre bilhões de dispositivos ao redor do mundo.</p>
          <div className="mt-8 flex justify-center animate-pulse">
             <div className="h-1 w-24 bg-indigo-500 rounded-full"></div>
          </div>
        </div>

        {protocols.map((p, idx) => (
          <ProtocolCard key={idx} {...p} />
        ))}
      </main>
    </div>
  );
}