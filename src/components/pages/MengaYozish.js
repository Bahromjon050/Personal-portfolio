import React, { useState } from "react";
import { Header } from "./All";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const MengaYozish = () => {
  const obj = {
    span: "bog'lanish!",
    name: "Men bilan",
    des: `Rutrum cursus varius ullamcorper venenatis faucibus lobortis
        turpis dignissim. Commodo pellentesque tristique aliquet    
        turpis. Morbi risus imperdiet`,
  };
  const schema = yup
    .object()
    .shape({
      fName: yup.string().required(),
      email: yup.string().email().required(),
      des: yup.string().required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    axios.post(
      `https://api.telegram.org/bot5709979160:AAEEgX3pozr98z47m8xidt3_2J1o0zCyeSM/sendMessage?chat_id=5126588933&text=
      First name: ${data.fName},      Email: ${data.email},      message: ${data.des}`
    );
    for (let key in data) {
      resetField(key);
    }
  };
  return (
    <>
      <section className="services all_padding">
        <Header data={obj} />
        <div className="cards_team" data-aos="fade-up" data-aos-duration="800">
          <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("fName", {
                required: "Please enter your first name",
              })}
              placeholder="Enter Your Name"
              className={
                errors.fName ? "border inputActiv activ" : "border inputActiv"
              }
            />
            {errors.fName ? (
              <p className="errors">Please enter your first name</p>
            ) : null}
            <input
              type="text"
              {...register("email", { required: "Please enter your Email" })}
              placeholder="Enter your email address"
              className={
                errors.email ? "border inputActiv activ" : "border inputActiv"
              }
            />
            {errors.email ? (
              <p className="errors">Please enter your email</p>
            ) : null}
            <textarea
              className={
                errors.des ? "border inputActiv activ" : "border inputActiv"
              }
              {...register("des", { required: "Please enter your message" })}
              placeholder="Enter Message"
            ></textarea>
            {errors.des ? (
              <p className="errors">Please enter your message</p>
            ) : null}
            <div>
              <button className="btn" style={{ marginTop: "18px" }}>
                Jo'natish
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default MengaYozish;
