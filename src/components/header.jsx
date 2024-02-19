import { TbNotes } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiSelfLove } from "react-icons/gi";
const Header = () => {
  return (
    <div className=" head absolute top-10 right-[50%] translate-x-[50%] max-w-2xl lg:max-w-3xl min-h-16 px-6 sm:px-8 md:px-12 z-[1000] flex items-center justify-between mx-auto w-[80%] sm:w-[90%] md:w-full mr-2 ml-2 text-base md:text-lg ">
      <div>
        <div className="block sm:hidden" >
          <TbNotes className="h-8 w-8 " />
        </div>
        <div className="hidden sm:block" >Event</div>
      </div>
      <div>
        <div className="block sm:hidden" >
          <GiSelfLove className="h-8 w-8 " />
        </div>
        <div className="hidden sm:block" >Sponsor</div>
      </div>
      <div className="font-black text-lg md:text-xl lg:text-2xl henny" >
        AMBROSIA
      </div>
      <div>
        <div className="block sm:hidden" >
          <HiOutlineUserGroup className="h-8 w-8 " />
        </div>
        <div className="hidden sm:block" >Member</div>
      </div>
      <div>
        <div className="block sm:hidden" >
          <TbNotes className="h-8 w-8 " />
        </div>
        <div className="hidden sm:block" >History</div>
      </div>
    </div>
  );
};

export default Header;
