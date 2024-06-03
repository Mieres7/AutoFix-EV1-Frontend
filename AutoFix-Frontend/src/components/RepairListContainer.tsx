import { useEffect, useState } from "react";
import msRepairlistService from "../services/ms-repairlist.service";

export function RepairListContainer() {
  const [repairList, setRepairList] = useState<any[]>([]);

  const [newRepair, setNewRepair] = useState<any>({
    repairType: "",
    gasolineCost: 0,
    dieselCost: 0,
    hybridCost: 0,
    electricCost: 0,
  });

  const init = () => {
    msRepairlistService
      .getAll()
      .then((response) => {
        setRepairList(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const addRepair = () => {
    msRepairlistService
      .AddRepair(newRepair)
      .then((response) => {
        console.log(response.data);
        init();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewRepair((prev: any) => ({
      ...prev,
      [name]: name === "repairType" ? value : Number(value),
    }));
    console.log(newRepair);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="repairlist-container">
      <div className="add-repair">
        Repair Name:
        <input
          type="text"
          name="repairType"
          className="input-form"
          onChange={handleChange}
          value={newRepair.repairType}
        />
        Gasoline:{" "}
        <input
          type="number"
          name="gasolineCost"
          className="input-form-triple no-spinner"
          onChange={handleChange}
          value={newRepair.gasolineCost}
        />
        Diesel:{" "}
        <input
          type="number"
          name="dieselCost"
          className="input-form-triple no-spinner"
          onChange={handleChange}
          value={newRepair.dieselCost}
        />
        Hybrid:{" "}
        <input
          type="number"
          name="hybridCost"
          className="input-form-triple no-spinner"
          onChange={handleChange}
          value={newRepair.hybridCost}
        />
        Electric:
        <input
          type="number"
          name="electricCost"
          className="input-form-triple no-spinner"
          onChange={handleChange}
          value={newRepair.electricCost}
        />
        <button className="input-form extra2" onClick={addRepair}>
          Add Repair
        </button>
      </div>
      <div className="list-repairs">
        <table className="content-table">
          <thead>
            <tr>
              <th>Repair</th>
              <th>Gasoline Cost</th>
              <th>Diesel Cost</th>
              <th>Hybrid Cost</th>
              <th>Electric Cost</th>
            </tr>
          </thead>
          <tbody>
            {repairList.map((rl) => (
              <tr>
                <td>{rl.repairType}</td>
                <td>{rl.gasolineCost}</td>
                <td>{rl.dieselCost}</td>
                <td>{rl.hybridCost}</td>
                <td>{rl.electricCost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
