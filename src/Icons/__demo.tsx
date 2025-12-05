import { useEvent } from "@baseflow/react";
import { Icons } from "@baseflow/widgets";
import type { MouseEvent } from "react";

export default () => {
  const onApply = useEvent((e: MouseEvent) => {
    const el = e.target as HTMLElement;
    const id = el.dataset.id || el.parentElement!.dataset.id;
    if (id) {
      console.log(id);
    }
  });

  return (
    <div className="nd-grad-layout" onClick={onApply}>
      {Object.keys(Icons).map((key) => {
        const Item = (Icons as any)[key];
        return (
          <div key={key} data-id={key}>
            <Item />
            <cite>{key}</cite>
          </div>
        );
      })}
    </div>
  );
};
