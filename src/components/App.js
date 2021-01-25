import React, { Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Item from './Item'
import Navigation from './Navigation'
import "./App.scss"

import SolarPanels from '../assets/Desktop-SolarPanels.jpeg'
import SolarRoof from '../assets/Desktop-SolarRoof.jpeg'
import Accessories from '../assets/Desktop-Accessories.jpg'
import ModelS from '../assets/Desktop-ModelS.jpeg'
import Model3 from '../assets/Desktop-Model3.jpeg'
import ModelX from '../assets/Desktop-ModelX.jpeg'
import ModelY from '../assets/Desktop-ModelY.jpeg'

const App = () => {
    return (
        <Router>
            <Fragment>
                <Navigation/>
                <div className="item-wrapper">
                    <Item
                        title="Lowest Cost Solar Panels in America"
                        subtitle="Money-back guarantee"
                        oneBtnText="order now"
                        twoBtnText="learn more"
                        arrow
                        bg={SolarPanels}
                    />
                    <Item
                        title="Model S"
                        subtitle="Starting at $69,420"
                        oneBtnText="order now"
                        twoBtnText="learn more"
                        subtitlebig
                        bg={ModelS}
                    />
                    <Item
                        title="Model 3"
                        subtitle={(<p>Order Online for <a href="/">Touchless Delivery</a></p>)}
                        oneBtnText="order now"
                        twoBtnText="learn more"
                        bg={Model3}
                    />
                    <Item
                        title="Model X"
                        subtitle={(<p>Order Online for <a href="/">Touchless Delivery</a></p>)}
                        oneBtnText="order now"
                        twoBtnText="learn more"
                        bg={ModelX}
                    />
                    <Item
                        title="Model Y"
                        subtitle={(<p>Order Online for <a href="/">Touchless Delivery</a></p>)}
                        oneBtnText="order now"
                        twoBtnText="learn more"
                        bg={ModelY}
                    />
                    <Item
                        title="Solar for New Roofs"
                        subtitle="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                        oneBtnText="order now"
                        twoBtnText="learn more"
                        bg={SolarRoof}
                    />
                    <Item
                        title="Accessories"
                        oneBtnText="show now"
                        bg={Accessories}
                    />
                </div>
            </Fragment>
        </Router>
    )
}

export default App
