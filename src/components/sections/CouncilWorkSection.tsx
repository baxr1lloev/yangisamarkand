"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  Award,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Medal,
  UsersRound,
} from "lucide-react";

const copy = {
  en: {
    eyebrow: "Council Work",
    title: "Meetings, Recognition and Public Trust",
    subtitle:
      "The Council brings entrepreneurs, regional leadership and service organizations together to discuss business issues and celebrate distinguished contributors.",
    meetingsTitle: "Council Member Meetings",
    meetingsDesc:
      "Meetings are hosted by member companies known for production scale, market share, exports and effective corporate governance. Before each meeting, participants learn about the host company's production activity.",
    processTitle: "How meetings work",
    recognitionTitle: "Public Recognition of Entrepreneurs",
    recognitionDesc:
      "Recognizing entrepreneurs strengthens the image of business in society and motivates new achievements, job creation and charitable initiatives.",
    honoraryTitle: "Honorary recognition",
    teacherTitle: "Teacher and Mentor Day",
  },
  ru: {
    eyebrow: "Работа Совета",
    title: "Собрания, признание и общественное доверие",
    subtitle:
      "Совет объединяет предпринимателей, руководство области и профильные организации для обсуждения бизнес-вопросов и признания заслуг предпринимателей.",
    meetingsTitle: "Собрания членов Общественного Совета",
    meetingsDesc:
      "Собрания проводятся на территории компаний-членов, отличающихся долей рынка, масштабом производства, ассортиментом продукции, экспортом и эффективным корпоративным управлением. Перед началом участники знакомятся с производственной деятельностью принимающей компании.",
    processTitle: "Как проходят собрания",
    recognitionTitle: "Общественное признание предпринимателей",
    recognitionDesc:
      "Признание заслуг предпринимателей повышает имидж предпринимательства, мотивирует к новым достижениям, созданию рабочих мест и расширению благотворительных инициатив.",
    honoraryTitle: "Почетное признание",
    teacherTitle: "День учителя и наставника",
  },
  uz: {
    eyebrow: "Kengash faoliyati",
    title: "Yig'ilishlar, e'tirof va jamoatchilik ishonchi",
    subtitle:
      "Kengash tadbirkorlar, viloyat rahbariyati va xizmat tashkilotlarini biznes masalalarini muhokama qilish va munosib tadbirkorlarni e'tirof etish uchun birlashtiradi.",
    meetingsTitle: "Jamoatchilik kengashi a'zolari yig'ilishlari",
    meetingsDesc:
      "Yig'ilishlar bozor ulushi, ishlab chiqarish ko'lami, mahsulot assortimenti, eksporti va samarali korporativ boshqaruvi bilan ajralib turadigan a'zo kompaniyalar hududida o'tkaziladi.",
    processTitle: "Yig'ilish tartibi",
    recognitionTitle: "Tadbirkorlarning jamoatchilik e'tirofi",
    recognitionDesc:
      "Tadbirkorlar xizmatini e'tirof etish biznes nufuzini oshiradi, yangi yutuqlar, ish o'rinlari va xayriya tashabbuslarini rag'batlantiradi.",
    honoraryTitle: "Faxriy e'tirof",
    teacherTitle: "O'qituvchi va murabbiylar kuni",
  },
};

const meetingSteps = [
  {
    icon: Building2,
    title: "Принимающая компания",
    desc: "Собрания созываются на площадках компаний-членов Совета с сильной производственной и управленческой практикой.",
  },
  {
    icon: UsersRound,
    title: "Участники",
    desc: "Помимо членов Совета приглашаются руководители налоговой службы, электросетей, газообеспечения, водоканала, кадастра и других учреждений по повестке дня.",
  },
  {
    icon: ClipboardList,
    title: "Повестка и протокол",
    desc: "Собрание проводит Председатель Правления Х. М. Ураков по утвержденной повестке. Предложения и поручения фиксируются в протоколе.",
  },
  {
    icon: CheckCircle2,
    title: "Контроль исполнения",
    desc: "Хоким области дает поручения ответственным руководителям, а исполнение решений по проблемам бизнеса находится на контроле.",
  },
];

