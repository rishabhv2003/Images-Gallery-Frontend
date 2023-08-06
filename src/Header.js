function Header() {
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-danger" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}
export default Header;