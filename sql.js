const sql={
    // create database ;
    create database IMDB;
    //use datbase 
    use IMDB;
    // create table for movies
    create table movies (id int primary key ,title varchar(100),titile_img varchar(100));
    
    insert into movies values(1,"mersal","https://www.imdb.com/title/tt9179430/mediaviewer/rm2195919105/?ref_=tt_ov_i"),
    (2,"vikaram","https://www.imdb.com/title/tt9179430/mediaviewer/rm2195919105/?ref_=tt_ov_i"),
    (3,"Dada","https://www.imdb.com/title/tt25405130/mediaviewer/rm789397249/?ref_=tt_ov_i");

    //create table for movie genre
    create table movie_genre(movie_id int, genre varchar(50));
    insert into movie_genre values(1,"love,action"),(2,"entertainment,thiriller"),(3,"romantic,love");

    //create table for movie review
    create table movie_review (movie_id int ,ratings varchar(100) );
    insert into movie_review values (1,"good"),(2,"avg"),(3,"poor");

    //crate table for  artist-name and  skill
    create table artist_name (movie_id int, name varchar(50),skills varchar(50));
    insert into artist_name values(1,"vijay","dance,fight,direction"),(2,"kamal","director,writer"),(3,"kavin","dance,singing");

    //create table for atist-role
    create table artist_role(movie_id int,role varchar(50));
    insert into artist_role values(1,"son,father"),(2,"spy,ex-army"),(3,"father,son");

    //query
    select * from movies;
     select * from movie_genre;
     select * from artist_role ;
     select * from movie_review;
     select * from artist_name;

     //drop table

       drop table movies;
       drop table movie_genre;
       drop table movie_review;
       drop table artist_role;
       drop table artist_name;


}