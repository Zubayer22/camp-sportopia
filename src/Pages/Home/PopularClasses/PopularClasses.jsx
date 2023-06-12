
import useClass from "../../../hooks/useClass";
import SingleClassCard from "../../../components/SingleClassCard";

const PopularClasses = () => {
  const [classes] = useClass();

  // Shuffle the classes array
  const shuffledClasses = classes.sort(() => Math.random() - 0.5);
  // Select the first six classes
  const popularClasses = shuffledClasses.slice(0, 6);

  return (
    <div className="container mx-auto py-7 px-3 md:py-10 md:px-0">
      <h2 className="font-bold text-3xl text-center my-10">Our Popular Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {popularClasses.map((popularClass) => (
          <SingleClassCard key={popularClass._id} popularClass={popularClass} />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
