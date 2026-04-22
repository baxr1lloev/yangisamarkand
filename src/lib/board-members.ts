import { Locale } from "@/lib/dictionaries";

export type BoardRole = "chairman" | "deputyChairman" | "member";

type LocalizedText = Record<Locale, string>;

export type BoardMember = {
  id: number;
  name: LocalizedText;
  workplace: LocalizedText;
  role: BoardRole;
  image: string;
};

export const boardRoleLabels: Record<Locale, Record<BoardRole, string>> = {
  en: {
    chairman: "Chairman of the Board",
    deputyChairman: "Deputy Chairman of the Board",
    member: "Member of the Council",
  },
  ru: {
    chairman: "Председатель Правления",
    deputyChairman: "Заместитель председателя Правления",
    member: "Член Совета",
  },
  uz: {
    chairman: "Boshqaruv raisi",
    deputyChairman: "Boshqaruv raisi o‘rinbosari",
    member: "Kengash a'zosi",
  },
};

export const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: {
      en: "Abdullayev Kamol Talatovich",
      ru: "АБДУЛЛАЕВ Камол Талъатович",
      uz: "Abdullaev Kamol Talatovich",
    },
    workplace: {
      en: 'Group of Companies “SAG”',
      ru: 'Группа компаний “SAG”',
      uz: 'Kompaniyalar guruhi “SAG”',
    },
    role: "deputyChairman",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 2,
    name: {
      en: "Azizov Sukhrob Khamidovich",
      ru: "АЗИЗОВ Сухроб Хамидович",
      uz: "Azizov Suxrob Xamidovich",
    },
    workplace: {
      en: 'LLC “GULOBOD YUG’OCH”',
      ru: 'ООО “GULOBOD YUG’OCH”',
      uz: 'MChJ “GULOBOD YUG’OCH”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 3,
    name: {
      en: "Azimov Sokhib",
      ru: "АЗИМОВ Сохиб",
      uz: "Azimov Soxib",
    },
    workplace: {
      en: 'LLC “IDEAL ELEKTRO LYUKS”',
      ru: 'ООО “IDEAL ELEKTRO LYUKS”',
      uz: 'MChJ “IDEAL ELEKTRO LYUKS”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 4,
    name: {
      en: "Akhmyedov Akmal Shomurodovich",
      ru: "АХМЕДОВ Акмал Шомуродович",
      uz: "Axmedov Akmal Shomurodovich",
    },
    workplace: {
      en: 'Group of Companies “FERRE”',
      ru: 'Группа компаний “FERRE”',
      uz: 'Kompaniyalar guruhi “FERRE”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1374&auto=format&fit=crop",
  },
  {
    id: 5,
    name: {
      en: "Bagirov Nosir Musaevich",
      ru: "БАГИРОВ Носир Мусаевич",
      uz: "Bagirov Nosir Musaevich",
    },
    workplace: {
      en: 'LLC “CHAYKA STROY SERVIS”',
      ru: 'ООО “CHAYKA STROY SERVIS”',
      uz: 'MChJ “CHAYKA STROY SERVIS”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 6,
    name: {
      en: "Bakhranov Damir Ravshanjonovich",
      ru: "БАХРАНОВ Дамир Равшанжонович",
      uz: "Baxranov Damir Ravshanjonovich",
    },
    workplace: {
      en: 'LLC “ASIA METALL PROF”',
      ru: 'ООО “ASIA METALL PROF”',
      uz: 'MChJ “ASIA METALL PROF”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 7,
    name: {
      en: "Byeknazarov Bakhtiyor Barakaevich",
      ru: "БЕКНАЗАРОВ Бахтиёр Баракаевич",
      uz: "Beknazarov Baxtiyor Barakaevich",
    },
    workplace: {
      en: 'LLC “SAMARKAND GOLDEN CHEAKPEAS”',
      ru: 'ООО “SAMARKAND GOLDEN CHEAKPEAS”',
      uz: 'MChJ “SAMARKAND GOLDEN CHEAKPEAS”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 8,
    name: {
      en: "Ibragimov Nozir Alievich",
      ru: "ИБРАГИМОВ Нозир Алиевич",
      uz: "Ibragimov Nozir Alievich",
    },
    workplace: {
      en: 'Tsentr Dualnogo obrazovaniya Samarkandskogo Mejdunarodnogo Tekhnologicheskogo Universiteta',
      ru: 'Центр Дуального образования Самаркандского Международного Технологического Университета',
      uz: 'Tsentr Dualnogo obrazovaniya Samarkandskogo Mejdunarodnogo Texnologicheskogo Universiteta',
    },
    role: "deputyChairman",
    image: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 9,
    name: {
      en: "Jalolov Shavkat Amonovich",
      ru: "ЖАЛОЛОВ Шавкат Амонович",
      uz: "Jalolov Shavkat Amonovich",
    },
    workplace: {
      en: 'Group of Companies “AGROMIR”',
      ru: 'Группа компаний “AGROMIR”',
      uz: 'Kompaniyalar guruhi “AGROMIR”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 10,
    name: {
      en: "Djakhangirov Tolib",
      ru: "ДЖАХАНГИРОВ Толиб",
      uz: "Djaxangirov Tolib",
    },
    workplace: {
      en: 'LLC “SHAKHEREZADE TOUR”',
      ru: 'ООО “SHAKHEREZADE TOUR”',
      uz: 'MChJ “SHAKHEREZADE TOUR”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 11,
    name: {
      en: "Ziyoyev Fayzullo Ziyoevich",
      ru: "ЗИЁЕВ Файзулло Зиёевич",
      uz: "Ziyoev Fayzullo Ziyoevich",
    },
    workplace: {
      en: 'LLC “SAMARQAND KONSERVA”',
      ru: 'ООО “SAMARQAND KONSERVA”',
      uz: 'MChJ “SAMARQAND KONSERVA”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 12,
    name: {
      en: "Karimov Ravshan Murodovich",
      ru: "КАРИМОВ Равшан Муродович",
      uz: "Karimov Ravshan Murodovich",
    },
    workplace: {
      en: 'Group of Companies “METIN”',
      ru: 'Группа компаний “METIN”',
      uz: 'Kompaniyalar guruhi “METIN”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 13,
    name: {
      en: "Komilov Nasim Qobiljonovich",
      ru: "КОМИЛОВ Насим Қобилжонович",
      uz: "Komilov Nasim Qobiljonovich",
    },
    workplace: {
      en: 'Group of Companies “MEROS”',
      ru: 'Группа компаний “MEROS”',
      uz: 'Kompaniyalar guruhi “MEROS”',
    },
    role: "deputyChairman",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 14,
    name: {
      en: "Kuchkarova Gulbeka Allamuratovna",
      ru: "КУЧКАРОВА Гулбека Алламуратовна",
      uz: "Kuchkarova Gulbeka Allamuratovna",
    },
    workplace: {
      en: 'Private Enterprise "BEKA CHAROS"',
      ru: 'Частное предприятие "BEKA CHAROS"',
      uz: 'Xususiy korxona "BEKA CHAROS"',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1374&auto=format&fit=crop",
  },
  {
    id: 15,
    name: {
      en: "Marupov Bakhtiyor Makhmudovich",
      ru: "МАРУПОВ Бахтиёр Махмудович",
      uz: "Marupov Baxtiyor Maxmudovich",
    },
    workplace: {
      en: 'Group of Companies “SIYOB”',
      ru: 'Группа компаний “SIYOB”',
      uz: 'Kompaniyalar guruhi “SIYOB”',
    },
    role: "deputyChairman",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 16,
    name: {
      en: "Mirboboyev Shakhob Asatilla Ogli",
      ru: "МИРБОБОЕВ Шахоб Асатилла ўғли",
      uz: "Mirboboev Shaxob Asatilla O‘G‘Li",
    },
    workplace: {
      en: 'LLC “URGUT MIKRO METALL”',
      ru: 'ООО “URGUT MIKRO METALL”',
      uz: 'MChJ “URGUT MIKRO METALL”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 17,
    name: {
      en: "Munisov Abduaziz Abduborievich",
      ru: "МУНИСОВ Абдуазиз Абдубориевич",
      uz: "Munisov Abduaziz Abduborievich",
    },
    workplace: {
      en: 'Group of Companies “TESPACK”',
      ru: 'Группа компаний “TESPACK”',
      uz: 'Kompaniyalar guruhi “TESPACK”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 18,
    name: {
      en: "Niyazova Maryam Kadirovna",
      ru: "НИЯЗОВА Марьям Кадировна",
      uz: "Niyazova Maryam Kadirovna",
    },
    workplace: {
      en: 'Private Enterprise "KUMUSH TOLA"',
      ru: 'Частное предприятие "KUMUSH TOLA"',
      uz: 'Xususiy korxona "KUMUSH TOLA"',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 19,
    name: {
      en: "Norboyev Anvar Ochilovich",
      ru: "НОРБОЕВ Анвар Очилович",
      uz: "Norboev Anvar Ochilovich",
    },
    workplace: {
      en: 'LLC “KATTAQO’RG’ON ELEKTROTEXNIKA ZAVODI”',
      ru: 'ООО “KATTAQO’RG’ON ELEKTROTEXNIKA ZAVODI”',
      uz: 'MChJ “KATTAQO’RG’ON ELEKTROTEXNIKA ZAVODI”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 20,
    name: {
      en: "Rakhmatov Farkhod",
      ru: "РАХМАТОВ Фарход",
      uz: "Raxmatov Farxod",
    },
    workplace: {
      en: 'LLC “GULOBOD MEBEL”',
      ru: 'ООО “GULOBOD MEBEL”',
      uz: 'MChJ “GULOBOD MEBEL”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 21,
    name: {
      en: "Rakhimov Polat Rakhimovich",
      ru: "РАХИМОВ Пўлат Рахимович",
      uz: "Raximov Po‘Lat Raximovich",
    },
    workplace: {
      en: 'Group of Companies “REGAL”',
      ru: 'Группа компаний “REGAL”',
      uz: 'Kompaniyalar guruhi “REGAL”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 22,
    name: {
      en: "Saidmurodov Oktam Saidmurodovich",
      ru: "САИДМУРОДОВ Ўктам Саидмуродович",
      uz: "Saidmurodov O‘Ktam Saidmurodovich",
    },
    workplace: {
      en: 'LLC “STEKLOPLASTIK”',
      ru: 'ООО “STEKLOPLASTIK”',
      uz: 'MChJ “STEKLOPLASTIK”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 23,
    name: {
      en: "Salimova Sayyora Tojievna",
      ru: "САЛИМОВА Сайёра Тожиевна",
      uz: "Salimova Sayyora Tojievna",
    },
    workplace: {
      en: 'LLC "EKO PLANETA"',
      ru: 'ООО "EKO PLANETA"',
      uz: 'MChJ "EKO PLANETA"',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 24,
    name: {
      en: "Torayev Zafar Suyunovich",
      ru: "ТЎРАЕВ Зафар Суюнович",
      uz: "To‘Raev Zafar Suyunovich",
    },
    workplace: {
      en: 'Group of Companies “SXF”',
      ru: 'Группа компаний “SXF”',
      uz: 'Kompaniyalar guruhi “SXF”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1374&auto=format&fit=crop",
  },
  {
    id: 25,
    name: {
      en: "Fayzullayev Sukhrob Abdullaevich",
      ru: "ФАЙЗУЛЛАЕВ Сухроб Абдуллаевич",
      uz: "Fayzullaev Suxrob Abdullaevich",
    },
    workplace: {
      en: 'LLC “STAR LINGER”',
      ru: 'ООО “STAR LINGER”',
      uz: 'MChJ “STAR LINGER”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 26,
    name: {
      en: "Kholikov Narziqul Akhtamovich",
      ru: "ХОЛИКОВ Нарзиқул Ахтамович",
      uz: "Xolikov Narziqul Axtamovich",
    },
    workplace: {
      en: 'LLC “ХAMIDOV MURODJON”',
      ru: 'ООО “ХAMIDOV MURODJON”',
      uz: 'MChJ “ХAMIDOV MURODJON”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 27,
    name: {
      en: "Sharipov Shavkat Oktamovich",
      ru: "ШАРИПОВ Шавкат Ўктамович",
      uz: "Sharipov Shavkat O‘Ktamovich",
    },
    workplace: {
      en: 'Concern “SHARQ SANOAT”',
      ru: 'Концерн “SHARQ SANOAT”',
      uz: 'Konsern “SHARQ SANOAT”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 28,
    name: {
      en: "Shodmonqulov Bakhtiyor Gulomovich",
      ru: "ШОДМОНҚУЛОВ Бахтиёр Ғуломович",
      uz: "Shodmonqulov Baxtiyor G‘Ulomovich",
    },
    workplace: {
      en: 'Group of Companies “SOF”',
      ru: 'Группа компаний “SOF”',
      uz: 'Kompaniyalar guruhi “SOF”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 29,
    name: {
      en: "Shukurullayev Dilshod Dalerovich",
      ru: "ШУКУРУЛЛАЕВ Дилшод Далерович",
      uz: "Shukurullaev Dilshod Dalerovich",
    },
    workplace: {
      en: 'Group of Companies “ZARMED”',
      ru: 'Группа компаний “ZARMED”',
      uz: 'Kompaniyalar guruhi “ZARMED”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 30,
    name: {
      en: "Oroqov Khaydar Mukhammadievich",
      ru: "ЎРОҚОВ Хайдар Мухаммадиевич",
      uz: "O‘Roqov Xaydar Muxammadievich",
    },
    workplace: {
      en: 'Group of Companies “NAVOBOD NASLLI PARRANDA”',
      ru: 'Группа компаний “NAVOBOD NASLLI PARRANDA”',
      uz: 'Kompaniyalar guruhi “NAVOBOD NASLLI PARRANDA”',
    },
    role: "chairman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 31,
    name: {
      en: "Qayumov Kamov Akbarali Qosimalievich",
      ru: "ҚАЮМОВ Камов Акбарали Қосималиевич",
      uz: "Qayumov Kamov Akbarali Qosimalievich",
    },
    workplace: {
      en: 'LLC “NURLI KELAJAK ISHONCH SERVIS”',
      ru: 'ООО “NURLI KELAJAK ISHONCH SERVIS”',
      uz: 'MChJ “NURLI KELAJAK ISHONCH SERVIS”',
    },
    role: "member",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop",
  },
];

export const leadershipPageCopy: Record<
  Locale,
  {
    organizationName: string;
    boardTitle: string;
    columns: {
      index: string;
      memberName: string;
      workplace: string;
      boardPosition: string;
    };
  }
> = {
  en: {
    organizationName:
      'Non-Governmental Non-Profit Organization "Public Fund of Entrepreneurs for Supporting the Socio-Economic Development of Regions - YANGI SAMARQAND (NEW SAMARKAND)"',
    boardTitle: "Members of the Board of the Public Consultative Council",
    columns: {
      index: "No.",
      memberName: "Full Name",
      workplace: "Place of Work and Position",
      boardPosition: "Position in the Board",
    },
  },
  ru: {
    organizationName:
      "Негосударственная Некоммерческая Организация «Общественный фонд предпринимателей по содействию социально-экономическому развитию регионов «YANGI SAMARQAND» («НОВЫЙ САМАРКАНД»)",
    boardTitle: "Члены Правления Общественного Консультативного Совета",
    columns: {
      index: "№",
      memberName: "Ф.И.О. члена Правления",
      workplace: "Место работы и должность",
      boardPosition: "Должность в Правлении",
    },
  },
  uz: {
    organizationName:
      'Nodavlat notijorat tashkiloti "Hududlarni ijtimoiy-iqtisodiy rivojlantirishga ko‘maklashuvchi tadbirkorlar jamoat fondi YANGI SAMARQAND"',
    boardTitle: "Jamoatchilik maslahat kengashi boshqaruvi a’zolari",
    columns: {
      index: "№",
      memberName: "Boshqaruv a’zosi F.I.Sh.",
      workplace: "Ish joyi va lavozimi",
      boardPosition: "Boshqaruvdagi lavozimi",
    },
  },
};
