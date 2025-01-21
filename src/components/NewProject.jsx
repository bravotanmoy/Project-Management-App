import Input from "./Input";
import { useRef } from "react";

export default function NewProject({onAdd}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // validation ...
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: dueDate,
        });

    }

    return (
        <div className="w-[35rem]">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button className="px-6 py-2 text-stone-800 text-stone-50 hover:text-stone-950" onClick={handleSave}>Save</button></li>
        </menu>
        <div>

            <Input type="text" ref={title} label="Title" />
            <Input ref={description} label="Description" textarea />
            <Input type="date" ref={dueDate} label="Due Date" />
        </div>
    </div>
    );

}