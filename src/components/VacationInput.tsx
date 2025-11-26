import type { Dispatch, ReactNode, SetStateAction } from "react";

function VacationInput({
    children,
    vacationDays,
    setVacationDays,
}: {
    children: ReactNode;
    vacationDays: number;
    setVacationDays: Dispatch<SetStateAction<number>>;
}) {
    return (
        <div className="border-1 w-[188px] h-[54px] mb-2 mt-3 border-stone-700 bg-gradient-to-br from-[#753682] to-[#bf2e34] rounded-lg">
            <div className="h-full flex justify-center items-center gap-5">
                <div className="flex items-center gap-2">
                    <input
                        className="bg-[#994977] text-2xl w-[3rem] h-[2rem] text-center rounded-gl focus:outline-none placeholder-stone-700"
                        type="number"
                        // min="0"
                        // onInput="validity.valid||(value='');"
                        // value={vacationDays}
                        // onFocus="this.value=''"
                        onChange={(e) => {
                            if (Number(e.target.value) < 0) {
                                setVacationDays(0);
                                localStorage.setItem("setVacDays", "0");
                            } else {
                                setVacationDays(Number(e.target.value));
                                localStorage.setItem(
                                    "setVacDays",
                                    e.target.value
                                );
                            }
                        }}
                        autoFocus={true}
                        placeholder={vacationDays.toString()}
                    ></input>
                    <p className="text-[1.2rem]">dni</p>
                </div>
                {children}
            </div>
        </div>
    );
}
export default VacationInput;
// #943d70
