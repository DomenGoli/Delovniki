import type { FormEvent } from "react";

export default function ButtonTarget({ onClick, showDateForm }: {onClick: (event: FormEvent<Element>)=> void; showDateForm: boolean}) {
    return (
        <button className="cursor-pointer text-black bg-gradient-to-tl from-[#753682] to-[#bf2e34] hover:bg-gradient-to-br focus:outline-none outline-none font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2 mt-3" onClick={onClick}>
            {!showDateForm ? "Vnesi Datum" : "Zapri"}
        </button>
    );
}