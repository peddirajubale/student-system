import styled from 'styled-components'

export const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  background: #f9fafb;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  padding: 10px 16px;
  background: ${(props) => (props.danger ? "#dc3545" : "#007bff")};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: ${(props) => (props.danger ? "#b02a37" : "#0056b3")};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
`;

export const Th = styled.th`
  padding: 12px;
  background: #007bff;
  color: white;
  text-align: left;
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  color:black
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`;