import React, {useState} from 'react'
import data from './data'
const List = () => {

    const [row, setRow] = useState(data)

    let removeRow = (id) => {
        let newRow = row.filter( el => el.id !== id);
        setRow(newRow);
    }
    let refreshList = () => {
        setRow(data)
    }
    let deleteList = () => {
        setRow([])
    }


    return (
        <div>
            {row.map(person => {
                let { id, nome, stato, img } = person
                return (
                    <li className='text-white my-2 row align-items-center justify-content-center rounded shadow' key={id}>
                        <div className='col-2'>
                            <div className='overflow-hidden'>
                                <img src={img} style={{ width: '8rem', }} className='img-fluid rounded-circle' />
                            </div>
                        </div>
                        <div className='col-8'>
                            <h2 className='ms-3 fs-5'>{nome}</h2>
                            <q className='ms-3 fst-italic fs-6'>{stato}</q>
                        </div>
                        <div className='col-2'>
                            <div className='d-flex justify-content-end'>
                                <button onClick={() => removeRow(id)} className='btn btn-danger'>X</button>
                            </div>
                        </div>
                    </li>
                )
            })}
            <div className='col-12 mt-5'>
                <div className='d-flex w-100 justify-content-around'>
                    <div onClick={refreshList} className='btn btn-outline-info'>Refresh</div>
                    <div onClick={deleteList} className='btn btn-outline-danger'>Delete All</div>
                </div>
            </div>
        </div>
    )
}

export default List
