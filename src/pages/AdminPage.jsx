//Component
import AuthInput from "../components/AuthInput/AuthInput";
import Logo from "../components/Logo/Logo";
//react-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//React
import { useState } from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [adminLogin, setAdminLogin] = useState({
    account: "",
    password: "",
  });

  const handleInput = (keyName) => (currentValue) => {
    setAdminLogin({
      ...adminLogin,
      [keyName]: currentValue,
    });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xl={6} md={8}>
          <Logo title={"後台登入"} />
          <form action="">
            <AuthInput
              value={adminLogin.account}
              onChange={handleInput("account")}
              placeholder="請輸入帳號"
            />
            <AuthInput
              label="密碼"
              type="password"
              autoComplete="current-password"
              value={adminLogin.password}
              onChange={handleInput("password")}
              placeholder="請輸入密碼"
            />
            <div className="mb-3">
              <button className="btn btn-primary w-100 text-white rounded-pill">
                登入
              </button>
            </div>
          </form>
          <div className="d-flex justify-content-end">
            <Link to="/login">前台登入</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPage;
