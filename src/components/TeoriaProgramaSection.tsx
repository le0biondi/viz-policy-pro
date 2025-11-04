import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, DollarSign, Users } from "lucide-react";
import cadeiaResultados from "@/assets/cadeia-resultados-tsee.png";

const TeoriaProgramaSection = () => {
  return (
    <section className="py-20 bg-background" id="teoria-programa">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/10 border border-accent/20">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Arquitetura Programática</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Teoria e Lógica do Programa
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estrutura conceitual e operacional da Tarifa Social de Energia Elétrica
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Visão Geral da Política</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed">
                A Tarifa Social de Energia Elétrica (TSEE) é uma política pública estruturada para promover a inclusão e 
                o bem-estar social por meio da determinação diferenciada de preços para um serviço essencial. Sua teoria e 
                lógica são profundamente enraizadas na compreensão do papel que os preços públicos podem desempenhar na 
                redistribuição de renda e na consecução de objetivos sociais.
              </p>
            </CardContent>
          </Card>

          {/* Problem and Justification */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-warning" />
                <CardTitle>Problema Identificado e Justificativa da Intervenção</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A TSEE emerge como uma resposta a um problema social e econômico persistente: a desigualdade de renda e a 
                incapacidade de uma parcela significativa da população em arcar com o custo total de serviços públicos 
                essenciais, como a energia elétrica.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                O estudo de Andrade (1998) contextualiza a realidade brasileira, apontando que a desigualdade na distribuição 
                de renda é um desafio histórico e que as políticas fiscais tradicionais (tributação) podem ser "bastante 
                ineficazes quanto a suas metas, sendo, na verdade, regressivos em termos de renda" e, por si só, "podem não 
                ser suficientes para aliviar os problemas distributivos".
              </p>
            </CardContent>
          </Card>

          {/* Objectives */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-success" />
                <CardTitle>Objetivos da Política Pública</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Nesse contexto, a TSEE se justifica pela perspectiva de utilizar os preços de bens e serviços fornecidos por 
                empresas públicas (ou reguladas) como um instrumento distributivo complementar. A lógica é que o governo, ao 
                possuir ou regular empresas de serviços públicos, pode intervir nos mercados de bens com uma "finalidade 
                redistributiva para manter o preço dos bens de salário em nível baixo".
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A energia elétrica, sendo um bem de consumo indispensável e um fator de dignidade, é um alvo primordial para 
                tal intervenção. A política busca maximizar o bem-estar social e alcançar metas distributivas por meio da 
                diferenciação tarifária.
              </p>
            </CardContent>
          </Card>

          {/* Key Mechanisms */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Mecanismo de Redistribuição</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Utilização de preços diferenciados como instrumento de política redistributiva, complementando as 
                  ferramentas fiscais tradicionais e promovendo equidade no acesso a serviços essenciais.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <Target className="w-8 h-8 text-accent mb-2" />
                <CardTitle>Focalização Eficiente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Concessão automática baseada em critérios objetivos do Cadastro Único e BPC, garantindo que o benefício 
                  alcance efetivamente as famílias em situação de vulnerabilidade energética.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Results Chain */}
          <Card>
            <CardHeader>
              <CardTitle>Cadeia de Resultados TSEE</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                Fluxo de processos e atores envolvidos na implementação da política pública
              </p>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden border border-border bg-white">
                <img 
                  src={cadeiaResultados} 
                  alt="Cadeia de Resultados da Tarifa Social de Energia Elétrica - Fluxo de processos desde os insumos (CadÚnico, CDE, leis) até os resultados esperados (melhoria da qualidade de vida)" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Leonardo, Samuel e Cecília | Novembro 3, 2025
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeoriaProgramaSection;
