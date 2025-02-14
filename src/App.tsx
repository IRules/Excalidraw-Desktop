import {Excalidraw, getSceneVersion} from "@excalidraw/excalidraw";

import "./App.css";
import {Toaster} from "./components/ui/sonner.tsx";
import {toast} from "sonner"
import {ExcalidrawElement} from "@excalidraw/excalidraw/types/element/types";
import {invoke} from "@tauri-apps/api/core";
import {useEffect, useState} from "react";
import Element = React.JSX.Element;

function App() {
    let lastSceneVersion = 0

    let lastChange = Date.now();

    let resetTimeout = 5000;

    function SaveOnChange(elements: readonly ExcalidrawElement[]) {
        let sceneVersion = getSceneVersion(elements);

        if (sceneVersion !== lastSceneVersion) {
            lastChange = Date.now();

            setTimeout(
                () => {
                    if (Date.now() - lastChange > resetTimeout) {
                        let elements_json = JSON.stringify(elements, null, 2);

                        toast("Saving to file...")

                        invoke("save_chart", {elementsJson: elements_json}).then(() => {
                            toast("Saved to file!")
                        })
                    }
                },
                resetTimeout
            )

            lastSceneVersion = sceneVersion;
        }
    }

    function onRestore() {
        invoke("load_chart").then((elements_json) => {
            if (typeof elements_json !== "string") {
                return
            }
            let elements: readonly ExcalidrawElement[] = JSON.parse(elements_json);
            console.log(elements);
            setElements(elements);
            setExcalidrawElement(<Excalidraw theme={"dark"} initialData={{
                elements
            }} onChange={SaveOnChange} />)
        });
    }

    const [elements, setElements] = useState<readonly ExcalidrawElement[]>([]);

    const [excalidraw_element, setExcalidrawElement] = useState<Element>(<></>);

    useEffect(() => {
        onRestore()
        console.log("Elements: ", elements)
    }, []);

    return (
        <>
            <main className="container w-screen h-screen bg-black">
                <div className="w-screen h-full">
                    {excalidraw_element}
                </div>
            </main>
            <Toaster/>
        </>
    );
}

export default App;
