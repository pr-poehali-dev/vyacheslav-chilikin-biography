
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Book, Calendar, MapPin } from "lucide-react";

const Biography = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F7] text-[#333]">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center mb-8 text-primary hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          На главную
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Вячеслав Константинович Чиликин</h1>
          <div className="flex items-center text-muted-foreground mb-2">
            <Calendar className="w-4 h-4 mr-2" />
            <span>1915 – 2005</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Барнаул, Алтайский край</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="prose max-w-none">
                  <p className="text-lg font-medium mb-6">
                    Вячеслав Константинович Чиликин (1915 – 2005) пришел в литературу из «журналистского цеха»: 
                    работал на радио, больше сорока лет трудился в «Алтайской правде».
                  </p>

                  <h3 className="text-xl font-bold mb-3">Ранние годы</h3>
                  <p>
                    Родился 4 октября 1915 года в селе Николаевка Мариинского района (Кемеровская область). 
                    Отец Константин работал бухгалтером, мать – домохозяйка. У них было трое детей: 
                    старший сын Анатолий, средний Вячеслав и дочь Зоя. Сразу после революции семья переехала в Барнаул – 
                    он стал главным местом жизни и прозы Чиликина.
                  </p>

                  <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                    «Весна восемнадцатого – такая далекая и такая близкая для меня. И такая памятная, хотя мне не было тогда и трех лет. 
                    Поезд, красный трясучий вагон. Рядом – мать, отец, мой старший брат, корова и все наши вещи. 
                    Я сижу на сундуке, мне неудобно, больно поддает снизу. Мать утешает:
                    <br />– Немножечко потерпи, скоро приедем, вон уже и Барнаул показался.
                    <br />Мой язык совсем недавно научился выговаривать «р», и я с удовольствием повторяю: «Бар-рнаул».
                  </blockquote>

                  <p>
                    Чиликинская семья рано лишилась отца. Несмотря на то, что Вячеслав был ребёнком, 
                    на его плечи легло огромное количество обязанностей. Подрабатывал, делал всё по дому – 
                    другими словами, прикладывал все усилия для того, чтобы брат с сестрой получили высшее образование. 
                    Анатолий стал горным инженером, трудился на одной из шахт в Кузбассе, 
                    Зоя устроилась работать в органы внутренних дел.
                  </p>

                  <h3 className="text-xl font-bold mb-3 mt-8">Профессиональный путь</h3>
                  <p>
                    Когда пришло время учиться самому, был выбран университетский Томск. 
                    Но через короткое время пришла болезнь, которая шла рядом на протяжении всей последующей жизни. 
                    На редких фото писателя заметно как он оберегает правую руку. 
                    Всю основную работу, включая постоянное писание, приходилось делать левой рукой.
                  </p>

                  <p>
                    В эти году Вячеслав Константинович понял, что его призвание журналистика. 
                    В 1940 году он работает на радио, где по линии ВЛКСМ готовит еженедельные тридцатиминутные программы. 
                    Затем стал редактором городского радиовещания горкома ВКП(б). 
                    Чиликина называли местным Левитаном, ведь Вячеславу Константиновичу приходилось делать объявления, 
                    касающиеся военных действий.
                  </p>

                  <p>
                    В 1942 году он приходит работать в «Алтайскую правду». Военные годы требовали полной самоотдачи. 
                    Работать приходилось с раннего утра до поздней ночи. Был корреспондентом, 
                    затем заместителем ответственного секретаря, потом заведующим промышленным отделом, 
                    ответственным секретарём, и в 1961 году его назначили заместителем главного редактора. 
                    В этой должности проработал до 1985 года.
                  </p>

                  <h3 className="text-xl font-bold mb-3 mt-8">Литературное творчество</h3>
                  <p>
                    Старт случился в 1948 году. В начале века в старинном купеческом селе Алтайском 
                    появился культурный герой – отставной солдат русско-японской войны Василий Степанович Ершов. 
                    Выкупил двухэтажный особняк и основал в нем первый в Сибири частный детский приют. 
                    После выхода маленькой книги Вячеслава Чиликина «Большая семья» вся страна узнала о подвижнике-педагоге.
                  </p>

                  <p>
                    На рубеже 50-60-х годов вышло две книги «легких рассказов», но они прошли практически незамеченными. 
                    А вот антиклерикальный памфлет «В паучьих лапах», изданный в 1965 году до сих пор вызывает многочисленные споры.
                  </p>

                  <p>
                    После этой книги на долгое время наступила «писательская пауза». 
                    Наш герой трудился в «Алтайской правде», учил наставлял на путь молодое поколение и судя по всему писал в стол.
                  </p>

                  <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                    «Папа был домашним человеком, переживал за своих. Он заботился не только о нас с мамой, 
                    но и о бабушке, родной сестре и племяннике. Когда ему предложили работу в Москве, 
                    наотрез отказался – родных ведь не на кого оставить! По натуре был скромным. 
                    В крайкоме до последнего не знали, что он живёт в коммунальной квартире, 
                    где нужно топить печь и носить воду на второй этаж. Жильё дали только благодаря обращению супруги Нонны Владимировны. 
                    Папа тогда долго на неё злился» – вспоминает дочь Алиса Вячеславовна.
                  </blockquote>

                  <h3 className="text-xl font-bold mb-3 mt-8">Поздние годы и наследие</h3>
                  <p>
                    В 80-х служба в «Алтайской правде» завершилась, цензуру смели ветры перестройки, 
                    можно было писать без оглядки на партию и правительство. И Чиликин стал писать совершенно другие книги.
                  </p>

                  <p>
                    Главный роман «Глагол времён» – сдается в Алтайское книжное издательство в 1987 году и, 
                    несмотря на известность Вячеслава Константиновича, лежит в редакции три пятилетки. 
                    А потом просто оказывается в куче мусора, из которой объемистая папка в 703 листа чудом попадает 
                    сначала в музей «Мир времени», а затем – в руки читателей.
                  </p>

                  <p>
                    «Глагол времён» интересен, но требует определенных читательских усилий. 
                    Кто-то получает удовольствие от подробных свидетельств о боях гражданской войны в центре города, 
                    ужасах продразверстки и коллективизации. Кто-то пристально следит за перипетиями сюжета, 
                    переживая за многочисленных персонажей. Кто-то наслаждается изысканным полифоническим устройством романа.
                  </p>

                  <p>
                    Финальный роман «Свет во тьме», написанный в 1989-1990 годах, 
                    поднимает автора на уровень трагического философа. Полувековая жизнь отдельных семей заканчивается трагически. 
                    Заглавие романа можно продолжить как «свет растворяется во тьме». 
                    Вероятно, в финале жизни писатель остро чувствовал конечность бытия и прогресса.
                  </p>

                  <p>
                    Вячеслав Константинович Чиликин умер в 2005 году. 
                    Итогом девяностолетней жизни стали замечательные книги, которые сегодня совершенно не устарели 
                    и читаются с большим интересом. Двухтомник, ставший лучшей книгой 2024 года, 
                    будет данью памяти и выражением благодарности нашему выдающемуся земляку.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-6 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Хронология</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="text-primary font-semibold min-w-[60px]">1915</div>
                    <div>Родился в селе Николаевка Мариинского района</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-primary font-semibold min-w-[60px]">1918</div>
                    <div>Переезд семьи в Барнаул</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-primary font-semibold min-w-[60px]">1940</div>
                    <div>Работа на радио, еженедельные программы ВЛКСМ</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-primary font-semibold min-w-[60px]">1942</div>
                    <div>Начало работы в «Алтайской правде»</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-primary font-semibold min-w-[60px]">1948</div>
                    <div>Публикация первой книги «Большая семья»</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-primary font-semibold min-w-[60px]">1961</div>
                    <div>Назначение заместителем главного редактора «Алтайской правды»</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-primary font-semibold min-w-[60px]">1965</div>
                    <div>Публикация памфлета «В паучьих лапах»</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-primary font-semibold min-w-[60px]">1985</div>
                    <div>Завершение работы в «Алтайской правде»</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-primary font-semibold min-w-[60px]">1987</div>
                    <div>Завершение романа «Глагол времён»</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-primary font-semibold min-w-[60px]">1990</div>
                    <div>Завершение романа «Свет во тьме»</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-primary font-semibold min-w-[60px]">2005</div>
                    <div>Кончина в Барнауле</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-primary font-semibold min-w-[60px]">2024</div>
                    <div>Издание двухтомника произведений</div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Произведения</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Book className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium">«Большая семья» (1948)</div>
                      <div className="text-sm text-muted-foreground">О детском приюте «Муравейник»</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <Book className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium">«В паучьих лапах» (1965)</div>
                      <div className="text-sm text-muted-foreground">Антиклерикальный памфлет</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <Book className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium">«Глагол времён» (1987)</div>
                      <div className="text-sm text-muted-foreground">Главный роман о Барнауле</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <Book className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium">«Свет во тьме» (1990)</div>
                      <div className="text-sm text-muted-foreground">Философский роман</div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <Book className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium">«Записки старого барнаульца»</div>
                      <div className="text-sm text-muted-foreground">Сборник очерков</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium mb-2">Ссылки</h4>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.ap22.ru/paper/Altayskiy-Levitan.html" 
                       className="text-primary hover:underline block" 
                       target="_blank" 
                       rel="noopener noreferrer">
                      Алтайский Левитан
                    </a>
                    <a href="https://www.ap22.ru/paper/Dolgaya-doroga-k-chitatelyu.html"
                       className="text-primary hover:underline block"
                       target="_blank"
                       rel="noopener noreferrer">
                      Долгая дорога к читателю
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
