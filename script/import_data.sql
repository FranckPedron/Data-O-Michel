INSERT INTO public.user(
	id, email, "name", username, create_date, password)
	VALUES  (1, 'toto@gmail.com', 'toto', 'totouser', '2022-04-22 11:00:00', 'azerty1' ),
            (2, 'titi@gmail.com', 'titi', 'titiuser', '2022-04-22 11:01:00', 'azerty2'),
            (3, 'tutu@gmail.com', 'tutu', 'tutuser', '2022-04-22 11:02:00', 'azerty3'),
            (4, 'tata@gmail.com', 'tata', 'tatauser', '2022-04-22 11:03:00', 'azerty4'),
            (5, 'tztz@gmail.com', 'tztz', 'tztzuser', '2022-04-22 11:04:00', 'azerty5');

INSERT INTO public.video(
	id, user_id, url, "name", date, username)
	VALUES  (1, 1, 'https://www.youtube.com/watch?v=Qvq6VSMKDVs', 'toto', '2022-04-22 11:05:00','totouser') ,
            (2, 1, 'https://www.youtube.com/watch?v=8ARodQ4Wlf4', 'toto', '2022-04-23 11:05:00','totouser') ,
            (3, 1, 'https://github.com/O-clock-Atome/funny-socket', 'toto', '2022-04-23 12:05:00','totouser') ,
            (4, 2, 'https://www.youtube.com/watch?v=5nSFArCgCXA', 'titi', '2022-04-22 12:01:00','titiuser') ,
            (5, 2, 'https://www.youtube.com/watch?v=iik25wqIuFo', 'titi', '2022-04-22 13:01:00','titiuser') ,
            (6, 2, 'https://www.youtube.com/watch?v=3ymwOvzhwHs', 'titi', '2022-04-22 13:05:00','titiuser') ;

INSERT INTO public.chat(
	id, user_id, content, date )
	VALUES  (1, 3, "Salut!", '2022-04-22 11:05:34') ,
            (2, 3, "Ca va!", '2022-04-22 11:05:54') ,
            (3, 4, "Ca va et toi ?", '2022-04-22 11:06:14') ,
            (4, 4, "Très belle vidéo !", '2022-04-22 11:06:45') ,
            (4, 5, "bonjour à tous !", '2022-04-22 11:07:17') ;