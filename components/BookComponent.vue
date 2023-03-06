<template>
    <section class="donate-sec" style="position: relative;">
        <div class="container">
            <div class="scene">
                <div class="book-wrap">
                    <div class="left-side">
                        <div class="book-cover-left"></div>
                        <div class="layer1">
                            <div class="page-left"></div>
                        </div>
                        <div class="layer2">
                            <div class="page-left"></div>
                        </div>
                        <div class="layer3">
                            <div class="page-left"></div>
                        </div>
                        <div class="layer4">
                            <div class="page-left"></div>
                        </div>
                        <div class="layer-text">
                            <div class="page-left-2">
                                <div class="corner"></div>
                                <div class="corner2"></div>
                                <div class="corner-fold"></div>
                                <div class="page-text w-richtext">
                                    <img src="/images/r3.png" alt="">
                                    <div class="btn-grp-cont">
                                        <a href="" class="read_more_btn">Read More</a>
                                        <button class="donate_btn">Donate Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="center"></div>
                    <div class="right-side">
                        <div class="book-cover-right"></div>
                        <div class="layer1">
                            <div class="page-right"></div>
                        </div>
                        <div class="layer2 right">
                            <div class="page-right"></div>
                        </div>
                        <div class="layer3 right">
                            <div class="page-right"></div>
                        </div>
                        <div class="layer4 right">
                            <div class="page-right"></div>
                        </div>
                        <div class="layer-text right">
                            <div class="page-right-2">
                                <div class="page-text w-richtext">
                                    <h3><strong>A Glimpse</strong></h3>
                                    <p>A glimpse through an interstice caught, </p>
                                    <p>Of a crowd of workmen and drivers in a bar-room around the stove late of a winter
                                        night, and I unremark’d seated in a corner, </p>
                                    <p>‍</p>
                                    <p>Of a youth who loves me and whom I love, silently approaching and seating himself
                                        near, that he may hold me by the hand, </p>
                                    <p>‍</p>
                                    <p>A long while amid the noises of coming and going, of drinking and oath and smutty
                                        jest, </p>
                                    <p>‍</p>
                                    <p>There we two, content, happy in being together, speaking little, perhaps not a word. 
                                    </p>
                                    <p>A glimpse through an interstice caught, </p>
                                    <p>Of a crowd of workmen and drivers in a bar-room around the stove late of a winter
                                        night, and I unremark’d seated in a corner, </p>
                                    <p>‍</p>
                                    <p>Of a youth who loves me and whom I love, silently approaching and seating himself
                                        near, that he may hold me by the hand, </p>
                                    <p>‍</p>
                                    <p>A long while amid the noises of coming and going, of drinking and oath and smutty
                                        jest, </p>
                                    <p>‍</p>
                                    <p>There we two, content, happy in being together, speaking little, perhaps not a word. 
                                    </p>
                                    <div class="btn-grp-cont d-flex align-items-center justify-content-end">
                                        <button class="arrow_btn">
                                            <i class="far fa-arrow-alt-circle-left"></i>
                                        </button>
                                        <button class="arrow_btn">
                                            <i class="far fa-arrow-alt-circle-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>


export default {
    name: "BookComponent",
}

</script>

<style scoped>
.scene {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    min-height: 54vw;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    background-color: #fff;
    -webkit-perspective: 4000px;
    perspective: 4000px;
    -webkit-perspective-origin: 50% 0%;
    perspective-origin: 30% 0%;
}

