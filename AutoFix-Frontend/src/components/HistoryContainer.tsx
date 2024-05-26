export function HistoryContainer() {
  return (
    <div className="history-container">
      <table className="content-table">
        <thead>
          <tr>
            <th>Registration</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Type</th>
            <th>Fab. Year</th>
            <th>Motor</th>
            <th>CheckIn</th>
            <th>Repairs</th>
            <th>Charges</th>
            <th>Discounts</th>
            <th>Sub</th>
            <th>IVA</th>
            <th>Total</th>
            <th>CheckOut</th>
            <th>Client</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ADCB12</td>
            <td>TOYOTA</td>
            <td>COROLLA</td>
            <td>SEDAN</td>
            <td>2018</td>
            <td>GASOLINE</td>
            <td>2023-03-23T10:00:00</td>
            <td>120000</td>
            <td>120000</td>
            <td>120000</td>
            <td>1000000</td>
            <td>19000</td>
            <td>1000000</td>
            <td>2023-03-23T10:00:00</td>
            <td>2023-03-23T10:00:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
