import React, { Component } from "react";
import { FaUtensils, FaHiking, FaShuttleVan, FaMugHot } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
    state={
        Services:[
            {
                icon: <FaUtensils />,
                title: "وجبات مجانية",
                info: "التي سوف تكون وجبة الفطور و وجبة الغداء و وجبة العشاء"
            },
            {
                icon: <FaHiking />,
                title: "رحلات تنزة",
                info: "بامكانكم التنزه في المسطحات الخضراء و ايضا في البحر"
            },
            {
                icon: <FaShuttleVan />,
                title: "مواصلات مجانية",
                info: "نوفر لكم باصات للرحلات و ايضا سيارات الجولف للتنقل"
            },
            {
                icon: <FaMugHot />,
                title: "مشروبات مجانية",
                info: "بامكانكم الاستمتاع بالمشروبات الساخنة و الباردة مجانا في اي وقت"
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="الخدمات" />
                <div className="services-center">
                    {this.state.Services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}
