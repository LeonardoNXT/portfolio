import Text from "@/components/Text";

export default function AboutHeader() {
  return (
    <div className="w-full flex justify-between header">
      <div className="w-1/2 flex gap-10 items-center pl-50!">
        <Text
          size="fifty-size"
          font="font-canopee"
          className="text-background number"
        >
          01
        </Text>
        <Text
          size="normal-size"
          font="font-aeonik"
          className="text-background max-w-50 about-text"
        >
          This is where it becomes more explicit.
        </Text>
      </div>
      <div className="w-1/2 flex border-b border-background justify-between">
        <div className="flex justify-between items-center w-1/2">
          <Text
            size="small-size"
            font="font-aeonik"
            className="text-background max-w-50 uppercase my-words-1"
          >
            I AM SO HAPPY TO SEE YOU HERE!
          </Text>
          <Text
            size="small-size"
            font="font-aeonik"
            className="text-background max-w-50 uppercase my-words-2"
          >
            LET ME SHOW YOU A LITTLE ABOUT ME
          </Text>
        </div>
        <div className="w-1/2 flex justify-end items-center about">
          <Text
            size="fifty-size"
            font="font-necosmic"
            className="text-background max-w-50 uppercase text-nowrap"
          >
            About
          </Text>
        </div>
      </div>
    </div>
  );
}
