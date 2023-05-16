import useAxios from "./useAxios";

const Page = () => {
    const { data, isLoading, error } = useAxios('http://127.0.0.1:8000/api/get-articles');
  console.log(data)
  console.log(error)
    return ( 
        <div>
            <button>fetch</button>
        </div>
     );
}
 
export default Page;