let common = [
    {question: "Что необходимо учитывать при выборе антимикробных препаратов для лечения инфекционного заболевания?",
    answer1: "этиологию заболевания (или предположение о его этиологии)",
    answer2: "данные о чувствительности к АМП возбудителей инфекционного заболевания (или прогнозируемой чувствительности)",
    answer3: "факторы со стороны пациента, которые часто оказывают существенное влияние на выбор АМП",
    answer4: "все вышеуказанное",
    correct: ["answer4"],
    },
    {question: "Какие методы используются в настоящее время для идентификации возбудителей инфекционных заболеваний?",
    answer1: "микробиологические",
    answer2: "иммунологические",
    answer3: "молекулярно-генетические",
    answer4: "все вышеуказанные",
    correct: ["answer4"],
    },
    {question: "Какие из перечисленных правил забора клинического материала не является обязательным?",
    answer1: "оценка риск/польза для пациента при выборе метода забора материала",
     answer2: "проведение забора материала до начала антимикробной терапии",
    answer3: "использование специальных транспортных сред",
    answer4: "своевременная доставка материала в лабораторию в возможно краткие сроки",
    correct: ["answer3"],
    },
    {question: "Какие из перечисленных методов определения чувствительности относятся к полуколичественным?",
        answer1: "диско-диффузионный",
        answer2: "метод разведения в агаре",
        answer3: "метод разведения в бульоне",
        answer4: "метод Етестов",
        answer5: "ни один из указанных",
        correct: ["answer1"],
    },
    {question: "Какие из перечисленных методов определения чувствительности относятся к полуколичественным?",
        answer1: "метод разведения в агаре",
        answer2: "метод разведения в бульоне",
        answer3: "метод Етестов",
        answer4: "диско-диффузионный",
        answer5: "ни один из указанных",
        correct: ["answer1"],
    },
    {question: "Какие из перечисленных методов определения чувствительности относятся к количественным?",
        answer1: "диско-диффузионный",
        answer2: "метод разведения в агаре",
        answer3: "метод разведения в бульоне",
        answer4: "метод Етестов",
        answer5: "ни один из указанных",
        correct: ["answer2", "answer3", "answer4"]
    },
    {question: "Какие из перечисленных факторов со стороны пациента могут оказать влияние на выбор соответствующих антимикробных препаратов",
        answer1: "нежелательные реакции на препараты в анамнезе?",
        answer2: "возраст пациента",
        answer3: "генетические/метаболические особенности",
        answer4: "беременность",
        answer5: "функции печени и почек",
        answer6: "локализация инфекции",
        answer7: "все указанные",
        answer8: "ни один из указанных",
        correct: ["answer7"],
    },
    {question: "Какие из перечисленных ниже препаратов не применяют у пациентов в возрасте до 8 лет?",
        answer1: "пенициллины",
        answer2: "макролиды",
        answer3: "сульфаниламиды",
        answer4: "тетрациклины",
        answer5: "все указанные",
        correct: ["answer4"],
    },
    {question: "Какие из перечисленных ниже препаратов могут вызывать гемолиз у лиц с дефицитом глюкозы-6-фосфат дегидрогеназы?",
        answer1: "пенициллины",
        answer2: "макролиды",
        answer3: "сульфаниламиды",
        answer4: "тетрациклины",
        answer5: "хлорамфеникол",
        correct: ["answer3", "answer5"],
    },
    {question: "Какие препараты считаются безопасными для применения у беременных?",
        answer1: "пенициллины",
        answer2: "эритромицин",
        answer3: "цефалоспорины",
        answer4: "тетрациклины",
        answer5: "хлорамфеникол",
        answer6: "метронидазол",
        correct: ["answer1", "answer2", "answer3"],
    },
    {question: "Для каких из перечисленных ниже препаратов всегда требуется коррекция дозы при нарушении функции почек?",
        answer1: "Для каких из перечисленных ниже препаратов всегда требуется коррекция дозы при нарушении функции почек",
        answer2: "аминогликозиды",
        answer3: "тетрациклины",
        correct: ["answer2"],
    },
    {question: "Для каких из перечисленных ниже препаратов всегда требуется коррекция дозы при нарушении функции печени?",
        answer1: "эритромицин",
        answer2: "аминогликозиды",
        answer3: "цефоперазон",
        correct: ["answer1"],
    },
    {question: "Назовите 5 основных причин для использования комбинаций антимикробных препаратов",
        answer1: "профилактика возникновения резистентности",
        answer2: "снижение стоимости терапии",
        answer3: "наличие полимикробной инфекции",
        answer4: "эмпирическая терапия",
        answer5: "снижение токсичности",
        answer6: "достижение синергизма",
        answer7: "достижение более быстрого клинического эффекта",
        correct: ["answer1", "answer3", "answer4", "answer5", "answer6"],
    },
    {question: "Назовите 3 наиболее значимых опасности нерационального использования комбинаций антимикробных препаратов",
        answer1: "синергизм",
        answer2: "антагонизм",
        answer3: "аддитивный (индифферентный) эффект",
        answer4: "увеличение стоимости терапии",
        answer5: "снижение стоимости терапии",
        answer6: "развитие нежелательных реакций",
        correct: ["answer2", "answer4", "answer6"],
    },
    {question: "Какие из перечисленных ниже путей введения антимикробных препаратов используются наиболее часто в клинической практике?",
        answer1: "пероральный",
        answer2: "интраартериальный",
        answer3: "интратекальный",
        answer4: "парентеральный",
        answer5: "интрасиновиальный",
        correct: ["answer1", "answer4"],
    },
    {question: "Какие из перечисленных ниже путей введения антимикробных препаратов нет необходимости использовать в клинической практике?",
        answer1: "пероральный",
        answer2: "интраплевральный",
        answer3: "интраперикардиальный",
        answer4: "парентеральный",
        answer5: "интрасиновиальный",
        answer6: "интраперитонеальный",
        correct: ["answer2", "answer3", "answer5", "answer6"],
    },
    {question: "Какой из перечисленных ниже видов мониторинга эффективности терапии является самым важным?",
        answer1: "мониторинг клинических симптомов и признаков заболевания",
        answer2: "мониторинг сывороточных концентраций антимикробных препаратов",
        answer3: "определение бактерицидного титра сыворотки",
        correct: ["answer1"],
    },
    {question: "Возбудителями инфекционных заболеваний у человека могут быть:",
        answer1: "бактерии",
        answer2: "вирусы",
        answer3: "простейшие",
        answer4: "грибы",
        answer5: "все указанные",
        correct: ["answer5"],
    },
    {question: "Природная резистентность",
        answer1: "появляется в результате использования антибиотиков",
        answer2: "является постоянным видовым признаком",
        correct: ["answer2"],
    },
    {question: "Формирование резистентности у бактерий может происходить в результате:",
        answer1: "продукции бактериями инактивирующих ферментов",
        answer2: "модификации мишени действия антибактериальных препаратов",
        answer3: "нарушения проницаемости внешних структур микробной клетки",
        answer4: "образования капсулы",
        correct: ["answer1", "answer2", "answer3"],
    },
    {question: "Резистентность к пенициллину не характерна для:",
        answer1: "Staphylococcus aureus",
        answer2: "Streptococcus pneumoniae",
        answer3: "Enterococcus faecalis",
        answer4: "Streptococcus pyogenes",
        answer5: "Escherichia coli",
        correct: ["answer4"],
    },
    {question: "Резистентность у стафилококков к оксациллину обусловлена:",
        answer1: "продукцией бета-лактамаз",
        answer2: "активным выведением оксациллина из бактериальной клетки",
        answer3: "формированием метаболического шунта",
        answer4: "модификацией мишени действия оксациллина – ПСБ",
        correct: ["answer4"],
    },
    {question: "Природной резистентностью к аминогликозидам обладают:  ",
        answer1: "Pseudomonas aeruginosa",
        answer2: "Staphylococcus aureus",
        answer3: "Сlostridium difficile",
        answer4: "Escherichia coli",
        answer5: "Enterobacter cloacae",
        correct: ["answer1", "answer4"],
    },
    {question: "К -лактамным антибиотикам относятся: ",
        answer1: "ампициллин",
        answer2: "пенициллин",
        answer3: "цефотаксим",
        answer4: "ципрофлоксацин",
        answer5: "спирамицин",
        answer6: "линкомицин",
        correct: ["answer1", "answer2", "answer3"],
    },
    {question: "К макролидным антибиотикам относятся: ",
        answer1: "нетилмицин",
        answer2: "азитромицин",
        answer3: "карбенициллин",
        answer4: "цефуроксим",
        answer5: "кларитромицин",
        answer6: "ванкомицин",
        answer7: "спирамицин",
        correct: ["answer2", "answer5", "answer7"],
    },
    {question: "К аминогликозидным антибиотикам относятся:  ",
        answer1: "амоксициллин",
        answer2: "амикацин",
        answer3: "клиндамицин",
        answer4: "гентамицин",
        answer5: "рокситромицин",
        answer6: "тобрамицин",
        answer7: "рифампицин",
        correct: ["answer2", "answer4", "answer6"],
    },
    {question: "К хинолонам относятся: ",
        answer1: "ципрофлоксацин",
        answer2: "канамицин",
        answer3: "пипемидовая кислота",
        answer4: "рифампицин",
        answer5: "моксифлоксацин",
        answer6: "гатифлоксацин",
        answer7: "ванкомицин",
        correct: ["answer1", "answer3", "answer5", "answer6"],
    },
    {question: "Укажите полиеновые противогрибковые препараты:",
        answer1: "Укажите полиеновые противогрибковые препараты:",
        answer2: "флуцитозин",
        answer3: "нистатин",
        answer4: "кетоконазол",
        answer5: "каспофунгин",
        answer6: "леворин",
        correct: ["answer1", "answer3", "answer6"],
    },
    {question: "Укажите противогрибковые препараты:",
        answer1: "фосфомицин",
        answer2: "тербинафин",
        answer3: "флуцитозин",
        answer4: "спектиномицин",
        answer5: "линезолид",
        answer6: "каспофунгин",
        correct: ["answer2", "answer4", "answer6"],
    },
    {question: "Укажите группы антиретровирусных препаратов:",
        answer1: "ингибиторы нейроаминидазы",
        answer2: "ингибиторы протеаз",
        answer3: "ингибиторы дигидрофолатредуктазы",
        answer4: "нуклеозидные ингибиторы обратной транскриптазы",
        answer5: "ненуклеозидные ингибиторы обратной транскриптазы",
        answer6: "ингибиторы топоизомераз",
        correct: ["answer2", "answer4", "answer5"],
    },
    {question: "Укажите препараты, активные против герпес-вирусов:",
        answer1: "ацикловир",
        answer2: "ацикловир",
        answer3: "зидовудин",
        answer4: "видарабин",
        answer5: "фоскарнет",
        answer6: "ламивудин",
        answer7: "валацикловир",
        correct: ["answer1", "answer4", "answer5", "answer7"],
    },
    {question: "Выберите утверждения, правильные для ацикловира:",
        answer1: "ацикловир является пролекарством",
        answer2: "ацикловир отличается высокой селективностью действия в отношении инфицированных клеток",
        answer3: "противовирусной активностью обладает ацикловиртрифосфат",
        answer4: "ацикловир активен в отношении вирусов гриппа, парагриппа, герпес вирусов",
        answer5: "ацикловир нарушает синтез вирусной ДНК",
        correct: ["answer2", "answer3", "answer5"],
    },
    {question: "Что входит в предмет изучения клинической фармакологии? ",
        answer1: "Фармакодинамика",
        answer2: "Фармакоэкономика",
        answer3: "Фармакоэпидемиология",
        answer4: "Лекарственные взаимодействия",
        answer5: "Общая рецептура ",
        correct: ["answer1", "answer2", "answer3", "answer4"],
    },
    {question: "Что изучает фармакодинамика? ",
        answer1: "Всасывание ЛС",
        answer2: "Механизм действия ЛС",
        answer3: "Действие ЛС на рецепторы",
        answer4: "Концентрацию ЛС в крови",
        answer5: "Метаболизм ЛС",
        correct: ["answer2", "answer3"],
    },
    {question: "Что изучает фармакокинетика? ",
        answer1: "Комплаентность",
        answer2: "Всасывание ЛС",
        answer3: "Распределение ЛС в организме",
        answer4: "Механизм действия ЛС",
        answer5: "Экскрецию ЛС",
        correct: ["answer2", "answer3", "answer5"],
    },
    {question: "Что такое международное непатентованное название ЛС? ",
        answer1: "Название, определяющее принадлежность ЛС к фармакологической группе",
        answer2: "Название, отражающее химическую структуру ЛС",
        answer3: "Название, которое присваивается фармацевтической компанией, производящей ЛС",
        correct: ["answer1"],
    },
    {question: "Какое название препарата является международным непатентованным?",
        answer1: "Цефазолин",
        answer2: "Цефамезин",
        answer3: "Кефзол",
        correct: ["answer1"],
    },
]

