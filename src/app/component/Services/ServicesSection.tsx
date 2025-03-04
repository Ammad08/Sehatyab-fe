import Link from "next/link";

const ServicesSection = () => {
    return (
      <div className="flex flex-col items-center justify-center max-h-screen p-6 md:py-20 bg-white my-60 md:my-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Relationship Issues */}
          <div className="flex flex-col items-start w-full">
            <h2 className="text-2xl font-semibold font-poppins text-[#06685F]">Relationship issues</h2>
            <ul className="mt-3 space-y-2 text-[#6E6E6E] text-left w-full">
              <li>◉ Divorce</li>
              <li>◉ Remarriage</li>
              <li>◉ Step families</li>
              <li>◉ Single parenting</li>
              <li>◉ Domestic violence</li>
              <li>◉ Abuse</li>
            </ul>
          </div>
  
          {/* Self Improvement */}
          <div className="flex flex-col items-start w-full">
            <h2 className="text-2xl font-semibold font-poppins text-[#06685F]">Self improvement</h2>
            <ul className="mt-3 space-y-2 text-[#6E6E6E] text-left w-full">
              <li>◉ Lack of confidence / assertiveness</li>
              <li>◉ Problem in Communication</li>
              <li>◉ Decision Making</li>
              <li>◉ Memory problems</li>
              <li>◉ Lack of concentration / forgetfulness</li>
            </ul>
          </div>
  
          {/* Psychological Assessment / Others */}
          <div className="flex flex-col items-start w-full">
            <h2 className="text-2xl font-semibold font-poppins text-[#06685F]">
              Psychological assessment / Others
            </h2>
            <ul className="mt-3 space-y-2 text-[#6E6E6E] text-left w-full">
              <li>◉ IQ testing</li>
              <li>◉ Personality testing</li>
              <li>◉ Complete psychological profile for adults</li>
              <li>◉ Educational testing</li>
              <li>◉ Gender identity problem</li>
              <li>◉ LGBTQ</li>
            </ul>
          </div>
        </div>
  
        {/* Book Appointment Button */}
        <div className="mt-8">
            <Link href="/appointment">

          <button className="px-6 py-2 text-white bg-[#1DA678] font-semibold rounded-md shadow-md hover:bg-yellow-500">
            BOOK APPOINTMENT
          </button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default ServicesSection;
  