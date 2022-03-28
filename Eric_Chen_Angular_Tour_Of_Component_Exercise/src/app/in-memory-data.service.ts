import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 1,
        name: 'Spider Man',
        age: 28,
        gender: 'Male',
        shortBio:
          'A bite from a spider somehow granted teenager Peter Parker its arachnid abilities and instead of using them for personal gain, he decided to help others with them. An orphan living with his aunt, May Parker, the boy chose to wear a mask while fighting crime so as not to burden her with his actions. Calling himself Spider-Man and sporting a pair of web-shooting devices he’d constructed, Parker wound up in internet videos which attracted the attention of Tony Stark...',

        bio: 'A bite from a spider somehow granted teenager Peter Parker its arachnid abilities and instead of using them for personal gain, he decided to help others with them. An orphan living with his aunt, May Parker, the boy chose to wear a mask while fighting crime so as not to burden her with his actions. Calling himself Spider-Man and sporting a pair of web-shooting devices he’d constructed, Parker wound up in internet videos which attracted the attention of Tony Stark. The billionaire industrialist deduced Spider-Man’s secret identity and approached Parker at his and May’s home in Queens, New York with a request for aid from the hero in an upcoming confrontation with Captain America and a group of other rogue Avengers and associates. Parker was initially hesitant to even admit his secret career as Spider-Man, but the thrill of adventure and Stark’s talk of responsibility drew him in and he accepted the invitation, as well as a new, high-tech costume and web-shooters.',
      },
      {
        id: 2,
        name: 'Iron Man',
        age: 48,
        gender: 'Male',
        shortBio:
          'Tony Stark is the wealthy son of industrialist and weapons manufacturer Howard Stark and his wife, Maria. Tony grew up a genius with a brilliant mind for technology and inventions and, naturally, followed in his father’s footsteps, inheriting Stark Industries upon his parents’ untimely death. Tony designed many weapons of war for Stark Industries, far beyond what any other company was creating, while living the lifestyle of a bon vivant...',
        bio: 'Tony Stark is the wealthy son of industrialist and weapons manufacturer Howard Stark and his wife, Maria. Tony grew up a genius with a brilliant mind for technology and inventions and, naturally, followed in his father’s footsteps, inheriting Stark Industries upon his parents’ untimely death. Tony designed many weapons of war for Stark Industries, far beyond what any other company was creating, while living the lifestyle of a bon vivant. Fate would take a dark turn for Tony Stark once he decided to consult on a weapons contract overseas in enemy terrain. An improvised explosive device exploded underneath Tony’s transport, and he was brought to the brink of death. Awakening as a prisoner of the warlord Wong-Chu, Tony made a gruesome discovery: the explosion had sent a piece of shrapnel mere inches from his heart. It was only the timely intervention of fellow captive and engineer Yinsen that kept the shrapnel at bay.While held captive, and forced to work on weapons, Tony turned his near-death experience into inspiration. What if he could power an iron suit that would not only keep the shrapnel from killing Tony, but also help him to escape?',
      },
      {
        id: 3,
        name: 'Captain America',
        age: 93,
        gender: 'Male',
        shortBio:
          'Envious of his friend Bucky Barnes’ military enlistment, and undeterred by his own multiple rejections by the U.S. Army, physical weakling Steve Rogers made one more attempt to join the march of men to fight for their country in the dark days of World War II. Rogers’ valiant wish to fight bullies wherever they were grabbed the attention of scientist Dr. Abraham Erskine, and he handpicked the idealistic young man for the Army’s Super-Soldier program under his supervision...',
        bio: 'Envious of his friend Bucky Barnes’ military enlistment, and undeterred by his own multiple rejections by the U.S. Army, physical weakling Steve Rogers made one more attempt to join the march of men to fight for their country in the dark days of World War II. Rogers’ valiant wish to fight bullies wherever they were grabbed the attention of scientist Dr. Abraham Erskine, and he handpicked the idealistic young man for the Army’s Super-Soldier program under his supervision. Though Rogers learned of Erskine’s disastrous previous attempts to realize a super-soldier, Germany’s so-called “Red Skull,” he braved the process and emerged from it a new man. With a powerful body and heightened speed and reflexes, Rogers faced his first challenge when forced to chase down Dr. Erskine’s assassin immediately following the experiment. In doing so, he also learned of the involvement of Hydra, the Nazi science division, in the doctor’s murder. The Army moved swiftly to create a colorful, star-spangled persona for Steve Rogers they called “Captain America,” and put him on a tour to sell war bonds. Chafing at what he felt was inaction, Rogers jumped at the chance to join the real fighting when he received news of the capture of his friend Barnes’ army division and rushed to rescue the soldiers. Upon the successful completion of the unplanned mission—and a brief meeting with the Red Skull himself—Rogers determined his path as a one-man fighting force.',
      },
      {
        id: 4,
        name: 'Captain Marvel',
        age: 43,
        gender: 'Female',
        shortBio:
          ' Former Air Force pilot and intelligence agent Carol Danvers pursued her dream of space exploration as a NASA employee, but her life forever changed when she was accidentally transformed into a human-Kree hybrid with extraordinary powers.Now, Carol is the latest warrior to embrace the mantle of Captain Marvel, and she has taken her place as one of the world’s mightiest heroes...',
        bio: 'Former Air Force pilot and intelligence agent Carol Danvers pursued her dream of space exploration as a NASA employee, but her life forever changed when she was accidentally transformed into a human-Kree hybrid with extraordinary powers.Now, Carol is the latest warrior to embrace the mantle of Captain Marvel, and she has taken her place as one of the world’s mightiest heroes. As a NASA security officer, Carol investigated numerous attempts made by the Kree and Skrulls to infiltrate Kennedy Space Center and disrupt America’s space program. During a battle between the heroic Mar-Vell and his rival, Yon-Rogg, Carol was exposed to the Psyche-Magnitron, a Kree device that could make imagination into reality. Carol subconsciously envied Mar-Vell’s powers, and the machine responded to those desires by rewriting her DNA to make her a human/Kree hybrid with abilities similar to his. Carol took on the identity of Ms. Marvel and even fought alongside Mar-Vell/Captain Marvel and the Avengers. Her early career was cut short when Rogue, a member of the Brotherhood of Evil Mutants, attacked Carol and permanently drained her powers and memories. It took years for Carol to recover from her ordeal, but she finally achieved her dream of space exploration and traveled far from Earth. Carol even became cosmically empowered and took on the codename Binary.The Binary powers faded over time, leaving Carol with most of her original abilities. Carol returned to Earth and rejoined the Avengers. Years later, Carol adopted the codename Captain Marvel as a tribute to her fallen friend and mentor. Her prominence has also grown exponentially, and Captain Marvel is now the most popular heroine in the world.',
      },
      {
        id: 5,
        name: 'Thor',
        age: 1500,
        gender: 'Male',
        shortBio:
          'The very skies tremble in his presence. He commands the mystical hammer Mjolnir to protect Asgard and Earth. He is the son of Odin, Prince of Asgard. He is the God of Thunder. He is Thor. Thor was born to the King of the Asgardian Gods, Odin Borson, and the Earth Goddess Gaea. He grew up in Asgard under Odins tutelage and trained in his footsteps to one day lead Asgard. Besides Odin, his stepmother Frigga and his adopted brother Loki are the only family he know, alongside his best friends Sif, Balder, and the Warriors Three...',
        bio: 'The very skies tremble in his presence. He commands the mystical hammer Mjolnir to protect Asgard and Earth. He is the son of Odin, Prince of Asgard. He is the God of Thunder. He is Thor. Thor was born to the King of the Asgardian Gods, Odin Borson, and the Earth Goddess Gaea. He grew up in Asgard under Odins tutelage and trained in his footsteps to one day lead Asgard. Besides Odin, his stepmother Frigga and his adopted brother Loki are the only family he know, alongside his best friends Sif, Balder, and the Warriors Three. Throughout his youth, Thor tested his limits on dangerous missions and became worthy of the Uru hammer Mjolnir, using it to save Sif from the Death Goddess Hela. While the hammer wields destructive powers, it also has the power to build and Thor also uses it to consecrate treaties and bless weddings. In Thors coming of age, he fell through a portal and battled the demigod Hercules. Equal in strength, they fought until Zeus halted their encounter, sending Thor back to Asgard and wiping the memories of both warriors. During the 9th Century, Thor spent time on Earth, leading Vikings into battle. It was not until Thors loyal Vikings attacked a Christian monastery that he turned his back on his followers leaving Earth and spending centuries in Asgard.',
      },
      {
        id: 6,
        name: 'Professor X',
        age: 60,
        gender: 'Male',
        shortBio:
          'Charles Francis Xavier was born the son of nuclear researcher Brian Xavier and his wife, Sharon. Following her husbands accidental death, Sharon married Brians colleague, Kurt Marko. Cain, Kurts son by a previous marriage, came to live at the Xavier’s Westchester mansion shortly thereafter. A cruel and spiteful boy, he bullied his new stepbrother. As punishment, his father secretly beat him - and young Charles felt his siblings pain firsthand thanks to the emergence of his mutant telepathic powers. Following their mother’s death, a fire in the family home took Kurt’s life, leaving the stepbrothers alone...',
        bio: 'Charles Francis Xavier was born the son of nuclear researcher Brian Xavier and his wife, Sharon. Following her husbands accidental death, Sharon married Brians colleague, Kurt Marko. Cain, Kurts son by a previous marriage, came to live at the Xavier’s Westchester mansion shortly thereafter. A cruel and spiteful boy, he bullied his new stepbrother. As punishment, his father secretly beat him - and young Charles felt his siblings pain firsthand thanks to the emergence of his mutant telepathic powers. Following their mother’s death, a fire in the family home took Kurt’s life, leaving the stepbrothers alone. By the time he graduated high school, Charles was completely bald as a side effect of his mutant nature. He entered Bard College in New York at age 16 and earned his bachelors degree in biology within two years. He was then accepted into the graduate-studies program at Englands prestigious Oxford University, where he earned degrees in genetics and biophysics. There, Charles met and fell in love with a young Scotswoman named Moira Kinross. Their passionate discussions on the subject of genetic mutation gave way to romance, and they planned to marry. Their only obstacle was Moiras former boyfriend, Joe MacTaggert, a lance corporal in the Royal Marines and a bully, just like Cain. In Joes eyes, Charles was a good-for-nothing intellectual, so Charles enlisted in the military after completing his studies at Oxford to validate himself in terms his rival would understand.',
      },
      {
        id: 7,
        name: 'Black Panther',
        age: 40,
        gender: 'Male',
        shortBio:
          'A native of the small, yet technologically advanced African nation of Wakanda, T’Challa accepted the mantle of Black Panther, the legendary protector of the Wakandan people, from his father, King T’Chaka, who filled the role before him as his father before him and so on. T’Chaka relinquished the title as he grew older and delved further into politics. This was a subject T’Challa looked upon with some dislike, although he acknowledged the increasing importance of it, even as Wakanda maintained an air of secrecy to hide its true nature and precious vibranium mines...',
        bio: 'A native of the small, yet technologically advanced African nation of Wakanda, T’Challa accepted the mantle of Black Panther, the legendary protector of the Wakandan people, from his father, King T’Chaka, who filled the role before him as his father before him and so on. T’Chaka relinquished the title as he grew older and delved further into politics. This was a subject T’Challa looked upon with some dislike, although he acknowledged the increasing importance of it, even as Wakanda maintained an air of secrecy to hide its true nature and precious vibranium mines. Regardless of his feelings for Wakanda’s part on the world stage, T’Challa accompanied T’Chaka to an international summit in Vienna, Austria to ratify the Sokovia Accords, which promised to regulate all enhanced persons. Sadly, T’Chaka lost his life when Sokovian radical Helmut Zemo detonated a bomb at the well-attended meeting of heads of state, framing Bucky Barnes, the Winter Soldier, in the process. At that moment, not only did the throne of Wakanda pass to T’Challa, but also the full weight of the Black Panther’s responsibilities, including the task of revenge for the death of the king.',
      },
      {
        id: 8,
        name: 'Hulk',
        age: 49,
        gender: 'Male',
        shortBio:
          'Bioscience genius Dr. Bruce Banner focused his major studies on the effects of gamma radiation on humans, working alongside Dr. Betty Ross at a Virginia University lab. Dr. Ross’ father, General “Thunderbolt” Ross of the U.S. Army, channeled Banner’s work into a program to develop weapons for the military, unbeknownst to both doctors. When Banner decided to test what he learned on himself, he triggered a fantastic transformation in himself that resulted in an immense, hulking figure fueled by his own rage...',
        bio: 'Bioscience genius Dr. Bruce Banner focused his major studies on the effects of gamma radiation on humans, working alongside Dr. Betty Ross at a Virginia University lab. Dr. Ross’ father, General “Thunderbolt” Ross of the U.S. Army, channeled Banner’s work into a program to develop weapons for the military, unbeknownst to both doctors. When Banner decided to test what he learned on himself, he triggered a fantastic transformation in himself that resulted in an immense, hulking figure fueled by his own rage.Having destroyed his lab as the creature, and inadvertently harming Ross in the process, Banner slipped away to avoid capture and study by the Army and began a desperate quest for a cure to his bizarre affliction. As intelligent and cerebral as Bruce Banner is, his alter-ego the Hulk is a completely physical phenomenon. The green behemoth possesses the greatest raw strength of any natural being on Earth, with an upper limit that has yet to be fully tested. His leg muscles allow him to leap great distances and land without harm, and his skin can resist damage from heavy weaponry, as well as the natural elements and even unnatural ones.',
      },
      {
        id: 9,
        name: 'Dr. Strange',
        age: 36,
        gender: 'Male',
        shortBio:
          'Vain, egotistic surgeon Stephen Strange lost the use of his hands in a horrific auto accident caused by his own recklessness. In turn, he lost his fortune through a series of costly, complicated and experimental surgeries and therapies in an attempt to save his livelihood. In the end, destitute and desperate, he sought a cure far off the beaten path of modern medicine. In Nepal, after being saved from muggers by the powerful sorcerer Mordo, Strange met the person who had taught Mordo—Earth’s Sorcerer Supreme, the Ancient One, who held many mysteries of the Old World, including the potential to heal Strange’s hands...',
        bio: 'Vain, egotistic surgeon Stephen Strange lost the use of his hands in a horrific auto accident caused by his own recklessness. In turn, he lost his fortune through a series of costly, complicated and experimental surgeries and therapies in an attempt to save his livelihood. In the end, destitute and desperate, he sought a cure far off the beaten path of modern medicine. In Nepal, after being saved from muggers by the powerful sorcerer Mordo, Strange met the person who had taught Mordo—Earth’s Sorcerer Supreme, the Ancient One, who held many mysteries of the Old World, including the potential to heal Strange’s hands. he Ancient One refused to guide Strange through the process until he relinquished his selfishness and opened his mind to a higher truth. Having done so, the doctor began to learn of the Multiverse and the ancient science of magic, as well as forbidden knowledge the Ancient One was not inclined to share. A Master of the Mystic Arts, Doctor Strange has phenomenally powerful magical abilities that enable him to skillfully conjure myriad spells. Strange has been able to use his spells to bind opponents and create complex shields and barriers, among many other uses for both defense and attack. Strange is also adept at astral projection, sending his astral self away from his body and allowing him to observe events without the knowledge of those present.',
      },
      {
        id: 10,
        name: 'Black Widow',
        age: 32,
        gender: 'Female',
        shortBio:
          'Natasha Romanoff was trained from a young age to cultivate a very specific set of skills in a Russian facility called the Red Room. There she honed the skills that would turn her into a human warrior who continues to stand shoulder-to-shoulder with super soldiers, Asgardians and people in armored suits. However, she eventually eschewed her KGB masters, switched allegiances and began working for the good guys...',
        bio: 'Natasha Romanoff was trained from a young age to cultivate a very specific set of skills in a Russian facility called the Red Room. There she honed the skills that would turn her into a human warrior who continues to stand shoulder-to-shoulder with super soldiers, Asgardians and people in armored suits. However, she eventually eschewed her KGB masters, switched allegiances and began working for the good guys. Exhibiting no super human abilities, the Black Widow boasts ultimate human levels of strength, agility, and stamina. She is extensively trained to near perfection in a variety of fighting styles, such as karate, judo, kung fu, and wrestling, and with all manner of weapons—both traditional and high-tech—combined with her background in gymnastics, acrobatics, and ballet to always accomplish her mission. She can use a simple handgun just as well as a Chitauri battle staff or even Captain Americas shield. Her signature weapons include dual batons, a pair of Glock 26s and the Black Widow’s Bite—bracelets that discharge electricity. Romanoff also displays great skill when it comes to hacking in computers and technological systems to dig for information or regaining control.',
      },
      {
        id: 11,
        name: 'Vision',
        age: 7,
        gender: 'Male',
        shortBio:
          'Ultron began creating the body that would become Vision for himself using Dr. Helen Cho’s regeneration Cradle, as well as stolen Vibranium and the gem from Loki’s scepter – which was in fact the Infinity Stone known as the Mind Stone. When Tony Stark and Bruce Banner realized they could still use the unfinished form for good, they incorporated Tony’s JARVIS operating system into the body. Thor added the final piece of the puzzle by bringing his mystic lightning down to finally bring the creation to life. Vision lived and he set about doing what he could to help the Avengers.',
        bio: 'Ultron began creating the body that would become Vision for himself using Dr. Helen Cho’s regeneration Cradle, as well as stolen Vibranium and the gem from Loki’s scepter – which was in fact the Infinity Stone known as the Mind Stone. When Tony Stark and Bruce Banner realized they could still use the unfinished form for good, they incorporated Tony’s JARVIS operating system into the body. Thor added the final piece of the puzzle by bringing his mystic lightning down to finally bring the creation to life. Vision lived and he set about doing what he could to help the Avengers.Thanks to his artificial intelligence, Vibranium-infused synthetic body and the Mind Stone implanted in his forehead, Vision boasts an incredible number of unique powers.He can access and process huge amounts of data in very short periods of time, making him supremely intelligent. He is able to phase through solid matter with ease. The synthetic lifeform also possesses super human strength and the ability to fly. Vision can also use the Mind Stone itself to create high-powered energy beams.',
      },
    ];
    return { heroes };
  }
}
