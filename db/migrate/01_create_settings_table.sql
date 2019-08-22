create table if not exists settings (id serial primary key,name varchar(255) unique,value varchar(255));


insert into settings (name,value)
select *
from (
      values ('temperature',
              '20'), ('psm',
                      'on'), ('location',
                              'London')) a (name, value)
where not exists
    (select *
     from settings b
     where a.name = b.name)