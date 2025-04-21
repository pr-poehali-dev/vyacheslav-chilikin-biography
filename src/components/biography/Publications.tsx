
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Book } from "lucide-react";

type Publication = {
  title: string;
  year: string;
  description: string;
};

const publications: Publication[] = [
  {
    title: "«Большая семья»",
    year: "1948",
    description: "О детском приюте «Муравейник»",
  },
  {
    title: "«В паучьих лапах»",
    year: "1965",
    description: "Антиклерикальный памфлет",
  },
  {
    title: "«Глагол времён»",
    year: "1987",
    description: "Главный роман о Барнауле",
  },
  {
    title: "«Свет во тьме»",
    year: "1990",
    description: "Философский роман",
  },
  {
    title: "«Записки старого барнаульца»",
    year: "",
    description: "Сборник очерков",
  },
];

type ExternalLink = {
  url: string;
  title: string;
};

const externalLinks: ExternalLink[] = [
  {
    url: "https://www.ap22.ru/paper/Altayskiy-Levitan.html",
    title: "Алтайский Левитан",
  },
  {
    url: "https://www.ap22.ru/paper/Dolgaya-doroga-k-chitatelyu.html",
    title: "Долгая дорога к читателю",
  },
];

const Publications = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Произведения</h3>
        <div className="space-y-3">
          {publications.map((pub, index) => (
            <div key={index}>
              <div className="flex items-start gap-3">
                <Book className="w-5 h-5 text-primary mt-1" />
                <div>
                  <div className="font-medium">
                    {pub.title} {pub.year && `(${pub.year})`}
                  </div>
                  <div className="text-sm text-muted-foreground">{pub.description}</div>
                </div>
              </div>
              {index < publications.length - 1 && <Separator className="my-3" />}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="font-medium mb-2">Ссылки</h4>
          <div className="space-y-2 text-sm">
            {externalLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                className="text-primary hover:underline block" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Publications;
