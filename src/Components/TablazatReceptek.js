import React from "react";
import { ApiContext } from "../Contexts/ApiContext";
import SorRecept from "./SorRecept";

export default function TablazatReceptek(props) {
  console.log("props:", props);
  return (
    <div className="container">
      <div class="card">
        <div class="card-body"></div>
        <table class="table table-striped">
          <tbody>
            <tr>
              <th>Név</th>
              <th>Kép</th>
              <th>Leírás</th>
            </tr>
            <tr>
              <td>{props.receptLista[0].nev}</td>
              <td>{props.receptLista[0].kep_eleresi_ut}</td>
              <td>{props.receptLista[0].leiras}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
