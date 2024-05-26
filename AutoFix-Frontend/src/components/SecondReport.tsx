export function SecondReport() {
  const reportList = [
    {
      repairTypeName: "Regular Maintenance",
      data: [
        {
          month: "January",
          vehiclesQuantity: 120,
          vehiclesQPercentage: 30.0,
          cost: 5000,
          costPercentage: 20.0,
        },
        {
          month: "February",
          vehiclesQuantity: 150,
          vehiclesQPercentage: 35.0,
          cost: 7000,
          costPercentage: 25.0,
        },
        {
          month: "March",
          vehiclesQuantity: 100,
          vehiclesQPercentage: 28.0,
          cost: 6200,
          costPercentage: 22.0,
        },
      ],
    },
  ];
  return (
    <table className="content-table">
      <thead>
        <tr>
          <th rowSpan={2}>Tipo de Reparación</th>
          <th colSpan={2}>Abril</th>
          <th colSpan={2}>Marzo</th>
          <th colSpan={2}>Febrero</th>
        </tr>
        <tr>
          <th>Repair - Cost</th>
          <th>% Variation</th>
          <th>Repair - Cost</th>
          <th>% Variation</th>
          <th>Repair - Cost</th>
          <th>% Variation</th>
        </tr>
      </thead>
      <tbody>
        {reportList.map((r) => (
          <tr>
            <td>{r.repairTypeName}</td>
            {r.data.map((m) => (
              <>
                <td>
                  <div>{m.vehiclesQuantity}</div>
                  <div>${m.cost}</div>
                </td>
                <td>
                  <div>{m.vehiclesQPercentage}%</div>
                  <div>{m.costPercentage}%</div>
                </td>
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
