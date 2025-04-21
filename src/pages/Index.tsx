
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 max-w-md w-full bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Добро пожаловать!</h1>
        <p className="text-xl text-gray-600 mb-8">Литературное наследие Алтайского края</p>
        
        <Button asChild className="bg-[#6E59A5] hover:bg-[#5D4A94]">
          <Link to="/biography" className="flex items-center gap-2">
            <BookOpen size={20} />
            Биография В.К. Чиликина
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
