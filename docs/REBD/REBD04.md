# C4 : Esquema Relacional

**Grupo:** tcm24sibdg04  
**Autor:** Iris Correia ([irisCorreia](https://github.com/irisCorreia))

---

- [Relações](#relações)
  - [PRODUTO](#produto)
  - [FORNECEDOR](#fornecedor)
  - [PEDIDO](#pedido)
  - [ITEMPEDIDO](#itempedido)
  - [PERDA](#perda)
  - [MOTIVOPERDA](#motivoperda)
  - [REPOSICAO](#reposicao)
- [Vistas](#vistas)
  - [produtos_abaixo_minimo](#produtos_abaixo_minimo)
  - [consumo_por_produto](#consumo_por_produto)
  - [desperdicio_por_produto](#desperdicio_por_produto)

---

## Relações

### PRODUTO

**Descrição:**  
Tabela que armazena os produtos utilizados no café, com stock e unidade de medida.

| Nome           | Tipo           | PK | FK | Nulo | Default | Extra         |
|----------------|----------------|----|----|------|---------|---------------|
| id_produto     | INT            | ✔  |    | Não  |         | AUTO_INCREMENT|
| nome           | VARCHAR(100)   |    |    | Não  |         |               |
| tipo           | ENUM           |    |    | Não  |         | ('café','leite','xarope') |
| unidade_medida | VARCHAR(20)    |    |    | Não  |         |               |
| stock_atual    | INT            |    |    | Não  | 0       |               |
| stock_minimo   | INT            |    |    | Não  | 0       |               |

---

### FORNECEDOR

**Descrição:**  
Tabela dos fornecedores de produtos.

| Nome           | Tipo           | PK | FK | Nulo | Default | Extra         |
|----------------|----------------|----|----|------|---------|---------------|
| id_fornecedor  | INT            | ✔  |    | Não  |         | AUTO_INCREMENT|
| nome           | VARCHAR(100)   |    |    | Não  |         |               |
| contacto       | VARCHAR(100)   |    |    | Sim  |         |               |

---

### PEDIDO

**Descrição:**  
Registo dos pedidos efetuados.

| Nome           | Tipo           | PK | FK | Nulo | Default | Extra         |
|----------------|----------------|----|----|------|---------|---------------|
| id_pedido      | INT            | ✔  |    | Não  |         | AUTO_INCREMENT|
| data           | DATETIME       |    |    | Não  |         |               |
| total          | DECIMAL(10,2)  |    |    | Não  |         |               |

---

### ITEMPEDIDO

**Descrição:**  
Itens de cada pedido, associando produtos e quantidades.

| Nome           | Tipo           | PK | FK | Nulo | Default | Extra         |
|----------------|----------------|----|----|------|---------|---------------|
| id_item        | INT            | ✔  |    | Não  |         | AUTO_INCREMENT|
| id_pedido      | INT            |    | ✔  | Não  |         |               |
| id_produto     | INT            |    | ✔  | Não  |         |               |
| quantidade     | INT            |    |    | Não  |         |               |

---

### PERDA

**Descrição:**  
Registo de perdas/desperdícios de produtos.

| Nome           | Tipo           | PK | FK | Nulo | Default | Extra         |
|----------------|----------------|----|----|------|---------|---------------|
| id_perda       | INT            | ✔  |    | Não  |         | AUTO_INCREMENT|
| id_produto     | INT            |    | ✔  | Não  |         |               |
| data           | DATETIME       |    |    | Não  |         |               |
| quantidade     | INT            |    |    | Não  |         |               |
| id_motivo      | INT            |    | ✔  | Não  |         |               |

---

### MOTIVOPERDA

**Descrição:**  
Motivos possíveis para perdas/desperdícios.

| Nome           | Tipo           | PK | FK | Nulo | Default | Extra         |
|----------------|----------------|----|----|------|---------|---------------|
| id_motivo      | INT            | ✔  |    | Não  |         | AUTO_INCREMENT|
| descricao      | VARCHAR(100)   |    |    | Não  |         |               |

---

### REPOSICAO

**Descrição:**  
Registo de reposições de produtos.

| Nome           | Tipo           | PK | FK | Nulo | Default | Extra         |
|----------------|----------------|----|----|------|---------|---------------|
| id_reposicao   | INT            | ✔  |    | Não  |         | AUTO_INCREMENT|
| id_produto     | INT            |    | ✔  | Não  |         |               |
| id_fornecedor  | INT            |    | ✔  | Não  |         |               |
| data           | DATETIME       |    |    | Não  |         |               |
| quantidade     | INT            |    |    | Não  |         |               |

---

## Vistas

### produtos_abaixo_minimo

**Descrição:**  
Lista todos os produtos cujo stock atual está abaixo do stock mínimo.

```sql
CREATE VIEW produtos_abaixo_minimo AS
SELECT nome, tipo, stock_atual, stock_minimo
FROM Produto
WHERE stock_atual < stock_minimo;
```

---

### consumo_por_produto

**Descrição:**  
Mostra o consumo total de cada produto em todos os pedidos.

```sql
CREATE VIEW consumo_por_produto AS
SELECT p.nome, SUM(i.quantidade) AS total_consumido
FROM Produto p
JOIN ItemPedido i ON p.id_produto = i.id_produto
GROUP BY p.nome;
```

---

### desperdicio_por_produto

**Descrição:**  
Mostra o desperdício total de cada produto.

```sql
CREATE VIEW desperdicio_por_produto AS
SELECT p.nome, SUM(per.quantidade) AS total_desperdicado
FROM Produto p
JOIN Perda per ON p.id_produto = per.id_produto
GROUP BY p.nome;
```

---

[< Previous](REBD03.md) | [^ Main](../../README.md) | [Next >](REBD05.md)
:--- | :---: | ---: 
