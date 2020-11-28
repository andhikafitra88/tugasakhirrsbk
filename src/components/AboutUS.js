import React from "react";
import styled from "styled-components";
import CardInfo from "./Card/card";

const Container = styled.div`
background-color: #fafafa;
border-radius: 20px;
box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
color: #B3B8CD;
position: relative;
width: 50%;
margin: auto;
margin-top: 150px;
@media screen and (max-width: 500px) {
       margin: auto;
}
`
const Image = styled.img`

  border: 2px solid White;
  border-radius: 70%;
  padding: 7px;
  width: 60%;
  height: 10%;
  margin: 20px;
  
`
const Desc = styled.h3`
  margin: auto;
  color:Black;
  font-size:1vw
`


const Rowcard = styled.div
`
    display: table;
    width: 80%;
    table-layout: fixed;
    border-spacing: 0px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    
    
`

const ColumnCard = styled.div
`
    display: table-cell;
    text-align: center;
    
    
`




export default function index() {
    return (
      <div>
        <div>
          <a href='https://www.instagram.com/setyawan_af/'>
            <CardInfo tit='Andhika' li1='Nama' li2='NIM' li3='Asal' pop="Andhika Fitra Setyawan" reg="21120117130052" cap='Ungaran' src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/122721262_693134737983888_8523341724889647784_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=4rMVNUPyb3cAX9Qj1YB&oh=48755cc91506b7478381ac5e6a4a3d90&oe=5FE31A98"/>
          </a>
        </div>
        <div>
          <a href='https://www.instagram.com/murizaal/'>
            <CardInfo tit='Rizal' li1='Nama' li2='NIM' li3='Asal' pop="Muhamad Rizal Dwi C" reg="21120117130045" cap='Jakarta' src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/119426408_970009973500427_6299256826879412243_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=vDjelbKmz10AX9tFYxm&oh=fd64c0ae21275953033a20cd86241ba8&oe=5FE371D0"/>
            </a>
        </div>  
      </div>
      
    );
  }