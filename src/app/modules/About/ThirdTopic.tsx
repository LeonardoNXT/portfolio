import NormalizedTopic from "@/components/NormalizedTopic";
import Text from "@/components/Text";

export default function ThirdTopic() {
  return (
    <NormalizedTopic
      resume="This is where it takes form."
      title={
        <Text
          font="font-aeonik"
          size="extra-large-size"
          className="text-background pl-50!"
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
