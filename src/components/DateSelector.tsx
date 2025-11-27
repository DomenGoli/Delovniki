import { DayPicker } from "react-day-picker";
import { useOutsideModalClick } from "../hooks/useOutsideModalClick";

function DateSelector({
    selectedDate,
    setSelectedDate,
    position,
    setShowDateForm,
}: {
    selectedDate: Date;
    setSelectedDate: (arg: Date) => void;
    position: { y: number, x: number };
    setShowDateForm: (arg: boolean) => void;
}) {
    const { ref } = useOutsideModalClick(() => setShowDateForm(false));

    const viewPortalWidth = screen.width
    console.log(viewPortalWidth);

    return (
        <div role="overlay" className="fixed items-center justify-center top-0 left-0 w-[100%] h-[100vh] z-1000 transition-all duration-[0.5s]">
            <div ref={ref}
                style={{ top: viewPortalWidth > 500 ? position.y - 424 : position.y - 432, left: viewPortalWidth > 500 ? position.x-225 : position.x-130  }}
                className="fixed flex justify-center w-[430px] h-[355px] top-96 rounded-2xl shadow-2xl bg-linear-to-tl from-[#753682] to-[#bf2e34] p-4 transition-all duration-2000 border-1 border-stone-700"
            >
                <DayPicker
                    mode="single"
                    required
                    hideNavigation
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    hideWeekdays
                    captionLayout="dropdown"
                    startMonth={new Date(2025, 0)}
                    endMonth={new Date(2065, 0)}
                    disabled={(curDate) => curDate.getTime() < Date.now()}
                />
                
            </div>
        </div>
    );
}

export default DateSelector;
// hideNavigation
// bg-[var(--color-backdrop-color)] backdrop-blur-[30px]