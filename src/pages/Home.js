import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom";

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="غرف فاخرة" subtitle="غرف مطلة على البحر تبدأ من 1,100 ريال">
                    <Link to="/rooms" className="btn-primary">
                        استعرض غرف المنتجع
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRoom />
        </>
    );
}
