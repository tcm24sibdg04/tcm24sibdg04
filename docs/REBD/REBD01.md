# C1 : Introdução

**Grupo:** tcm24sibdg04  
**Autor:** Iris Correia ([irisCorreia](https://github.com/irisCorreia))

---

## Descrição do Trabalho

O objetivo deste projeto é desenvolver uma solução de base de dados relacional que permita um controlo rigoroso e preciso do stock de produtos (cafés, leites e xaropes) utilizados na produção de bebidas num café. A base de dados foi desenhada para suportar a automatização do registo de consumos, perdas e reposições, bem como a geração de relatórios de apoio à gestão.

Num ambiente onde a rotatividade dos ingredientes é elevada e a exigência de qualidade do serviço é constante, é fundamental que os recursos sejam geridos com precisão. Assim, a base de dados implementada permite:
- O registo automático do consumo de produtos com base nos pedidos efetuados.
- O registo de perdas e desperdícios, com os respetivos motivos.
- A atualização contínua das quantidades disponíveis em stock.
- A geração de relatórios periódicos sobre padrões de consumo, produtos mais utilizados, fontes de desperdício e necessidades de reposição.

Esta solução contribui para a melhoria da eficiência operacional, redução do desperdício e aumento da rentabilidade do negócio, através da organização e integração dos dados.

---

## Modelação do Problema

A gestão de stock nos cafés representa um desafio significativo devido à diversidade de produtos envolvidos e à dinâmica acelerada dos processos de atendimento e produção. Ingredientes como cafés em grão ou moídos, xaropes aromatizados e leites de diferentes composições são utilizados em inúmeras combinações, o que torna o controlo manual do inventário não só trabalhoso como também propenso a erros.

É comum que, devido à ausência de um sistema estruturado, os registos de stock não reflitam com precisão a realidade. Isto pode dever-se a múltiplos fatores, como a falta de registos consistentes dos pedidos, a não contabilização de perdas, o consumo excessivo de ingredientes durante a preparação das bebidas, peripécias no balcão, ou mesmo a deterioração de produtos fora do prazo. Estas falhas originam ruturas inesperadas, perdas financeiras e atrasos no serviço, comprometendo a qualidade da experiência do cliente.

Por outro lado, a inexistência de relatórios fiáveis sobre o consumo e o desperdício impede uma análise crítica dos processos e o planeamento adequado das reposições. Muitas vezes, as encomendas aos fornecedores são feitas com base em estimativas visuais ou rotinas pouco rigorosas, o que contribui para o excesso de stock de certos produtos e a escassez de outros, afetando diretamente a operação do negócio.

Para ultrapassar estas limitações, foi concebida uma base de dados que integra toda a informação relevante ao ciclo de vida dos produtos — desde a entrada no inventário (reposição), passando pelo consumo (pedidos), até ao registo de perdas e desperdícios. O sistema permite ainda a recolha de dados em tempo real ou no final de cada turno, facilitando a atualização do inventário e a análise dos processos.

---

## Descrição dos requisitos do utilizador

**Quem:**  
Os utilizadores principais do sistema são os funcionários do café, que são responsáveis pelo atendimento aos clientes e pelo registo dos pedidos e ocorrências relacionadas ao consumo e desperdício.

**Como:**  
Durante o atendimento, os funcionários registam os pedidos de bebidas num sistema simples e intuitivo, onde cada bebida está associada a uma receita pré-definida.  
No final do turno, os funcionários acedem ao POS para confirmar ou ajustar os valores calculados automaticamente pelo sistema.  
Durante o turno, os funcionários podem usar uma funcionalidade rápida para registar ocorrências anómalas (como desperdícios ou erros) através de botões específicos num dispositivo próximo, sem interromper o atendimento.

**Quando:**  
O registo dos pedidos é feito em tempo real, durante o atendimento ao cliente, de forma automática.  
O processamento e cálculo do consumo total de ingredientes ocorre no final do turno.  
O ajuste e validação dos dados também acontece após o turno, antes da atualização do stock.  
O registo rápido de desperdícios ou erros pode ser efetuado a qualquer momento durante o turno, sempre que ocorrer uma anomalia.

**O quê:**  
- Registo dos pedidos de bebidas com base em receitas predefinidas.
- Cálculo automático do consumo total dos ingredientes usados.
- Validação e ajuste manual dos consumos e desperdícios no final do turno.
- Registo opcional e rápido de desperdícios e erros durante o turno para facilitar a precisão dos dados.
- Atualização automática e fiável do stock de ingredientes com intervenção mínima.

---

## Considerações adicionais

- **Minimização de erros:** A automatização do cálculo do consumo com base em receitas predefinidas reduz erros manuais e aumenta a fiabilidade dos dados.
- **Flexibilidade para exceções:** Deve permitir ajustes manuais para registar pedidos personalizados ou desperdícios não contabilizados automaticamente.
- **Feedback claro e transparência:** O sistema deve apresentar informações de forma clara, possibilitando que os funcionários entendam e confirmem os dados antes da atualização do stock.
- **Níveis de acesso diferenciados:** O sistema deve contemplar diferentes perfis de utilizador, garantindo que gestores tenham permissões ampliadas para edição e análise, enquanto funcionários têm permissões restritas ao registo e validação.

---

| [< Previous](REBD00.md) | [^ Main](../../README.md) | [Next >](REBD02.md) |
|:----------------------:|:------------------------:|:------------------:|
