import NormalizedTopic from "@/components/NormalizedTopic";
import Text from "@/components/Text";

export default function FirstTopic() {
  return (
    <NormalizedTopic
      identificator={{
        resume: "first-resume",
        subTitle: "first-subTitle",
      }}
      resume="My work is guided by the idea that software is a system of decisions."
      subTitle="My work focuses on structuring systems that remain understandable as
            they grow, balancing flexibility with consistency and performance
            with clarity."
      title={
        <Text
          font="font-aeonik"
          size="extra-large-size"
          className="text-background pl-50! first-title"
        >
          Every layer — from{" "}
          <Text
            type="span"
            size="extra-large-size"
            font="font-migra"
            className="span-text leading-24"
          >
            architecture
          </Text>{" "}
          to interface — is shaped by trade-offs, constraints, and long-term
          impact.
        </Text>
      }
    />
  );
}
