import styled from "styled-components";

const HomeSearch = styled.div`
border-radius: 9px;
  width: 27.25rem;
  height: 3.6375rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-left: -8.28rem;
  margin-top: 3.3rem;
  background-color: '#fcf8f8';
  -webkit-box-shadow: 0px 0px 6px 0.1px rgba(0, 0, 0, 0.75);
          box-shadow: ${(props) => props.back};
  &:hover{
    -webkit-box-shadow: 0px 0px 10px 0.5px rgba(0, 0, 0, 0.75);
            box-shadow: ${(props) => props.backhov};

  }

`;

const HomeSearchInput = styled.input`
  border: 0;
  outline: none;
  margin-left: 1.4rem;
  font-size: 1rem;
  font-weight: 400;
  color: #1a2328;
  background: #fcf8f8 !important;
`;

function StyledInput(props){
  return(
    <HomeSearch backhov={props.back1} back={props.back2}>
        <HomeSearchInput type='text' 
						onInput={props.Input}
						placeholder={props.placehld}/>
    </HomeSearch>
  

  )
}


export default StyledInput