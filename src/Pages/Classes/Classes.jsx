
import SingleClassCard from '../../components/SingleClassCard';
import useClass from '../../hooks/useClass';

const Classes = () => {

    const [classes] = useClass();

    return (
        <div className="container mx-auto py-7 px-3 md:py-10 md:px-0">
            <h2 className="font-bold text-3xl text-center my-10">Our Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    classes.map(popularClass => <SingleClassCard key={popularClass._id} popularClass={popularClass}></SingleClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;