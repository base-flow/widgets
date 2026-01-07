import { DataType, SuperInput, ValueSource } from "@baseflow/react";
import { FlowProvider } from "../utils";

export default () => {
  return (
    /** <FlowProvider>节点开发中平台已包含 */
    <FlowProvider>
      <div className="nd-form-layout">
        <div className="form-item">
          <div className="label-item">变量</div>
          <div>
            <SuperInput dataType={DataType.String} value={{ type: DataType.String, source: ValueSource.Variable, text: "aa.bb.cc" }} />
          </div>
        </div>
      </div>
    </FlowProvider>
  );
};