let dynamic = [
    {question: "Природная резистентность: ",
    answer1: "появляется в результате использования антибиотиков",
    answer2: "является постоянным видовым признаком",
    correct: ["answer2"],
    },
    {question: "Формирование резистентности у бактерий может происходить в результате:",
        answer1: "продукции бактериями инактивирующих ферментов",
        answer2: "модификации мишени действия антибактериальных препаратов",
        answer3: "нарушения проницаемости внешних структур микробной клетки",
        answer4: "образования капсулы",
        correct: ["answer1", "answer2", "answer3"],
},
{question: "Что изучает фармакодинамика? ",
        answer1: "Всасывание ЛС",
        answer2: "Механизм действия ЛС",
        answer3: "Действие ЛС на рецепторы",
        answer4: "Концентрацию ЛС в крови",
        answer5: "Метаболизм ЛС",
        correct: ["answer2", "answer3"],
    },
]

let penicillin = [
    {question: "Резистентность к пенициллину не характерна для:",
        answer1: "Staphylococcus aureus",
        answer2: "Streptococcus pneumoniae",
        answer3: "Enterococcus faecalis",
        answer4: "Streptococcus pyogenes",
        answer5: "Escherichia coli",
        correct: ["answer4"],
    },
    {question: "Резистентность у стафилококков к оксациллину обусловлена:",
        answer1: "продукцией бета-лактамаз",
        answer2: "активным выведением оксациллина из бактериальной клетки",
        answer3: "формированием метаболического шунта",
        answer4: "модификацией мишени действия оксациллина – ПСБ",
        correct: ["answer4"],
    },
]

