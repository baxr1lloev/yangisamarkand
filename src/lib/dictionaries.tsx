export type Locale = "en" | "ru" | "uz";

export const dictionaries = {
  en: {
    nav: {
      about: "About Us",
      news: "News",
      projects: "Projects",
      partners: "Cooperation",
      council: "Council",
      gallery: "Gallery",
      contact: "Contacts",
      announcements: "Announcements",
      donate: "Donate",
    },
    hero: {
      badge: "Public Fund",
      title: "Accelerating Entrepreneurship",
      subtitle: "Fostering growth and heritage in the heart of the Silk Road.",
      buttons: {
        projects: "View Projects",
        more: "Learn More",
      },
    },
    quickLinks: {
      projectsDesc: "View our portfolio of success",
      aboutDesc: "Support for local businesses",
      partnersDesc: "Partner with the fund",
    },
    newsSection: {
      viewAll: "View All News",
      readMore: "Read More",
      categories: {
        events: "EVENTS",
        grants: "GRANTS",
        partnerships: "PARTNERSHIPS",
        education: "EDUCATION",
      },
      readArticle: "Read Article",
      allNews: "All News",
      newsTitle: "News & Updates",
      newsSubtitle: "Latest Happenings in Samarkand",
      articleNotFound: "Article Not Found",
      backToNews: "Back to All News",
      items: [
        {
          title: "International Business Forum 2024 Held in Samarkand",
          desc: "Delegates from over 30 countries gathered to discuss investment opportunities...",
          date: "15 MAY 2024",
        },
        {
          title: "New Grant Program Announced for Local Entrepreneurs",
          desc: "Small and medium enterprises can now apply for funding to support export-oriented production...",
          date: "10 MAY 2024",
        },
        {
          title: "Partnership Agreement Signed with Tech Park",
          desc: "A strategic alliance to boost the local startup ecosystem through mentorship...",
          date: "05 MAY 2024",
        },
      ],
    },
    sections: {
      projects: {
        badge: "Projects",
        title: "Active Projects",
        subtitle:
          "Active projects of the Public Consultative Council are initiatives started by the Council Board and operating in real time. The main goal of the projects is to create a favorable business environment, find ways to solve problems that hinder entrepreneurship, support youth startups and scientific developments, and support small and youth entrepreneurship.",
        buttons: {
          all: "View All Projects",
          submit: "Submit Proposal",
        },
        stats: {
          funded: "Projects Funded",
          grants: "Scientific Grants",
          startups: "Startups Launched",
        },
        categoriesTitle: "Categories",
        categories: {
          industry: "Industry Forum",
          social: "Social Projects",
          scientific: "Scientific Support",
          startups: "Youth Startups",
        },
        innovationHub: "Innovation Hub",
        empoweringTitle: "Active Projects",
        empoweringDesc:
          "Active projects of the Public Consultative Council are initiatives started by the Council Board and operating in real time.",
        activeProjects: "Active Projects",
        completedProjects: "Completed Projects",
        completedProjectsDesc:
          "Implemented projects of the Public Consultative Council are initiatives started by the Council Board and/or members and fully completed within the initiatives. In this section, you can view projects implemented through financial support from the Council, personal support from its members, or joint efforts of entrepreneurs through their own contributions.",
        viewArchive: "View Archive",
        viewProfile: "View Profile",
        active: "Active",
        completed: "Completed",
        aboutProject: "About This Project",
        projectDetails: "Project Details",
        contactTeam: "Contact Project Team",
        category: "Category",
        founded: "Founded",
        teamSize: "Team Size",
        funding: "Funding",
        backToProjects: "Back to Projects",
        projectNotFound: "Project Not Found",
        activeTab: "Active Projects",
        completedTab: "Completed Projects",
        backToMain: "Back to Home",
      },
      about: {
        philosophy: "Our Philosophy",
        title: "Honor the Past. Build the Future.",
        subtitle:
          "The YANGI SAMARQAND Public Fund is dedicated to sustainable development that respects our deep cultural roots while embracing global innovation.",
        mission: "Our Mission",
        missionText:
          "To contribute to improving the business climate, strengthening the image of entrepreneurs in society, and the sustainable development of enterprises.",
        vision: "Our Vision",
        visionText:
          "Cooperation with state administration bodies for the effective use of conditions created for entrepreneurship, facilitating business development.",
        slogan: "Slogan",
        sloganText:
          "Together towards accelerated development of entrepreneurship.",
        valuesTitle: "Our Core Values",
        valuesSubtitle:
          "The fundamental principles that guide every decision, investment, and partnership at the Yangi Samarqand Fund.",
        values: [
          {
            title: "Radical Transparency",
            desc: "Open financial reporting and clear decision-making processes. We believe trust is earned through visibility.",
          },
          {
            title: "Social Responsibility",
            desc: "Unwavering commitment to community welfare. Every project must measurably improve the lives of our citizens.",
          },
          {
            title: "Innovation Support",
            desc: "Investing in modern solutions for urban challenges. We seek smart, tech-driven answers to old problems.",
          },
          {
            title: "Heritage Preservation",
            desc: "Protecting our cultural legacy. Modernization must never come at the cost of our historical identity.",
          },
          {
            title: "Collaborative Spirit",
            desc: "We work alongside government, private sector, and citizens. Unity is our most powerful resource.",
          },
          {
            title: "Sustainability",
            desc: "Building for the long term. Our environmental impact is considered in every strategic decision.",
          },
        ],
        historyTitle: "History",
        historyText:
          'At a meeting of leading entrepreneurs with the Governor of Samarkand Region Erkinjon Turdimov on June 22, 2021, it was proposed to hold such meetings regularly. On December 1, 2021, the Non-Governmental Non-Profit Organization "YANGI SAMARQAND" Public Fund was registered.',
        membershipTitle: "Membership",
        membershipDesc:
          "Members of the Public Council may be domestic and foreign legal and physical persons who recognize the Fund's Charter, its goals, take an active part in the Council's activities, and voluntarily contribute monetary and property contributions.",
        membershipButton: "Apply for Membership",
        membershipBenefits: [
          "A sense of pride in being part of a prestigious community of regional entrepreneurs",
          "Being a participant and part of socio-economic reforms and positive changes in the region",
          "Making proposals to improve gas, electricity, water supply, cadastral services, education, healthcare, and social security",
          "Together with the Public Council, being an organizer of reforms among active entrepreneurs of Samarkand region",
          "Voicing business and entrepreneurship problems at Council meetings and proposing solutions",
          "Learning from the advanced experience of fellow Council entrepreneurs, gaining new ideas for accelerated business growth",
          "Participating in Council events, trainings, seminars, and meetings with foreign entrepreneurs and investors",
        ],
        membershipFeesTitle: "Recommended Annual Membership Fees",
        membershipFees: [
          { category: "Individual entrepreneurs and individuals", amount: "5.0 mln soums" },
          { category: "Large enterprises (annual revenue over 100 bln soums)", amount: "50.0 mln soums" },
          { category: "Medium enterprises (annual revenue over 10 bln soums)", amount: "25.0 mln soums" },
          { category: "Small enterprises (annual revenue up to 10 bln soums)", amount: "10.0 mln soums" },
        ],
        membershipFeesNote: "Contributions above or below these amounts are allowed, as well as any property needed to fulfill the Fund's statutory goals.",
        honoraryTitle: "Honorary Membership",
        honoraryDesc: "Retired citizens who have made a significant contribution to the socio-economic development of the country and region, and who lead an active lifestyle, may become members of the Public Fund without any fees.",
        corporateTitle: "Corporate Elements",
        membersTitle: "Members",
      },
      partners: {
        title: "Partnerships & Memorandums",
        subtitle:
          "We collaborate with leading international organizations, financial institutions, and government bodies.",
        domestic: "Domestic Partnerships",
        international: "International Partnerships",
        strategic: "Strategic",
        development: "Development",
        infrastructure: "Infrastructure",
        viewMou: "View MoU",
        website: "Website",
        interested: "Interested in Partnering?",
        interestedDesc:
          "We are always open to new collaborations. Let's discuss how we can work together.",
        contactDept: "Contact Partnership Dept.",
        viewDocument: "View Document",
        officialWebsite: "Official Website",
      },
      council: {
        title: "Council Members",
        subtitle: "Distinguished individuals guiding the strategic direction.",
        leadership: "Leadership",
        roles: {
          chairman: "Chairman of the Public Council",
          member: "Board Member",
          secretary: "Secretary",
        },
        members: {
          chairman: {
            name: "Urakov Khaydar Muhammadiyevich",
            title: 'Head of "NAVOBOD NASLLI PARRANDA" Farm',
          },
        },
      },
      announcements: {
        title: "Announcements",
        subtitle: "Important notifications and fund news",
        viewAll: "View All",
        important: "IMPORTANT",
        grant: "GRANT",
        items: [
          {
            title: "General Meeting of the Public Council",
            desc: "The next general meeting will be held on June 25th in the main conference hall.",
            posted: "Posted: 2 days ago",
          },
          {
            title: "Applications Open for Youth Startups",
            desc: "We are now accepting applications for the Q3 funding cycle. Apply before July 1st.",
            posted: "Posted: 5 days ago",
          },
        ],
      },
      gallery: {
        title: "Photo Gallery",
        subtitle: "Visual stories from our projects and events.",
        visualStories: "Visual Stories from Samarkand",
        clickExplore: "Click to Explore",
        viewFull: "View Full Gallery",
        allPhotos: "All Photos",
        loadMore: "Load More Photos",
        items: [
          {
            title: "Registan Square",
            description: "The crown jewel of Samarkand at twilight",
          },
          {
            title: "Gur-Emir Mausoleum",
            description: "The final resting place of the Great Timur",
          },
          {
            title: "Shahi-Zinda Blue",
            description: "Breathtaking medieval mosaic tilework",
          },
          {
            title: "Bibi-Khanym",
            description: "A monumental symbol of the Chagatay era",
          },
          {
            title: "Night at Registan",
            description: "Samarkand glowing under the evening sky",
          },
          {
            title: "Turquoise Domes",
            description: "The iconic skyline of the ancient Silk Road",
          },
          {
            title: "Heritage Tiles",
            description: "Preserving the art of oriental ornamentation",
          },
          {
            title: "Carved Portals",
            description: "The door to centuries of Uzbek history",
          },
        ],
      },
      madeInSamarkand: {
        title: "Made in Samarkand",
        subtitle:
          "Discover the industrial potential of our region. Browse the electronic catalog of products manufactured in Samarkand.",
        button: "Open Catalog",
      },
      contact: {
        title: "Contact Us",
        subtitle: "Get in Touch",
        sendMessage: "Send us Message",
        form: {
          name: "Full Name",
          email: "Email Address",
          subject: "Subject",
          subjectPlaceholder: "How can we help?",
          message: "Message",
          messagePlaceholder: "Tell us more about your inquiry...",
          submit: "Send Message",
          privacyNote: "By sending this message, you agree to our",
          privacyPolicy: "Privacy Policy",
        },
        info: "Contact Information",
        phone: "Phone",
        office: "Office",
        weWouldLove: "We'd Love to Hear From You",
        haveQuestions:
          "Have questions or interested in partnership? Reach out to the Yangi Samarqand team.",
      },
    },
    footer: {
      desc: "A public fund dedicated to the preservation, development, and sustainable future of the city of Samarkand.",
      quickLinks: "Quick Links",
      contact: "Contact",
      follow: "Follow Us",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  ru: {
    nav: {
      about: "О нас",
      news: "Новости",
      projects: "Проекты",
      partners: "Сотрудничество",
      council: "Совет",
      gallery: "Галерея",
      contact: "Контакты",
      announcements: "Объявления",
      donate: "Пожертвовать",
    },
    hero: {
      badge: "Общественный Фонд",
      title: "Вместе к ускоренному развитию предпринимательства",
      subtitle:
        "Способствуем росту и сохранению наследия в сердце Шелкового пути. Присоединяйтесь к нам в создании процветающего будущего Самарканда.",
      buttons: {
        projects: "Смотреть Проекты",
        more: "Узнать Больше",
      },
    },
    quickLinks: {
      projectsDesc: "Наше портфолио успеха",
      aboutDesc: "Поддержка местного бизнеса",
      partnersDesc: "Партнёрство с фондом",
    },
    newsSection: {
      viewAll: "Все Новости",
      readMore: "Подробнее",
      categories: {
        events: "СОБЫТИЯ",
        grants: "ГРАНТЫ",
        partnerships: "ПАРТНЁРСТВА",
        education: "ОБРАЗОВАНИЕ",
      },
      readArticle: "Читать Статью",
      allNews: "Все Новости",
      newsTitle: "Новости и Обновления",
      newsSubtitle: "Последние события Самарканда",
      articleNotFound: "Статья не найдена",
      backToNews: "Назад к Новостям",
      items: [
        {
          title: "Международный Бизнес-Форум 2024 прошел в Самарканде",
          desc: "Делегаты из более чем 30 стран собрались для обсуждения инвестиционных возможностей...",
          date: "15 МАЯ 2024",
        },
        {
          title: "Объявлена новая грантовая программа для предпринимателей",
          desc: "Малые и средние предприятия теперь могут подать заявку на финансирование экспортоориентированного производства...",
          date: "10 МАЯ 2024",
        },
        {
          title: "Подписано партнёрское соглашение с Технопарком",
          desc: "Стратегический альянс для развития местной стартап-экосистемы через менторство...",
          date: "05 МАЯ 2024",
        },
      ],
    },
    sections: {
      projects: {
        badge: "Проекты",
        title: "Действующие проекты",
        subtitle:
          "Действующие проекты Общественного Консультативного Совета – этот инициированные Правлением Совета и действующее в реальном масштабе времени. Основная цель проектов – создавать благоприятную среду для  ведения бизнеса, найти пути решения проблем, препятствующих  развитию предпринимательства, оказывать поддержку молодежных стартапов и научных разработок ученых, поддержка малого и молодежного предпринимательства.",
        buttons: {
          all: "Все Проекты",
          submit: "Подать Заявку",
        },
        stats: {
          funded: "Проектов Финансировано",
          grants: "Научные Гранты",
          startups: "Стартапов Запущено",
        },
        categoriesTitle: "Категории",
        categories: {
          industry: "Форум промышленников",
          social: "Социальные Проекты",
          scientific: "Научная Поддержка",
          startups: "Молодежные Стартапы",
        },
        innovationHub: "Инновационный Хаб",
        empoweringTitle: "Действующие проекты",
        empoweringDesc:
          "Действующие проекты Общественного Консультативного Совета – этот инициированные Правлением Совета и действующее в реальном масштабе времени.",
        activeProjects: "Действующие Проекты",
        completedProjects: "Реализованные Проекты",
        completedProjectsDesc:
          "Реализованные проекты Общественного Консультативного Совета – этот инициированные Правлением Совета и/или членами и полнсоть осуществленные в рамках инициатив. В составе реализованных проектов вы можете наблюдать за проектами, которые реализваны за счет финансовой поддержки Совета, или за счет персональной поддержки его членов, либо осуществленные совместными усилиями предпринимателей за счет их собственных вкладов.",
        viewArchive: "Смотреть Архив",
        viewProfile: "Профиль",
        active: "Активен",
        completed: "Завершён",
        aboutProject: "О Проекте",
        projectDetails: "Детали Проекта",
        contactTeam: "Связаться с Командой",
        category: "Категория",
        founded: "Основан",
        teamSize: "Размер Команды",
        funding: "Финансирование",
        backToProjects: "К Проектам",
        projectNotFound: "Проект не найден",
        activeTab: "Действующие Проекты",
        completedTab: "Реализованные Проекты",
        backToMain: "На главную",
      },
      about: {
        philosophy: "Наша Философия",
        title: "Почитая Прошлое. Строим Будущее.",
        subtitle:
          'Общественный фонд "YANGI SAMARQAND" посвящен устойчивому развитию, уважающему наши глубокие культурные корни и принимающему глобальные инновации.',
        mission: "Наша Миссия",
        missionText:
          "Внести вклад улучшению бизнес-климата, укреплению имиджа предпринимателей в обществе, устойчивому развитию предприятий.",
        vision: "Наше Видение",
        visionText:
          "Сотрудничество с органами государственного управления по эффективному использованию созданных для предпринимательства условий, содействие развитию бизнеса.",
        slogan: "Слоган",
        sloganText: "Вместе к ускоренному развитию предпринимательства.",
        valuesTitle: "Наши Ценности",
        valuesSubtitle:
          "Фундаментальные принципы, которыми руководствуется каждое решение, инвестиция и партнёрство фонда Янги Самарканд.",
        values: [
          {
            title: "Радикальная Прозрачность",
            desc: "Открытая финансовая отчётность и ясные процессы принятия решений. Мы верим, что доверие завоёвывается через открытость.",
          },
          {
            title: "Социальная Ответственность",
            desc: "Непоколебимая приверженность благосостоянию сообщества. Каждый проект должен ощутимо улучшать жизнь граждан.",
          },
          {
            title: "Поддержка Инноваций",
            desc: "Инвестиции в современные решения для городских вызовов. Мы ищем умные и технологичные ответы на старые проблемы.",
          },
          {
            title: "Сохранение Наследия",
            desc: "Защита нашего культурного наследия. Модернизация не должна происходить за счёт исторической идентичности.",
          },
          {
            title: "Дух Сотрудничества",
            desc: "Мы работаем вместе с правительством, частным сектором и гражданами. Единство — наш самый мощный ресурс.",
          },
          {
            title: "Устойчивость",
            desc: "Строительство на долгосрочную перспективу. Наше воздействие на окружающую среду учитывается в каждом стратегическом решении.",
          },
        ],
        historyTitle: "История создания",
        historyText:
          "На встрече ведущих предпринимателей с хокимом Самаркандской области Эркинжон Окбутаевичем Турдимовым 22 июня 2021 года было предложено проводить такие встречи регулярно. 1 декабря 2021 года была зарегистрирована Негосударственная Некоммерческая Организация «Общественный фонд предпринимателей по содействию социально-экономическому развитию регионов «YANGI SAMARQAND».",
        membershipTitle: "Членство",
        membershipDesc:
          "Членами (участниками) Общественного Совета могут быть отечественные и зарубежные юридические и физические лица, признающие Устав Фонда, его цели, принимающие активное участие в деятельности Общественного Совета, добровольно вносящие денежные и имущественные взносы.",
        membershipButton: "Подать заявку на членство",
        membershipBenefits: [
          "Чувство гордости быть в составе престижного сообщества предпринимателей региона",
          "Быть участником и частью социально-экономических реформ, позитивных изменений в регионе",
          "Выступать с предложениями по улучшению снабжения газом, электроэнергией, водой, кадастровых услуг, а также сферы образования, здравоохранения, соцобеспечения",
          "Совместно с Общественным Советом быть организатором изменений и реформ среди активных предпринимателей Самаркандской области",
          "На совещаниях Общественного Совета высказывать проблемы бизнеса и предпринимательства, предлагать их решения",
          "Ознакомиться с передовым опытом предпринимателей – членов Совета, получать новые идеи ускоренного развития бизнеса",
          "Принимать участие на мероприятиях Совета, тренингах, семинарах, встречах с зарубежными предпринимателями и инвесторами",
        ],
        membershipFeesTitle: "Рекомендуемые размеры ежегодных взносов",
        membershipFees: [
          { category: "Индивидуальные предприниматели и физические лица", amount: "5,0 млн сумов" },
          { category: "Крупные предприятия (годовая реализация свыше 100,0 млрд сумов)", amount: "50,0 млн сумов" },
          { category: "Средние предприятия (годовая реализация свыше 10,0 млрд сумов)", amount: "25,0 млн сумов" },
          { category: "Малые предприятия (годовая реализация до 10,0 млрд сумов)", amount: "10,0 млн сумов" },
        ],
        membershipFeesNote: "Допускается внесение свыше или ниже указанных сумм, а также любое имущество, необходимое для реализации уставных целей Фонда.",
        honoraryTitle: "Почётное членство",
        honoraryDesc: "Граждане пенсионного возраста, внёсшие огромный вклад в социально-экономическое развитие страны и региона, ведущие активный образ жизни, могут быть участником Общественного Фонда без внесения каких-либо взносов.",
        corporateTitle: "Корпоративные элементы",
        membersTitle: "Члены",
      },
      partners: {
        title: "Партнерство и Меморандумы",
        subtitle:
          "Мы сотрудничаем с ведущими международными организациями, финансовыми институтами и государственными органами.",
        domestic: "Отечественные Партнёрства",
        international: "Международное Сотрудничество",
        strategic: "Стратегическое",
        development: "Развитие",
        infrastructure: "Инфраструктура",
        viewMou: "Просмотр МоУ",
        website: "Сайт",
        interested: "Заинтересованы в партнёрстве?",
        interestedDesc:
          "Мы всегда открыты для нового сотрудничества. Давайте обсудим, как мы можем работать вместе.",
        contactDept: "Связаться с отделом партнёрства",
        viewDocument: "Просмотр Документа",
        officialWebsite: "Официальный Сайт",
      },
      council: {
        title: "Члены Совета",
        subtitle:
          "Выдающиеся личности, определяющие стратегическое направление.",
        leadership: "Руководство",
        roles: {
          chairman: "Председатель Общественного Совета",
          member: "Член Совета",
          secretary: "Секретарь",
        },
        members: {
          chairman: {
            name: "Ураков Хайдар Мухаммадиевич",
            title: "Руководитель ФХ «NAVOBOD NASLLI PARRANDA»",
          },
        },
      },
      announcements: {
        title: "Объявления",
        subtitle: "Важные уведомления и новости фонда",
        viewAll: "Смотреть Все",
        important: "ВАЖНО",
        grant: "ГРАНТ",
        items: [
          {
            title: "Общее собрание Общественного Совета",
            desc: "Следующее общее собрание состоится 25 июня в главном конференц-зале.",
            posted: "Опубликовано: 2 дня назад",
          },
          {
            title: "Приём заявок на молодёжные стартапы",
            desc: "Мы принимаем заявки на финансирование Q3 цикла. Подайте заявку до 1 июля.",
            posted: "Опубликовано: 5 дней назад",
          },
        ],
      },
      gallery: {
        title: "Фотогалерея",
        subtitle: "Визуальные истории наших проектов и событий.",
        visualStories: "Визуальные истории Самарканда",
        clickExplore: "Нажмите, чтобы изучить",
        viewFull: "Смотреть всю галерею",
        allPhotos: "Все Фото",
        loadMore: "Загрузить ещё",
        items: [
          {
            title: "Площадь Регистан",
            description: "Жемчужина Самарканда в сумерках",
          },
          {
            title: "Мавзолей Гур-Эмир",
            description: "Последнее пристанище Великого Тимура",
          },
          {
            title: "Шахи-Зинда",
            description: "Захватывающая средневековая мозаика",
          },
          {
            title: "Биби-Ханум",
            description: "Монументальный символ эпохи Чагатая",
          },
          {
            title: "Ночь на Регистане",
            description: "Самарканд сияет под вечерним небом",
          },
          {
            title: "Бирюзовые купола",
            description: "Знаковый горизонт древнего Шелкового пути",
          },
          {
            title: "Узоры Наследия",
            description: "Сохранение искусства восточного орнамента",
          },
          {
            title: "Резные Порталы",
            description: "Дверь в столетия узбекской истории",
          },
        ],
      },
      madeInSamarkand: {
        title: "Сделано в Самарканде",
        subtitle:
          "Откройте для себя промышленный потенциал нашего региона. Просмотрите электронный каталог продукции, производимой в Самарканде.",
        button: "Открыть каталог",
      },
      contact: {
        title: "Свяжитесь с Нами",
        subtitle: "Контакты",
        sendMessage: "Отправить Сообщение",
        form: {
          name: "ФИО",
          email: "Email Адрес",
          subject: "Тема",
          subjectPlaceholder: "Чем мы можем помочь?",
          message: "Сообщение",
          messagePlaceholder: "Расскажите подробнее о вашем запросе...",
          submit: "Отправить",
          privacyNote: "Отправляя это сообщение, вы соглашаетесь с нашей",
          privacyPolicy: "Политикой конфиденциальности",
        },
        info: "Контактная Информация",
        phone: "Телефон",
        office: "Офис",
        weWouldLove: "Мы будем рады общению",
        haveQuestions:
          "Есть вопросы или интересует партнёрство? Свяжитесь с командой Янги Самарканд.",
      },
    },
    footer: {
      desc: "Общественный фонд, посвященный сохранению, развитию и устойчивому будущему города Самарканда.",
      quickLinks: "Быстрые Ссылки",
      contact: "Контакты",
      follow: "Мы в соцсетях",
      rights: "Все права защищены.",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
    },
  },
  uz: {
    nav: {
      about: "Biz Haqimizda",
      news: "Yangiliklar",
      projects: "Loyihalar",
      partners: "Hamkorlik",
      council: "Kengash",
      gallery: "Galereya",
      contact: "Aloqa",
      announcements: "E'lonlar",
      donate: "Xayriya",
    },
    hero: {
      badge: "Jamoat Fondi",
      title: "Tadbirkorlikni jadal rivojlantirish sari birgalikda",
      subtitle:
        "Buyuk Ipak yo'li markazida o'sishni rag'batlantirish va merosni asrash. Samarqandning farovon kelajagini qurishda bizga qo'shiling.",
      buttons: {
        projects: "Loyihalar",
        more: "Batafsil",
      },
    },
    quickLinks: {
      projectsDesc: "Muvaffaqiyat portfelimizni ko'ring",
      aboutDesc: "Mahalliy biznesni qo'llab-quvvatlash",
      partnersDesc: "Fond bilan hamkorlik",
    },
    newsSection: {
      viewAll: "Barcha Yangiliklar",
      readMore: "Batafsil",
      categories: {
        events: "TADBIRLAR",
        grants: "GRANTLAR",
        partnerships: "HAMKORLIKLAR",
        education: "TA'LIM",
      },
      readArticle: "Maqolani O'qish",
      allNews: "Barcha Yangiliklar",
      newsTitle: "Yangiliklar va Yangilanishlar",
      newsSubtitle: "Samarqandning so'nggi yangiliklari",
      articleNotFound: "Maqola topilmadi",
      backToNews: "Yangiliklarqa qaytish",
      items: [
        {
          title: "Xalqaro Biznes Forum 2024 Samarqandda bo'lib o'tdi",
          desc: "30 dan ortiq mamlakatdan delegatlar investitsiya imkoniyatlarini muhokama qilish uchun yig'ildi...",
          date: "15 MAY 2024",
        },
        {
          title:
            "Mahalliy tadbirkorlar uchun yangi grant dasturi e'lon qilindi",
          desc: "Kichik va o'rta korxonalar endi eksportga yo'naltirilgan ishlab chiqarishni qo'llab-quvvatlash uchun mablag' olishi mumkin...",
          date: "10 MAY 2024",
        },
        {
          title: "Texnopark bilan hamkorlik shartnomasi imzolandi",
          desc: "Mentorlik orqali mahalliy startap ekotizimini rivojlantirish uchun strategik ittifoq...",
          date: "05 MAY 2024",
        },
      ],
    },
    sections: {
      projects: {
        badge: "Loyihalar",
        title: "Amaldagi loyihalar",
        subtitle:
          "Jamoatchilik maslahat kengashining amaldagi loyihalari Kengash boshqaruvi tomonidan boshlangan va real vaqt rejimida faoliyat yuritayotgan tashabbuslardir. Loyihalarning asosiy maqsadi biznes yuritish uchun qulay muhit yaratish, tadbirkorlik rivojiga to'sqinlik qilayotgan muammolar yechimini topish, yoshlar startaplari va olimlarning ilmiy ishlanmalarini qo'llab-quvvatlash, kichik va yoshlar tadbirkorligini qo'llab-quvvatlashdan iborat.",
        buttons: {
          all: "Barcha Loyihalar",
          submit: "Taklif Yuborish",
        },
        stats: {
          funded: "Moliya. Loyihalar",
          grants: "Ilmiy Grantlar",
          startups: "Startaplar",
        },
        categoriesTitle: "Toifalar",
        categories: {
          industry: "Sanoatchilar forumi",
          social: "Ijtimoiy Loyihalar",
          scientific: "Ilmiy Qo'llab-quvvatlash",
          startups: "Yoshlar Startaplari",
        },
        innovationHub: "Innovatsiya Markazi",
        empoweringTitle: "Amaldagi loyihalar",
        empoweringDesc:
          "Jamoatchilik maslahat kengashining amaldagi loyihalari Kengash boshqaruvi tomonidan boshlangan va real vaqt rejimida faoliyat yuritayotgan tashabbuslardir.",
        activeProjects: "Faol Loyihalar",
        completedProjects: "Amalga Oshirilgan Loyihalar",
        completedProjectsDesc:
          "Jamoatchilik maslahat kengashining amalga oshirilgan loyihalari Kengash boshqaruvi va/yoki a'zolari tomonidan boshlangan hamda tashabbuslar doirasida to'liq amalga oshirilgan loyihalardir. Ushbu bo'limda Kengashning moliyaviy ko'magi, uning a'zolarining shaxsiy qo'llab-quvvatlashi yoki tadbirkorlarning o'z hissalari hisobidan birgalikdagi sa'y-harakatlari bilan amalga oshirilgan loyihalarni ko'rishingiz mumkin.",
        viewArchive: "Arxivni Ko'rish",
        viewProfile: "Profilni Ko'rish",
        active: "Faol",
        completed: "Tugallangan",
        aboutProject: "Loyiha Haqida",
        projectDetails: "Loyiha Tafsilotlari",
        contactTeam: "Jamoa bilan Bog'lanish",
        category: "Toifa",
        founded: "Tashkil etilgan",
        teamSize: "Jamoa Hajmi",
        funding: "Moliyalashtirish",
        backToProjects: "Loyihalarga qaytish",
        projectNotFound: "Loyiha topilmadi",
        activeTab: "Faol Loyihalar",
        completedTab: "Amalga Oshirilgan Loyihalar",
        backToMain: "Bosh sahifaga qaytish",
      },
      about: {
        philosophy: "Bizning Falsafa",
        title: "O'tmishni E'zozlab. Kelajakni Quramiz.",
        subtitle:
          '"YANGI SAMARQAND" jamoat fondi chuqur madaniy ildizlarimizni hurmat qilgan holda barqaror rivojlanish va global innovatsiyalarni qabul qilishga bag\'ishlangan.',
        mission: "Bizning Missiya",
        missionText:
          "Biznes muhitini yaxshilash, jamiyatda tadbirkorlar imijini mustahkamlash, korxonalarning barqaror rivojlanishiga hissa qo'shish.",
        vision: "Bizning Vizyon",
        visionText:
          "Tadbirkorlik uchun yaratilgan sharoitlardan samarali foydalanish bo'yicha davlat boshqaruvi organlari bilan hamkorlik qilish, biznesni rivojlantirishga ko'maklashish.",
        slogan: "Shior",
        sloganText: "Tadbirkorlikni jadal rivojlantirish sari birgalikda.",
        valuesTitle: "Qadriyatlarimiz",
        valuesSubtitle:
          "Yangi Samarqand Fondidagi har bir qaror, investitsiya va hamkorlikni boshqaradigan asosiy tamoyillar.",
        values: [
          {
            title: "Radikal Shaffoflik",
            desc: "Ochiq moliyaviy hisobotlar va aniq qarorlar qabul qilish jarayoni. Biz ishonch ko'rinish orqali qozonilishiga ishonamiz.",
          },
          {
            title: "Ijtimoiy Mas'uliyat",
            desc: "Jamiyat farovonligiga qat'iy sadoqat. Har bir loyiha fuqarolarimiz hayotini oshkoraviy yaxshilashi kerak.",
          },
          {
            title: "Innovatsiyani Qo'llab-quvvatlash",
            desc: "Shahar muammolariga zamonaviy yechimlar investitsiya qilish.",
          },
          {
            title: "Merosni Asrash",
            desc: "Madaniy merosimizni himoya qilish. Modernizatsiya tarixiy identitetimiz hisobiga bo'lmasligi kerak.",
          },
          {
            title: "Hamkorlik Ruhi",
            desc: "Biz hukumat, xususiy sektor va fuqarolar bilan birga ishlaymiz. Birlik — eng kuchli resursmiz.",
          },
          {
            title: "Barqarorlik",
            desc: "Uzoq muddatga qurish. Atrof-muhitga ta'sirimiz har bir strategik qarorida hisobga olinadi.",
          },
        ],
        historyTitle: "Yaratilish Tarixi",
        historyText:
          "2021-yil 22-iyunda Samarqand viloyati hokimi Erkinjon Turdimov bilan yetakchi tadbirkorlarning uchrashuvida bunday uchrashuvlarni muntazam o'tkazish taklif qilindi. 2021-yil 1-dekabrda \"YANGI SAMARQAND\" Jamoat fondi ro'yxatdan o'tkazildi.",
        membershipTitle: "A'zolik",
        membershipDesc:
          "Jamoatchilik Kengashining a'zolari (ishtirokchilari) Fond Nizomini, uning maqsadlarini tan oluvchi, Kengash faoliyatida faol ishtirok etuvchi, pul va mol-mulk badallarini ixtiyoriy ravishda to'lovchi mahalliy va xorijiy yuridik va jismoniy shaxslar bo'lishi mumkin.",
        membershipButton: "A'zolik uchun ariza berish",
        membershipBenefits: [
          "Viloyatning nufuzli tadbirkorlar hamjamiyati tarkibida bo'lishdan faxrlanish hissi",
          "Ijtimoiy-iqtisodiy islohotlar va mintaqadagi ijobiy o'zgarishlarning ishtirokchisi bo'lish",
          "Gaz, elektr energiyasi, suv ta'minoti, kadastr xizmatlari, ta'lim, sog'liqni saqlash va ijtimoiy ta'minotni yaxshilash bo'yicha takliflar bilan chiqish",
          "Jamoatchilik Kengashi bilan birgalikda Samarqand viloyatining faol tadbirkorlari orasida islohotlar tashkilotchisi bo'lish",
          "Kengash yig'ilishlarida biznes va tadbirkorlik muammolarini bayon qilish, ularning yechimlarini taklif qilish",
          "Kengash a'zolari - tadbirkorlarning ilg'or tajribasini o'rganish, biznesni jadal rivojlantirishning yangi g'oyalarini olish",
          "Kengash tadbirlarida, treninglarda, seminarlarda, xorijiy tadbirkorlar va investorlar bilan uchrashuvlarda ishtirok etish",
        ],
        membershipFeesTitle: "Tavsiya etilayotgan yillik badal miqdorlari",
        membershipFees: [
          { category: "Yakka tartibdagi tadbirkorlar va jismoniy shaxslar", amount: "5,0 mln so'm" },
          { category: "Yirik korxonalar (yillik savdo 100,0 mlrd so'mdan ortiq)", amount: "50,0 mln so'm" },
          { category: "O'rta korxonalar (yillik savdo 10,0 mlrd so'mdan ortiq)", amount: "25,0 mln so'm" },
          { category: "Kichik korxonalar (yillik savdo 10,0 mlrd so'mgacha)", amount: "10,0 mln so'm" },
        ],
        membershipFeesNote: "Ko'rsatilgan miqdorlardan yuqori yoki past summa, shuningdek Fond ustavdagi maqsadlarini amalga oshirish uchun zarur bo'lgan har qanday mol-mulk qo'shish mumkin.",
        honoraryTitle: "Faxriy a'zolik",
        honoraryDesc: "Mamlakat va mintaqaning ijtimoiy-iqtisodiy rivojlanishiga ulkan hissa qo'shgan, faol turmush tarzini olib borayotgan nafaqadagi fuqarolar hech qanday badal to'lamasdan Jamoat Fondining ishtirokchisi bo'lishi mumkin.",
        corporateTitle: "Korporativ Elementlar",
        membersTitle: "A'zolar",
      },
      partners: {
        title: "Hamkorlik va Memorandumlar",
        subtitle:
          "Biz yetakchi xalqaro tashkilotlar, moliya institutlari va davlat organlari bilan hamkorlik qilamiz.",
        domestic: "Ichki Hamkorliklar",
        international: "Xalqaro Hamkorlik",
        strategic: "Strategik",
        development: "Rivojlanish",
        infrastructure: "Infratuzilma",
        viewMou: "MoU Ko'rish",
        website: "Veb-sayt",
        interested: "Hamkorlikka qiziqasizmi?",
        interestedDesc:
          "Biz doimo yangi hamkorliklarga ochiqmiz. Keling, qanday birga ishlashimiz mumkinligini muhokama qilamiz.",
        contactDept: "Hamkorlik bo'limi bilan bog'lanish",
        viewDocument: "Hujjatni Ko'rish",
        officialWebsite: "Rasmiy Veb-sayt",
      },
      council: {
        title: "Kengash A'zolari",
        subtitle:
          "Strategik yo'nalishni belgilovchi va fond yaxlitligini ta'minlovchi taniqli shaxslar.",
        leadership: "Rahbariyat",
        roles: {
          chairman: "Jamoatchilik Kengashi Raisi",
          member: "Kengash A'zosi",
          secretary: "Kotib",
        },
        members: {
          chairman: {
            name: "Urakov Xaydar Muhammadievich",
            title: '"NAVOBOD NASLLI PARRANDA" fermer xo\'jaligi rahbari',
          },
        },
      },
      announcements: {
        title: "E'lonlar",
        subtitle: "Fondning muhim e'lonlari va yangiliklari",
        viewAll: "Barchasini Ko'rish",
        important: "MUHIM",
        grant: "GRANT",
        items: [
          {
            title: "Jamoatchilik Kengashining umumiy majlisi",
            desc: "Navbatdagi umumiy majlis 25-iyunda bosh konferensiya zalida bo'lib o'tadi.",
            posted: "E'lon qilingan: 2 kun oldin",
          },
          {
            title: "Yoshlar startaplari uchun arizalar qabul qilinmoqda",
            desc: "Biz Q3 moliyalashtirish davri uchun arizalar qabul qilmoqdamiz. 1-iyulgacha ariza bering.",
            posted: "E'lon qilingan: 5 kun oldin",
          },
        ],
      },
      gallery: {
        title: "Fotogalereya",
        subtitle: "Loyihalarimiz va tadbirlarimizdan vizual hikoyalar.",
        visualStories: "Samarqand Vizual Hikoyalari",
        clickExplore: "Ko'rish Uchun Bosing",
        viewFull: "To'liq Galereya",
        allPhotos: "Barcha Suratlar",
        loadMore: "Ko'proq Yuklash",
        items: [
          {
            title: "Registon Maydoni",
            description: "Samarqandning tunda porlashi",
          },
          {
            title: "Go'ri Amir Maqbarasi",
            description: "Buyuk Temurning so'nggi manzili",
          },
          {
            title: "Shohi Zinda",
            description: "O'rta asrning noyob mozaikasi",
          },
          { title: "Bibi-Xonim", description: "Chig'atoy davrining ramzi" },
          {
            title: "Registon Tuni",
            description: "Kechki osmon ostida Samarqand",
          },
          {
            title: "Firuza Gumbazlar",
            description: "Qadimiy Ipak Yo'lining ramzi",
          },
          {
            title: "Meros Naqshlari",
            description: "Sharqona naqsh san'atini asrash",
          },
          {
            title: "O'yma Eshiklar",
            description: "O'zbek tarixiga ochilgan eshik",
          },
        ],
      },
      madeInSamarkand: {
        title: "Samarqandda Ishlab Chiqarilgan",
        subtitle:
          "Mintaqamizning sanoat salohiyatini kashf eting. Samarqandda ishlab chiqarilgan mahsulotlar elektron katalogini ko'rib chiqing.",
        button: "Katalogni Ochish",
      },
      contact: {
        title: "Biz Bog'laning",
        subtitle: "Aloqa",
        sendMessage: "Bizga Xabar Yuboring",
        form: {
          name: "F.I.SH",
          email: "Email Manzil",
          subject: "Mavzu",
          subjectPlaceholder: "Qanday yordam bera olamiz?",
          message: "Xabar",
          messagePlaceholder: "So'rovingiz haqida batafsil ma'lumot bering...",
          submit: "Yuborish",
          privacyNote: "Ushbu xabarni yuborish orqali siz bizning",
          privacyPolicy: "Maxfiylik siyosatimizga rozilik bildirasiz",
        },
        info: "Aloqa Ma'lumotlari",
        phone: "Telefon",
        office: "Ofis",
        weWouldLove: "Siz bilan muloqot qilishdan xursand bo'lamiz",
        haveQuestions:
          "Savollaringiz bormi yoki hamkorlik qiziqtiradimi? Yangi Samarqand jamoasiga murojaat qiling.",
      },
    },
    footer: {
      desc: "Samarqand shahrini asrash, rivojlantirish va barqaror kelajagiga bag'ishlangan jamoat fondi.",
      quickLinks: "Tezkor Havolalar",
      contact: "Aloqa",
      follow: "Kuzatib Boring",
      rights: "Barcha huquqlar himoyalangan.",
      privacy: "Maxfiylik Siyosati",
      terms: "Foydalanish Shartlari",
    },
  },
};
