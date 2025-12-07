import { BaseWidgets, useEvent } from "@baseflow/react";
import { Icons } from "@baseflow/widgets";
import type { MouseEvent } from "react";
import Config, { IconList } from "./__utils";

export default () => {
  const onApply = useEvent((e: MouseEvent) => {
    const el = e.target as HTMLElement;
    const id = el.dataset.id || el.parentElement!.dataset.id;
    if (id) {
      BaseWidgets.clipboard.write(`<Icons.${id} />`);
      BaseWidgets.message.success(`<Icons.${id} /> 已复制！`);
    }
  });

  return (
    /** <Config>节点开发中平台已包含 */
    <Config>
      <div className="nd-grad-layout" onClick={onApply}>
        {IconList.map((key) => {
          const Item = (Icons as any)[key];
          return (
            <div key={key} data-id={key}>
              <Item />
              <cite>{key}</cite>
            </div>
          );
        })}
      </div>
    </Config>
  );
};