const awardsByYear = [
  {
    year: "2022",
    items: [
      "Медаль «Шуҳрат»: Каримов Равшан Муродович, руководитель ООО «Metin Group Impeks».",
    ],
  },
  {
    year: "2023",
    items: [
      "Орден «Дўстлик»: Шукурлаев Дилшод Далерович, учредитель ООО «Zarmed Pratiksha Hospital Group».",
      "Медаль «Шуҳрат»: Норбоев Анвар Очилович, директор ООО «Каттақўрғон электротехника заводи».",
    ],
  },
  {
    year: "2024",
    items: [
      "Орден «Дўстлик»: Рустамов Илхом Асламович, генеральный директор ООО «Ahmadbek Qurilish Trio».",
      "Медаль «Шуҳрат»: Ибодуллаев Умаржон Гайбуллаевич, директор ООО «Bekmez Carpet».",
      "Медаль «Шуҳрат»: Эшонкулов Шокир Хамдамович, директор семейного предприятия «Silver Green Tea».",
    ],
  },
  {
    year: "2025",
    items: [
      "Почетное звание «Ўзбекистон Республикасида хизмат кўрсатган тадбиркор»: Абдуллоев Камол Талатович и Саидмуродов Уктам Саидмуродович.",
      "Орден «Дўстлик»: Тураев Зафар Суюнович и Эргашев Шухрат Шарипович.",
      "Медаль «Шуҳрат»: Комилов Насимжон Кобилжонович.",
    ],
  },
];

const honoraryItems = [
  "13 марта 2025 года Шарипов Шавкат Уктамович и Абдуллаев Камол Талъатович представлены к принятию Почетными членами Международной Академии «Турон».",
  "29 сентября 2025 года члены Общественного Совета старше 60 лет были награждены памятными поздравлениями-плакетками ко Дню учителя и наставника.",
];

const teacherDayNames = [
  "Ниязова Марьям Кодировна",
  "Кучкорова Гулбека Алламуратовна",
  "Рахимов Пулат Рахимович",
  "Зиёев Файзулло Зиёевич",
  "Саидмуродов Уктам Саидмуродович",
  "Уроков Хайдар Мухаммадиевич",
  "Шарипов Шавкат Уктамович",
  "Ибрагимов Нозир Алиевич",
  "Юсупов Носир Фатихович",
  "Багиров Носир Мусоевич",
];

export default function CouncilWorkSection() {
  const { language } = useLanguage();
  const text = copy[language] || copy.ru;

  return (
    <section className="relative overflow-hidden bg-white dark:bg-background-dark border-t border-slate-100 dark:border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
            <CalendarDays size={14} />
            {text.eyebrow}
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight text-text-main dark:text-white">
            {text.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted dark:text-gray-400">
            {text.subtitle}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <div className="h-full rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-7 md:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary dark:text-primary-300">
                <UsersRound size={22} />
              </div>
              <h3 className="mt-6 text-2xl font-black text-text-main dark:text-white">
                {text.meetingsTitle}
              </h3>
              <p className="mt-4 text-text-muted dark:text-gray-400 leading-relaxed">
                {text.meetingsDesc}
              </p>

              <div className="mt-8 rounded-xl bg-white dark:bg-background-dark border border-slate-200 dark:border-white/10 p-5">
                <h4 className="font-bold text-text-main dark:text-white">
                  {text.processTitle}
                </h4>
                <div className="mt-4 space-y-4">
                  {meetingSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.title} className="flex gap-3">
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-text-main dark:text-white">
                            {index + 1}. {step.title}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-text-muted dark:text-gray-400">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-7 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Award size={23} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-text-main dark:text-white">
                    {text.recognitionTitle}
                  </h3>
                  <p className="mt-3 text-text-muted dark:text-gray-400 leading-relaxed">
                    {text.recognitionDesc}
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {awardsByYear.map((group) => (
                  <div
                    key={group.year}
                    className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-background-dark p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary dark:text-primary-300">
                        <Medal size={18} />
                      </div>
                      <h4 className="text-xl font-black text-text-main dark:text-white">
                        {group.year}
                      </h4>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-relaxed text-text-muted dark:text-gray-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-amber-200 dark:border-amber-800/50 bg-amber-50 dark:bg-amber-900/15 p-5">
                  <h4 className="font-black text-amber-900 dark:text-amber-200">
                    {text.honoraryTitle}
                  </h4>
                  <div className="mt-3 space-y-3">
                    {honoraryItems.map((item) => (
                      <p
                        key={item}
                        className="text-sm leading-relaxed text-amber-900/80 dark:text-amber-100/80"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-background-dark p-5">
                  <h4 className="font-black text-text-main dark:text-white">
                    {text.teacherTitle}
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {teacherDayNames.map((name) => (
                      <span
                        key={name}
                        className="rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 text-xs font-semibold text-text-muted dark:text-gray-300"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-muted dark:text-gray-400">
                    Подарки вручены Хокимом области Бобоевым А. М.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
