import { useState } from "react";
import {
  NysPagination,
  NysDivider,
} from "@nysds/components/react";

const PaginationSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section id="pagination">
      <h2 className="section-heading">Pagination</h2>
      <p>Current page: {currentPage}</p>
      <NysPagination
        totalPages={10}
        currentPage={currentPage}
        onNysChange={(e: Event) => setCurrentPage((e as CustomEvent).detail.page)}
      />
      <NysDivider />
    </section>
  );
};

export default PaginationSection;
