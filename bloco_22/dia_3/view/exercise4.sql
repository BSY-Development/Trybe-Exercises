/* Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila. 
Sua view deve exibir o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir. */

CREATE VIEW movies_languages AS
	SELECT 
		f.title, f.language_id, l.name
	FROM
		film f
			INNER JOIN
		language l ON l.language_id = f.language_id;

SELECT * FROM movies_languages;
