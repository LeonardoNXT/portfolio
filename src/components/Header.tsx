import { usePathname } from "next/navigation";
import { RoundedBorder } from "./RoundedBorder";
import Text from "./Text";
import { menuOptions } from "@/utils/menu-options";

type ConteinerPropsType = {
  children: React.ReactNode;
};

function Nav() {
  const pathname = usePathname();
  return (
    <nav className="absolute top-5 right-5 p-2! rounded-b-none rounded-3xl rounded-r-3xl! bg-white flex gap-2.5 font-necosmic font-extralight">
      <div className="aspect-square w-auto h-max flex flex-1">
        <button className="h-[33] bg-(--primary-color) rounded-full aspect-square"></button>
      </div>
      {menuOptions.map((options, i) => {
        const isActive = pathname === options.href;

        return (
          <button
            key={i}
            className={` px-4! py-1.5! text-[14px] rounded-full ${isActive ? "bg-(--primary-color) text-(--menu-primary-color)" : "text-black bg-(--menu-no-active)"}`}
          >
            {options.route}
          </button>
        );
      })}
    </nav>
  );
}

function Conteiner({ children }: ConteinerPropsType) {
  return (
    <header className="w-full h-auto px-2.5 fixed top-0 left-0 z-50">
      {children}
    </header>
  );
}

function Notch() {
  return (
    <div className="w-[250] h-[30] absolute top-2.5 left-1/2 translate-x-[-50%] bg-background rounded-b-[15]">
      <RoundedBorder
        size={15}
        className="absolute -translate-x-full fill-background rotate-180"
      />
      <Text
        font="font-necosmic"
        size="small-size"
        type="span"
        className="absolute text-nowrap -translate-x-1/2 left-1/2 opacity-50"
      >
        Leonardo Leal
      </Text>
      <RoundedBorder
        size={15}
        className="absolute right-0 translate-x-full fill-background rotate-90"
      />
    </div>
  );
}

const Header = {
  Notch: Notch,
  Nav: Nav,
  Conteiner: Conteiner,
};

export default Header;
