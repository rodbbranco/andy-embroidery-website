import Button from "../components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {shoes, statistics} from "../constants/index.js";
import websiteCoverImg from "../assets/andy-embroidery/websiteCoverImg.jpg"
import ShoeCard from "../components/ShoeCard.jsx";
import {useState} from "react";
import {bigShoe1} from "../assets/images/index.js";

const Hero = () => {

    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

    return (
        <section
            id="home"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
        >
            <div className="relative lg:w-2/5 flex flex-col justify-center items-start w-full max-xl: padding-x pt-48">
                <p className="text-lg font-montserrat text-black">
                    April's Collection
                </p>
                <h1 className="mt-10 font-palanquin text-[90px] max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl: whitespace-nowrap text-4xl relative z-10 pr-10">New Pieces</span>
                    <br/>
                    <span className="text-andy-primary inline-block mt-3">Andy</span>
                    Embroidery
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-16 sm: max-w-sm">
                    Discover stylish new Embroidery pieces, quality comfort,
                    and innovation for your cozy lifestyle.
                </p>
                <Button label="Shop now"
                        iconURL={arrowRight}/>

                <div className="flex justify-start items-start w-full mt-20 gap-16">
                    {statistics.map((stat, index) => (
                        <div key={stat.label}>
                            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                            <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex-col gap-32 flex-1 flex justify-center items-center xl:min-h-screen max-xl: py-40">
                <img src={bigShoeImg}
                     alt="andy-picture"
                     width={610}
                     height={500}
                     className="object-contain relative z-10"/>

                <div className="flex sm:gap-6 gap-4 sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe) =>
                        (
                            <div key={shoe}>
                                <ShoeCard
                                    imgURL={shoe}
                                    changeBigShoeImage={(shoe)=>{ setBigShoeImg(shoe)}}
                                    bigShoeImg={bigShoeImg}
                                />
                            </div>
                        ))}
                </div>
            </div>


        </section>
    );
};

export default Hero;