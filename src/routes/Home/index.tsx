import { Button, Divider, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import { ButtonContainer, HomeContainer } from "./styles";

const { Title } = Typography;

const Home = () => {
  const { logoutAccount, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <HomeContainer>
      <Title level={3}>Logbook Anastesi</Title>
      <ButtonContainer>
        {isAuthenticated && <Button onClick={logoutAccount}>Logout</Button>}

        {!isAuthenticated && (
          <>
            <Button type="primary" onClick={() => handleNavigate("/login")}>
              Login
            </Button>
            <Button type="primary" onClick={() => handleNavigate("/register")}>
              Register
            </Button>
          </>
        )}
      </ButtonContainer>
      <Divider />

      <Button type="link" onClick={() => handleNavigate("/about")}>
        About
      </Button>
      <Button type="link" onClick={() => handleNavigate("/users")}>
        List User (Private)
      </Button>
    </HomeContainer>
  );
};

export default Home;
