
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { user, profile, userLoading } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (profile && profile.user_type === "client") {
      toast({
        variant: "destructive",
        title: "Acesso não autorizado",
        description: "Este painel é apenas para profissionais.",
      });
    }
  }, [profile]);

  if (userLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-xl">Carregando...</h2>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" />;
  }

  if (profile && profile.user_type === "client") {
    return <Navigate to="/agendamento" />;
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard Profissional</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Agenda de Hoje</h2>
            <div className="text-center p-8 text-gray-500">
              Você ainda não tem agendamentos para hoje.
            </div>
          </div>

          <div className="border rounded-xl p-6 shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Próximos Agendamentos</h2>
            <div className="text-center p-8 text-gray-500">
              Você ainda não tem agendamentos futuros.
            </div>
          </div>
        </div>
        <div>
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Visão Geral</h2>
            <div className="space-y-4">
              <div className="bg-pink-50 p-4 rounded-lg">
                <h3 className="font-medium text-brand-pink">Agendamentos</h3>
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-gray-500">este mês</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <h3 className="font-medium text-brand-pink">Clientes</h3>
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-gray-500">total</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <h3 className="font-medium text-brand-pink">Serviços</h3>
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-gray-500">disponíveis</p>
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-6 shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Seu Plano</h2>
            <div className="bg-gradient-to-r from-brand-pink to-brand-dark-pink text-white p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Plano Gratuito</h3>
              <p className="text-sm opacity-80 mb-2">15 agendamentos/mês</p>
              <a href="/planos" className="text-sm underline">Atualizar plano</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
