import styled from 'styled-components';

export const MovieContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  display: inline-block;
  height: 300px;
  margin: 10px;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 200px;
  vertical-align: middle;
`;

export const MovieImage = styled.div`
  background-color: #eee;
  color: #ccc;
  height: 75%;
  left: 0;
  position: absolute;
  letter-spacing: 2px;
  text-transform: uppercase;
  top: 0;
  width: 100%;
`;

export const MovieName = styled.div`
  bottom: 0;
  height: 25%;
  left: 0;
  padding: 0 10px;
  position: absolute;
  right: 0;
`;
