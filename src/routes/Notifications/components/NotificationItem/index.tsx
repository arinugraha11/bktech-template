import { Circle, Divider, Flex, Text } from "@chakra-ui/react";

const NotificationItem = () => {
  return (
    <Flex direction="column" gap="4px">
      <Text fontSize="xs" align="end">
        30/03 17.00
      </Text>
      <Circle size="10px" bg="tomato" />
      <Text as="b" fontSize="sm">
        C-OK04-01 telah disetujui
      </Text>
      <Text fontSize="sm">
        dr. Dian Sastrowardoyo telah menyetujui C-04-01{" "}
      </Text>
      <Divider />
    </Flex>
  );
};

export default NotificationItem;
