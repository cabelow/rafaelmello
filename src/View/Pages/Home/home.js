import React, { useState, useEffect } from 'react'

import './home.css'

function Home(props) {
    return (
        <>
            <div className="row">
                <div className="column column-2 nada"></div>
                <div className="column column-3">
                    <img className="Foto" src="https://scontent.fppy8-1.fna.fbcdn.net/v/t1.6435-9/158493261_1395469497479110_5956263265385006585_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Gg9Tgx6FJnYAX8CM5L_&_nc_ht=scontent.fppy8-1.fna&oh=4c3b5577f33d275346558b94a654dece&oe=60DB80EA" />
                </div>
                <div className="column column-4">
                    <div className="row">
                        <p className="nome">Rafael Mello</p>
                    </div>
                    <div className="row">
                        <p className="texto">Atenção este site encontra-se em manutenção, estamos deixando a criatividade rolar fique a vontade para acompnhar a construção</p>
                    </div>
                </div>
                <div className="column column-3 nada"></div>
            </div>

            <div className="row linha-vazia"></div>

            <div className="row">Site em manutenção</div>

            <div className="row linha-vazia"></div>

            <div className="row">
                <div className="column column-4 nada"></div>
                <div className="column column-4 nada"></div>
                <div className="column column-4 nada"></div>
            </div>


            <div className="row linha-vazia"></div>

            <div className="row">
                <div className="column column-4 nada"></div>
                <div className="column column-4 nada"></div>
                <div className="column column-4 nada"></div>
            </div>


            <div className="row rodape">
                Todos os diretitos reservado a Rafael Mello
            </div>

        </>
    );
}

export default Home