-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT 
    title, domestic_sales, international_sales
FROM
    Movies
        INNER JOIN
    BoxOffice ON Movies.id = BoxOffice.movie_id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
SELECT 
    title, domestic_sales, international_sales
FROM
    Movies
        INNER JOIN
    BoxOffice ON Movies.id = BoxOffice.movie_id
WHERE
    international_sales > domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT 
    title, rating
FROM
    Movies
        INNER JOIN
    BoxOffice ON id = movie_id
ORDER BY rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo 
-- os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes 
-- cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    name, location, title
FROM
    Theater
        LEFT JOIN
    Movies ON Theater.id = Movies.theater_id
ORDER BY name ASC;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo 
-- os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. 
-- Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    title, director, name
FROM
    Theater
        RIGHT JOIN
    Movies ON Theater.id = Movies.theater_id
ORDER BY name ASC;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT 
    title
FROM
    Movies
WHERE
    id IN (SELECT 
            movie_id
        FROM
            BoxOffice
        WHERE
            rating > 7.5);
-- 
SELECT 
    title
FROM
    Movies
        INNER JOIN
    BoxOffice ON id = movie_id
WHERE
    rating > 7.5;

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.

-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
