import ClipLoader from "react-spinners/ClipLoader";
import React from "react";

export default function Loader() {
    const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
};
    return (
        <div style={style}>
        <ClipLoader
            color="#747bff"
            loading={true}
            size={64}
        />
    </div>
);
}