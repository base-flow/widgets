import { BlurInput } from "@baseflow/widgets";

export default () => {
  return (
    <div className="nd-form-layout">
      <div className="form-item">
        <div className="label-item">Border</div>
        <div>
          <BlurInput />
        </div>
      </div>
      <div className="form-item">
        <div className="label-item">Filled</div>
        <div>
          <BlurInput variant="filled" />
        </div>
      </div>
      <div className="form-item">
        <div className="label-item">Borderless</div>
        <div>
          <BlurInput variant="borderless" value="borderless" />
        </div>
      </div>
    </div>
  );
};
