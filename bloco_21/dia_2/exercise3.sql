-- Crie um Trigger na tabela movies que, ao ter algum de seus registros excluídos, deve enviar uma 
-- informação para a tabela movies_logs , onde devem ser guardados a data da exclusão, a 
-- executed_action 'DELETE' e o id do filme excluído.

DELIMITER $$

CREATE TRIGGER deleteMovie
AFTER DELETE ON movies
FOR EACH ROW
BEGIN
	INSERT INTO movies_logs (movie_id, executed_action, log_date) VALUES (OLD.movie_id, 'Delete', NOW());
END $$

DELIMITER ;
