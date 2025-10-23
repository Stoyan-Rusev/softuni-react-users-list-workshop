import SearchBar from "./SearchBar";
import Table from "./Table";
import Pagination from "./Pagination"

export default function Main() {
    return (
        <main className="main">
            <section className="card users-container">
                <SearchBar />

                <Table />

                <Pagination />
            </section>
        </main>
    );
};