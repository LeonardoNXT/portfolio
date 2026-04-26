import NormalizedTopic from "@/components/NormalizedTopic";
import Text from "@/components/Text";

export default function FirstTopic() {
  return (
    <NormalizedTopic
      resume="My work is guided by the idea that software is a system of decisions."
      subTitle="My work focuses on structuring systems that remain understandable as
            they grow, balancing flexibility with consistency and performance
            with clarity."
      title={
        <Text
          font="font-aeonik"
          size="extra-large-size"
          className="text-background pl-50!"
        >
          Every layer — from{" "}
          <Text type="span" size="extra-large-size" font="font-migra">
            architecture
          </Text>{" "}
          to interface — is shaped by trade-offs, constraints, and long-term
          impact.
        </Text>
      }
    />
  );
}
