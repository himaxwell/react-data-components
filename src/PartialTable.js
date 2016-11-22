import React, {Component} from 'react';
import Table from './Table';
import Pagination from './Pagination';

export default class PartialTable extends Component {

  render() {
    const {
      onFilter, onPageSizeChange, onPageNumberChange, onSort,
      pageLengthOptions, columns, keys, buildRowOptions, tableClassName
    } = this.props;

    const {
      page, pageSize, pageNumber,
      totalPages, sortBy, filterValues,
    } = this.props.data;

    return (
      <div className="container">
        <div className="search-form-group">
          <label className="sr-only" htmlFor="search">Search</label>
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              id="search-field"
              value={filterValues.globalSearch}
              onChange={onFilter.bind(null, 'globalSearch')} />
            <div className="input-group-addon">
              <span className="glyphicon glyphicon-search" />
            </div>
          </div>
        </div>
        <Table
          className={`table ${tableClassName}`}
          dataArray={page}
          columns={columns}
          keys={keys}
          buildRowOptions={buildRowOptions}
          sortBy={sortBy}
          onSort={onSort}
        />
      </div>
    );
  }

}

// <div className="row">
//   <div className="col-xs-4">
//     <div>
//       <label htmlFor="page-menu">Page size:</label>
//       <select
//         id="page-menu"
//         value={pageSize}
//         onChange={onPageSizeChange}
//       >
//         {pageLengthOptions.map(opt =>
//           <option key={opt} value={opt}>
//             {opt === 0 ? 'All' : opt}
//           </option>
//         )}
//       </select>
//     </div>
//     <div>
//     </div>
//   </div>
//   <div className="col-xs-8">
//     <Pagination
//       className="pagination pull-right"
//       currentPage={pageNumber}
//       totalPages={totalPages}
//       onChangePage={onPageNumberChange}
//     />
//   </div>
// </div>
