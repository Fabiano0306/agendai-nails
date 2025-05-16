
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, Award, Bell, Link as LinkIcon } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="container py-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Como Funciona o <span className="gradient-text">AgendAI Nails</span>
            </h1>
            <p className="text-lg text-gray-600">
              O AgendAI Nails é um sistema completo para profissionais de manicure e pedicure
              gerenciarem agendamentos, serviços e fidelizarem seus clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <User className="mr-2 text-brand-pink" /> Para Profissionais
              </h2>
              <ul className="space-y-6">
                <li className="flex">
                  <div className="mr-4 bg-pink-100 rounded-full h-8 w-8 flex items-center justify-center text-brand-pink font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-lg">Cadastre-se como Profissional</h3>
                    <p className="text-gray-600">Crie sua conta especificando que você é um profissional de manicure/pedicure.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 bg-pink-100 rounded-full h-8 w-8 flex items-center justify-center text-brand-pink font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-lg">Configure seus Serviços</h3>
                    <p className="text-gray-600">Adicione seus serviços, preços, duração e categorias no painel administrativo.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 bg-pink-100 rounded-full h-8 w-8 flex items-center justify-center text-brand-pink font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-lg">Defina sua Disponibilidade</h3>
                    <p className="text-gray-600">Configure seus horários de trabalho e bloqueie datas/horários indisponíveis.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 bg-pink-100 rounded-full h-8 w-8 flex items-center justify-center text-brand-pink font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-lg">Compartilhe seu Link</h3>
                    <p className="text-gray-600">Receba seu link personalizado e compartilhe nas suas redes sociais para que seus clientes agendem direto com você.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 bg-pink-100 rounded-full h-8 w-8 flex items-center justify-center text-brand-pink font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-lg">Gerencie seus Agendamentos</h3>
                    <p className="text-gray-600">Veja todos os seus agendamentos em um painel organizado, confirme, reagende ou cancele conforme necessário.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/auth">
                  <Button className="bg-brand-pink hover:bg-brand-dark-pink">
                    Comece agora como Profissional <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <User className="mr-2 text-brand-pink" /> Para Clientes
              </h2>
              <ul className="space-y-6">
                <li className="flex">
                  <div className="mr-4 bg-pink-100 rounded-full h-8 w-8 flex items-center justify-center text-brand-pink font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-lg">Cadastre-se como Cliente</h3>
                    <p className="text-gray-600">Crie uma conta simples e rápida como cliente para começar.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 bg-pink-100 rounded-full h-8 w-8 flex items-center justify-center text-brand-pink font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-lg">Encontre um Profissional</h3>
                    <p className="text-gray-600">Pesquise por profissionais disponíveis ou acesse diretamente o link do seu profissional favorito.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 bg-pink-100 rounded-full h-8 w-8 flex items-center justify-center text-brand-pink font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-lg">Escolha um Serviço</h3>
                    <p className="text-gray-600">Veja a lista de serviços, preços e duração, e selecione o que você deseja.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 bg-pink-100 rounded-full h-8 w-8 flex items-center justify-center text-brand-pink font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-lg">Selecione Data e Hora</h3>
                    <p className="text-gray-600">Veja a disponibilidade em tempo real e escolha o melhor horário para você.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 bg-pink-100 rounded-full h-8 w-8 flex items-center justify-center text-brand-pink font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-lg">Receba Confirmação</h3>
                    <p className="text-gray-600">Receba a confirmação do seu agendamento e lembretes automáticos antes do horário.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/auth">
                  <Button className="bg-brand-pink hover:bg-brand-dark-pink">
                    Comece agora como Cliente <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-pink-50 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Principais Recursos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Calendar className="h-10 w-10 text-brand-pink mb-4" />
                <h3 className="text-lg font-semibold mb-2">Agenda Inteligente</h3>
                <p className="text-gray-600">Gerenciamento completo da agenda com horários dinâmicos e bloqueios.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Bell className="h-10 w-10 text-brand-pink mb-4" />
                <h3 className="text-lg font-semibold mb-2">Lembretes Automáticos</h3>
                <p className="text-gray-600">Envio de lembretes por e-mail ou WhatsApp para reduzir faltas.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Award className="h-10 w-10 text-brand-pink mb-4" />
                <h3 className="text-lg font-semibold mb-2">Sistema de Fidelidade</h3>
                <p className="text-gray-600">Programa de pontos para fidelizar clientes com serviços gratuitos.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <LinkIcon className="h-10 w-10 text-brand-pink mb-4" />
                <h3 className="text-lg font-semibold mb-2">Link Personalizado</h3>
                <p className="text-gray-600">Seu próprio link para compartilhar com clientes nas redes sociais.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Clock className="h-10 w-10 text-brand-pink mb-4" />
                <h3 className="text-lg font-semibold mb-2">Disponibilidade em Tempo Real</h3>
                <p className="text-gray-600">Clientes veem apenas os horários realmente disponíveis.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <User className="h-10 w-10 text-brand-pink mb-4" />
                <h3 className="text-lg font-semibold mb-2">Perfil Profissional</h3>
                <p className="text-gray-600">Página personalizada para destacar seus serviços e profissionalismo.</p>
              </div>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Pronto para começar?</h2>
            <p className="text-gray-600 mb-6">
              Cadastre-se agora e comece a usar o AgendAI Nails para transformar a gestão dos seus agendamentos!
            </p>
            <Link to="/auth">
              <Button size="lg" className="bg-brand-pink hover:bg-brand-dark-pink">
                Criar minha conta agora
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
