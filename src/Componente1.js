import React from 'react'

const Componente1 = ({nome, img, description, children}) => {
    return (
        <div className="col-4">
            <div className="card m-3" style={{width:'18rem',}}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title">{nome}</h5>
                    <p className="card-text">{description}</p>
                    <button onClick={()=>alert(`bottone premuto ${nome}`)} className="btn  btn-dark" >Scopri ora</button>
                    <p>{children}</p>
                </div>
            </div>
        </div>
    )
}

export default Componente1
