import React, { Component } from "react";
import defaultBg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBg: defaultBg
        };
    }
    static contextType = RoomContext;
    // componentDidMount(){}
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return (
                <div className="error">
                    <h3>لا يمكن العثور على مثل هذه الغرفة ...</h3>
                    <Link to="/rooms" className="btn-primary">
                        العودة لغرف المنتجع
                    </Link>
                </div>
            );
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
        const [mainImg, ...defaultImg] = images;

        return (
            <>
                <StyledHero Image ={mainImg || this.state.defaultBg}>
                    <Banner title= {`غرف ${name}`}>
                        <Link to="/rooms" className="btn-primary">
                            العودة لغرف المنتجع
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name} />;
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>وصف الغرفة</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>التفاصيل</h3>
                            <h6>السعر : {price} ريال</h6>
                            <h6>المساحة : {size} متر مربع</h6>
                            <h6>
                                الطاقة الاستيعابية :{" "}
                                    {capacity > 1 ? `${capacity} اشخاص` : `${capacity} شخص `}
                            </h6>
                            <h6>{pets ? "مسموح بدخول الحيوانات الأليفة" : "غير مسموح بدخول الحيوانات الأليفة"}</h6>
                            <h6>{breakfast && "شامل الإفطار"}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>مميزات اضافية</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>;
                        })}
                    </ul>
                </section>
            </>
        );
    }
}
