Superhero.destroy_all
User.destroy_all
Team.destroy_all

harman = User.create(username: "harman", password: "harman")

Team.create(user: harman, name: "team 1", team: "Magneto, Batman, Superman")

magneto= Superhero.create(name: "Magneto", intelligence:88, strength:80, speed:27, durability:84, power:91, combat:80, image:"https://www.superherodb.com/pictures2/portraits/10/100/12.jpg")
batman= Superhero.create(name: "Batman", intelligence:81, strength:40, speed:29, durability:55, power:63, combat:90, image:"https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg")
wonder_woman = Superhero.create(name: "Wonder Woman", intelligence:88, strength:100, speed:79, durability:100, power:100, combat:100, image:"https://www.superherodb.com/pictures2/portraits/10/100/807.jpg")
superman= Superhero.create(name: "Superman", intelligence:94, strength:100, speed:100, durability:100, power:100, combat:85, image:"https://www.superherodb.com/pictures2/portraits/10/100/791.jpg")
hulk= Superhero.create(name: "Hulk", intelligence:88, strength:100, speed:63, durability:100, power:98, combat:85, image:"https://www.superherodb.com/pictures2/portraits/10/100/83.jpg")
ironman= Superhero.create(name: "Ironman", intelligence:100, strength:85, speed:58, durability:85, power:100, combat:64, image:"https://www.superherodb.com/pictures2/portraits/10/100/85.jpg")
flash= Superhero.create(name: "Flash", intelligence:63, strength:10, speed:100, durability:50, power:68, combat:32, image:"https://www.superherodb.com/pictures2/portraits/10/100/891.jpg")
black_widow= Superhero.create(name: "Black Widow", intelligence:75, strength:13, speed:33, durability:30, power:36, combat:100, image:"https://www.superherodb.com/pictures2/portraits/10/100/248.jpg")
thanos= Superhero.create(name: "Thanos", intelligence:100, strength:100, speed:33, durability:100, power:100, combat:80, image:"https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg")
doctor_doom= Superhero.create(name: "Doctor Doom", intelligence:100, strength:32, speed:20, durability:100, power:100, combat:84, image:"https://www.superherodb.com/pictures2/portraits/10/100/189.jpg")
loki= Superhero.create(name: "Loki", intelligence:88, strength:63, speed:46, durability:85, power:100, combat:60, image:"https://www.superherodb.com/pictures2/portraits/10/100/928.jpg")
apocalypse= Superhero.create(name: "Apocalypse", intelligence:100, strength:100, speed:33, durability:100, power:100, combat:60, image:"https://www.superherodb.com/pictures2/portraits/10/100/852.jpg")
kingpin= Superhero.create(name: "Kingpin", intelligence:75, strength:18, speed:25, durability:40, power:13, combat:70, image:"https://www.superherodb.com/pictures2/portraits/10/100/623.jpg")
deadpool= Superhero.create(name: "Deadpool", intelligence:69, strength:32, speed:50, durability:100, power:100, combat:100, image:"https://www.superherodb.com/pictures2/portraits/10/100/835.jpg")
black_panther= Superhero.create(name: "Black Panther", intelligence:88, strength:16, speed:30, durability:60, power:41, combat:100, image:"https://www.superherodb.com/pictures2/portraits/10/100/247.jpg")
captain_america= Superhero.create(name: "Captain America", intelligence:69, strength:19, speed:38, durability:55, power:60, combat:100, image:"https://www.superherodb.com/pictures2/portraits/10/100/274.jpg")
galactus= Superhero.create(name: "Galactus", intelligence:100, strength:100, speed:83, durability:100, power:100, combat:50, image:"https://www.superherodb.com/pictures2/portraits/10/100/862.jpg")
green_goblin= Superhero.create(name: "Green Goblin", intelligence:100, strength:48, speed:38, durability:60, power:48, combat:50, image:"https://www.superherodb.com/pictures2/portraits/10/100/579.jpg")
venom= Superhero.create(name: "Venom", intelligence:75, strength:57, speed:65, durability:84, power:86, combat:84, image:"https://www.superherodb.com/pictures2/portraits/10/100/22.jpg")
gladiator= Superhero.create(name: "Gladiator", intelligence:50, strength:100, speed:100, durability:100, power:77, combat:70, image:"https://www.superherodb.com/pictures2/portraits/10/100/1521.jpg")
a_bomb= Superhero.create(name:"A Bomb", intelligence:38, strength:100, speed:17, durability:80, power:24, combat:64, image:"https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg")
abe_sapien= Superhero.create(name:"Abe Sapien", intelligence:88, strength:28, speed:35, durability:65, power:100, combat:85, image:"https://www.superherodb.com/pictures2/portraits/10/100/956.jpg")
abin_sur= Superhero.create(name:"Abin Sur", intelligence:50, strength:90, speed:53, durability:64, power:99, combat:65, image:"https://www.superherodb.com/pictures2/portraits/10/100/1460.jpg")
abomination= Superhero.create(name:"Abomination", intelligence:63, strength:80, speed:53, durability:90, power:62, combat:95, image:"https://www.superherodb.com/pictures2/portraits/10/100/1.jpg")
odin= Superhero.create(name:"Odin", intelligence:100, strength:83, speed:67, durability:95, power:100, combat:90, image:"https://www.superherodb.com/pictures2/portraits/10/100/10388.jpg")
red_skull= Superhero.create(name:"Red Skull", intelligence:75, strength:10, speed:12, durability:14, power:19, combat:80, image:"https://www.superherodb.com/pictures2/portraits/10/100/1392.jpg")
harley_quinn= Superhero.create(name:"Harley Quinn", intelligence:88, strength:12, speed:33, durability:65, power:55, combat:80, image:"https://www.superherodb.com/pictures2/portraits/10/100/701.jpg")
batgirl= Superhero.create(name:"Batgirl", intelligence:88, strength:11, speed:33, durability:40, power:34, combat:90, image:"https://www.superherodb.com/pictures2/portraits/10/100/1111.jpg")
rhino= Superhero.create(name:"Rhino", intelligence:25, strength:80, speed:43, durability:90, power:36, combat:85, image:"https://www.superherodb.com/pictures2/portraits/10/100/15.jpg")

