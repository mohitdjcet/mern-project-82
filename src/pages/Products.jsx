import { useSearchParams } from "react-router";

function Products() {
    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get("category");
    const page = searchParams.get("page");
    return(
        <div>
            <h1>Products Page</h1>
            <h2>Category: {category}</h2>
            <h2>Page: {page}</h2>

            <button onClick={() => setSearchParams({category: "angular", page: 2})}>
                Update Search Params
            </button>

            <button onClick={() => setSearchParams({category: "vue", page: 3})}>
                Update Search Params
            </button>
        </div>
    )
}
export default Products;