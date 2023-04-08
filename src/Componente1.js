import React, {useState} from 'react'

const Componente1 = ({name, img, description, children}) => {
    let [titolo, setTitolo] = useState(name)
    let cambiaTitolo = () => {
        setTitolo('REACT MAGIC!')
        if (titolo === name){
        }else{
            setTitolo(name)
        }
    }
    return (
        <div className="col-4">
            <div className="card m-3" style={{width:'18rem',}}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title">{titolo}</h5>
                    <p className="card-text">{description}</p>
                    <button onClick={cambiaTitolo} className="btn  btn-dark" >Cambia</button>
                    <p>{children}</p>
                </div>
            </div>
        </div>
    )
}

export default Componente1