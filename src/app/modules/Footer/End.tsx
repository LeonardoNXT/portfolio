import { LinearBorder } from "@/components/LinearBorder";
import Text from "@/components/Text";
import { menuOptions } from "@/utils/menu-options";
import { useRouter } from "next/navigation";

export default function End() {
  const router = useRouter();
  return (
    <div className="w-full relative">
      <LinearBorder
        size={50}
        className="absolute top-0 left-2.5"
        pathclassName="fill-background"
      />{" "}
      <LinearBorder
        size={50}
        className="absolute top-0 right-2.5 rotate-90"
        pathclassName="fill-background"
      />
      <LinearBorder size={10} className="absolute top-0 left-2.5" />
      <div className="w-full p-20! flex justify-between items-center relative">
        <Text size="mid-size" className="text-background max-w-1/4">
          Let’s work on something that matters.
        </Text>
        <Text className="text-background">( leonardo.dsleal@gmail.com )</Text>
        <nav className="flex justify-between gap-5">
          {menuOptions.map((option, i) => (
            <Text
              className="text-background cursor-pointer"
              type="a"
              onClick={() => {
                console.log(option.href);
                router.push(option.href);
              }}
              key={i}
            >
              {option.route}
            </Text>
          ))}
        </nav>
        <Text font="font-grifinito" size="mid-size" className="text-background">
          Leoanardo Leal - {new Date().getFullYear()}
        </Text>
        <div className="w-full h-px absolute bottom-0 left-0 bg-background opacity-29"></div>
      </div>
      <div className="w-full h-85 relative overflow-hidden">
        <Text
          font="font-necosmic"
          className="text-[46vw]! text-background leading-225 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3"
        >
          LEO
        </Text>
      </div>
    </div>
  );
}
