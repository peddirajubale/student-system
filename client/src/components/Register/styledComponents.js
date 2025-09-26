import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #f7f9fc;
`;

export const FormBox = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  width: 350px;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  border: none;
  background: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export const LinkText = styled.p`
  margin-top: 15px;
  font-size: 14px;
  color: #666;
  span {
    color: #007bff;
    cursor: pointer;
  }
`;
