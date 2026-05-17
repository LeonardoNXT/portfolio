import { LinearBorder } from "@/components/LinearBorder";
import Text from "@/components/Text";

export default function KnowMoreAbout() {
  return (
    <div className="w-full py-50! flex justify-center relative">
      <LinearBorder
        size={50}
        className="absolute left-2.5 bottom-0 -rotate-90"
        pathclassName="fill-background"
      />
      <Text font="font-necosmic" size="mid-size" className="text-background">
        get know more about me!
      </Text>
      <LinearBorder
        size={50}
        className="absolute right-2.5 bottom-0 -rotate-180"
        pathclassName="fill-background"
      />
    </div>
  );
}
