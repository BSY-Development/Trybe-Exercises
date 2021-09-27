/* Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), adicionando-o 
na coluna name . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan , 
como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e
mensure novamente esse custo. */

CREATE FULLTEXT INDEX category_name_index ON category(name);

-- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

-- Query cost: 0.35

DROP 

-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';

-- Query cost: 1.85
