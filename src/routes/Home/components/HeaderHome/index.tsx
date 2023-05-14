import { Flex, Image } from "@chakra-ui/react";
import { AtSignIcon, BellIcon } from "@chakra-ui/icons";
import { colors } from "../../../../constants/colors";
import logbookIcon from "../../../../assets/logbook-icon.svg";
import { useNavigate } from "react-router-dom";

const HeaderHome = () => {
  const navigate = useNavigate();

  const handleNotification = () => {
    navigate("/notifications");
  };

  return (
    <Flex justify="space-between" width="100%" marginBottom="32px">
      <AtSignIcon
        width={33}
        height={33}
        backgroundColor={colors.lightGrey}
        borderRadius="10px"
        padding="8px"
        color={colors.primaryPurple}
      />

      <Image src={logbookIcon} maxWidth="109px" />

      <BellIcon
        width={33}
        height={33}
        backgroundColor={colors.lightGrey}
        borderRadius="10px"
        padding="8px"
        color={colors.primaryPurple}
        onClick={handleNotification}
      />
    </Flex>
  );
};

export default HeaderHome;
