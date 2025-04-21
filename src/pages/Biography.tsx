import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Biography = () => {
  return (
    <div className="min-h-screen bg-[#f6f6f7]">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/" className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
            <ChevronLeft size={16} />
            Назад на главную
          </Link>
        </Button>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Вячеслав Константинович Чиликин</h1>
            <p className="text-gray-500 mb-6 text-lg">1915 – 2005</p>

            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="md:w-1/3">
                <div className="aspect-[3/4] bg-gray-200 rounded-md flex items-center justify-center mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Вячеслав Константинович Чиликин" 
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="bg-gray-100 p-4 rounded-md">
                  <h3 className="font-medium text-gray-900 mb-2">Основные факты</h3>
                  <ul className="space-y-2 text-sm">
                    <li><span className="font-medium">Годы жизни:</span> 1915 – 2005</li>
                    <li><span className="font-medium">Род деятельности:</span> Журналист, писатель</li>
                    <li><span className="font-medium">Основное место работы:</span> "Алтайская правда" (более 40 лет)</li>
                  </ul>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="prose max-w-none">
                  <p className="mb-4">
                    Вячеслав Константинович Чиликин (1915 – 2005) — известный алтайский журналист и писатель, чья творческая карьера неразрывно связана с историей региона.
                  </p>
                  
                  <h2 className="text-xl font-semibold mt-6 mb-3">Журналистский путь</h2>
                  <p className="mb-4">
                    Вячеслав Константинович пришел в литературу из «журналистского цеха». Его профессиональная карьера началась на радио, где он освоил мастерство живого слова и умение доносить информацию до широкой аудитории.
                  </p>
                  
                  <p className="mb-4">
                    Однако наибольшую известность и признание Чиликин получил за свою многолетнюю работу в газете «Алтайская правда», где он трудился более сорока лет. За эти годы из-под его пера вышли сотни материалов, освещавших жизнь Алтайского края, его историю, культуру и людей.
                  </p>
                  
                  <h2 className="text-xl font-semibold mt-6 mb-3">Литературное творчество</h2>
                  <p className="mb-4">
                    Богатый опыт журналистской работы, глубокое понимание человеческой природы и события, свидетелем которых ему довелось быть, легли в основу литературных произведений Вячеслава Константиновича. В своих рассказах и очерках он стремился запечатлеть характеры современников, показать их в переломные моменты истории страны.
                  </p>
                  
                  <h2 className="text-xl font-semibold mt-6 mb-3">Наследие</h2>
                  <p>
                    Творческое наследие В.К. Чиликина представляет собой важную часть культурной летописи Алтайского края. Его работы отличаются документальной точностью, глубиной психологических характеристик и искренней любовью к родному краю и его жителям.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold mb-4">Хронология жизни и творчества</h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="mr-4 w-16 flex-shrink-0 font-medium">1915</div>
                  <div>Родился Вячеслав Константинович Чиликин</div>
                </div>
                <div className="flex">
                  <div className="mr-4 w-16 flex-shrink-0 font-medium">19XX</div>
                  <div>Начало работы на радио</div>
                </div>
                <div className="flex">
                  <div className="mr-4 w-16 flex-shrink-0 font-medium">19XX</div>
                  <div>Начало работы в газете «Алтайская правда»</div>
                </div>
                <div className="flex">
                  <div className="mr-4 w-16 flex-shrink-0 font-medium">2005</div>
                  <div>Ушел из жизни В.К. Чиликин</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
