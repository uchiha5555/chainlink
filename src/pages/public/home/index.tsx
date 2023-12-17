import React, { useEffect } from "react";

import { HomeContainer } from "./style";
import Hero from "./elements/hero";
import DataProvider from "./elements/provider";
import NodeOperator from "./elements/operator";
import Community from "./elements/community";
import Choice from "./elements/choice";
import Subscribe from "./elements/subscribe";


const HomePage = () => {
    useEffect(() => {
    }, [])
    return (
        <HomeContainer>
            <Hero />
            <DataProvider />
            <NodeOperator />
            <Community />
            <Choice />
            <Subscribe />
        </HomeContainer>
    )
}

export default HomePage;
