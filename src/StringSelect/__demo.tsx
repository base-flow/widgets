import { StringSelect } from "@baseflow/widgets";

const Options = [
  { value: "jimmy", label: "jimmy" },
  { value: "lily", label: "lily" },
  { value: "alex", label: "alex" },
];

export default () => {
  return (
    <div className="nd-form-layout">
      <div className="form-item">
        <div className="label-item">Border</div>
        <div>
          <StringSelect options={Options} />
        </div>
      </div>
      <div className="form-item">
        <div className="label-item">Filled</div>
        <div>
          <StringSelect<string[]> options={Options} variant="filled" block multiple />
        </div>
      </div>
      <div className="form-item">
        <div className="label-item">Borderless</div>
        <div>
          <StringSelect options={Options} variant="borderless" value="borderless" />
        </div>
      </div>
    </div>
  );
};
