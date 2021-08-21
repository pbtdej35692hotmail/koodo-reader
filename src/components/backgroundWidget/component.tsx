import React from "react";
import "./background.css";
import { BackgroundProps, BackgroundState } from "./interface";
import OtherUtil from "../../utils/otherUtil";

class Background extends React.Component<BackgroundProps, BackgroundState> {
  isFirst: Boolean;
  constructor(props: any) {
    super(props);
    this.state = {
      isSingle:
        OtherUtil.getReaderConfig("readerMode") &&
        OtherUtil.getReaderConfig("readerMode") !== "double",
      scale: OtherUtil.getReaderConfig("scale") || 1,
    };
    this.isFirst = true;
  }

  render() {
    return (
      <>
        <div
          className="background-box2"
          style={
            document.body.clientWidth < 570
              ? { left: 5, right: 8 }
              : this.state.isSingle
              ? {
                  left: `calc(50vw - ${
                    270 * parseFloat(this.state.scale)
                  }px - ${this.state.isSingle ? "9" : "5"}px)`,
                  right: `calc(50vw - ${
                    270 * parseFloat(this.state.scale)
                  }px - 7px)`,
                  boxShadow: "0 0 0px rgba(191, 191, 191, 1)",
                }
              : {}
          }
        ></div>

        <div
          className="background-box3"
          style={
            document.body.clientWidth < 570
              ? { left: 5, right: 10 }
              : this.state.isSingle
              ? {
                  left: `calc(50vw - ${
                    270 * parseFloat(this.state.scale)
                  }px - 9px)`,
                  right: `calc(50vw - ${
                    270 * parseFloat(this.state.scale)
                  }px - 9px)`,
                }
              : {}
          }
        >
          {(!OtherUtil.getReaderConfig("backgroundColor") &&
            OtherUtil.getReaderConfig("isDisplayDark") === "yes") ||
          OtherUtil.getReaderConfig("backgroundColor") ===
            "rgba(44,47,49,1)" ? (
            <div
              className="dark-spine-shadow-left"
              style={
                this.state.isSingle ||
                (OtherUtil.getReaderConfig("backgroundColor") &&
                  OtherUtil.getReaderConfig("backgroundColor").startsWith("#"))
                  ? { display: "none" }
                  : {}
              }
            ></div>
          ) : (
            <div
              className="spine-shadow-left"
              style={
                this.state.isSingle ||
                (OtherUtil.getReaderConfig("backgroundColor") &&
                  OtherUtil.getReaderConfig("backgroundColor").startsWith("#"))
                  ? { display: "none" }
                  : {}
              }
            ></div>
          )}
          <div
            className="book-spine"
            style={this.state.isSingle ? { display: "none" } : {}}
          ></div>
          {(!OtherUtil.getReaderConfig("backgroundColor") &&
            OtherUtil.getReaderConfig("isDisplayDark") === "yes") ||
          OtherUtil.getReaderConfig("backgroundColor") ===
            "rgba(44,47,49,1)" ? (
            <div
              className="dark-spine-shadow-right"
              style={
                OtherUtil.getReaderConfig("backgroundColor") &&
                OtherUtil.getReaderConfig("backgroundColor").startsWith("#")
                  ? { display: "none" }
                  : this.state.isSingle
                  ? {
                      position: "relative",
                      right: 0,
                    }
                  : {}
              }
            ></div>
          ) : (
            <div
              className="spine-shadow-right"
              style={
                OtherUtil.getReaderConfig("backgroundColor") &&
                OtherUtil.getReaderConfig("backgroundColor").startsWith("#")
                  ? { display: "none" }
                  : this.state.isSingle
                  ? {
                      position: "relative",
                      right: 0,
                    }
                  : {}
              }
            ></div>
          )}
        </div>

        <div
          className="background-box1"
          style={
            document.body.clientWidth < 570
              ? { left: 5, right: 6 }
              : this.state.isSingle
              ? {
                  left: `calc(50vw - ${
                    270 * parseFloat(this.state.scale)
                  }px - ${this.state.isSingle ? "9" : "5"}px)`,
                  right: `calc(50vw - ${
                    270 * parseFloat(this.state.scale)
                  }px - 5px)`,
                  boxShadow: "0 0 0px rgba(191, 191, 191, 1)",
                }
              : {}
          }
        ></div>
      </>
    );
  }
}

export default Background;