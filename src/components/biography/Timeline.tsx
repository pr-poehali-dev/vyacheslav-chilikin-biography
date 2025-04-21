
import { Card, CardContent } from "@/components/ui/card";

type TimelineEvent = {
  year: string;
  description: string;
};

const timelineData: TimelineEvent[] = [
  { year: "1915", description: "Родился в селе Николаевка Мариинского района" },
  { year: "1918", description: "Переезд семьи в Барнаул" },
  { year: "1940", description: "Работа на радио, еженедельные программы ВЛКСМ" },
  { year: "1942", description: "Начало работы в «Алтайской правде»" },
  { year: "1948", description: "Публикация первой книги «Большая семья»" },
  { year: "1961", description: "Назначение заместителем главного редактора «Алтайской правды»" },
  { year: "1965", description: "Публикация памфлета «В паучьих лапах»" },
  { year: "1985", description: "Завершение работы в «Алтайской правде»" },
  { year: "1987", description: "Завершение романа «Глагол времён»" },
  { year: "1990", description: "Завершение романа «Свет во тьме»" },
  { year: "2005", description: "Кончина в Барнауле" },
  { year: "2024", description: "Издание двухтомника произведений" },
];

const Timeline = () => {
  return (
    <Card className="sticky top-6 mb-8">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Хронология</h3>
        <ul className="space-y-4">
          {timelineData.map((event, index) => (
            <li key={index} className="flex gap-4">
              <div className="text-primary font-semibold min-w-[60px]">{event.year}</div>
              <div>{event.description}</div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Timeline;
