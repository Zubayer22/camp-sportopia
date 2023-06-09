import SingleInstructorCard from "../../components/SingleInstructorCard";
import useInstructor from "../../hooks/useInstructor";


const Instructors = () => {
    const [instructor] = useInstructor();

    return (
        <div className="container mx-auto py-7 px-3 md:py-10 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    instructor.map(instructor => <SingleInstructorCard key={instructor._id} instructor={instructor}></SingleInstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;