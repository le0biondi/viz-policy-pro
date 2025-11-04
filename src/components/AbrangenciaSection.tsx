import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

const AbrangenciaSection = () => {
  return (
    <section className="py-20 bg-muted/30" id="abrangencia">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-success/10 border border-success/20">
              <BarChart3 className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-success">Dados em Tempo Real</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Abrangência do Programa
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Painel interativo com dados atualizados sobre a Tarifa Social de Energia Elétrica
            </p>
          </div>

          {/* BI da ANEEL - Subsidômetro */}
          <Card>
            <CardHeader>
              <CardTitle>Subsidômetro ANEEL</CardTitle>
              <CardDescription>
                Acompanhamento em tempo real de beneficiários, valores concedidos e distribuição regional da TSEE
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[800px] rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://portalrelatorios.aneel.gov.br/luznatarifa/subsidiometro"
                  className="w-full h-full"
                  title="Subsidômetro ANEEL - Tarifa Social de Energia Elétrica"
                  allow="fullscreen"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Fonte: ANEEL - Agência Nacional de Energia Elétrica
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AbrangenciaSection;
