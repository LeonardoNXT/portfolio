import { RoundedBorder } from "@/components/RoundedBorder";
import Text from "@/components/Text";

export default function ProjectHeader() {
  return (
    <div className="p-15! w-full flex justify-between items-center">
      <div className="w-[30%]">
        <Text size="fifty-size" font="font-necosmic">
          Projects
        </Text>
      </div>
      <div className="flex justify-between items-center w-[70%]">
        <Text font="font-aeonik" size="normal-size" className="w-37.5">
          Projects that reflect how I build
        </Text>
        <div className="relative">
          <div>
            <RoundedBorder
              size={80}
              className="rotate-90"
              pathclassName="fill-foreground"
            />
          </div>
          <div>
            <RoundedBorder
              size={80}
              className="rotate-270 absolute top-0"
              pathclassName="fill-foreground"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
