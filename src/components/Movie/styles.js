import styled from 'styled-components';

export const Banner = styled.div`
  background-color: #ff0000;
  border-radius: 10px;
  bottom: 0;
  color: white;
  left: 0;
  height: 18px;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  transform: rotate(30deg);
  width: 75%;
`;

export const MovieContainer = styled.div`
  border: 1px solid #aaa;
  border-radius: 5px;
  display: inline-block;
  height: 300px;
  margin: 10px;
  opacity: ${({ fade }) => fade ? 0.5 : 1};
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
  overflow: hidden;
  position: absolute;
  letter-spacing: 2px;
  text-transform: uppercase;
  top: 0;
  width: 100%;
  z-index: 1;
  
  img {
    width: 100%;
  }
`;

export const MovieName = styled.div`
  bottom: 0;
  height: 25%;
  left: 0;
  padding: 0 10px;
  position: absolute;
  right: 0;
`;

export const SeriesBanner = styled.div`
  background-color: lightblue;
  left: 0;
  padding: 5px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  
  &:after {
    content: ' Series';
  }
`;
