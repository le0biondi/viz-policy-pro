import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Zap, Home, TrendingDown, Lightbulb, Users, Shield, DollarSign } from "lucide-react";

const evolucaoBeneficiariosData = [
  { year: "2019", familias: 7.2, economia: 85 },
  { year: "2020", familias: 8.5, economia: 92 },
  { year: "2021", familias: 10.8, economia: 105 },
  { year: "2022", familias: 12.3, economia: 118 },
  { year: "2023", familias: 14.2, economia: 125 },
];

const consumoMensalData = [
  { faixa: "0-80 kWh", beneficiarios: 5.2, nãoBeneficiarios: 2.1 },
  { faixa: "81-150 kWh", beneficiarios: 4.8, nãoBeneficiarios: 6.4 },
  { faixa: "151-220 kWh", beneficiarios: 2.9, nãoBeneficiarios: 8.2 },
  { faixa: ">220 kWh", beneficiarios: 1.3, nãoBeneficiarios: 12.5 },
];

const descontosNovaRegraData = [
  { mes: "Jan", desconto100: 3.8 },
  { mes: "Fev", desconto100: 3.9 },
  { mes: "Mar", desconto100: 4.1 },
  { mes: "Abr", desconto100: 4.2 },
  { mes: "Mai", desconto100: 4.3 },
  { mes: "Jun", desconto100: 4.4 },
];

const custoCDEData = [
  { year: "2019", custo: 4.2 },
  { year: "2020", custo: 4.8 },
  { year: "2021", custo: 5.6 },
  { year: "2022", custo: 6.2 },
  { year: "2023", custo: 6.8 },
];

