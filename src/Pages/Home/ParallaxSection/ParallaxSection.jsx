import { Parallax } from 'react-parallax';

const ParallaxSection = () => {
    return (
        <Parallax blur={1} bgImage="https://i.ibb.co/9W4q3hZ/pexels-julia-larson-6455927.jpg" bgImageAlt="the cat" strength={200}>
            <div className='py-40 md:py-80'>
                
            </div>
        </Parallax>
    );
};

export default ParallaxSection;