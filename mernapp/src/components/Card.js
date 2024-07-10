import React from 'react'

export default function card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://th.bing.com/th/id/R.bd3bebefc9c487be69288356c1f91bc3?rik=k7pLmnD0SZHj3w&riu=http%3a%2f%2f1.bp.blogspot.com%2f_GlkYxavu-Ts%2fStVnaw3GCJI%2fAAAAAAAAARM%2f2b3PenJbX7g%2fw1200-h630-p-k-no-nu%2fkadhai-paneer1.JPG&ehk=cV8BbwTCA5w3uoi3WVFzHWk5mUSSCKvYjyARLvPOPaA%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" className="card-img-top" alt="..." />
                  
                    <div className="card-body">
                        <h5 className="card-title">Kadhai Paneer</h5>
                        <p className="card-text">Order it Now!</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100  bg-success rounded'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1} </option>
                                    )
                                })}
                            </select>

                            <select className='m-2 h-100  bg-success rounded'>
                                <option value="half">Half</option>
                                <option value="full">Full</option>

                            </select>

                            <div className='d-inline h-100 fs-5'>
                                Total Price
                            </div>

                        </div>
                    </div>
                </div></div>
        </div>
    )
}