.book-wrap {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100vw;
    /* margin-top: 8vw; */
    margin-bottom: 8vw;
    padding-right: 1%;
    padding-left: 1%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-perspective: 4000px;
    perspective: 4000px;
    -webkit-perspective-origin: 50% 50%;
    perspective-origin: 50% 50%;
    /* -webkit-transform: translate3d(0px, 5%, -264px) rotateX(27deg) rotateY(0deg)
    rotateZ(-10deg);
  transform: translate3d(0px, 5%, -264px) rotateX(27deg) rotateY(0deg)
    rotateZ(-10deg); */
    -webkit-transition: -webkit-transform 2000ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: -webkit-transform 2000ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: transform 2000ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: transform 2000ms cubic-bezier(0.165, 0.84, 0.44, 1),
        -webkit-transform 2000ms cubic-bezier(0.165, 0.84, 0.44, 1);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

/* .book-wrap:hover {
  -webkit-transform: translate3d(0px, 5%, -264px) rotateX(13deg) rotateY(0deg)
    rotateZ(-3deg);
  transform: translate3d(0px, 5%, -264px) rotateX(13deg) rotateY(0deg)
    rotateZ(-3deg);
} */

.book-cover-left {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-top-left-radius: 4%;
    border-bottom-left-radius: 4%;
    background-color: #2d8094;
    box-shadow: inset 4px -4px 4px 1px #7cbecf, inset 7px -7px 4px 0 #2d8094;
    -webkit-perspective: 4000px;
    perspective: 4000px;
    -webkit-transform: translate3d(0px, 0px, -1px);
    transform: translate3d(0px, 0px, -1px);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.book-cover-right {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-top-right-radius: 4%;
    border-bottom-right-radius: 4%;
    background-color: #2d8094;
    box-shadow: inset -4px -4px 4px 1px #7cbecf, inset -7px -7px 4px 0 #0e4f60;
}

.layer1 {
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin: 20px 10px 10px;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-transform: translate3d(0px, 0px, 5px);
    transform: translate3d(0px, 0px, 5px);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.page-left {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-top-left-radius: 1%;
    border-bottom-left-radius: 1%;
    background-color: #fff;
    box-shadow: inset 0 0 26px 2px #d8cccc, -1px 1px 13px 0 rgba(34, 27, 20, 0.81);
}

.layer-text {
    position: fixed;
    left: 9px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 97%;
    margin: 20px 10px 18px;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 4000px;
    perspective: 4000px;
    -webkit-perspective-origin: 50% 50%;
    perspective-origin: 50% 50%;
    -webkit-transform: translate3d(0px, 0px, 32px);
    transform: translate3d(0px, 0px, 32px);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.layer-text.right {
    -webkit-transform: translate3d(-37px, 0px, 32px);
    transform: translate3d(-37px, 0px, 32px);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    left: 0;
}

.page-left-2 {
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-top-left-radius: 18%;
    border-bottom-left-radius: 1%;
    background-color: #fff;
    box-shadow: inset 0 0 7px 4px hsla(0, 13%, 82%, 0.43),
        -1px 1px 13px 0 rgba(34, 27, 20, 0.49);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    /* -webkit-transform: rotateX(0deg) rotateY(17deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(17deg) rotateZ(0deg); */
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    -webkit-transform-origin: 100% 50%;
    -ms-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transition: -webkit-transform 650ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: -webkit-transform 650ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: transform 650ms cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: transform 650ms cubic-bezier(0.165, 0.84, 0.44, 1),
        -webkit-transform 650ms cubic-bezier(0.165, 0.84, 0.44, 1);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

/* .page-left-2:hover {
  -webkit-transform: rotateX(0deg) rotateY(7deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(7deg) rotateZ(0deg);
} */

.left-side {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 49%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 4000px;
    perspective: 4000px;
    -webkit-perspective-origin: 0% 50%;
    perspective-origin: 0% 50%;
    -webkit-transform: rotateX(0deg) rotateY(20deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(20deg) rotateZ(0deg);
    -webkit-transform-origin: 100% 50%;
    -ms-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.right-side {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 49%;
    -webkit-perspective: 4000px;
    perspective: 4000px;
    -webkit-perspective-origin: 0% 50%;
    perspective-origin: 0% 50%;
    -webkit-transform: rotateX(0deg) rotateY(-1deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(-1deg) rotateZ(0deg);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.center {
    width: 3%;
    background-image: -webkit-radial-gradient(circle farthest-corner at 56% -8%,
            #fff 8%,
            transparent 0),
        -webkit-radial-gradient(circle farthest-corner at 50% 108%, #fff 8%, transparent 0),
        -webkit-linear-gradient(0deg, #7cbecf, #2d8094 21%, #7cbecf 30%, #2d8094 48%, #7cbecf 68%, #2d8094 79%, #7cbecf);
    background-image: radial-gradient(circle farthest-corner at 56% -8%,
            #fff 8%,
            transparent 0),
        radial-gradient(circle farthest-corner at 50% 108%, #fff 8%, transparent 0),
        linear-gradient(90deg,
            #7cbecf,
            #2d8094 21%,
            #7cbecf 30%,
            #2d8094 48%,
            #7cbecf 68%,
            #2d8094 79%,
            #7cbecf);
}

.corner-fold {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 30px;
    height: 30px;
    border-right: 1px solid hsla(0, 13%, 82%, 0.55);
    border-bottom: 1px solid hsla(0, 13%, 82%, 0.55);
    background-image: -webkit-linear-gradient(315deg,
            transparent 47%,
            #f0f0f0 48%,
            #fff 55%,
            #f6f6f6);
    background-image: linear-gradient(135deg,
            transparent 47%,
            #f0f0f0 48%,
            #fff 55%,
            #f6f6f6);
    box-shadow: 6px 6px 9px -4px hsla(0, 13%, 82%, 0.53);
}

.corner {
    position: absolute;
    left: 0px;
    top: 27px;
    width: 5vw;
    height: 5vw;
    background-image: -webkit-linear-gradient(315deg, #fff 30%, transparent);
    background-image: linear-gradient(135deg, #fff 30%, transparent);
    box-shadow: inset 13px 0 17px -12px hsla(0, 13%, 82%, 0.43);
}

.corner2 {
    position: absolute;
    left: 28px;
    top: 0px;
    width: 5vw;
    height: 5vw;
    background-image: -webkit-linear-gradient(315deg, #fff 31%, transparent);
    background-image: linear-gradient(135deg, #fff 31%, transparent);
    box-shadow: inset 0 13px 17px -12px hsla(0, 13%, 82%, 0.43);
}

.page-text {
    position: relative;
    display: block;
    width: 80%;
    height: 100%;
    margin-top: 25px;
    margin-right: auto;
    margin-left: auto;
    font-family: Georgia, Times, "Times New Roman", serif;
    z-index: 999;
}

.page-text img {
    height: 450px;
    width: 100%;
    object-fit: cover;
}

.page-text .btn-grp-cont {
    position: absolute;
    left: 0;
    bottom: 50px;
    width: 100%;
}

.page-text .btn-grp-cont .read_more_btn {
    display: block;
    padding: 5px 15px;
    text-align: center;
    border: 1px solid #2d8094;
    color: #2d8094;
    text-decoration: none;
    border-radius: 20px;
}

.page-text .btn-grp-cont .donate_btn {
    margin-top: 20px;
    display: block;
    padding: 5px 15px;
    text-align: center;
    border: 1px solid #2d8094;
    background-color: #2d8094;
    color: #fff;
    text-decoration: none;
    border-radius: 20px;
    outline: none;
    display: block;
    width: 100%;
}

.page-text .btn-grp-cont .arrow_btn {
    color: #2d8094;
    background-color: transparent;
    text-decoration: none;
    border: none;
    font-size: 2vw;
    cursor: pointer;
}

.page-text p {
    margin-bottom: 0px;
    font-size: 0.85vw;
    line-height: 1.5;
}

.page-text h3 {
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    font-style: italic;
    color: #2d8094;
}

.page-text h6 {
    font-family: "PT Sans", sans-serif;
    font-size: 9px;
    text-decoration: none;
}

.page-text a {
    color: #da5a13;
}

.layer2 {
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin: 20px 10px 13px;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-transform: translate3d(2px, 0px, 10px);
    transform: translate3d(2px, 0px, 10px);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.layer2.right {
    -webkit-transform: translate3d(-5px, 0px, 10px);
    transform: translate3d(-5px, 0px, 10px);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.layer3 {
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin: 20px 10px 13px;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-transform: translate3d(4px, 0px, 20px);
    transform: translate3d(4px, 0px, 20px);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.layer3.right {
    -webkit-transform: translate3d(-10px, 0px, 20px);
    transform: translate3d(-10px, 0px, 20px);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.layer4 {
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin: 20px 10px 15px;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-transform: translate3d(6px, 0px, 30px);
    transform: translate3d(6px, 0px, 30px);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.layer4.right {
    -webkit-transform: translate3d(-15px, 0px, 30px);
    transform: translate3d(-15px, 0px, 30px);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

.page-right-2 {
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-top-right-radius: 1%;
    border-bottom-right-radius: 1%;
    background-color: #fff;
    box-shadow: inset 0 0 7px 4px hsla(0, 13%, 82%, 0.43),
        1px 1px 13px 0 rgba(34, 27, 20, 0.49);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: rotateX(0deg) rotateY(-3deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(-3deg) rotateZ(0deg);
    -webkit-transform-origin: 0% 50%;
    -ms-transform-origin: 0% 50%;
    transform-origin: 0% 50%;
    -webkit-transition: -webkit-transform 850ms ease;
    transition: -webkit-transform 850ms ease;
    transition: transform 850ms ease;
    transition: transform 850ms ease, -webkit-transform 850ms ease;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

/* .page-right-2:hover {
  -webkit-transform: rotateX(0deg) rotateY(-17deg) rotateZ(0deg);
  transform: rotateX(0deg) rotateY(-17deg) rotateZ(0deg);
} */

.page-right {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-top-right-radius: 1%;
    border-bottom-right-radius: 1%;
    background-color: #fff;
    box-shadow: inset 0 0 26px 2px #d8cccc, 1px 1px 13px 0 rgba(34, 27, 20, 0.81);
}

@media (max-width: 991px) {
    .scene {
        height: 56vw;
    }

    .book-wrap {
        width: 62vw;
    }

    .page-left-2 {
        border-top-left-radius: 20%;
    }

    .corner-fold {
        left: 0%;
        top: -1%;
        width: 3.5vw;
        height: 3.5vw;
        max-height: 35px;
        background-image: -webkit-linear-gradient(315deg,
                transparent 50%,
                #f0f0f0 51%,
                #fff 52%,
                #f6f6f6);
        background-image: linear-gradient(135deg,
                transparent 50%,
                #f0f0f0 51%,
                #fff 52%,
                #f6f6f6);
    }

    .corner {
        top: 8%;
    }

    .page-text h3 {
        margin-top: 2vw;
        margin-bottom: 1vw;
        font-size: 3vw;
    }

    .page-text h6 {
        margin-top: 1vw;
        margin-bottom: 1vw;
        font-size: 1vw;
    }

    .page-right-2 {
        padding-left: 9%;
    }
}

@media (max-width: 767px) {
    .book-wrap {
        width: 80vw;
        margin-bottom: 2vw;
    }

    .layer-text {
        width: 94%;
        -webkit-transform: translate3d(0px, 0px, 20px);
        transform: translate3d(0px, 0px, 20px);
    }

    .layer-text.right {
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        -webkit-transform: translate3d(-34px, 0px, 24px);
        transform: translate3d(-34px, 0px, 24px);
    }

    .page-left-2 {
        border-top-left-radius: 23%;
        -webkit-transform: rotateX(0deg) rotateY(17deg) rotateZ(0deg) translate(9px, 0px);
        transform: rotateX(0deg) rotateY(17deg) rotateZ(0deg) translate(9px, 0px);
    }

    .corner-fold {
        width: 4.5vw;
        height: 4.5vw;
        max-height: 29px;
        min-width: 29px;
        background-image: -webkit-linear-gradient(310deg,
                transparent 48%,
                #f0f0f0 49%,
                #fff 50%,
                #f6f6f6);
        background-image: linear-gradient(140deg,
                transparent 48%,
                #f0f0f0 49%,
                #fff 50%,
                #f6f6f6);
    }

    .page-text {
        margin-top: 2vw;
    }

    .page-text h3 {
        margin-top: 0vw;
        font-size: 3vw;
    }

    .layer2 {
        -webkit-transform: translate3d(2px, 0px, 6px);
        transform: translate3d(2px, 0px, 6px);
    }

    .layer2.right {
        -webkit-transform: translate3d(-5px, 0px, 6px);
        transform: translate3d(-5px, 0px, 6px);
    }

    .layer3 {
        -webkit-transform: translate3d(4px, 0px, 12px);
        transform: translate3d(4px, 0px, 12px);
    }

    .layer3.right {
        -webkit-transform: translate3d(-10px, 0px, 12px);
        transform: translate3d(-10px, 0px, 12px);
    }

    .layer4 {
        -webkit-transform: translate3d(6px, 0px, 18px);
        transform: translate3d(6px, 0px, 18px);
    }

    .layer4.right {
        -webkit-transform: translate3d(-15px, 0px, 18px);
        transform: translate3d(-15px, 0px, 18px);
    }

    .page-right-2 {
        width: 92%;
        -webkit-box-flex: 0;
        -webkit-flex: 0 auto;
        -ms-flex: 0 auto;
        flex: 0 auto;
    }
}

@media (max-width: 479px) {
    .scene {
        height: 69vw;
    }

    .corner-fold {
        width: 5.5vw;
        height: 5.5vw;
        min-width: 21px;
    }
}</style>