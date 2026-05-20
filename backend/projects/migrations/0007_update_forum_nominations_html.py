from django.db import migrations

def update_forum_nominations(apps, schema_editor):
    Project = apps.get_model("projects", "Project")
    forum = Project.objects.filter(name="Форум Промышленников Самаркандской области").first()
    if not forum:
        # Fallback to legacy names
        forum = Project.objects.filter(name="Форум промышленников Самаркандской области").first()
        
    if forum:
        forum.full_desc = """<p>В экономической политике Нового Узбекистана особое место отводится росту промышленности, импортозамещению и развитию промышленной кооперации между отечественными производителями.</p>
<p>В целях поощрения передовых производственных предприятий и распространения их технологического и управленческого опыта была инициирована организация «Форума Промышленников Самаркандской области». В рамках форума наряду с награждениями по различным номинациям проводится обсуждение проблем локализации производства, промышленной кооперации и расширения экспорта по отраслям промышленности.</p>

<h3>Форум Промышленников – 2023 (Итоги 2022 года)</h3>
<p><strong>Дата проведения:</strong> 30-31 мая 2023 года</p>
<table>
  <thead>
    <tr>
      <th style="width: 40%;">Номинация</th>
      <th style="width: 60%;">Победители</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Самое образцовое предприятие в области локализации производства</strong></td>
      <td>
        <strong>Диплом I степени:</strong> СП ООО «AZIA METALL PROF»<br/>
        <strong>Диплом II степени:</strong> ООО «MIRANKUL CONSTRUCTION MATERIALS»<br/>
        <strong>Диплом III степени:</strong> ООО «KATTAQURG’ON ELEKTRO TEXNIKA ZAVODI»
      </td>
    </tr>
    <tr>
      <td><strong>Самое образцовое предприятие в области промышленной кооперации</strong></td>
      <td>
        <strong>Диплом I степени:</strong> ООО «STEKLOPLASTIK»<br/>
        <strong>Диплом II степени:</strong> ООО «MITAN YOG’DU ELEKTRIK»<br/>
        <strong>Диплом III степени:</strong> ООО «SAM NEGIN»
      </td>
    </tr>
    <tr>
      <td><strong>Самый крупный инвестиционный проект в промышленной сфере</strong></td>
      <td>
        <strong>Диплом I степени:</strong> ООО «BAHT SAMARKAND TEKS»<br/>
        <strong>Диплом II степени:</strong> СП ООО «AZIA METALL PROF»<br/>
        <strong>Диплом III степени:</strong> ООО «SMART HYGIENE FACILITIES»
      </td>
    </tr>
    <tr>
      <td><strong>Самый образцовый бренд</strong></td>
      <td>
        <strong>Диплом I степени:</strong> Торговая марка "SAG" ООО "Sam Antep Gilam"<br/>
        <strong>Диплом II степени:</strong> Торговая марка "Pure Milky" группы компаний "SIYOB Group"<br/>
        <strong>Диплом III степени:</strong> Торговая марка "Nishon Baxt" ЧП "Nishon Baxt"
      </td>
    </tr>
    <tr>
      <td><strong>Самое образцовое предприятие-экспортер (среди крупных предприятий)</strong></td>
      <td>
        <strong>Диплом I степени:</strong> СП ООО «AZIA METALL PROF»<br/>
        <strong>Диплом II степени:</strong> ООО «PAXTACHI KLASTER»<br/>
        <strong>Диплом III степени:</strong> ООО «OHALIK OLTIN BOG’I MEVASI»
      </td>
    </tr>
    <tr>
      <td><strong>Самое образцовое предприятие-экспортер (среди средних и малых предприятий)</strong></td>
      <td>
        <strong>Диплом I степени:</strong> ООО «JOMBOY NASLLI PARRANDA»<br/>
        <strong>Диплом II степени:</strong> ООО «DKIZ 2022»<br/>
        <strong>Диплом III степени:</strong> ООО «URGUT KAMOL JAMOL»
      </td>
    </tr>
    <tr>
      <td><strong>Самое образцовое социально-активное предприятие</strong></td>
      <td>
        <strong>Диплом I степени:</strong> Группа компаний "SXF Group"<br/>
        <strong>Диплом II степени:</strong> ООО "Nurli Kelajak Ishonch Servis"<br/>
        <strong>Диплом III степени:</strong> ООО "Sam Antep Gilam"
      </td>
    </tr>
    <tr>
      <td><strong>СМИ: Самый активный журналист по освещению деятельности промышленных предприятий</strong></td>
      <td>
        • Уктам Худойбердиев (Корреспондент газеты "Зарафшон")<br/>
        • Юлдуз Хайдарова (Корреспондент газеты "Самаркандский вестник")<br/>
        • Жамшед Обидов (Корреспондент газеты "Овози Самарқанд")<br/>
        • Лутфулла Шомуродов (Корреспондент телеканала "Узбекистан - 24")
      </td>
    </tr>
    <tr>
      <td><strong>СМИ: Самый активный телеоператор</strong></td>
      <td>Икром Мамадалиев (Телеоператор Телерадиокомпании Самаркандской области)</td>
    </tr>
  </tbody>
</table>

<h3>Форум Промышленников – 2024 (Итоги 2023 года)</h3>
<p><strong>Дата проведения:</strong> 16-17 мая 2024 года</p>
<table>
  <thead>
    <tr>
      <th style="width: 40%;">Номинация</th>
      <th style="width: 60%;">Победители</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Самое образцовое предприятие в области локализации производства</strong></td>
      <td>
        <strong>Диплом I степени:</strong> ООО «NBA ALLIANZ»<br/>
        <strong>Диплом II степени:</strong> ООО «SATURN METAL QAYTA ISHLASH»<br/>
        <strong>Диплом III степени:</strong> ООО "SAMARKAND GOLDEN COLORS"
      </td>
    </tr>
    <tr>
      <td><strong>Самое образцовое предприятие в области промышленной кооперации</strong></td>
      <td>
        <strong>Диплом I степени:</strong> ООО «MITAN YOG’DU ELEKTRIK»<br/>
        <strong>Диплом II степени:</strong> ООО «ESMAK»<br/>
        <strong>Диплом III степени:</strong> ООО «SHERDOR ELITA PLAST»
      </td>
    </tr>
    <tr>
      <td><strong>Самое образцовое предприятие пищевой промышленности</strong></td>
      <td>
        <strong>Диплом I степени:</strong> ООО «MAROQAND GOLD OIL EXTRACTION»<br/>
        <strong>Диплом II степени:</strong> ООО «PAXTACHI RODNIK»<br/>
        <strong>Диплом III степени:</strong> ООО «NISHON GROUP»
      </td>
    </tr>
    <tr>
      <td><strong>Самое образцовое предприятие по выпуску продукции для туристической сферы</strong></td>
      <td>
        <strong>Диплом I степени:</strong> ЧП «KUMUSH TOLA»<br/>
        <strong>Диплом II степени:</strong> ООО «ASIA INVEST TEXTILE»<br/>
        <strong>Диплом III степени:</strong> ИП «SAIDOV ABDULLO»
      </td>
    </tr>
    <tr>
      <td><strong>Самое образцовое предприятие в области туризма</strong></td>
      <td>
        <strong>Диплом I степени:</strong> Выставочный центр "SOF EXPO SAMARKAND"<br/>
        <strong>Диплом II степени:</strong> ООО «SILK TUR»<br/>
        <strong>Диплом III степени:</strong> ООО «BO’STON TRAVEL»
      </td>
    </tr>
    <tr>
      <td><strong>Самый образцовый бренд</strong></td>
      <td>
        <strong>Диплом I степени:</strong> Торговая марка “KLEO” ООО “SAM FERRE”<br/>
        <strong>Диплом II степени:</strong> Торговая марка “AGRO BRAVO” ООО “AGRO BRAVO”<br/>
        <strong>Диплом III степени:</strong> Торговая марка “MONDELUX” ООО “GULOBOD MEBEL”
      </td>
    </tr>
    <tr>
      <td><strong>Самое образцовое предприятие-экспортер промышленной продукции</strong></td>
      <td>
        <strong>Диплом I степени:</strong> ООО «BRADJUS»<br/>
        <strong>Диплом II степени:</strong> ИП «HASID TEXTILE»<br/>
        <strong>Диплом III степени:</strong> ООО «ASIA TAREN»
      </td>
    </tr>
    <tr>
      <td><strong>Самое образцовое предприятие-экспортер сельскохозяйственной продукции</strong></td>
      <td>
        <strong>Диплом I степени:</strong> ООО «ANSORJON AGRO SAXOVATI»<br/>
        <strong>Диплом II степени:</strong> ООО «AGRO SOY PLAST»<br/>
        <strong>Диплом III степени:</strong> ООО «HAKAN AGRO INVEST»
      </td>
    </tr>
    <tr>
      <td><strong>Самое образцовое предприятие электротехнической промышленности</strong></td>
      <td>
        <strong>Диплом I степени:</strong> ООО «SAM NUR TAFRIZ»<br/>
        <strong>Диплом II степени:</strong> ООО «TESPACK INVESTMENT»<br/>
        <strong>Диплом III степени:</strong> ООО «KATTAQ’O’RG’ON ELEKTROTEXNIKA ZAVODI»
      </td>
    </tr>
    <tr>
      <td><strong>Самое образцовое предприятие фармацевтической промышленности</strong></td>
      <td>
        <strong>Диплом I степени:</strong> ООО «OPTIMA SOBIRJON»<br/>
        <strong>Диплом II степени:</strong> ЧП «MAXMADJON NURAFSHON»<br/>
        <strong>Диплом III степени:</strong> ООО «FORTUNA URGUT MEDICAL»
      </td>
    </tr>
    <tr>
      <td><strong>Самое образцовое предприятие мебельной промышленности</strong></td>
      <td>
        <strong>Диплом I степени:</strong> ООО «ERKIN SAVDO MOBIL SERVIS»<br/>
        <strong>Диплом II степени:</strong> Семейное предприятие «MEHR MEBELI»<br/>
        <strong>Диплом III степени:</strong> ООО «SABINA – S» МЧЖ
      </td>
    </tr>
    <tr>
      <td><strong>Самое образцовое предприятие промышленности строительных материалов</strong></td>
      <td>
        <strong>Диплом I степени:</strong> ООО «KAFOLAT- STIL» МЧЖ<br/>
        <strong>Диплом II степени:</strong> ООО «FOX PIPES INNOVATION»<br/>
        <strong>Диплом III степени:</strong> ИП «XITOY BESH BARMOQ QURILISH MATERIALLARI»
      </td>
    </tr>
  </tbody>
</table>

<h3>Форум Промышленников – 2025 (Итоги 2024 года)</h3>
<p><strong>Дата проведения:</strong> 17-18 апреля 2025 года</p>
<table>
  <thead>
    <tr>
      <th style="width: 40%;">Номинация</th>
      <th style="width: 60%;">Победители</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Самое образцовое предприятие года в области промышленной кооперации</strong></td>
      <td>ООО «SAM FERRE», Ургутский район</td>
    </tr>
    <tr>
      <td><strong>Самое образцовое предприятие года в области локализации производства</strong></td>
      <td>Узбекско-китайское СП ООО «AZIA METALL PROF», город Самарканд</td>
    </tr>
    <tr>
      <td><strong>Самое образцовое предприятие года в области экспорта промышленной продукции</strong></td>
      <td>Фермерское хозяйство "NAVOBOD NASLLI PARRANDA", Самаркандский район</td>
    </tr>
    <tr>
      <td><strong>Самый образцовый бренд</strong></td>
      <td>Торговые марки BLISS, MEVA JUICE, MARINELLE СП «AGROMIR», Самаркандский район</td>
    </tr>
  </tbody>
</table>"""
        forum.save()

class Migration(migrations.Migration):
    dependencies = [
        ('projects', '0006_alter_project_id'),
    ]
    operations = [
        migrations.RunPython(update_forum_nominations, migrations.RunPython.noop),
    ]
