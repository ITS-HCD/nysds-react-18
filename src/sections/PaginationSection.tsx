import { useState } from "react";
import {
  NysPaginationComponent,
  NysDividerComponent,
} from "../utils/nysds-components";

const PaginationSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section id="pagination">
      <h2 className="section-heading">Pagination</h2>
      <p>Current page: {currentPage}</p>
      <NysPaginationComponent
        totalPages={10}
        currentPage={currentPage}
        onNysChange={(e: Event) => setCurrentPage((e as CustomEvent).detail.page)}
      />
      <NysDividerComponent />
    </section>
  );
};

export default PaginationSection;
