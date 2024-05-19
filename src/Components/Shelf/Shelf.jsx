
const Shelf = ({nama, image, asal }) => {



  return (
    <div className="flex lg:mb-16 flex-col items-center hover:scale-[1.1] duration-[300ms]">
      <div className="bg-burgundy lg:h-[200px] lg:w-[250px] h-[150px] w-[200px] rounded-[30px] mb-4 lg:mb-4 flex items-center justify-center flex-col" >
        <img src={image} className="h-[70%] w-[70%] object-cover rounded-[45px]" alt="Kendang" />
      </div>
      <div>
        <h1 className="font-raja text-burgundy text-[36px]">{nama}</h1>
      </div>
    </div>
  ); 
};

export default Shelf;
