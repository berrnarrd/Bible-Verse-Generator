const localVerses = [
    {
        verse: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
        book: 'John 3:16',
    },
    {
        verse: 'You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love.',
        book: 'Galatians 5:13',
    },
    {
        verse: 'Love is patient and kind. Love is not jealous or boastful or proud or rude. It does not demand its own way. It is not irritable, and it keeps no record of being wronged.',
        book: '1 Corinthians 13:4-5',
    },
    {
        verse: 'Always be joyful. Never stop praying. Be thankful in all circumstances, for this is God’s will for you who belong to Christ Jesus.',
        book: '1 Thessalonians 5:16-18',
    },
    {
        verse: 'Don’t worry about anything; instead, pray about everything. Tell God what you need, and thank him for all he has done. Then you will experience God’s peace, which exceeds anything we can understand. His peace will guard your hearts and minds as you live in Christ Jesus.',
        book: 'Philippians 4:6-7',
    },
    {
        verse: 'And you must commit yourselves wholeheartedly to these commands that I am giving you today. Repeat them again and again to your children. Talk about them when you are at home and when you are on the road, when you are going to bed and when you are getting up.',
        book: 'Deuteronomy 6:6-7',
    }, {
        verse: 'And do everything with love.',
        book: '1 Corinthians 16:14',
    }, {
        verse: 'Don’t be afraid, for I am with you. Don’t be discouraged, for I am your God. I will strengthen you and help you. I will hold you up with my victorious right hand.',
        book: 'Isaiah 41:10',
    }, {
        verse: 'Commit your actions to the Lord, and your plans will succeed.',
        book: 'Proverbs 16:3',
    }, {
        verse: 'For I know the plans I have for you,” says the Lord. They are plans for good and not for disaster, to give you a future and a hope.',
        book: 'Jeremiah 29:11',
    }, {
        verse: 'I pray that from his glorious, unlimited resources he will empower you with inner strength through his Spirit. Then Christ will make his home in your hearts as you trust in him. Your roots will grow down into God’s love and keep you strong.',
        book: 'Ephesians 3:16-17',
    }, {
        verse: 'I tell you, you can pray for anything, and if you believe that you’ve received it, it will be yours.',
        book: 'Mark 11:24',
    }, {
        verse: 'Let me hear of your unfailing love each morning, for I am trusting you. Show me where to walk, for I give myself to you.',
        book: 'Psalm 143:8',
    }, {
        verse: 'I pray that God, the source of hope, will fill you completely with joy and peace because you trust in him. Then you will overflow with confident hope through the power of the Holy Spirit.',
        book: 'Romans 15:13',
    }, {
        verse: 'Work willingly at whatever you do, as though you were working for the Lord rather than for people. Remember that the Lord will give you an inheritance as your reward, and that the Master you are serving is Christ.',
        book: 'Colossians 3:23-24',
    }, {
        verse: 'They replied, “Believe in the Lord Jesus and you will be saved, along with everyone in your household.”',
        book: 'Acts 16:31',
    }, {
        verse: 'For we live by believing and not by seeing.',
        book: '2 Corinthians 5:7',
    }, {
        verse: 'Trust in the Lord with all your heart; do not depend on your own understanding. Seek his will in all you do, and he will show you which path to take.',
        book: 'Proverbs 3:5-6',
    }, {
        verse: 'The Lord keeps you from all harm and watches over your life. The Lord keeps watch over you as you come and go, both now and forever',
        book: 'Psalm 121:7-8',
    }, {
        verse: 'Faith shows the reality of what we hope for; it is the evidence of things we cannot see.',
        book: 'Hebrews 11:1',
    }, {
        verse: 'Jesus told her, “I am the resurrection and the life. Anyone who believes in me will live, even after dying. Everyone who lives in me and believes in me will never ever die. Do you believe this, Martha?”',
        book: 'John 11:25-26',
    }, {
        verse: 'Always be humble and gentle. Be patient with each other, making allowance for each other’s faults because of your love.',
        book: 'Ephesians 4:2',
    }, {
        verse: 'You must serve only the Lord your God. If you do, I will bless you with food and water, and I will protect you from illness.',
        book: 'Exodus 23:25',
    }, {
        verse: 'Do not be afraid or discouraged, for the Lord will personally go ahead of you. He will be with you; he will neither fail you nor abandon you.',
        book: 'Deuteronomy 31:8',
    }, {
        verse: 'May he grant your heart’s desires and make all your plans succeed.',
        book: 'Psalm 20:4',
    }, {
        verse: 'When you go through deep waters, I will be with you. When you go through rivers of difficulty, you will not drown. When you walk through the fire of oppression, you will not be burned up; the flames will not consume you.',
        book: 'Isaiah 43:2',
    }, {
        verse: 'Never let loyalty and kindness leave you! Tie them around your neck as a reminder. Write them deep within your heart. Then you will find favor with both God and people, and you will earn a good reputation.',
        book: 'Proverbs 3:3-4',
    }, {
        verse: 'And we are confident that he hears us whenever we ask for anything that pleases him.',
        book: '1 John 5:14',
    }, {
        verse: 'Three things will last forever—faith, hope, and love—and the greatest of these is love.',
        book: '1 Corinthians 13:13',
    }, {
        verse: 'O Lord, I will honor and praise your name, for you are my God. You do such wonderful things! You planned them long ago, and now you have accomplished them.',
        book: 'Isaiah 25:1',
    }, {
        verse: 'Above all, clothe yourselves with love, which binds us all together in perfect harmony.',
        book: 'Colossians 3:14',
    }, {
        verse: 'This is my command—be strong and courageous! Do not be afraid or discouraged. For the Lord your God is with you wherever you go.',
        book: 'Joshua 1:9',
    },
    {
        verse: 'Every kingdom divided against itself will be ruined, and every city or household divided against itself will not stand.',
        book: 'Matthew 12:25',
    },
    {
        verse: 'But when I am afraid, I will put my trust in you.',
        book: 'Psalm 56:3',
    },
    {
        verse: 'You must each decide in your heart how much to give. And don’t give reluctantly or in response to pressure. For God loves a person who gives cheerfully.',
        book: '2 Corinthians 9:7',
    },
    {
        verse: 'Rejoice in our confident hope. Be patient in trouble, and keep on praying.',
        book: 'Romans 12:12',
    },
    {
        verse: 'So be careful how you live. Don’t live like fools, but like those who are wise. Make the most of every opportunity in these evil days.',
        book: 'Ephesians 5:15-16',
    },
    {
        verse: 'What do you mean, If I can? Jesus asked. Anything is possible if a person believes.',
        book: 'Mark 9:23',
    },
    {
        verse: 'We know how much God loves us, and we have put our trust in his love. God is love, and all who live in love live in God, and God lives in them.',
        book: '1 John 4:16',
    },
    {
        verse: 'Don’t you realize that those who do wrong will not inherit the Kingdom of God? Don’t fool yourselves. Those who indulge in sexual sin, or who worship idols, or commit adultery, or are male prostitutes, or practice homosexuality, or are thieves, or greedy people, or drunkards, or are abusive, or cheat people—none of these will inherit the Kingdom of God.',
        book: '1 Corinthians 6:9-10',
    },
    {
        verse: 'For the Lord is the Spirit, and wherever the Spirit of the Lord is, there is freedom.',
        book: '2 Corinthians 3:17',
    },
    {
        verse: 'Instead, be kind to each other, tenderhearted, forgiving one another, just as God through Christ has forgiven you.',
        book: 'Ephesians 4:32',
    },
    {
        verse: 'I have told you all this so that you may have peace in me. Here on earth you will have many trials and sorrows. But take heart, because I have overcome the world.',
        book: 'John 16:33',
    },
    {
        verse: 'Devote yourselves to prayer with an alert mind and a thankful heart.',
        book: 'Colossians 4:2',
    },
    {
        verse: 'Then if my people who are called by my name will humble themselves and pray and seek my face and turn from their wicked ways, I will hear from heaven and will forgive their sins and restore their land.',
        book: '2 Chronicles 7:14',
    },
    {
        verse: 'Around midnight Paul and Silas were praying and singing hymns to God, and the other prisoners were listening.',
        book: 'Acts 16:25',
    },
    {
        verse: 'How wonderful and pleasant it is when brothers live together in harmony!',
        book: 'Psalm 133:1',
    },
    {
        verse: 'In those days when you pray, I will listen.',
        book: 'Jeremiah 29:12',
    },
    {
        verse: 'I appeal to you, dear brothers and sisters, by the authority of our Lord Jesus Christ, to live in harmony with each other. Let there be no divisions in the church. Rather, be of one mind, united in thought and purpose.',
        book: '1 Corinthians 1:10',
    },
    {
        verse: 'For I hold you by your right hand— I, the Lord your God. And I say to you, Don’t be afraid. I am here to help you.',
        book: 'Isaiah 41:13',
    },
    {
        verse: 'But when you ask him, be sure that your faith is in God alone. Do not waver, for a person with divided loyalty is as unsettled as a wave of the sea that is blown and tossed by the wind.',
        book: 'James 1:6',
    },
    {
        verse: 'Ask me and I will tell you remarkable secrets you do not know about things to come.',
        book: 'Jeremiah 33:3',
    },
    {
        verse: 'Love prospers when a fault is forgiven, but dwelling on it separates close friends.',
        book: 'Proverbs 17:9',
    },
    {
        verse: 'Then Jesus said, “Come to me, all of you who are weary and carry heavy burdens, and I will give you rest.”',
        book: 'Matthew 11:28',
    },
    {
        verse: 'All praise to God, the Father of our Lord Jesus Christ. God is our merciful Father and the source of all comfort. He comforts us in all our troubles so that we can comfort others. When they are troubled, we will be able to give them the same comfort God has given us.',
        book: '2 Corinthians 1:3-4',
    },
    {
        verse: 'The generous will prosper; those who refresh others will themselves be refreshed.',
        book: 'Proverbs 11:25',
    },
    {
        verse: 'My health may fail, and my spirit may grow weak, but God remains the strength of my heart; he is mine forever.',
        book: 'Psalm 73:26',
    }
];