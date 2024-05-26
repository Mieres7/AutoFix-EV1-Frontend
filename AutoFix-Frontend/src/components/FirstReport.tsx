export function FirstReport() {
  const vehicleRepairReports = [
    {
      reportId: 1,
      repairTypeName: "Regular Maintenance",
      month: "02",
      year: "2024",
      sedan: 5,
      sedanAmount: 1500,
      hatchback: 3,
      hatchbackAmount: 900,
      pickup: 2,
      pickupAmount: 1100,
      suv: 4,
      suvAmount: 1600,
      van: 1,
      vanAmount: 700,
    },
    {
      reportId: 2,
      repairTypeName: "Accident Repair",
      month: "02",
      year: "2024",
      sedan: 2,
      sedanAmount: 3000,
      hatchback: 1,
      hatchbackAmount: 1200,
      pickup: 1,
      pickupAmount: 1500,
      suv: 3,
      suvAmount: 4500,
      van: 2,
      vanAmount: 2200,
    },
  ];

  return (
    <table className="content-table">
      <thead>
        <tr>
          <th>Repair</th>
          <th colSpan={2}>Sedan</th>
          <th colSpan={2}>Hatcback</th>
          <th colSpan={2}>SUV</th>
          <th colSpan={2}>Pickup</th>
          <th colSpan={2}>VAN</th>
          <th colSpan={2}>Total</th>
        </tr>
      </thead>
      <tbody>
        {vehicleRepairReports.map((vr) => (
          <tr>
            <td>{vr.repairTypeName}</td>
            <td>{vr.sedan}</td>
            <td>{vr.sedanAmount}</td>
            <td>{vr.hatchback}</td>
            <td>{vr.hatchbackAmount}</td>
            <td>{vr.suv}</td>
            <td>{vr.suvAmount}</td>
            <td>{vr.pickup}</td>
            <td>{vr.pickupAmount}</td>
            <td>{vr.van}</td>
            <td>{vr.vanAmount}</td>
            <td>{vr.sedan + vr.hatchback + vr.suv + vr.pickup + vr.van}</td>
            <td>
              {vr.sedanAmount +
                vr.hatchbackAmount +
                vr.suvAmount +
                vr.pickupAmount +
                vr.vanAmount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
