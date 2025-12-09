import { DescMD } from "@baseflow/widgets";

export default () => {
  return (
    <div className="nd-form-layout">
      <div className="form-item">
        <div className="label-item">普通文本</div>
        <div>
          <DescMD value="普通文本" />
        </div>
        <div className="label-item">Markdown</div>
        <div>
          <DescMD
            value={`M|
          - 列表1
          - 列表2
          - 列表3
            `}
          />
        </div>
      </div>
    </div>
  );
};
