import useInstructor from "../../../hooks/useInstructor";
import SingleInstructorCard from "../../../components/SingleInstructorCard";


const PopularInstructor = () => {

    const [instructor] = useInstructor();

    return (
        <div className="container mx-auto py-7 px-3 md:py-10 md:px-0">
            <h2 className="font-bold text-3xl text-center my-10">Our Popular Instructors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    instructor.map(instructor => <SingleInstructorCard key={instructor._id} instructor={instructor}></SingleInstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;