const TarifaSocialSection = () => {
  return (
    <section className="py-20 bg-background" id="tarifa-social">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/10 border border-accent/20">
              <Lightbulb className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Política Pública de Inclusão Energética</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tarifa Social de Energia Elétrica
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Análise econométrica da política de descontos na fatura de energia elétrica para famílias de baixa renda e beneficiários do BPC
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <Users className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-2xl">14,2M</CardTitle>
                <CardDescription>Famílias Beneficiadas (2023)</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-success hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <Zap className="w-8 h-8 text-success mb-2" />
                <CardTitle className="text-2xl">100%</CardTitle>
                <CardDescription>Desconto até 80 kWh/mês</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <DollarSign className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-2xl">R$ 125</CardTitle>
                <CardDescription>Economia Mensal Média</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-warning hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <Shield className="w-8 h-8 text-warning mb-2" />
                <CardTitle className="text-2xl">CDE</CardTitle>
                <CardDescription>Financiamento via CDE</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* BI da ANEEL - Subsidômetro */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Subsidômetro - Dados em Tempo Real</CardTitle>
              <CardDescription>
                Painel interativo da ANEEL com informações atualizadas sobre a Tarifa Social de Energia Elétrica
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[800px] rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://portalrelatorios.aneel.gov.br/luznatarifa/subsidiometro"
                  className="w-full h-full"
                  title="Subsidômetro ANEEL - Tarifa Social"
                  allow="fullscreen"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Fonte: ANEEL - Agência Nacional de Energia Elétrica
              </p>
            </CardContent>
          </Card>

          {/* Charts Tabs */}
          <Tabs defaultValue="evolucao" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="evolucao">Evolução do Programa</TabsTrigger>
              <TabsTrigger value="consumo">Perfil de Consumo</TabsTrigger>
              <TabsTrigger value="descontos">Nova Regra</TabsTrigger>
              <TabsTrigger value="custo">Custo CDE</TabsTrigger>
            </TabsList>

            <TabsContent value="evolucao">
              <Card>
                <CardHeader>
                  <CardTitle>Evolução de Beneficiários e Economia</CardTitle>
                  <CardDescription>
                    Número de famílias beneficiadas (milhões) e economia mensal média (R$) ao longo dos anos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={evolucaoBeneficiariosData}>
                      <defs>
                        <linearGradient id="colorFamilias" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorEconomia" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "var(--radius)"
                        }} 
                      />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="familias" 
                        stroke="hsl(var(--accent))" 
                        fillOpacity={1}
                        fill="url(#colorFamilias)"
                        strokeWidth={2}
                        name="Famílias (milhões)"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="economia" 
                        stroke="hsl(var(--success))" 
                        fillOpacity={1}
                        fill="url(#colorEconomia)"
                        strokeWidth={2}
                        name="Economia Mensal (R$)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-muted-foreground mt-4">
                    Crescimento de 97% no número de famílias beneficiadas entre 2019 e 2023.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="consumo">
              <Card>
                <CardHeader>
                  <CardTitle>Distribuição de Consumo por Faixa</CardTitle>
                  <CardDescription>
                    Número de famílias (milhões) por faixa de consumo mensal de energia
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={consumoMensalData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="faixa" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "var(--radius)"
                        }} 
                      />
                      <Legend />
                      <Bar dataKey="beneficiarios" fill="hsl(var(--accent))" name="Beneficiários TSEE (milhões)" />
                      <Bar dataKey="nãoBeneficiarios" fill="hsl(var(--muted))" name="Não Beneficiários (milhões)" />
                    </BarChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-muted-foreground mt-4">
                    Beneficiários da TSEE concentram-se nas faixas de menor consumo, evidenciando vulnerabilidade energética.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="descontos">
              <Card>
                <CardHeader>
                  <CardTitle>Impacto da Nova Regra (2025)</CardTitle>
                  <CardDescription>
                    Evolução mensal do número de famílias com desconto de 100% (até 80 kWh/mês)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={descontosNovaRegraData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="mes" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "var(--radius)"
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="desconto100" 
                        stroke="hsl(var(--success))" 
                        strokeWidth={3}
                        name="Famílias com 100% desconto (milhões)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-muted-foreground mt-4">
                    Nova regra (MPV 1.300/2025): 100% de desconto para consumo até 80 kWh, eliminando faixas progressivas anteriores.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="custo">
              <Card>
                <CardHeader>
                  <CardTitle>Custo Anual via CDE</CardTitle>
                  <CardDescription>
                    Evolução do custo da TSEE financiado pela Conta de Desenvolvimento Energético (R$ bilhões)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={custoCDEData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "var(--radius)"
                        }} 
                      />
                      <Bar dataKey="custo" fill="hsl(var(--primary))" name="Custo CDE (R$ bilhões)" />
                    </BarChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-muted-foreground mt-4">
                    A CDE é custeada principalmente pelos demais consumidores de energia. Beneficiários da TSEE não pagam a CDE nem o Proinfa.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Program Details */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Critérios de Elegibilidade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Família inscrita no Cadastro Único com renda per capita ≤ meio salário-mínimo</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Família no Cadastro Único (renda até 3 SM) com portador de doença/deficiência que exija uso continuado de equipamentos elétricos</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Idosos (≥65 anos) ou pessoas com deficiência que recebam o BPC (Benefício de Prestação Continuada)</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Concessão automática desde janeiro/2022 (Lei nº 14.203/2021) - não é necessário solicitar</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Mecanismo de Descontos (Nova Regra 2025)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">100% de desconto para consumo até 80 kWh mensais (gratuidade na energia)</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Consumo acima de 80 kWh não recebe desconto</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Fatura pode conter apenas ICMS e taxa de iluminação pública (tributos estaduais/municipais)</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Financiamento via CDE (Conta de Desenvolvimento Energético) - sem impacto direto aos beneficiários</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Regulatory Framework */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Marco Legal e Regulatório</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong>Lei nº 12.212/2010</strong> e <strong>Lei nº 10.438/2002</strong>: estabelecem a Tarifa Social de Energia Elétrica
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong>MPV nº 1.300/2025</strong>: altera a Lei nº 12.212/2010, estabelecendo nova regra com 100% de desconto até 80 kWh (vigência a partir de 5 de julho de 2025)
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong>Resolução Normativa ANEEL nº 1.000/2021</strong>: arts. 176 a 179 e art. 200 regulam a aplicação dos descontos
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong>Lei nº 14.203/2021</strong>: institui concessão automática do benefício desde janeiro de 2022
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TarifaSocialSection;