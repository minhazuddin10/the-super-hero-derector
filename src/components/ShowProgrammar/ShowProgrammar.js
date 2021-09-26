import React from "react";
import "./ShowProgrammar.css";

const ShowProgrammar = (props) => {
  const { showprogrammar } = props;

  let totalSalary = 0;
  for (const programmar of showprogrammar) {
    totalSalary = totalSalary + programmar.salary;


  }

  return (
    <div className="showProgrammar " id="showProgrammar">
      <h4 className="text-center text-capitalize">
        programmar add: {props.showprogrammar.length}
      </h4>

      <h5 className="text-center text-capitalize py-2 border-bottom">
        Total salary: {totalSalary} tk
      </h5>
      
      {
        showprogrammar.map(programar => {
          return (
            <p className="text-center"
              key={programar.id}
            > {programar.name.toUpperCase()}</p>
          )
        })
      }
    </div>
  );
};

export default ShowProgrammar;
