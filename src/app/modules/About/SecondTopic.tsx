import { RoundedBorder } from "@/components/RoundedBorder";
import Text from "@/components/Text";

export default function SecondTopic() {
  return (
    <div className="w-full">
      <div className="w-full">
        <Text
          font="font-aeonik"
          size="small-size"
          className="text-background uppercase mt-3! second-resume"
        >
          This is where it takes form.
        </Text>
      </div>
      <div className="w-full flex justify-between about-second-topic">
        <div className="w-[30%] h-full relative about-second-shapes">
          <div className="w-50 aspect-square bg-background shape-1"></div>
          <RoundedBorder
            size={50}
            className="fill-background absolute left-50 -translate-x-full rotate-180"
          />
          <div className="w-50 aspect-square bg-background absolute left-50 rounded-4xl rounded-l-none rounded-b-4xl shape-2"></div>
          <RoundedBorder
            size={50}
            className="fill-background absolute left-50 -translate-y-full"
          />
        </div>
        <div className="w-[70%] about-second-content">
          <div className="w-full flex justify-end">
            <div className="w-[80%]">
              <Text
                font="font-aeonik"
                size="extra-large-size"
                className="text-background text-justify w-[95%] about-second-title second-title"
              >
                In practice, this means designing and building{" "}
                <Text type="span" size="extra-large-size" font="font-migra">
                  APIs
                </Text>
                , structuring{" "}
                <Text type="span" size="extra-large-size" font="font-migra">
                  backend services
                </Text>
                , and defining how systems{" "}
                <Text type="span" size="extra-large-size" font="font-migra">
                  communicate.
                </Text>
              </Text>
            </div>
          </div>
          <div className="about-second-subtitle-wrap">
            <Text
              font="font-aeonik"
              size="small-size"
              className="text-background uppercase mt-3! w-[30%] text-justify about-second-subtitle second-subTitle"
            >
              whether through REST, messaging patterns, or event-driven
              workflows.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
