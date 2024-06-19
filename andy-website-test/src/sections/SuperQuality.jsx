import Button from "../components/Button.jsx";
import {arrowRight} from "../assets/icons/index.js";
import {shoe8} from "../assets/images/index.js";

const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        >
            <div className="flex flex-1 flex-col">
                <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg:">
                    Andy provides You
                    <span className="text-andy-primary"> Super</span> <br/>
                    <span className="text-andy-primary">Quality </span>
                    Embroidery
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Ensuring premium comfort and
                    style, Andy's meticulously crafted
                    embroidery pieces are designed to elevate
                    your experience, providing you
                    with unmatched quality,
                    innovation, and a touch of
                    elegance.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Andy's dedication to detail and
                    excellence ensures your satisfaction
                </p>
                <div className="mt-11">
                    <Button label="View details"/>
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <img src={shoe8}
                     alt="shoe8"
                     width={570}
                     height={522}
                     className="object-contain"
                />
            </div>
        </section>
    );
};

export default SuperQuality;