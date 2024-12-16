import "../styles/banner.scss"

function Banner({ image, text }) {
    return (
        <div className="banner">
            <div
                className="banner-image"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            ></div>
            {text && <h1 className="banner-text">{text}</h1>}
        </div>
    );
};

export default Banner;