import React from 'react'
import { Button } from 'react-bootstrap'
import '../styles/Home.css'
function Home() {
    return (
        <div className="home">
            yo hey ! 
            <Button onClick={()=>{window.location.href='/admin-tip'}}>Create Admin Tip</Button>
        </div>
    )
}

export default Home
