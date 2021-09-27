/* Escreva uma query SQL para alterar na tabela locations o nome da coluna street_address para address, 
mantendo o mesmo tipo e tamanho de dados. */

ALTER TABLE locations CHANGE STREET_ADDRESS address VARCHAR(40);
