import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>Home

            {/* This is the Message Page component. */}
            <section>
                <Outlet />
            </section>

        </div>



    )
}

export default Home