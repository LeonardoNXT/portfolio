import Text from "./Text";

type NormalizedTopicPropTypes = {
  resume: string;
  title: React.ReactNode;
  subTitle: string;
  identificator: {
    subTitle?: string;
    resume?: string;
  };
};

export default function NormalizedTopic({
  title,
  subTitle,
  resume,
  identificator = {
    resume: "",
    subTitle: "",
  },
}: NormalizedTopicPropTypes) {
  return (
    <div className="w-full">
      <div className="w-full flex justify-end">
        <Text
          font="font-aeonik"
          size="small-size"
          className={
            "text-background uppercase mt-3!" + " " + identificator.resume
          }
        >
          {resume}
        </Text>
      </div>
      <div className={"w-[70%] my-20!"}>
        {title}
        <div className="w-full flex justify-end">
          <Text
            font="font-aeonik"
            size="small-size"
            className={
              "text-background uppercase mt-3! w-[45%] text-justify" +
              " " +
              identificator.subTitle
            }
          >
            {subTitle}
          </Text>
        </div>
      </div>
    </div>
  );
}
