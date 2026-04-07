import { Locale } from "@/lib/dictionaries";

export type BoardRole = "chairman" | "deputyChairman";

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
  },
  ru: {
    chairman: "Председатель Правления",
    deputyChairman: "Заместитель председателя Правления",
  },
  uz: {
    chairman: "Boshqaruv raisi",
    deputyChairman: "Boshqaruv raisi o‘rinbosari",
  },
};

export const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: {
      en: "Urakov Khaydar Muhammadiyevich",
      ru: "Ураков Хайдар Мухаммадиевич",
      uz: "Urakov Xaydar Muhammadievich",
    },
    workplace: {
      en: 'Founder, "NAVOBOD NASLLI PARRANDA" Group of Companies',
      ru: "Группа компаний «NAVOBOD NASLLI PARRANDA», учредитель",
      uz: '"NAVOBOD NASLLI PARRANDA" kompaniyalar guruhi, ta’sischi',
    },
    role: "chairman",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 2,
    name: {
      en: "Abdullaev Kamol Talatovich",
      ru: "Абдуллаев Камол Талъатович",
      uz: "Abdullaev Kamol Talatovich",
    },
    workplace: {
      en: 'Founder, "SAG" Group of Companies',
      ru: "Группа компаний «SAG», учредитель",
      uz: '"SAG" kompaniyalar guruhi, ta’sischi',
    },
    role: "deputyChairman",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 3,
    name: {
      en: "Ibragimov Nozir Alievich",
      ru: "Ибрагимов Нозир Алиевич",
      uz: "Ibragimov Nozir Alievich",
    },
    workplace: {
      en: "Director, Dual Education Center of Samarkand International Technological University",
      ru: "Центр Дуального образования Самаркандского Международного Технологического Университета, директор",
      uz: "Samarqand Xalqaro Texnologik Universiteti dual ta’lim markazi direktori",
    },
    role: "deputyChairman",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3387&auto=format&fit=crop",
  },
  {
    id: 4,
    name: {
      en: "Komilov Nasim Kobilzhonovich",
      ru: "Комилов Насим Кобилжонович",
      uz: "Komilov Nasim Kobiljonovich",
    },
    workplace: {
      en: '"MEROS" Group of Companies',
      ru: "Группа компаний «MEROS»",
      uz: '"MEROS" kompaniyalar guruhi',
    },
    role: "deputyChairman",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 5,
    name: {
      en: "Marupov Bakhtiyor Makhmudovich",
      ru: "Марупов Бахтиёр Махмудович",
      uz: "Marupov Baxtiyor Mahmudovich",
    },
    workplace: {
      en: '"SIYOB" Group of Companies',
      ru: "Группа компаний «SIYOB»",
      uz: '"SIYOB" kompaniyalar guruhi',
    },
    role: "deputyChairman",
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1374&auto=format&fit=crop",
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
