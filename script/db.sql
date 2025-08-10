create extension if not exists 'uuid-ossp'

create table usuarios (
  id uuid primary KEY,
  name varchar(255) not NULL,
  email varchar(255) not NULL,
  senha varchar(255) not NULL
);

select * from users;