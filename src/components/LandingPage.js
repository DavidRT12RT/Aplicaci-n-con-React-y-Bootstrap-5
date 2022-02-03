import { Carrousel } from "./LandingPage/Carrousel";
import { InformationComponent } from "./LandingPage/InformationComponent";
import { NewsComponent } from "./LandingPage/NewsComponent";
import {Footer} from './LandingPage/Footer';

export const LandingPage = () => {
    return (
        <>
        <Carrousel />
        <InformationComponent/>
        <NewsComponent/>
        <Footer/>
        </>
    );
};
