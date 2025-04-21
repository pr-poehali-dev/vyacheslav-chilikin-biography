
import BiographyHeader from "@/components/biography/BiographyHeader";
import BiographyContent from "@/components/biography/BiographyContent";
import Timeline from "@/components/biography/Timeline";
import Publications from "@/components/biography/Publications";

const Biography = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F7] text-[#333]">
      <div className="container mx-auto px-4 py-12">
        <BiographyHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BiographyContent />
          </div>

          <div className="lg:col-span-1">
            <Timeline />
            <Publications />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