let aminoglycoside = [
    {question: "Природной резистентностью к аминогликозидам обладают:  ",
        answer1: "Pseudomonas aeruginosa",
        answer2: "Staphylococcus aureus",
        answer3: "Сlostridium difficile",
        answer4: "Escherichia coli",
        answer5: "Enterobacter cloacae",
        correct: ["answer1", "answer4"],
    },
]

let macrolide = [
    {question: "К макролидным антибиотикам относятся: ",
        answer1: "нетилмицин",
        answer2: "азитромицин",
        answer3: "карбенициллин",
        answer4: "цефуроксим",
        answer5: "кларитромицин",
        answer6: "ванкомицин",
        answer7: "спирамицин",
        correct: ["answer2", "answer5", "answer7"],
    },
    {question: "К аминогликозидным антибиотикам относятся:  ",
        answer1: "амоксициллин",
        answer2: "амикацин",
        answer3: "клиндамицин",
        answer4: "гентамицин",
        answer5: "рокситромицин",
        answer6: "тобрамицин",
        answer7: "рифампицин",
        correct: ["answer2", "answer4", "answer6"],
    },
]

let hinolons = [
    {question: "К хинолонам относятся: ",
        answer1: "ципрофлоксацин",
        answer2: "канамицин",
        answer3: "пипемидовая кислота",
        answer4: "рифампицин",
        answer5: "моксифлоксацин",
        answer6: "гатифлоксацин",
        answer7: "ванкомицин",
        correct: ["answer1", "answer3", "answer5", "answer6"],
    },
]

