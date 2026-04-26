import Text from "./Text";

type NormalizedTopicPropTypes = {
  resume: string;
  title: React.ReactNode;
  subTitle: string;
};

export default function NormalizedTopic({
  title,
  subTitle,
  resume,
}: NormalizedTopicPropTypes) {
  return (
    <div className="w-full">
      <div className="w-full flex justify-end">
        <Text
          font="font-aeonik"
          size="small-size"
          className="text-background uppercase mt-3!"
        >
          {resume}
        </Text>
      </div>
      <div className="w-[70%] my-20!">
        {title}
        <div className="w-full flex justify-end">
          <Text
            font="font-aeonik"
            size="small-size"
            className="text-background uppercase mt-3! w-[45%] text-justify\\"
          >
            {subTitle}
          </Text>
        </div>
      </div>
    </div>
  );
}
