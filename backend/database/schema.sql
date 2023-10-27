-- Active: 1698237009611@@127.0.0.1@3306@obscuria
CREATE TABLE film (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  original_title VARCHAR(255),
  adult BOOLEAN,
  backdrop_path VARCHAR(255),
  overview TEXT,
  vote_average FLOAT,
  vote_count INT,
  price DECIMAL(10, 2),
  release_date DATE,
  poster_path VARCHAR(255),
  genre_ids VARCHAR(255),
  original_language VARCHAR(255)
);



INSERT INTO film (original_title, adult, backdrop_path, overview, vote_average,  vote_count, price, release_date,  poster_path, genre_ids,  original_language) VALUES 
("Hocus Pocus 2", false, "https://image.tmdb.org/t/p/w500/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg", "It’s been 29 years since someone lit the Black Flame Candle and resurrected the 17th-century sisters, and they are looking for revenge. Now it is up to three high-school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow’s Eve.", 7.8, 554, 10, "2022-09-27", "https://image.tmdb.org/t/p/w500/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg", "Fantasy", "en"),
("Orphan: First Kill", false, "https://image.tmdb.org/t/p/w500/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg", "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.", 6.9, 928, 8, "2022-07-27", "https://image.tmdb.org/t/p/w500/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg", "Horror", "en"),
("Bullet Train", false, "https://image.tmdb.org/t/p/w500/y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg", "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.", 7.5, 1592, 8, "2022-07-03", "https://image.tmdb.org/t/p/w500/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg", "Action", "en");