let antimycotic = [
    {question: "Укажите полиеновые противогрибковые препараты:",
        answer1: "Укажите полиеновые противогрибковые препараты:",
        answer2: "флуцитозин",
        answer3: "нистатин",
        answer4: "кетоконазол",
        answer5: "каспофунгин",
        answer6: "леворин",
        correct: ["answer1", "answer3", "answer6"],
    },
    {question: "Укажите противогрибковые препараты:",
        answer1: "фосфомицин",
        answer2: "тербинафин",
        answer3: "флуцитозин",
        answer4: "спектиномицин",
        answer5: "линезолид",
        answer6: "каспофунгин",
        correct: ["answer2", "answer4", "answer6"],
    },
]

let antiviral = [
    {question: "Укажите группы антиретровирусных препаратов:",
        answer1: "ингибиторы нейроаминидазы",
        answer2: "ингибиторы протеаз",
        answer3: "ингибиторы дигидрофолатредуктазы",
        answer4: "нуклеозидные ингибиторы обратной транскриптазы",
        answer5: "ненуклеозидные ингибиторы обратной транскриптазы",
        answer6: "ингибиторы топоизомераз",
        correct: ["answer2", "answer4", "answer5"],
    },
    {question: "Укажите препараты, активные против герпес-вирусов:",
        answer1: "ацикловир",
        answer2: "ацикловир",
        answer3: "зидовудин",
        answer4: "видарабин",
        answer5: "фоскарнет",
        answer6: "ламивудин",
        answer7: "валацикловир",
        correct: ["answer1", "answer4", "answer5", "answer7"],
    },
    {question: "Выберите утверждения, правильные для ацикловира:",
        answer1: "ацикловир является пролекарством",
        answer2: "ацикловир отличается высокой селективностью действия в отношении инфицированных клеток",
        answer3: "противовирусной активностью обладает ацикловиртрифосфат",
        answer4: "ацикловир активен в отношении вирусов гриппа, парагриппа, герпес вирусов",
        answer5: "ацикловир нарушает синтез вирусной ДНК",
        correct: ["answer2", "answer3", "answer4"],
    },
]

