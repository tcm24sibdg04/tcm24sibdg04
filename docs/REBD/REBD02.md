# C2 : Esquema Conceptual

**Grupo:** tcm24sibdg04  
**Autor:** Iris Correia ([irisCorreia](https://github.com/irisCorreia))

---

## Modelo E/A

![Diagrama do Modelo Entidade-Associação](https://raw.githubusercontent.com/tcm24sibdg04/tcm24sibdg04/refs/heads/main/docs/imagens/diagrama.jpeg)

---

## Entidades

- **PRODUTO** (id_produto, nome, tipo, unidade_medida, stock_atual, stock_minimo)
- **FORNECEDOR** (id_fornecedor, nome, contacto)
- **PEDIDO** (id_pedido, data, total)
- **ITEMPEDIDO** (id_item, id_pedido, id_produto, quantidade)
- **PERDA** (id_perda, id_produto, data, quantidade, id_motivo)
- **MOTIVOPERDA** (id_motivo, descricao)
- **REPOSICAO** (id_reposicao, id_produto, id_fornecedor, data, quantidade)

---

## Associações

- **PEDIDO** 1:N **ITEMPEDIDO** — Um pedido pode ter vários itens.
- **PRODUTO** 1:N **ITEMPEDIDO** — Um produto pode estar em vários itens de pedido.
- **PRODUTO** 1:N **PERDA** — Um produto pode ter várias perdas registadas.
- **PERDA** N:1 **MOTIVOPERDA** — Cada perda tem um motivo associado.
- **PRODUTO** 1:N **REPOSICAO** — Um produto pode ter várias reposições.
- **FORNECEDOR** 1:N **REPOSICAO** — Um fornecedor pode fornecer várias reposições.

---

## Regras de negócio adicionais (Restrições)

- Cada pedido de bebida consome produtos específicos, conforme definido na base de dados.
- O stock de produtos é atualizado automaticamente após o registo de um pedido ou perda.
- Produtos com quantidade inferior ao stock mínimo são marcados como "A terminar", servindo de alerta à gestão.
- Produtos com quantidade igual a zero são considerados "Indisponíveis".
- Não é possível registar perdas sem indicar o motivo, sendo obrigatória a associação a um produto, uma quantidade e uma causa.
- A quantidade em stock não pode assumir valores negativos.
- As alterações manuais ao stock são reservadas a utilizadores com perfil de gestor.
- O sistema garante que os registos de consumo e desperdício atualizam o stock em tempo real.
- O histórico de consumo, desperdício e stock é permanente, não permitindo eliminação de registos.
- O sistema gera relatórios periódicos sobre consumo, perdas e necessidades de reposição.

---

[< Previous](REBD01.md) | [^ Main](../../README.md) | [Next >](REBD03.md)
:--- | :---: | ---: 
