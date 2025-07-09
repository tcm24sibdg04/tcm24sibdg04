# C5 : SQL

**Grupo:** tcm24sibdg04  
**Autor:** Iris Correia ([irisCorreia](https://github.com/irisCorreia))

---

## DDL

```sql
CREATE DATABASE IF NOT EXISTS tcm24sibdg04;
USE tcm24sibdg04;

-- Drop tables if they exist
DROP TABLE IF EXISTS Reposicao;
DROP TABLE IF EXISTS Perda;
DROP TABLE IF EXISTS MotivoPerda;
DROP TABLE IF EXISTS ItemPedido;
DROP TABLE IF EXISTS Pedido;
DROP TABLE IF EXISTS Fornecedor;
DROP TABLE IF EXISTS Produto;

-- Create tables
CREATE TABLE Produto (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo ENUM('café', 'leite', 'xarope') NOT NULL,
    unidade_medida VARCHAR(20) NOT NULL,
    stock_atual INT NOT NULL DEFAULT 0,
    stock_minimo INT NOT NULL DEFAULT 0
);

CREATE TABLE Fornecedor (
    id_fornecedor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    contacto VARCHAR(100)
);

CREATE TABLE Pedido (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    data DATETIME NOT NULL,
    total DECIMAL(10,2) NOT NULL
);

CREATE TABLE ItemPedido (
    id_item INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES Produto(id_produto)
);

CREATE TABLE MotivoPerda (
    id_motivo INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL
);

CREATE TABLE Perda (
    id_perda INT AUTO_INCREMENT PRIMARY KEY,
    id_produto INT NOT NULL,
    data DATETIME NOT NULL,
    quantidade INT NOT NULL,
    id_motivo INT NOT NULL,
    FOREIGN KEY (id_produto) REFERENCES Produto(id_produto),
    FOREIGN KEY (id_motivo) REFERENCES MotivoPerda(id_motivo)
);

CREATE TABLE Reposicao (
    id_reposicao INT AUTO_INCREMENT PRIMARY KEY,
    id_produto INT NOT NULL,
    id_fornecedor INT NOT NULL,
    data DATETIME NOT NULL,
    quantidade INT NOT NULL,
    FOREIGN KEY (id_produto) REFERENCES Produto(id_produto),
    FOREIGN KEY (id_fornecedor) REFERENCES Fornecedor(id_fornecedor)
);
```

---

## DML

```sql
-- Inserir produtos de exemplo
INSERT INTO Produto (nome, tipo, unidade_medida, stock_atual, stock_minimo) VALUES
('Café Expresso', 'café', 'ml', 1000, 200),
('Café Descafeinado', 'café', 'ml', 800, 150),
('Café Latte', 'café', 'ml', 1200, 250),
('Leite Meio-Gordo', 'leite', 'ml', 2000, 500),
('Leite Magro', 'leite', 'ml', 1500, 400),
('Leite de Soja', 'leite', 'ml', 1000, 300),
('Xarope de Baunilha', 'xarope', 'ml', 500, 100),
('Xarope de Caramelo', 'xarope', 'ml', 600, 120),
('Xarope de Avelã', 'xarope', 'ml', 400, 80),
('Café Moído', 'café', 'g', 3000, 500),
('Café em Grão', 'café', 'g', 2500, 400),
('Leite de Amêndoa', 'leite', 'ml', 900, 200),
('Xarope de Chocolate', 'xarope', 'ml', 700, 150),
('Café Solúvel', 'café', 'g', 600, 100),
('Leite Condensado', 'leite', 'ml', 300, 50),
('Xarope de Menta', 'xarope', 'ml', 350, 70),
('Café Arábica', 'café', 'g', 1200, 300),
('Café Robusta', 'café', 'g', 1100, 250),
('Leite Integral', 'leite', 'ml', 1800, 400),
('Leite Sem Lactose', 'leite', 'ml', 1000, 200),
('Xarope de Morango', 'xarope', 'ml', 450, 90),
('Xarope de Framboesa', 'xarope', 'ml', 300, 60),
('Café Orgânico', 'café', 'g', 900, 200),
('Leite de Aveia', 'leite', 'ml', 800, 150),
('Xarope de Coco', 'xarope', 'ml', 200, 40),
('Café Gourmet', 'café', 'g', 700, 120),
('Leite de Caju', 'leite', 'ml', 500, 100),
('Xarope de Limão', 'xarope', 'ml', 250, 50),
('Café Turco', 'café', 'g', 400, 80),
('Leite de Arroz', 'leite', 'ml', 600, 120);

-- Inserir fornecedores de exemplo
INSERT INTO Fornecedor (nome, contacto) VALUES
('Fornecedor A', 'fornecedorA@email.com'),
('Fornecedor B', 'fornecedorB@email.com'),
('Fornecedor C', 'fornecedorC@email.com');

-- Inserir motivos de perda
INSERT INTO MotivoPerda (descricao) VALUES
('Derrame'),
('Validade Expirada'),
('Erro de Produção'),
('Quebra de Embalagem'),
('Consumo Interno');

-- Inserir pedidos de exemplo
INSERT INTO Pedido (data, total) VALUES
('2024-06-01 10:00:00', 12.50),
('2024-06-01 11:00:00', 8.00);

-- Inserir itens de pedido
INSERT INTO ItemPedido (id_pedido, id_produto, quantidade) VALUES
(1, 1, 2),
(1, 4, 1),
(2, 2, 1),
(2, 5, 1);

-- Inserir perdas
INSERT INTO Perda (id_produto, data, quantidade, id_motivo) VALUES
(1, '2024-06-01 12:00:00', 10, 1),
(4, '2024-06-01 13:00:00', 20, 2);

-- Inserir reposições
INSERT INTO Reposicao (id_produto, id_fornecedor, data, quantidade) VALUES
(1, 1, '2024-06-01 09:00:00', 500),
(4, 2, '2024-06-01 09:30:00', 1000);
```

---

[< Previous](REBD04.md) | [^ Main](../../README.md) | [Next >](REBD00.md)
:--- | :---: | ---: 
