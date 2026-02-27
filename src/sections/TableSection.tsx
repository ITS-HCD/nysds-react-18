import {
  NysTableComponent,
  NysDividerComponent,
} from "../utils/nysds-components";

const TableSection = () => (
  <section id="data-display">
    <h2 className="section-heading">Table</h2>
    <NysTableComponent striped bordered sortable>
      <table>
        <caption>New York State County Data</caption>
        <thead>
          <tr>
            <th scope="col">County</th>
            <th scope="col">Population</th>
            <th scope="col">Region</th>
            <th scope="col">County Seat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Albany</td>
            <td>314,848</td>
            <td>Capital District</td>
            <td>Albany</td>
          </tr>
          <tr>
            <td>Erie</td>
            <td>954,236</td>
            <td>Western NY</td>
            <td>Buffalo</td>
          </tr>
          <tr>
            <td>Kings</td>
            <td>2,736,074</td>
            <td>New York City</td>
            <td>Brooklyn</td>
          </tr>
          <tr>
            <td>Monroe</td>
            <td>759,443</td>
            <td>Finger Lakes</td>
            <td>Rochester</td>
          </tr>
          <tr>
            <td>Onondaga</td>
            <td>476,516</td>
            <td>Central NY</td>
            <td>Syracuse</td>
          </tr>
        </tbody>
      </table>
    </NysTableComponent>
    <NysDividerComponent />
  </section>
);

export default TableSection;
