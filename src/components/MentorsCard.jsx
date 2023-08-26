/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const MentorsCard = ({mentor}) => {

    
    return (
        <div className="  shadow-lg hover:shadow-xl cursor-pointer flex justify-center hover:bg-gray-100/50 p-6 rounded-lg ">
         <div className="  text-center">
            <img className="w-64 h-52 object-cover rounded-md " src={mentor.img} alt="" />
            <h1 className="text-2xl text-gray-600 font-bold mt-4 my-2">{mentor.name}</h1>
            <h1 className="text-xl text-gray-600 font-semibold  ">{mentor?.position}</h1>
            <h2 className="text-2xl text-gray-600 font-normal">{mentor.university}</h2>
         </div>


        </div>
    );
};

export default MentorsCard;