import React from "react";
import { Button } from "react-bootstrap";
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/naoki.JPG";
import reactImg from '../Images/react-brands.svg';
import jsImg from '../Images/js-brands.svg';
import htmlImg from '../Images/html5-brands.svg';
import cssImg from '../Images/css3-alt-brands.svg';
import tsImg from '../Images/download-icon-typescript-1324440247295276108_0.svg';
import gitImg from '../Images/github-brands.svg'


export const HomePage = () => {
  return (
    <div className="container text-center">
      
        <h1>Naoki</h1>

        <img src={profileImage} className="profileImage" />
      
      <p>
        渡邉尚輝です。現在2ヶ月間、IT系の長期インターンで働いています。ガジェットオタクで、モノ好きです。<br></br>毎日アマゾンのサイトを見たり、YouTubeを見て、ガジェットや家電などの情報収集をするのが趣味です。<br></br>また、毎日英会話をして英語を学んだりしています。
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">---------introduction---------</h2>
            <h3 class="section-subheading text-muted mb-5">
              My Portfolio
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
            <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              
              <h4 class="my-3">自分のwebsite</h4>
              <p class="text-muted">
              自分の趣味が詰まったブログを作りたいという思いから作りました。html, css, jsのライブラリswiperを使ってスライドショー付きのウェブサイトを作りました。<br></br>
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-sun fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">お天気・時計・todolist</h4>
              <p class="text-muted">
                日常の効率を上げるために、少しでも役立つ実用的なものを作りたいという思いが詰まった作品です。<br></br>言語はhtml,css,jsのライブラリのjqueryを使っています。open weather map APIを使って、天気情報を取得しています。
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-rectangle-list fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">To Do List</h4>
              <p class="text-muted">
                現在インターンでは、reactをメインで使っており、まだ学びはじめでもあることから、今の実力で作れるものを作りました。
              </p>
            </div>
            
          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">---------Experienced Skill---------</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImg} />
              <h4>React</h4>
              <p></p>
            </div>
            <div class="col-md-4 services">
              <img src={jsImg} />
              <h4>javascript</h4>
              <p> </p>
            </div>
            <div class="col-md-4 services">
              <img src={htmlImg} />
              <h4>html</h4>
              <p></p>
            </div>
            <div class="col-md-4 services">
              <img src={cssImg} />
              <h4>css</h4>
              <p></p>
            </div>
            <div class="col-md-4 services">
              <img src={tsImg} />
              <h4>typescript</h4>
              <p></p>
            </div>
            <div class="col-md-4 services">
              <img src={gitImg} />
              <h4>github</h4>
              <p></p>
            </div>


           
          </div>
          {/* <button type="button" class="btn btn-primary">
            -----スキル一覧-----
          </button> */}
        </div>
      </section>
    </div>
  );
};
