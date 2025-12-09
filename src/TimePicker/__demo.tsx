import { TimePicker } from "@baseflow/widgets";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState<string>();
  return (
    <div className="nd-form-layout">
      <div className="form-item">
        <div className="label-item">TimePicker</div>
        <div>
          <TimePicker value={value} onChange={setValue} />
          <p>{value}</p>
        </div>
      </div>
    </div>
  );
};
