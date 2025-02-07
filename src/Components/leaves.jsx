import React, { useState } from "react";

export default function Leaves({turqoise})
{
    const [time, setTime] = useState(0);

    const leaves = [];
    const leafCount = 8;
    for(let side = 0; side < 2; side++) {
        for(let i = 0; i < leafCount; i++) {
            const greenAmt = 20 + Math.floor(i / (leafCount/2)) * 70 + (i%2)*40;
            const color = "#00" +
                Math.floor(greenAmt).toString(16) +
                (turqoise ? Math.floor(greenAmt / 1.5).toString(16) : "00");

            const swing = Math.pow(-1, i) * Math.sin(time/100);
            const rot = (side === 0 ? 40 : -40) + (i % (leafCount/2)) * 25 + (i >= 4 ? 12: 0) + swing;
            const leaf = 
                <div
                    key={(side * leafCount + 1) * (i + 1)}
                    className={"leaf " + (side === 0 ? "leaf-left" : "leaf-right")}
                    style={{
                        backgroundColor: color,
                        transform: `rotate(${rot}deg)`,
                    }}>
                </div>;

            leaves.push(leaf);
        }
    }

    setTimeout(() => {
        setTime(time+1);
    },10);

    return <div>{leaves}</div>;
}