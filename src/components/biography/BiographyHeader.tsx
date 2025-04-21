
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";

const BiographyHeader = () => {
  return (
    <header className="mb-12">
      <Link to="/" className="inline-flex items-center mb-8 text-primary hover:underline">
        <ArrowLeft className="w-4 h-4 mr-2" />
        На главную
      </Link>

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
  );
};

export default BiographyHeader;
