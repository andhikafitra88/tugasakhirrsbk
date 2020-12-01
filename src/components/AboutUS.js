import React from "react";
import CardInfo from "./Card/card";
import Title from "./element/title";

export default function index() {
    return (
      <div className='home'>
          <Title>
            Kelompok 6
          </Title>
            <div id="column1">
              <CardInfo tit='Andhika' li1='Nama' li2='NIM' li3='Asal' pop="Andhika Fitra Setyawan" reg="21120117130052" cap='Ungaran' but='https://www.instagram.com/setyawan_af/' butname='Instagram' backgnd1='#6188ff' backhov1='#3668ff' src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/122721262_693134737983888_8523341724889647784_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=4rMVNUPyb3cAX9Qj1YB&oh=48755cc91506b7478381ac5e6a4a3d90&oe=5FE31A98"/>
            </div>
            <div id="column2">
              <CardInfo tit='Rizal' li1='Nama' li2='NIM' li3='Asal' pop="Muhamad Rizal Dwi C" reg="21120117130045" cap='Jakarta' but='https://www.instagram.com/murizaal/' butname='Instagram' backgnd1='#ff6666' backhov1='#ff1f1f' src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/119426408_970009973500427_6299256826879412243_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=vDjelbKmz10AX9tFYxm&oh=fd64c0ae21275953033a20cd86241ba8&oe=5FE371D0"/>
        </div> 
      </div>
    );
  }