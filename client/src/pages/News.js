import style from './styles/News.module.scss'
import HeaderMain from "../components/header/HeaderMain";
import Navigation from "../components/nav/Nav";
import NewsPost from "../components/news/NewsPost";
import {useEffect, useState} from "react";
import BigModal from "../components/modalwin/BigModal";
import CreatePost from "../components/news/CreatePost";

function News () {

    const [data, setData] = useState('')
    const [activemodal, setActivemodal] = useState(false)

    const news = [
        {
            name: '«Hope Fitness» провел тренировку в парке «За Саймой»',
            desc: 'Тренеры провели разминку в стиле «body combat» и обучили базовым навыкам бокса',
            url: '1.webp',
            date: '9 августа 2024',
            content: [
                'В здоровом теле здоровый дух. В сургутском парке «За Саймой» прошла открытая тренировка по боевым искусствам. Организатором выступил фитнес-центр Hope Fitness, входящий в группу компаний OMEDIA!, при поддержке Федерации бокса. К тренировке могли подключиться все желающие, случайно и целенаправленно пришедшие на площадку. Тренеры провели для них разминку в стиле «body combat», а также обучили базовым навыкам бокса. Энергией заразились на целый день. ',
                'Энергичные тренировки на открытом воздухе для всех желающих тренеры Hope Fitness проводят регулярно. В программе уже была «Зумба» для похудения, взрывной функциональный тренинг, стрейтчинг с элементами суставной гимнастики. В этот раз спортсмены отдали предпочтение боксу, как источнику энергии и отличного настроения на весь день. В ближайшее время сотрудники фитнес-центра также не оставят без внимания сургутян. На летнем фестивале группы компаний OMEDIA!, который пройдет 11 августа на площади СурГУ, развернется большая спортивная зона. В программе - армрестлинг, жим лежа, многоборье, эстафета и многое другое. Присоединиться к соревнованиям, мастер-классам и разминкам могут все желающие. ',
                '«Команда Hope Fitness, тренеры стремятся как можно больше привлечь жителей к здоровому образов жизни, чтобы люди, жители и гости города не забывали, что спорт и физическая культура - это немаловажно для здоровья, для качественной жизни. 11 августа ждем вас на фестивале компании OMEDIA! Ждем вас в спортивной зоне, где жители и гости города Cургута могут показать свои физические качества, проявить себя в таких дисциплинах, как жим лежа, силовой тренинг, армреслинг и так далее», - отметил организатор outdoor-тренировок Hope Fitness Игорь Корчмарь.'
            ]
        },
        {
            name: 'Стала известна программа летнего фестиваля OMEDIA!',
            desc: 'Фестиваль начнется в 12 часов',
            url: '2.jpeg',
            date: '7 августа 2024',
            content: [
                'В 12.00 начнет работу олимпийский шатер, в котором с гостями фестиваля будут общаться и фотографироваться:',
                'чемпионка Олимпийских игр-2022 по лыжным гонкам Юлия Ступак;',
                'чемпион Олимпийских игр-2020 по спортивной гимнастике Никита Нагорный;',
                'чемпион Олимпийских игр-2020 по спортивной гимнастике Давид Белявский.',
                'С 12.00 начнется серия мастер-классов от движения «Шьем для наших. Югра», объединяющего волонтеров, которые помогают бойцам, находящимся на передовой.',
                'В этом году перед главным входом СурГУ с 12.30 будет работать малая сцена, на которой выступят местные творческие коллективы лейбла OMEDIA! Music.',
                'В это же время начнет работать детская зона «Hope Kids» с активностями и развлечениями для детей.',
                'В полдень стартуют спортивные состязания, которые для гостей готовит команда фитнес-центра «Hope Fitness». Армрестлинг, функциональное многоборье, зрелищная эстафета «Спортивный десант» и многое другое (регистрация на соревнования).',
                'На футбольном поле тем временем развернется Чемпионат по фиджитал-футболу. Спортсменам предстоит сыграть в приставку, а затем выйти на реальное поле.',
                'В 12.00 начнет работу зона благотворительного фонда «Траектория надежды», где все желающие смогут принять участие в мастер-классах и узнать больше о работе фонда.',
                'С 12.30 будет работать интеллектуальная зона с бизнес-спикерами (купить билеты).',
                'В 13.00 начнется легкоатлетический забег: любители активного образа жизни всех возрастов выйдут на три дистанции: 1, 3 и 5 километров.',
                'Всё это время на площади будет работать зона фудкорта с едой и напитками.',
                'В 15:30 на главной сцене фестиваля мы с вами постараемся установить рекорд России по количеству людей, танцующих Just Dance (отрывок, который будем повторять).',
                'А в 16.00 начнется большой концерт, который откроет автор хита «Матушка Земля» Татьяна Куртукова. Также в этот день согревать вас будут Олег Майами, группа «Стрелки», Хабиб и Ольга Серябкина.'
            ]
        },
        {
            name: 'Партнеры OMEDIA! представят интересные зоны на летнем фестивале',
            desc: 'Будет весело и полезно',
            url: '3.jpg',
            date: '6 августа 2024',
            content: [
                'Меньше чем через неделю состоится большой летний фестиваль группы компаний OMEDIA!  Медиахолдинг уже анонсировал ряд активностей, которые будут проводить наши коллеги. Например, спортивный забег и соревнования от центра «Hope Fitness», детская анимационная зона от подразделения «Hope Kids».',
                'Разнообразие локаций, на которых можно будет весело и полезно провести время, обеспечивают также и партнеры фестиваля, в шатрах которых жители смогут познакомиться с различными компаниями и их деятельностью. К интеллектуальной зоне подключился международный образовательный центр Журавлевой «Лингва». «Вкусно и точка» расскажет о своих вакансиях. А на стенде магазина электронной техники «Re:Bro» можно будет заменить пленки и стеклах электронных устройств. ',
                '«В этом году мы предлагаем партнерство сразу на нескольких площадках: это детская зона, интеллектуальная зона, спортивная зона. Мы прилагаем все усилия для того, чтобы любые наши предложения для них качественные, интересные и выгодные. Одним из таких основных предложений в течение года, конечно же, участие в летнем фестивале ОМЕDIA!. У нас есть множество партнеров, которые ежегодно из фестиваля в фестиваль приходят вместе с нами, и это говорит об их высокой оценке не только наших усилий, но и обратной связи, в том числе и коммерческой, которую они получают в виде выгоды», - отметила генеральный продюсер медиахолдинга OMEDIA! Елена Саган.'
            ]
        },
        {
            name: 'Медиахолдинг OMEDIA! установил вблизи водоемов Сургута предупреждающие таблички',
            desc: 'Слоганы не совсем стандартные',
            url: '4.webp',
            date: '5 августа 2024',
            content: [
                'Медиахолдинг OMEDIA! совместно с управлением по делам ГО и ЧС администрации Сургута установил предупреждающие таблички в местах, где сургутяне чаще всего купаются в жаркие дни, несмотря на запреты. Речь идет о водохранилище ГРЭС-2 и районе «Черемушек».',
                'Мы сделали знаки большими и яркими в надежде на то, что люди, увидев их, еще раз задумаются, стоит ли лезть в воду.',
                'Слоганы, которые размещены на табличках, тоже не совсем стандартные. Это не просто «Купаться запрещено», а статистика по жертвам и напоминание, что штраф за купание в неположенном месте - это далеко не всегда деньги. Порой при самом трагичном исходе событий это жизнь.',
                '«Мы надеемся, что даже 1, 2, 3 человека, которые увидят эти предупреждающие знаки, может быть, задумаются о том, стоит это делать не стоит. Таблички мы намеренно сделали самые большие, которые только возможно было изготовить», - пояснила генеральный директор медиахолдинга ОMEDIA! Дарья Давыдова.',
                '«В рамках социального партнерства администрации города группой компания ОMEDIA! было предложено своими силами изготовить информационные знаки в области обеспечения безопасности людей на водных объектах. Учитывая назначения этих знаков, мы инициативу поддержали и в дополнение к 70 знакам, которые установлены на водоемах города, установили еще 8 знаков ОМЕДИА!. Цель одна – проинформировать максимальное количество жителей и гостей города о тех рисках, с которыми они могут столкнуться при отдыхе на водоемах, которые не оборудованы для купания и самое главное - это, конечно, сохранить жизнь и здоровье людей, в первую очередь детей», - добавил начальник управления по делам ГО и ЧС Сургута Андрей Рачев.'
            ]
        },
        {
            name: 'Летний фестиваль ОМЕDIА!: что ждет гостей самого масштабного события лета',
            desc: 'Мероприятие состоится 11 августа на площади СурГУ',
            url: '5.jpg',
            date: '1 августа 2024',
            content: [
                'Меньше чем через две недели в Сургуте состоится одно из самых масштабных и долгожданных событий этого лета. В этом году фестиваль группы компаний ОМЕDIА! порадует жителей разнообразием локаций и десятками приглашенных гостей. Среди последних не только артисты, которые выступят перед сургутянами во время вечернего концерта, но и олимпийские чемпионы.',
                'Возможность встретиться с ними и задать интересующие вопросы будет у каждого желающего 11 августа. Давид Белявский - семикратный чемпион Европы и победитель, а также серебряный и бронзовый призер олимпийских игр по спортивной гимнастике. Юлия Ступак - чемпионка, трехкратная бронзовая призерка Олимпийских игр по лыжным гонкам.',
                '«Дорогие друзья, я безумно рада вам сообщить о том, что 11 августа мы встречаемся с вами на фестивале ОМЕDIА!. Приходите обязательно, потому что мы будем много говорить о спорте и не только. В любом случае будет очень интересно. Я вас всех очень-очень жду», - обратилась к югорчанам олимпийская чемпионка по лыжным гонкам Юлия Ступак.',
                '«Встретимся 11 августа на летнем фестивале ОМЕDIА!, который пройдет на площади Сургутского университета. Пообщаемся, сделаем фото, проведем отлично время. Всех жду», - сказал олимпийский чемпион по спортивной гимнастике Давид Белявский.',               '',
                'Программа летнего фестиваля подобрана специально под разный возраст гостей. На нашем мероприятии дети смогут отлично провести время на мастер-классах от центра «Hope Kids», любители спорта получат возможность проявить себя на соревнованиях и играх, которые готовят сотрудники фитнес-центра «Hope Fitness», а желающие подкачать свои навыки в ораторском искусстве смогут присоединиться к нашим популярным экспертам в интеллектуальной зоне. Это лишь малая часть тех активностей, которые сможет посетить любой желающий. Подробнее о  площадках фестиваля, их точном расположении, а также концертной программе можно узнать в нашем telegram-канале «OMEDIA! | Сургут 24| О, Сургут!» и на сайте.',
                '«Мы работаем не только с молодежью или с серебряным возрастом. Мы работаем со всей аудиторией, которая проживает в нашем городе: это и дети, это и студенты, и школьники, и взрослое поколение, наши дедушки, бабушки, которым тоже есть чем заняться на нашем фестивале, которым интересно посещать нашу площадку», - подчеркнул президент группы компаний OMEDIA! Александр Клишин.'
            ]
        },
        {
            name: 'Стальной характер показала команда «Hope Fitness» на экстремальном забеге в Сургуте',
            desc: 'Десятки любителей спорта из Югры и ЯНАО присоединились к спортивному мероприятию',
            url: '6.jpg',
            date: '30 июля 2024',
            content: [
                'В Сургуте прошел всероссийский экстремальный забег «Стальной характер». До финиша - дистанции длиной 10/7/5/3 км с 22 сложными и изматывающими препятствиями.',
                'Десятки любителей спорта из Югры и ЯНАО присоединились к спортивному мероприятию. Среди них - команда фитнес-центра «Hope fitness» группы компаний OMEDIA!. Ее собрали из девушек и парней из числа постоянных клиентов. Шесть лет назад в другом составе, но по–прежнему под руководством тренера Владимира Овсова наша команда впервые покоряла дистанцию здесь же в родном Сургуте.',
                '«Начали готовиться заранее. Весь тренировочный процесс нашей команды был настроен не только на общую физподготовку, но и на формирование командного духа и сплоченности. Если в зале я тренер, и они меня слушают, то в забеге нет лидера, тут важна взаимная поддержка. Кому-то помогаешь, кто-то тебе руку тянет. И что круто, нет соперничества друг с другом. Предоставляется возможность проверить себя и укрепить коммуникации в непривычных условиях. Это не соревнование, а дружеский марафон. Друг познается… в грязи!» - рассказал Владимир Овсов.',
                'На подготовительных тренировках ребята еще не понимали, что их ждёт на полосе препятствий, и во время старта было нелегко. Пришлось взять волю в кулак и преодолеть дистанцию даже в непогоду, которая добавляла адреналина. Физическая подготовка наших ребят была хороша, но нет предела совершенству.',
                'Команда вернулась к рабочим будням и регулярным занятиям спортом в клубе «Hope Fitness», где есть возможность закалять своё тело и дух круглосуточно.'
            ]
        },
        {
            name: 'В Сургуте началась установка многофункциональной спортивной площадки от OMEDIA!',
            desc: 'Рабочие подготавливают основание для прорезиненного покрытия',
            url: '7.jpeg',
            date: '26 июля 2024',
            content: [
                'Скоро рядом с бассейном «Водолей» появится многофункциональная спортивная площадка - подарок любимому городу от группы компаний OMEDIA!.',
                '«Подрядчики установили временное ограждение территории, где будет смонтирован корт, рабочие начинают подготовку основания для прорезиненного покрытия. Конструкции уже изготавливают, сроки поставки - два месяца. Надеемся, что все придет в срок», - отметил президент группы компаний OMEDIA! Александр Клишин.',
                'Также мы закладываем время на монтаж и проверку качества конструкций. Постараемся успеть сделать корт в этом сезоне, чтобы сургутяне успели оценить зону для футбола, баскетбола и волейбола.',
                'Напомним, что переговоры об установке спортивной площадки мы начали в продолжение истории новогоднего благоустройства сквера «Строителей».  В группе компаний решили, что летнее благоустройство будет отличным продолжением начатой инициативы.'
            ]
        },
        {
            name: '«Hope Kids» проведет семейный квест в Сургуте',
            desc: 'Гостей ждут задания на логику, знание родного края и спортивную подготовку от наших сказочных персонажей',
            url: '8.jpeg',
            date: '24 июля 2024',
            content: [
                '27 июня в 13 часов Городском парке культуры и отдыха детский центр «Hope Kids» группы компаний OMEDIA! проведет семейный квест. Принять в нем участие может любой желающий.',
                'Гостей ждут задания на логику, знание родного края и спортивную подготовку от наших сказочных персонажей. Ищите сокровища, используя карту и подсказки, и получайте подарки от OMEDIA! и Hope Kids.',
                'Регистрация на точке: https://2gis.ru/surgut/geo/5489449240625154/73.351076,61.261633'
            ]
        },
        {
            name: '11 августа в Сургуте состоится летний фестиваль OMEDIA!',
            desc: 'Программа останется очень насыщенной, интересной и обязательно придется по душе гостям разных возрастов',
            url: '9.webp',
            date: '23 июля 2024',
            content: [
                '11 августа на площади перед театром Сургутского государственного университета стартует, пожалуй, самый ожидаемый Open air года. Его программа останется очень насыщенной, интересной и обязательно придется по душе гостям разных возрастов.',
                'Наши коллеги из Hope Kids работают над наполнением детской зоны, которая будет включать в себя батуты, мастер-классы, аквагрим и другие активности. Представители фитнес-центра «Hope Fitness» разрабатывают программу спортивных состязаний. Теме спорта, кстати, мы продолжим уделять большое внимание.',
                'В Сургут приедут звезды Олимпиады. Мы ждем Давида Белявского - чемпиона игр по спортивной гимнастике. Подтвердила визит Юлия Ступак. Это олимпийская чемпионка по лыжным гонкам. Они ответят на интересующие сургутян вопросы, не откажут ни в фото, ни в автографах.',
                'Запланирован большой окружной турнир по фиджитал-футболу. Победитель получит путевку на всероссийские состязания. Откроет соревнования, планируется, президент Всероссийской Федерации фиджитал-спорта Никита Нагорный, олимпийский чемпион по спортивной гимнастике. Он, к слову, тоже проведет встречу в форме открытого микрофона с гостями фестиваля.',
                '«Мы в этом году постарались учесть большинство рекомендаций, которые нам давали люди, которые приходили к нам. То, что мы сделаем 11 августа, будет действительно лучше, чем в прошлом году. Это будет самое масштабное, крупное, самое крутое мероприятие в нашем округе», - подчеркнул президент группы компаний OMEDIA! Александр Клишин.',
                '«В этом году мы сильнее доработали все зоны для гостей. Мы поменяли расположение некоторых зон для того, чтобы было удобнее, добавили зону OMEDIA!, в которой вы сможете ближе познакомиться с деятельностью нашей компании, узнать, чем мы занимаемся, где мы располагаемся. Добавили несколько интерактивных зон, где вы сможете провести время как сами, так и с детьми. Также останется зона спортивных мероприятий. Детская зона расширится очень сильно. Мы поработали над зоной общепита. Мы начинали с палаток. Сейчас все будет гораздо более ухоженно, красиво. В этом году мы сильно поработали над оформлением. Я думаю, что вы это обязательно заметите», - рассказал pr-менеджер группы компаний OMEDIA! Данил Михайлов.',
                'В этом году стать участником фиджитал-движения сможет абсолютно каждый. Сургутяне и гости летнего фестиваля получат возможность быть соавторами рекорда страны, станцевав вместе в Just Dance. Поможет в этом участница Игр будущего из Сургутского района Анастасия Агафонова. Она в Казани на мировых соревнованиях стала четвертой.',
                'В группу компаний OMEDIA! входит корпорация «АвиаТЕХ». Праздник не обойдется без воздушной тематики. Руководитель авиационного подразделения Сергей Мельник на забрендированном самолете прилетит в наш город. Воздушное судно будет стоять на площади перед СурГУ. Что касается музыкального направления, то в этом году на летнем фестивале мы смонтируем две сцены.',
                'На малой выступят молодые исполнители и группы, которые приняли решение сотрудничать с брендом OMEDIA! music. Платформу мы запустили в этом году, сейчас выпускаем подкасты. Кроме того, сотрудники лейбла помогают музыкантам продвигать творчество на интернет-площадках. Ну, и, конечно, основная сцена. За два года на ней выступили такие звезды, как Анастасия Крайнова, Акмаль, Елена Темникова, Сергей Павловский, Мари Краймбери, группа «Вирус», Амирчик, Митя Фомин, ХАННА, Оксана Ковалевская.',
                '«В этом году к нам приедут гости из нашей молодости, скажем так. Это группа "Стрелки". Также на сцене для сургутян и гостей фестиваля, гостей города выступит Олег Майами, выступит Хабиб, выступит Татьяна Куртукова - наша патриотичная, пробирающая до мурашек своими композициями. Также для сургутян споет Ольга Серябкина. Завершит фестиваль группы компаний ОMEDIA! в этом году салют, длительность которого будет составлять не менее 7 минут», - поделилась генеральный директор медиахолдинга OMEDIA! Дарья Давыдова.'

            ]
        },
        {
            name: 'Эко-магазин благотворительного фонда «Траектория Надежды» сменил место локации',
            desc: 'Сейчас он находится на улице Магистральной, 36 в Сургуте',
            url: '10.jpg',
            date: '17 июля 2024',
            content: [
                'Эко-магазин «Мир» благотворительного фонда «Траектория Надежды» существует с 2021 года и занимается сбором и передачей нуждающимся одежды, обуви, игрушек и предметов интерьера. На протяжении трех лет сургутяне активно участвуют в деятельности организации, принося как новые, так и ненужные вещи. Тем самым оказывают помощь жителям из категории незащищенных, которым эти изделия необходимы.',
                'Совсем недавно эко-магазин «Мир» переехал в новое помещение, которое больше по площади и находится в удобном для жителей районе.',
                '«Проект "Эко-мир" зацепил много сердец, мне кажется, в городе и организациях. Например, для того, чтобы переехать сюда, в новое помещение, мы привлекли порядка пяти наших партнеров. Кто-то помог нам сделать ремонт, покрасить стены абсолютно безвозмездно, хотя здесь помещение 110 квадратных метров. Кто-то предоставил нам клининг, поменяли лампы на энергосберегающие. Очень было много помощи, даже вплоть до того, что грузчики были предоставлены, машины грузовые, чтобы все это перевезти», - рассказала и. о. исполнительного директора благотворительного фонда «Траектория Надежды» Ирина Мазуренко.',
                'Помещение, в котором сейчас находится эко-магазин, передали фонду власти Сургута на безвозмездной основе. «Траектории Надежды» остается лишь самостоятельно покрывать расходы по коммунальным платежам.',
                'С переездом и увеличением площади эко-магазина у благотворительного фонда «Траектория Надежды» появилась возможность проводить на его территории ряд полезных мероприятий: мастер-классы по шитью, изготовлению эко-сумок, а также обучающие и творческие занятия по вторичному использованию материалов. Совместно с партией «Новые люди» планируется создать зону по переработке пластика, где посетители смогут не только сдать полимеры, но и узнать больше о самом процессе переработки и его значении для природы.',
                'Сейчас эко-магазин находится на улице Магистральной, 36. Каждый желающий может принять участие в благотворительности или получить помощь с понедельника по пятницу с 10 до 17 часов.'
            ]
        },
        {
            name: '«Hope Fitness» провел открытую тренировку на свежем воздухе',
            desc: 'Энергичные тренировки для всех желающих прошли в парке «За Саймой»',
            url: '11.jpeg',
            date: '16 июля 2024',
            content: [
                'В парке «За Саймой» прошли энергичные тренировки для всех желающих под руководством тренеров фитнес-центра «Hope Fitness». В программе была Зумба для похудения, взрывной функциональный тренинг, стретчинг с элементами суставной гимнастики.',
                'Среди участников были сотрудники компании, посетители фитнес-центра и те, кто узнал о мероприятии из наших соцсетей либо просто не смог пройти мимо бодрящей музыки, - дети, взрослые и люди серебряного возраста.',
                'Мощная тренировка по трём динамичным направлениям вызвала восторг у участников. Да так, что они просили повторить встречу. Было место и спорту, и веселью.',
                'Отметим, что в фитнес-центре более 45 уникальных тренировочных программ, современное оборудование, спа-центр, множество функциональных зон и всё необходимое для комфортного и эффективного времяпрепровождения.'
            ]
        },
        {
            name: 'Началось благоустройство территории Центра помощи бездомным животным «Верный друг»',
            desc: 'Энергичные тренировки для всех желающих прошли в парке «За Саймой»',
            url: '12.jpeg',
            date: '14 июля 2024',
            content: [
                'В Центре помощи бездомным животным «Верный друг» благотворительного фонда «Траектория Надежды» продолжается благоустройство. На участке, где будут жить подопечные, установили забор, выложили часть территории плитами. Следующие на очереди - работы по строительству вольеров для собак. Постепенно эта территория превратится в красивый и удобный центр передержки, куда можно будет приезжать и учиться ухаживать за животными - гулять с ними, кормить и просто проводить время с хвостатыми.'
            ]
        }

    ]

    useEffect(()=>{

    },[])
    return (
        <div className={style.bodymain}>
            <BigModal data={<CreatePost news={data} setActivemodal={setActivemodal}/>} activemodal={activemodal} setActivemodal={setActivemodal} setData={setData}/>
            <HeaderMain page={'./Новости'}/>
            <div className={style.main}>
                <div className={style.leftpath}>
                    <Navigation />
                </div>
                <div className={style.centerpath}>
                    <div className={style.pluspost} onClick={()=>setActivemodal(true)}>
                        <i className="fa-solid fa-plus"/>
                        <div className={style.namebtn}>Добавить новость</div>
                    </div>
                    {news.map((post, index)=>(
                        <NewsPost post={post} key={index}/>
                    ))}
                </div>
                <div className={style.rightpath}></div>
            </div>


        </div>
    )
}

export default News