let introduction = [
    {question: "Что входит в предмет изучения клинической фармакологии? ",
        answer1: "Фармакодинамика",
        answer2: "Фармакоэкономика",
        answer3: "Фармакоэпидемиология",
        answer4: "Лекарственные взаимодействия",
        answer5: "Общая рецептура ",
        correct: ["answer1", "answer2", "answer3", "answer4"],
    },
    {question: "Что изучает фармакодинамика? ",
        answer1: "Всасывание ЛС",
        answer2: "Механизм действия ЛС",
        answer3: "Действие ЛС на рецепторы",
        answer4: "Концентрацию ЛС в крови",
        answer5: "Метаболизм ЛС",
        correct: ["answer2", "answer3"],
    },
    {question: "Что изучает фармакокинетика? ",
        answer1: "Комплаентность",
        answer2: "Всасывание ЛС",
        answer3: "Распределение ЛС в организме",
        answer4: "Механизм действия ЛС",
        answer5: "Экскрецию ЛС",
        correct: ["answer2", "answer3", "answer5"],
    },
    {question: "Что такое международное непатентованное название ЛС? ",
        answer1: "Название, определяющее принадлежность ЛС к фармакологической группе",
        answer2: "Название, отражающее химическую структуру ЛС",
        answer3: "Название, которое присваивается фармацевтической компанией, производящей ЛС",
        correct: ["answer1"],
    },
    {question: "Какое название препарата является международным непатентованным?",
        answer1: "Цефазолин",
        answer2: "Цефамезин",
        answer3: "Кефзол",
        correct: ["answer1"],
    },
    {question: "Какие утверждения отражают понятие «комплаентность»?",
        answer1: "Какие утверждения отражают понятие «комплаентность»? ",
        answer2: "Приверженность пациента лечению",
        answer3: "Выполняемость пациентом врачебных рекомендаций",
        answer4: "Правильное назначение ЛС",
        correct: ["answer2", "answer3"],
    },
]

let kinetica = [
    {question: "Что изучает фармакокинетика? ",
        answer1: "Комплаентность",
        answer2: "Всасывание ЛС",
        answer3: "Распределение ЛС в организме",
        answer4: "Механизм действия ЛС",
        answer5: "Экскрецию ЛС",
        correct: ["answer2", "answer3", "answer5"],
    },
]

    let firstpart = [
        {question: "Какие группы препаратов применяют при лечении ЯБ:",
            answer1: "ИПП",
            answer2: "Антибиотики",
            answer3: "Желчегонные",
            answer4: "НПВС",
            correct: ["answer1", "answer2"],
        },
        {question: "Побочные эффекты пантопразола?",
            answer1: "тошнота, рвота",
            answer2: "головные боли",
            answer3: "панцитопения, агрануоцитоз",
            answer4: "гипонатриемия, гипомагниемия",
            correct: ["answer2", "answer3", "answer4"],
        },
        {question: "Максимальная концентрации адеметионина достигается в плазме через?",
            answer1: "30мин -1 час",
            answer2: "2 -3 часа",
            answer3: "4-6 часов",
            answer4: "2 - 6 часов",
            correct: ["answer4"],
        },]
