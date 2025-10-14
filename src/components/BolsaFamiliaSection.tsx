import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, DollarSign, GraduationCap } from "lucide-react";

const povertyData = [
  { year: "2019", pobreza: 24.7, extremaPobreza: 6.5 },
  { year: "2020", pobreza: 26.8, extremaPobreza: 7.6 },
  { year: "2021", pobreza: 29.4, extremaPobreza: 8.4 },
  { year: "2022", pobreza: 28.1, extremaPobreza: 5.9 },
  { year: "2023", pobreza: 27.4, extremaPobreza: 4.4 },
];

const giniData = [
  { year: "2019", gini: 0.543 },
  { year: "2020", gini: 0.556 },
  { year: "2021", gini: 0.544 },
  { year: "2022", gini: 0.521 },
  { year: "2023", gini: 0.518 },
];

const regionalImpact = [
  { region: "Norte", impacto: 32, familias: 2.1 },
  { region: "Nordeste", impacto: 45, familias: 9.8 },
  { region: "Centro-Oeste", impacto: 12, familias: 1.2 },
  { region: "Sudeste", impacto: 18, familias: 5.6 },
  { region: "Sul", impacto: 8, familias: 2.7 },
];

const insegurancaAlimentar = [
  { name: "Segurança Alimentar", value: 72.4, color: "hsl(var(--success))" },
  { name: "Insegurança Leve", value: 18.2, color: "hsl(var(--warning))" },
  { name: "Insegurança Moderada", value: 5.3, color: "hsl(var(--chart-4))" },
  { name: "Insegurança Grave", value: 4.1, color: "hsl(var(--destructive))" },
];

const BolsaFamiliaSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle" id="bolsa-familia">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Programa Bolsa Família
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O maior programa de transferência de renda condicionada do mundo, beneficiando 21,4 milhões de famílias brasileiras
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-2xl">21,4M</CardTitle>
                <CardDescription>Famílias Beneficiadas</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-success hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <TrendingUp className="w-8 h-8 text-success mb-2" />
                <CardTitle className="text-2xl">-48%</CardTitle>
                <CardDescription>Redução Pobreza Extrema</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <DollarSign className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-2xl">R$ 600</CardTitle>
                <CardDescription>Benefício Mínimo</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-l-4 border-l-warning hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <GraduationCap className="w-8 h-8 text-warning mb-2" />
                <CardTitle className="text-2xl">85%</CardTitle>
                <CardDescription>Frequência Escolar Mínima</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Charts Tabs */}
          <Tabs defaultValue="poverty" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="poverty">Pobreza</TabsTrigger>
              <TabsTrigger value="inequality">Desigualdade</TabsTrigger>
              <TabsTrigger value="regional">Impacto Regional</TabsTrigger>
              <TabsTrigger value="food">Segurança Alimentar</TabsTrigger>
            </TabsList>

            <TabsContent value="poverty">
              <Card>
                <CardHeader>
                  <CardTitle>Evolução dos Índices de Pobreza</CardTitle>
                  <CardDescription>
                    Percentual da população em situação de pobreza e extrema pobreza (2019-2023)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={povertyData}>
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
                      <Line 
                        type="monotone" 
                        dataKey="pobreza" 
                        stroke="hsl(var(--chart-1))" 
                        strokeWidth={3}
                        name="Pobreza (%)"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="extremaPobreza" 
                        stroke="hsl(var(--destructive))" 
                        strokeWidth={3}
                        name="Pobreza Extrema (%)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-muted-foreground mt-4">
                    Nota: Queda significativa de 8.4% para 4.4% na extrema pobreza entre 2021 e 2023.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="inequality">
              <Card>
                <CardHeader>
                  <CardTitle>Índice de Gini - Desigualdade de Renda</CardTitle>
                  <CardDescription>
                    Medida de concentração de renda (0 = igualdade perfeita, 1 = desigualdade máxima)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={giniData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                      <YAxis domain={[0.5, 0.56]} stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "var(--radius)"
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="gini" 
                        stroke="hsl(var(--chart-2))" 
                        strokeWidth={3}
                        name="Índice de Gini"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-muted-foreground mt-4">
                    Redução de 0.544 (2021) para 0.518 (2023), indicando melhora na distribuição de renda.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="regional">
              <Card>
                <CardHeader>
                  <CardTitle>Impacto Regional do Programa</CardTitle>
                  <CardDescription>
                    Percentual de redução da pobreza e número de famílias beneficiadas por região
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={regionalImpact}>
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
                      <Bar dataKey="impacto" fill="hsl(var(--primary))" name="Redução Pobreza (%)" />
                      <Bar dataKey="familias" fill="hsl(var(--accent))" name="Famílias (milhões)" />
                    </BarChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-muted-foreground mt-4">
                    Maior impacto observado nas regiões Norte e Nordeste, com maior concentração de vulnerabilidade.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="food">
              <Card>
                <CardHeader>
                  <CardTitle>Segurança Alimentar no Brasil (2023)</CardTitle>
                  <CardDescription>
                    Distribuição da população por nível de segurança alimentar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                      <Pie
                        data={insegurancaAlimentar}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {insegurancaAlimentar.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))", 
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "var(--radius)"
                        }} 
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-muted-foreground mt-4">
                    72,4% da população brasileira com segurança alimentar, representando melhoria significativa desde 2021.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Program Details */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Objetivos do Programa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Combater a fome e promover segurança alimentar e nutricional</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Promover acesso à rede de serviços públicos (saúde, educação e assistência social)</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Estimular a emancipação sustentada das famílias em situação de pobreza</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Combater a pobreza intergeracional</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Condicionalidades</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Frequência escolar mínima de 85% (6-15 anos) e 75% (16-17 anos)</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Acompanhamento do calendário nacional de vacinação</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Realização do acompanhamento pré-natal para gestantes</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Acompanhamento nutricional de crianças menores de 7 anos</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BolsaFamiliaSection;