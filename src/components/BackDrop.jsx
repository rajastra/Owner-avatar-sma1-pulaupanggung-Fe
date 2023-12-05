import { HashLoader } from "react-spinners";

const BackDrop = ({ loading }) => {
   return (
      <div className="backdrop">
         <HashLoader
            color="#5C965B"
            loading={loading}
            size={window.innerWidth > 1000 ? 200 : 100}
            aria-label="Loading Spinner"
            data-testid="loader"
         />
      </div>
   );
};

export default BackDrop;
