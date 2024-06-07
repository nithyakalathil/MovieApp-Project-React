import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {

    const [data,changedata]=useState(

        [
            {"name":"kathal"},{"name":"kathi"},{"name":"kathi"},{"name":"kathi"},{"name":"kathi"},{"name":"kathi"},{"name":"kathi"},{"name":"kathi"},{"name":"kathi"},{"name":"kathi"},{"name":"kathi"}
        ]

    )
  return (
    <div>


<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


<div className="row g-3">
   
{data.map((value,index)=>{return  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">


<div class="card" >
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTaH7d9_Zaw5j-8mNbUZoZgYYvhni5vK3fsQ&s" class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">Jungle cruise</h5>
<p class="card-text">{value.name}</p>
<a href="#" class="btn btn-primary">Book Ticket</a>
</div>
</div>

</div>})}


</div>

        </div>
    </div>
</div>


    </div>
  )
}

export default ViewAll