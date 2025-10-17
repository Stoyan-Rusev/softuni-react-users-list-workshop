import SearchBar from "./SearchBar";
import Table from "./Table";
import Pagination from "./Pagination"

export default function Section() {
    return (
        <section className="card users-container">

            <SearchBar />

            <Table />

            <button className="btn-add btn">Add new user</button>

            <Pagination />

        </section>
    );
};