import logo from "@/assets/CAU_logo.svg";
import { login } from "@/service/authService";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Header = styled.h1`
  margin: 0%;
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #154a9a;
`;

const LoginForm = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eeeeee;
  padding: 31px;
`;

const LoginTitle = styled.div`
  margin: 30px 30px 40px;
  width: 400px;
  height: 42px;
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  color: #626466;
`;

const LoginInput = styled.input`
  width: 460px;
  height: 48px;
  padding: 7px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
`;

const Divider = styled.div`
  width: 460px;
  height: 1px;
  background-color: #cccccc;
  margin: 30px 0px;
`;

const LoginButton = styled.button`
  width: 460px;
  height: 60px;
  background-color: #154a9a;
  color: white;
  font-size: 22px;
  font-weight: bold;
  border: none;
  border-radius: 0;
`;

const LoginFooter = styled.footer`
  width: 522px;
  color: #666666;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 25px 0px;
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 16px;
  font-weight: bold;
  font-size: 14px;
`;

const Link = styled.a`
  font-size: 14px;
  font-weight: bold;
`;

interface LoginFormValues {
  id: string;
  password: string;
}

export default function LoginPage() {
  const { register, handleSubmit } = useForm<LoginFormValues>();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await login(data.id, data.password);
      if (response) {
        alert("로그인에 성공했습니다");
        navigate("/");
      }
    } catch (error) {
      const status = (error as AxiosError).response?.status;
      console.log(status);
      if (status === 401) {
        alert("아이디를 확인해주세요");
      } else if (status === 402) {
        alert("비밀번호를 확인해주세요");
      } else {
        alert("알 수 없는 오류가 발생했습니다. 관리자에게 문의하세요");
      }
    }
  });

  return (
    <Wrapper>
      <Header>
        <img src={logo} alt='CAU logo' width={193} />
      </Header>
      <LoginForm onSubmit={onSubmit}>
        <LoginTitle>로그인</LoginTitle>
        <LoginInput
          placeholder='아이디'
          id='id'
          style={{ marginBottom: "25px" }}
          {...register("id")}
          required
        />
        <LoginInput
          placeholder='비밀번호'
          type='password'
          id='password'
          autoComplete='on'
          required
          {...register("password")}
        />
        <Divider />
        <LoginButton type='submit'>로그인</LoginButton>
      </LoginForm>
      <LoginFooter>
        <LinksWrapper>
          <Link
            style={{ color: "#00A0E9" }}
            href='https://www.cau.ac.kr/cms/FR_CON/index.do?MENU_ID=2300'
          >
            개인정보처리방침
          </Link>
          <Link
            style={{ color: "#000000" }}
            href='https://www.cau.ac.kr/cms/FR_CON/index.do?MENU_ID=730'
          >
            이메일무단수집거부
          </Link>
        </LinksWrapper>
        <p style={{ fontSize: "12px", fontWeight: "bold" }}>
          COPYRIGHT(C) 2024 9조@CHUNG-ANG UNIVERSITY ALL RIGHTS RESERVED.
        </p>
      </LoginFooter>
    </Wrapper>
  );
}
