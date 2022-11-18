const Pagination = ({ eventsPerPage, totalEvents, paginate}) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {

        pageNumbers.push(i)
    }
    return ( 
        <nav>
            <ul className="pagination d-flex mt-4 justify-content-center">
                {pageNumbers.map(number => (

                    <li key={number} className="page-item">
                        <a style={{cursor: "pointer"}} onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
     );
}
 
export default Pagination;