import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import NotificationItem from "./components/NotificationItem";

const NotificationsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <Header onClick={handleBack} title="Notifikasi" />
      <Flex direction="column" padding="30px" gap="8px">
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </Flex>
    </div>
  );
};

export default NotificationsPage;
