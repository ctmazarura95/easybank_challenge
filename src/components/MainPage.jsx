import React from 'react'
import Images from  './images'
const MainPage = () => {

    const banner = Images
    return (
        <>

        <div class="wrapper ">
            <div class="item">
                <h1>Next generation digital <br/> banking </h1>
                <p>Take your financial life online. Your Easybank <br/>
                 account will be a one-stop-shop for spending,<br/>
                  saving,budgeting, investing, and much more.</p>
            </div>

            <div class="item">
                <img id="banner-img" src={banner} alt=""/>
            </div>
        </div>
        </>
    )
}

export default MainPage
