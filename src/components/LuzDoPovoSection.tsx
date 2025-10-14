import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Zap, Home, TrendingDown, Lightbulb } from "lucide-react";

const acessoEnergiaData = [
  { year: "2019", familiasBeneficiadas: 2.1, economiaMensal: 85 },
  { year: "2020", familiasBeneficiadas: 3.5, economiaMensal: 92 },
  { year: "2021", familiasBeneficiadas: 5.2, economiaMensal: 105 },
  { year: "2022", familiasBeneficiadas: 7.8, economiaMensal: 118 },
  { year: "2023", familiasBeneficiadas: 9.4, economiaMensal: 125 },
];

const inadimplenciaData = [
  { year: "2019", inadimplencia: 38 },
  { year: "2020", inadimplencia: 35 },
  { year: "2021", inadimplencia: 28 },
  { year: "2022", inadimplencia: 22 },
  { year: "2023", inadimplencia: 15 },
];

const consumoData = [
  { mes: "Jan", beneficiarios: 145, nãoBeneficiarios: 220 },
  { mes: "Fev", beneficiarios: 148, nãoBeneficiarios: 225 },
  { mes: "Mar", beneficiarios: 142, nãoBeneficiarios: 218 },
  { mes: "Abr", beneficiarios: 150, nãoBeneficiarios: 230 },
  { mes: "Mai", beneficiarios: 155, nãoBeneficiarios: 235 },
  { mes: "Jun", beneficiarios: 158, nãoBeneficiarios: 240 },
];

const regionalCoverage = [
  { region: "Norte", cobertura: 45, familias: 1.8 },
  { region: "Nordeste", cobertura: 52, familias: 4.2 },
  { region: "Centro-Oeste", cobertura: 28, familias: 0.8 },
  { region: "Sudeste", cobertura: 35, familias: 1.9 },
  { region: "Sul", cobertura: 22, familias: 0.7 },
];

const LuzDoPovoSection = () => {
  return (
    <section className="py-20 bg-background" id="luz-do-povo">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/10 border border-accent/20">
              <Lightbulb className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Programa de Acesso à Energia</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Programa Luz do Povo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Iniciativa de tarifa social de energia elétrica para garantir acesso sustentável à eletricidade para famílias de baixa renda
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <Home className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-2xl">9,4M</CardTitle>
                <CardDescription>Famílias Beneficiadas</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-success hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <TrendingDown className="w-8 h-8 text-success mb-2" />
                <CardTitle className="text-2xl">-61%</CardTitle>
                <CardDescription>Redução Inadimplência</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <Zap className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-2xl">R$ 125</CardTitle>
                <CardDescription>Economia Mensal Média</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-warning hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <Lightbulb className="w-8 h-8 text-warning mb-2" />
                <CardTitle className="text-2xl">65%</CardTitle>
                <CardDescription>Desconto Máximo na Tarifa</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Charts Tabs */}
          <Tabs defaultValue="access" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="access">Acesso e Economia</TabsTrigger>
              <TabsTrigger value="default">Inadimplência</TabsTrigger>
              <TabsTrigger value="consumption">Consumo</TabsTrigger>
              <TabsTrigger value="coverage">Cobertura Regional</TabsTrigger>
            </TabsList>

            <TabsContent value="access">
              <Card>
                <CardHeader>
                  <CardTitle>Evolução do Programa Luz do Povo</CardTitle>
                  <CardDescription>
                    Famílias beneficiadas (milhões) e economia mensal média (R$) ao longo dos anos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={acessoEnergiaData}>
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
                        dataKey="familiasBeneficiadas" 
                        stroke="hsl(var(--accent))" 
                        fillOpacity={1}
                        fill="url(#colorFamilias)"
                        strokeWidth={2}
                        name="Famílias (milhões)"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="economiaMensal" 
                        stroke="hsl(var(--success))" 
                        fillOpacity={1}
                        fill="url(#colorEconomia)"
                        strokeWidth={2}
                        name="Economia Mensal (R$)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-muted-foreground mt-4">
                    Crescimento de 348% no número de famílias beneficiadas entre 2019 e 2023.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="default">
              <Card>
                <CardHeader>
                  <CardTitle>Redução da Inadimplência</CardTitle>
                  <CardDescription>
                    Percentual de inadimplência em contas de energia entre beneficiários
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={inadimplenciaData}>
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
                      <Line 
                        type="monotone" 
                        dataKey="inadimplencia" 
                        stroke="hsl(var(--destructive))" 
                        strokeWidth={3}
                        name="Inadimplência (%)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-muted-foreground mt-4">
                    Redução de 38% para 15% na inadimplência, demonstrando maior capacidade de pagamento das famílias.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="consumption">
              <Card>
                <CardHeader>
                  <CardTitle>Consumo Médio Mensal de Energia</CardTitle>
                  <CardDescription>
                    Comparação do consumo (kWh) entre beneficiários e não beneficiários
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={consumoData}>
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
                      <Legend />
                      <Bar dataKey="beneficiarios" fill="hsl(var(--success))" name="Beneficiários (kWh)" />
                      <Bar dataKey="nãoBeneficiarios" fill="hsl(var(--muted))" name="Não Beneficiários (kWh)" />
                    </BarChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-muted-foreground mt-4">
                    Consumo consciente: beneficiários mantêm consumo ~30% menor, otimizando uso de energia.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="coverage">
              <Card>
                <CardHeader>
                  <CardTitle>Cobertura Regional do Programa</CardTitle>
                  <CardDescription>
                    Percentual de cobertura e famílias beneficiadas por região
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={regionalCoverage}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="region" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "var(--radius)"
                        }} 
                      />
                      <Legend />
                      <Bar dataKey="cobertura" fill="hsl(var(--accent))" name="Cobertura (%)" />
                      <Bar dataKey="familias" fill="hsl(var(--chart-2))" name="Famílias (milhões)" />
                    </BarChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-muted-foreground mt-4">
                    Maior concentração no Nordeste (52% de cobertura), refletindo vulnerabilidade energética da região.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Program Details */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Como Funciona o Programa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Desconto de até 65% na conta de energia elétrica</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Elegibilidade vinculada ao Cadastro Único e renda per capita até R$ 218</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Cadastro automático para beneficiários do Bolsa Família</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Faixas de desconto progressivas baseadas no consumo mensal</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impactos Observados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Redução de 61% na inadimplência energética</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Economia média de R$ 125/mês por família</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Melhoria na qualidade de vida e acesso a serviços essenciais</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Redução de cortes de energia em domicílios vulneráveis</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuzDoPovoSection;