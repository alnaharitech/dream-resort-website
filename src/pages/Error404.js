import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link  } from "react-router-dom";
export default function Error404() {
    return (
        <Hero>
            <Banner title="خطأ 404" subtitle="الصفحة غير موجودة">
                <Link to="/" className="btn-primary">
                    العودة للصفحة الرئيسية
                </Link>
            </Banner>
        </Hero>
    );
}
