
function Banner({ imageUrl, text }) {
    return (
        <div style={{ backgroundImage: `url(${imageUrl})` }}>
            {text && <h1 className="banner-text">{text}</h1>}
        </div>
    );
};

export default Banner;