import NormalizedTopic from "@/components/NormalizedTopic";
import Text from "@/components/Text";

export default function ThirdTopic() {
  return (
    <NormalizedTopic
      resume="This is where it takes form."
      identificator={{
        resume: "third-resume",
        subTitle: "third-subTitle",
      }}
      title={
        <Text
          font="font-aeonik"
          size="extra-large-size"
          className="text-background pl-50! third-title"
        >
          I work primarily with JavaScript and{" "}
          <Text type="span" size="extra-large-size" font="font-migra">
            TypeScript
          </Text>
          , using{" "}
          <Text type="span" size="extra-large-size" font="font-migra">
            Node.js
          </Text>{" "}
          and frameworks like{" "}
          <Text type="span" size="extra-large-size" font="font-migra">
            Nest.js
          </Text>{" "}
          to build{" "}
          <Text type="span" size="extra-large-size" font="font-migra">
            scalable services
          </Text>
        </Text>
      }
      subTitle="and applying tools such as Kafka or RabbitMQ when systems require asynchronous communication and resilience."
    />
  );
}
