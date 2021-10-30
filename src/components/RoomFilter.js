import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange, 
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    
    // get unique types
    let types = getUnique(rooms, "type");

    // add all
    types = ["الكل", ...types];

    // map to jsx
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>{item}</option>
        );
    });

    // get unique capacity
    let people = getUnique(rooms, "capacity");

    // map to jsx
    people = people.map((item, index) => {
        return (
            <option value={item} key={index}>{item}</option>
        );
    });

    return (
        <section className="filter-container">
            <Title title="البحث عن الغرف" />
            <form className="filter-form">

                <div className="form-group">
                    <label htmlFor="type">نوع الغرفة</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="capacity">الطاقة الاستيعابية</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price">سعر الغرفة {price} ريال</label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} className="form-control" onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="size">مساحة الغرفة</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} className="size-input" onChange={handleChange} />
                        <input type="number" name="maxSize" id="size" value={maxSize} className="size-input" onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">الافطار</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">الحيوانات الاليفة</label>
                    </div>
                </div>
            </form>
        </section>
    );
}