let secondpart = [
    {question: "показания к назначению декстрозы?",
        answer1: "возмещение недостатка углеводов",
        answer2: "коорекция гиповолемического шока/коллапса",
        answer3: "проведение дегидратационной терапии",
        correct: ["answ"]
    },
    {question: "Фармакологическое действие декстрозы?",
        answer1: "повышение осмотического давления крови, усиление тока жидкости из тканей в кровь ",
        answer2: "снижение осмотического давления крови",
        answer3: "не влияет на антитоксическубю функцию печени",
        answer4: "расширяет сосуды, усиливает сократительную деятельность сердца",
        correct: ["answer1", "answer4"],
    },
    {question: "Режим дозирования альдостерона?",
        answer1: "100-200 мг/сут в 2-3 приема 14-21 дня",
        answer2: "200-300 мг/сут в 2-3 приема 7-14 дней",
        answer3: "50-150 мг/сут в 3 приема 14-21 день",
        correct: ["answer1"],
    },
]


 
const quizContainer = document.querySelector('.quiz-container');
let currentTheme = common;
let index = 0;
const indicator = document.querySelector(".indicators-container");

let AllCorrectAnswers = 0;// все возможжные правильные ответы в тесте
let AllCorrectChosens = 0;// все правильные ответы выбранные студентом
let AllIncorrectChosens = 0;// все неправильные ответы выбранные студентом
let totalScore = 0;
let testName = "";
let score;

const questionP = document.querySelector(".question");
const answer1btn = document.querySelector("#btn1");
const answer2btn = document.querySelector("#btn2");
const answer3btn = document.querySelector("#btn3");
const answer4btn = document.querySelector("#btn4");
const answer5btn = document.querySelector("#btn5");
const answer6btn = document.querySelector("#btn6");
const answer7btn = document.querySelector("#btn7");
const answer8btn = document.querySelector("#btn8");
const nextBtn = document.querySelector(".next-btn");

const task1el = document.querySelector(".task1");
const task2el = document.querySelector(".task2");

const answersArr = [answer1btn, answer2btn, answer3btn, answer4btn, answer5btn, answer6btn, answer7btn, answer8btn]

let usersAnswers = [];
let correctsArr = [];
let incorrectsArr = [];

function count(answer) {
    if(currentTheme[index].correct.includes(answer)) {
        if(correctsArr.includes(answer)){
            correctsArr.splice(correctsArr.indexOf(answer))
        } else {
            correctsArr.push(answer);
        }
        } else {
        if(incorrectsArr.includes(answer)){
            incorrectsArr.splice(incorrectsArr.indexOf(answer))
        } else {
            incorrectsArr.push(answer);
        }
    }
    }


function hideTheButtons() {
    answersArr.forEach((elem) => elem.style.display = 'none');
    questionP.style.display = "none";
    nextBtn.style.display = "none";
}

hideTheButtons();

class Quiz {
    constructor() {
        
    }

