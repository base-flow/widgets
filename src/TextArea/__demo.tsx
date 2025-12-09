import { TextArea } from "@baseflow/widgets";

export default () => {
  return (
    <div className="nd-form-layout">
      <div className="form-item">
        <div className="label-item">Textarea</div>
        <div>
          <TextArea rows={3} />
        </div>
      </div>
    </div>
  );
};
