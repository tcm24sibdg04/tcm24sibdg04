# C4 : Esquema Relacional  <!-- omit in toc -->

- [Relações](#relações)
  - [PRODUTO](#produto)
  - [RECEITA](#receita)
  - [UTILIZADOR](#utilizador)
  - [PEDIDO](#pedido)
  - [DESPERDICIO](#desperdicio)
  - [TURNO](#turno)
  - [INGREDIENTERECEITA](#ingredientereceita)
- [Vistas](#vistas)
  - [vista_consumo_por_receita](#vista_consumo_por_receita)
  - [vista_pedidos_por_turno](#vista_pedidos_por_turno)
  - [vista_desperdicios_detalhados](#vista_desperdicios_detalhados)

## Relações

### PRODUTO

**Descrição:**  
Tabela que armazena os produtos utilizados no café, com stock e unidade de medida.

**Colunas:**

| Nome           | Descrição                  | Domínio       | Default | Automático | Nulo |
|----------------|----------------------------|---------------|---------|------------|------|
| id             | Identificador do produto   | BIGINT        | -       | Sim        | Não  |
| nome           | Nome do produto            | VARCHAR(100)  | -       | Não        | Não  |
| tipo           | Tipo de produto (ex: café, leite, xarope) | VARCHAR(50)  | -       | Não        | Não  |
| quantidadeStock| Quantidade em stock        | DECIMAL(10,2) | 0       | Não        | Não  |
| unidadeMedida  | Unidade de medida (ex: kg, l, unidade) | VARCHAR(20) | - | Não | Não |
| limiteAlerta   | Limite para alerta de stock| DECIMAL(10,2) | 10      | Não        | Não  |

**Restrições de Integridade:**

- **Chave Primária:**  
  - id

- **Unicidade:**

| Nome               | Coluna(s) | Indexar |
|--------------------|-----------|---------|
| produto_nome_unique | nome      | Sim     |

---

### RECEITA

**Descrição:**  
Tabela que representa as receitas das bebidas, associando o nome e descrição.

**Colunas:**

| Nome       | Descrição             | Domínio      | Default | Automático | Nulo |
|------------|-----------------------|--------------|---------|------------|------|
| id         | Identificador da receita | BIGINT     | -       | Sim        | Não  |
| nomeBebida | Nome da bebida         | VARCHAR(100) | -       | Não        | Não  |
| descricao  | Descrição da receita   | TEXT         | -       | Não        | Sim  |

**Restrições de Integridade:**

- **Chave Primária:**  
  - id

---

### UTILIZADOR

**Descrição:**  
Tabela dos funcionários que operam o sistema.

**Colunas:**

| Nome    | Descrição                  | Domínio      | Default | Automático | Nulo |
|---------|----------------------------|--------------|---------|------------|------|
| id      | Identificador do utilizador| BIGINT       | -       | Sim        | Não  |
| nome    | Nome do funcionário        | VARCHAR(100) | -       | Não        | Não  |
| perfil  | Perfil de acesso (gestor, funcionário) | VARCHAR(50) | - | Não | Não |
| login   | Nome de login              | VARCHAR(50)  | -       | Não        | Não  |
| senha   | Palavra-passe encriptada   | VARCHAR(255) | -       | Não        | Não  |

**Restrições de Integridade:**

- **Chave Primária:**  
  - id

---

### PEDIDO

**Descrição:**  
Registo dos pedidos efetuados pelos clientes, associados a receitas, utilizadores e turnos.

**Colunas:**

| Nome       | Descrição              | Domínio    | Default | Automático | Nulo |
|------------|------------------------|------------|---------|------------|------|
| id         | Identificador do pedido| BIGINT     | -       | Sim        | Não  |
| dataHora   | Data e hora do pedido  | TIMESTAMP  | now()   | Não        | Não  |
| id_receita | Receita pedida         | BIGINT     | -       | Não        | Não  |
| id_utilizador | Funcionário que registou | BIGINT  | -       | Não        | Não  |
| id_turno   | Turno em que ocorreu   | BIGINT     | -       | Não        | Não  |

**Restrições de Integridade:**

- **Chave Primária:**  
  - id

- **Chaves Estrangeiras:**

| Nome                | Coluna(s)       | Tabela Referenciada | Coluna(s) Referenciada(s) | Indexar |
|---------------------|-----------------|---------------------|---------------------------|---------|
| pedido_receita_fk   | id_receita       | RECEITA             | id                        | Não     |
| pedido_utilizador_fk| id_utilizador    | UTILIZADOR          | id                        | Não     |
| pedido_turno_fk     | id_turno        | TURNO               | id                        | Não     |

---

### DESPERDICIO

**Descrição:**  
Registo de desperdícios ocorridos, incluindo quantidade, motivo e responsável.

**Colunas:**

| Nome        | Descrição                   | Domínio      | Default | Automático | Nulo |
|-------------|-----------------------------|--------------|---------|------------|------|
| id          | Identificador do desperdício| BIGINT       | -       | Sim        | Não  |
| dataHora    | Data e hora do registo      | TIMESTAMP    | now()   | Não        | Não  |
| quantidade  | Quantidade desperdiçada     | DECIMAL(10,2)| -       | Não        | Não  |
| motivo      | Motivo do desperdício       | VARCHAR(255) | -       | Não        | Não  |
| id_utilizador | Funcionário responsável    | BIGINT       | -       | Não        | Não  |
| id_produto  | Produto associado           | BIGINT       | -       | Não        | Não  |

**Restrições de Integridade:**

- **Chave Primária:**  
  - id

- **Chaves Estrangeiras:**

| Nome                | Coluna(s)       | Tabela Referenciada | Coluna(s) Referenciada(s) | Indexar |
|---------------------|-----------------|---------------------|---------------------------|---------|
| desperdicio_utilizador_fk | id_utilizador | UTILIZADOR          | id                        | Não     |
| desperdicio_produto_fk    | id_produto    | PRODUTO             | id                        | Não     |

---

### TURNO

**Descrição:**  
Turnos de trabalho para associação de pedidos.

**Colunas:**

| Nome       | Descrição          | Domínio    | Default | Automático | Nulo |
|------------|--------------------|------------|---------|------------|------|
| id         | Identificador do turno | BIGINT  | -       | Sim        | Não  |
| data       | Data do turno       | DATE       | -       | Não        | Não  |
| horaInicio | Hora de início      | TIME       | -       | Não        | Não  |
| horaFim    | Hora de fim         | TIME       | -       | Não        | Não  |

**Restrições de Integridade:**

- **Chave Primária:**  
  - id

---

### INGREDIENTERECEITA

**Descrição:**  
Tabela associativa que indica os ingredientes (produtos) usados em cada receita e a quantidade usada.

**Colunas:**

| Nome          | Descrição                 | Domínio       | Default | Automático | Nulo |
|---------------|---------------------------|---------------|---------|------------|------|
| id_receita    | Receita associada          | BIGINT        | -       | Não        | Não  |
| id_produto    | Produto ingrediente       | BIGINT        | -       | Não        | Não  |
| quantidadeUtilizada | Quantidade do ingrediente| DECIMAL(10,2) | -       | Não        | Não  |

**Restrições de Integridade:**

- **Chave Primária:**  
  - id_receita, id_produto

- **Chaves Estrangeiras:**

| Nome                      | Coluna(s)     | Tabela Referenciada | Coluna(s) Referenciada(s) | Indexar |
|---------------------------|---------------|---------------------|---------------------------|---------|
| ingredientereceita_receita_fk | id_receita | RECEITA             | id                        | Não     |
| ingredientereceita_produto_fk | id_produto | PRODUTO             | id                        | Não     |

---

## Vistas

---

### `vista_consumo_por_receita`

**Descrição:**  
Lista o consumo total de cada ingrediente por receita.

```sql
CREATE VIEW vista_consumo_por_receita AS
SELECT 
  RECEITA.nomeBebida,
  PRODUTO.nome AS ingrediente,
  INGREDIENTERECEITA.quantidadeUtilizada,
  PRODUTO.unidadeMedida
FROM 
  INGREDIENTERECEITA
JOIN 
  RECEITA ON INGREDIENTERECEITA.id_receita = RECEITA.id
JOIN 
  PRODUTO ON INGREDIENTERECEITA.id_produto = PRODUTO.id;
````

---

###


`vista_pedidos_por_turno`

**Descrição:**
Lista pedidos efetuados em cada turno com informação do funcionário e receita.

```sql
CREATE VIEW vista_pedidos_por_turno AS
SELECT
  PEDIDO.id,
  PEDIDO.dataHora,
  RECEITA.nomeBebida,
  UTILIZADOR.nome AS funcionario,
  TURNO.data,
  TURNO.horaInicio,
  TURNO.horaFim
FROM
  PEDIDO
JOIN
  RECEITA ON PEDIDO.id_receita = RECEITA.id
JOIN
  UTILIZADOR ON PEDIDO.id_utilizador = UTILIZADOR.id
JOIN
  TURNO ON PEDIDO.id_turno = TURNO.id;
```

---

### `vista_desperdicios_detalhados`

**Descrição:**
Lista desperdícios detalhados com produto, quantidade, motivo e funcionário responsável.

```sql
CREATE VIEW vista_desperdicios_detalhados AS
SELECT
  DESPERDICIO.id,
  DESPERDICIO.dataHora,
  PRODUTO.nome AS produto,
  DESPERDICIO.quantidade,
  DESPERDICIO.motivo,
  UTILIZADOR.nome AS funcionario
FROM
  DESPERDICIO
JOIN
  PRODUTO ON DESPERDICIO.id_produto = PRODUTO.id
JOIN
  UTILIZADOR ON DESPERDICIO.id_utilizador = UTILIZADOR.id;
```
---
[< Previous](REBD03.md) | [^ Main](/../../) | [Next >](REBD05.md)
:--- | :---: | ---: 
