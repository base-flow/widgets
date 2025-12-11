import { Button } from "antd";
import { BaseWidgets, FlowProvider } from "../utils";

export default () => {
  return (
    /** <FlowProvider>节点开发中平台已包含 */
    <FlowProvider>
      <div className="nd-grad-layout">
        <Button
          onClick={() => {
            BaseWidgets.message.success("success");
          }}
        >
          message.success
        </Button>

        <Button
          onClick={() => {
            BaseWidgets.message.error("error");
          }}
        >
          message.error
        </Button>

        <Button
          onClick={() => {
            BaseWidgets.confirm("Are you ok?", (ok) => {
              BaseWidgets.message.success(`${ok}`);
            });
          }}
        >
          confirm
        </Button>

        <Button
          onClick={() => {
            BaseWidgets.clipboard.read().then((text) => {
              BaseWidgets.message.success(text);
            });
          }}
        >
          clipboard.read
        </Button>

        <Button
          onClick={() => {
            BaseWidgets.clipboard.write("some text").then(() => {
              BaseWidgets.message.success("Successfully written to clipboard!");
            });
          }}
        >
          clipboard.write
        </Button>

        <Button
          onClick={(e) => {
            BaseWidgets.popup({
              content: (
                <div style={{ padding: 20, background: "#fff", textAlign: "center", borderRadius: "20px" }}>
                  <div>Popup Dialog</div>
                </div>
              ),
              target: e.target as HTMLElement,
            });
          }}
        >
          popup
        </Button>

        <Button
          onClick={() => {
            BaseWidgets.modal({
              content: (
                <div style={{ padding: 20, background: "#fff", textAlign: "center", borderRadius: "20px" }}>
                  <div style={{ width: 400, height: 300 }}>Modal Dialog</div>
                  <Button type="primary" onClick={() => BaseWidgets.modal(null)}>
                    close
                  </Button>
                </div>
              ),
              mask: "closeAble",
            });
          }}
        >
          modal
        </Button>
      </div>
    </FlowProvider>
  );
};
