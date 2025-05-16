
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Scheduling = () => {
  const { user, profile, userLoading } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (profile && profile.user_type === "professional") {
      toast({
        variant: "destructive",
        title: "Acesso não autorizado",
        description: "Esta página é apenas para clientes.",
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

  if (profile && profile.user_type === "professional") {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Agendar Serviço</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Escolha um Profissional</h2>
            <div className="text-center p-8 text-gray-500">
              Nenhum profissional disponível no momento.
            </div>
          </div>
          
          <div className="border rounded-xl p-6 shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Serviços Disponíveis</h2>
            <div className="text-center p-8 text-gray-500">
              Primeiro, selecione um profissional.
            </div>
          </div>
        </div>
        
        <div>
          <div className="border rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Seu Histórico</h2>
            <div className="space-y-4">
              <div className="bg-pink-50 p-4 rounded-lg">
                <h3 className="font-medium text-brand-pink">Total de Visitas</h3>
                <p className="text-3xl font-bold">0</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <h3 className="font-medium text-brand-pink">Pontos de Fidelidade</h3>
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-gray-500">Ganhe 1 ponto a cada agendamento concluído!</p>
              </div>
            </div>
          </div>
          
          <div className="border rounded-xl p-6 shadow-sm mt-6">
            <h2 className="text-xl font-semibold mb-4">Próximos Agendamentos</h2>
            <div className="text-center p-4 text-gray-500">
              Você não tem agendamentos futuros.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;
