import { StringInput } from "@baseflow/widgets";

export default () => {
  return (
    <div className="nd-form-layout">
      <div className="form-item">
        <div className="label-item">Border</div>
        <div>
          <StringInput />
        </div>
      </div>
      <div className="form-item">
        <div className="label-item">Filled</div>
        <div>
          <StringInput variant="filled" />
        </div>
      </div>
      <div className="form-item">
        <div className="label-item">Borderless</div>
        <div>
          <StringInput variant="borderless" value="borderless" />
        </div>
      </div>
      <div className="form-item">
        <div className="label-item">Textarea</div>
        <div>
          <StringInput rows={8} />
        </div>
      </div>
    </div>
  );
};
