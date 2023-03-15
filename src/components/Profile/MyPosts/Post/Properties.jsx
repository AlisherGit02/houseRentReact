import React from "react";
import s from "./Properties.module.css";
import { BiBed } from "react-icons/bi";
import { BiBath } from "react-icons/bi";

const Properties = () => {
  return (
    <div>
      <section className={`${s.properties} ${s.container}`}>
        <div className={s.heading}>
          <span>Recent</span>
          <h2>Our Featured Properties</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Veritatis, sit.
          </p>
        </div>
        <div className={s.properties_container}>
          <div className={s.box}>
            <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            <h3>$12,99</h3>
            <div className={s.content}>
              <div className={s.text}>
                <h3>The Palace</h3>
                <p>London, UK</p>
              </div>
              <div className={s.icon}>
                <p>
                  {" "}
                  <BiBed className={`${s.bx} ${s.bx_bed}`} />
                  <span>5</span>
                </p>
                <p>
                  {" "}
                  <BiBath className={`${s.bx} ${s.bx_bath}`} />
                  <span>2</span>
                </p>
              </div>
            </div>
          </div>

          <div className={s.box}>
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            <h3>$12,99</h3>
            <div className={s.content}>
              <div className={s.text}>
                <h3>The Palace</h3>
                <p>London, UK</p>
              </div>
              <div className={s.icon}>
                <p>
                  {" "}
                  <BiBed className={`${s.bx} ${s.bx_bed}`} />
                  <span>5</span>
                </p>
                <p>
                  {" "}
                  <BiBath className={`${s.bx} ${s.bx_bath}`} />
                  <span>2</span>
                </p>
              </div>
            </div>
          </div>

          <div className={s.box}>
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <h3>$12,99</h3>
            <div className={s.content}>
              <div className={s.text}>
                <h3>The Palace</h3>
                <p>London, UK</p>
              </div>
              <div className={s.icon}>
                <p>
                  {" "}
                  <BiBed className={`${s.bx} ${s.bx_bed}`} />
                  <span>5</span>
                </p>
                <p>
                  {" "}
                  <BiBath className={`${s.bx} ${s.bx_bath}`} />
                  <span>2</span>
                </p>
              </div>
            </div>
          </div>

          <div className={s.box}>
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            <h3>$12,99</h3>
            <div className={s.content}>
              <div className={s.text}>
                <h3>The Palace</h3>
                <p>London, UK</p>
              </div>
              <div className={s.icon}>
                <p>
                  {" "}
                  <BiBed className={`${s.bx} ${s.bx_bed}`} />
                  <span>5</span>
                </p>
                <p>
                  {" "}
                  <BiBath className={`${s.bx} ${s.bx_bath}`} />
                  <span>2</span>
                </p>
              </div>
            </div>
          </div>

          <div className={s.box}>
            <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            <h3>$12,99</h3>
            <div className={s.content}>
              <div className={s.text}>
                <h3>The Palace</h3>
                <p>London, UK</p>
              </div>
              <div className={s.icon}>
                <p>
                  {" "}
                  <BiBed className={`${s.bx} ${s.bx_bed}`} />
                  <span>5</span>
                </p>
                <p>
                  {" "}
                  <BiBath className={`${s.bx} ${s.bx_bath}`} />
                  <span>2</span>
                </p>
              </div>
            </div>
          </div>

          <div className={s.box}>
            <img src="https://media.istockphoto.com/photos/triangular-modern-lake-house-at-fall-picture-id1327080125?k=20&m=1327080125&s=612x612&w=0&h=vhh0vH-E7sFiVoNazugkGYuNMHMm8a7MMcFa1O2WNHY=" />
            <h3>$12,99</h3>
            <div className={s.content}>
              <div className={s.text}>
                <h3>The Palace</h3>
                <p>London, UK</p>
              </div>
              <div className={s.icon}>
                <p>
                  {" "}
                  <BiBed className={`${s.bx} ${s.bx_bed}`} />
                  <span>5</span>
                </p>
                <p>
                  {" "}
                  <BiBath className={`${s.bx} ${s.bx_bath}`} />
                  <span>2</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
