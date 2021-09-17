-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior 
-- que 8 e que estejam em cartaz.
SELECT 
    *
FROM
    Movies
        INNER JOIN
    BoxOffice ON id = movie_id
WHERE
    rating > 8.0 AND theater_id IS NOT NULL;

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo 
-- diretor.
SELECT 
    A.title, A.length_minutes, B.title, B.length_minutes
FROM
    Movies A,
    Movies B
WHERE
    A.director = B.director
        AND A.title != B.title;

-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que 
-- retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 
-- 110 minutos.
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
            international_sales >= 500000000)
        AND length_minutes > 110;
-- 
SELECT 
    title
FROM
    Movies
        INNER JOIN
    BoxOffice ON id = movie_id
WHERE
    (domestic_sales + international_sales) > 500000000
        AND length_minutes > 110;