    render() {
        questionP.innerHTML = currentTheme[index].question;
        questionP.innerHTML += "<span class='warning'>(выберите один или несколько вариантов ответа)</span>"
        indicator.innerHTML += "<div class='indicator'></div>";
        questionP.style.display = "block";
        nextBtn.style.display = "block";
        AllCorrectAnswers += currentTheme[index].correct.length;


        if (currentTheme[index].answer1) {
            answer1btn.style.display = "block";
            answer1btn.innerHTML = currentTheme[index].answer1;
            if (currentTheme[index].answer2) {
                answer2btn.style.display = "block";
                answer2btn.innerHTML = currentTheme[index].answer2;
                if (currentTheme[index].answer3) {
                    answer3btn.style.display = "block";
                    answer3btn.innerHTML = currentTheme[index].answer3;
                    if (currentTheme[index].answer4) {
                        answer4btn.style.display = "block";
                        answer4btn.innerHTML = currentTheme[index].answer4;
                        if (currentTheme[index].answer5) {
                            answer5btn.style.display = "block";
                            answer5btn.innerHTML = currentTheme[index].answer5;
                            if (currentTheme[index].answer6) {
                                answer6btn.style.display = "block";
                                answer6btn.innerHTML = currentTheme[index].answer6;
                                if (currentTheme[index].answer7) {
                                    answer7btn.style.display = "block";
                                    answer7btn.innerHTML = currentTheme[index].answer7;
                                    if (currentTheme[index].answer8) {
                                        answer8btn.style.display = "block";
                                        answer8btn.innerHTML = currentTheme[index].answer8;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }      
    }

    checkAnswers(item) {
        usersAnswers.push(item);
        count(item);
    }

    nextQuestion() {
        // usersAnswers.sort();
        // let uniArr = [...new Set(usersAnswers)];
        // if(uniArr[0] == currentTheme[index].correct[0] &&
        //     uniArr[1] == currentTheme[index].correct[1] &&
        //     uniArr[2] == currentTheme[index].correct[2]) {1
        //     totalScore += currentTheme[index].correct.length;
        //     indicator.lastChild.style.backgroundColor = 'green';
        // } else if (uniArr[0] == currentTheme[index].correct[0] &&
        //     uniArr[1] == currentTheme[index].correct[1] &&
        //     uniArr[2] != currentTheme[index].correct[2])  {
        //     totalScore += currentTheme[index].correct.length;
        //     indicator.lastChild.style.backgroundColor = 'green';
        //
        // } else if (uniArr[0] == currentTheme[index].correct[0] &&
        //     uniArr[1] != currentTheme[index].correct[1] &&
        //     uniArr[2] != currentTheme[index].correct[2]){
        //     totalScore += currentTheme[index].correct.length;
        //     indicator.lastChild.style.backgroundColor = 'green';
        // } else {
        //     indicator.lastChild.style.backgroundColor = 'red';
        //
        // }
        AllCorrectChosens += correctsArr.length;
        AllIncorrectChosens += incorrectsArr.length;
        if (correctsArr.length > 0) {
            indicator.lastChild.style.backgroundColor = 'green';
        } else {
            indicator.lastChild.style.backgroundColor = 'red';
        }
        usersAnswers = [];
        correctsArr = [];
        incorrectsArr = [];
        answersArr.forEach((elem) => elem.classList.remove('bgc-green'));

        index++;
        hideTheButtons();
        if (index >= currentTheme.length){
            this.end();
        }

        this.render();   

    }

    end() {
        const questionContainer = document.querySelector(".question-container");
        questionContainer.innerHTML="";
        questionContainer.classList.add("full-screen");
        const finalScoreDiv = document.createElement("div");
        questionContainer.appendChild(finalScoreDiv);
        finalScoreDiv.setAttribute("class", "final-score");
        score =  AllCorrectChosens/(AllCorrectAnswers + AllIncorrectChosens)
        finalScoreDiv.innerHTML = `
        <h1>${testName}</h1>
        <p class="test-score">Ваш результат: ${Math.floor(score * 100)} %</p>
        <form>
        <input class="test-result" type="text" placeholder="Ф.И.О">
        <br>
        <input class="test-result" type="text" placeholder="Группа">
        <br>
        <input class="test-result" type="text" placeholder="Факультет">
        <br>
        <input class="test-result" type="email" placeholder="Емайл">
        <br>
        <button>Отправить</button>
</form>
        `

    }
}

class Menu {
    constructor() {
    }

    toggleTask1() {
        task1el.classList.toggle("hide-el");
    }

    toggleTask2() {
        task2el.classList.toggle("hide-el");
    }

}

function makeGreen(id) {
    document.getElementById("id").classList.toggle("bgc-green");
    debugger;
}

// document.getElementById("task1").addEventListener("click", new Menu().toggleTask1());
// document.getElementById("task2").addEventListener("click", new Menu().toggleTask2());
new Quiz().render();

answer1btn.addEventListener("click",function() {this.classList.toggle('bgc-green') });
answer2btn.addEventListener("click",function() {this.classList.toggle('bgc-green') });
answer3btn.addEventListener("click",function() {this.classList.toggle('bgc-green') });
answer4btn.addEventListener("click",function() {this.classList.toggle('bgc-green') });
answer5btn.addEventListener("click",function() {this.classList.toggle('bgc-green') });
answer6btn.addEventListener("click",function() {this.classList.toggle('bgc-green') });
answer7btn.addEventListener("click",function() {this.classList.toggle('bgc-green') });
answer8btn.addEventListener("click",function() {this.classList.toggle('bgc-green') });

function setThemeFunc(theme) {
    currentTheme = theme;
    indicator.innerHTML = "";
    new Quiz().render();
}
document.addEventListener("DOMContentLoaded", hideTheButtons());
