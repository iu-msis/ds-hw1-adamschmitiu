DROP TABLE IF EXISTS Comments;
CREATE TABLE Comments (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comment VARCHAR(255) NOT NUll
);

INSERT INTO Comments (id,comment)
VALUES (1, 'I love Data and Systems!');

INSERT INTO Comments (id, comment)
VALUES (2, 'MSIS is the place for me');

INSERT INTO Comments (id, comment)
VALUES (3, 'When I grow up I want to be a cowboy');
