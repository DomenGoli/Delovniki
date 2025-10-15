import { useEffect, useState } from "react";
// import "./App.css";
import ButtonTarget from "./components/ButtonTarget";
import DisplayResult from "./components/DisplayResults";
import NextHolliday from "./components/NextHolliday";
import Title from "./components/Title";
import DateSelector from "./components/DateSelector";
import DisplayDate from "./components/DisplayDate";

function App() {
    const [showDateForm, setShowDateForm] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(
        new Date(localStorage.getItem("setDatum") || new Date(1970, 0, 1))
    );
    const [totalDays, setTotalDays] = useState(0);
    const [workDays, setWorkDays] = useState(0);
    const [nextHolliday, setNextHolliday] = useState<Date | null>(null);
    const [position, setPostion] = useState<{ y: number; x: number }>({
        y: 0,
        x: 0,
    });

    function handleShowDateForm(e: Event) {
        setShowDateForm(!showDateForm);

        //najdemo pozicijo gumba
        const rect = (e.target as HTMLElement)!
            .closest("button")!
            .getBoundingClientRect();
        setPostion({
            x: window.innerWidth - rect.width - rect.x,
            y: Math.floor(rect.y + rect.height),
            // y: Math.floor(rect.y + rect.height)
        });
        // console.log(rect);
    }

    function handleSelectDate(value: Date) {
        setSelectedDate(value);
        localStorage.setItem("setDatum", value.toString());
        setShowDateForm(false);
    }

    useEffect(
        function () {
            const days = Math.floor(
                Math.abs(selectedDate.getTime() - Date.now()) /
                    (1000 * 60 * 60 * 24) +
                    1
            );
            setTotalDays(days);
        },
        [selectedDate]
    );

    useEffect(
        function () {
            const hollidays = [
                "1-1",
                "2-1",
                "8-2",
                "27-4",
                "1-5",
                "2-5",
                "25-6",
                "15-8",
                "31-10",
                "1-11",
                "25-12",
                "26-12",
            ];

            const populateEasterDates = function () {
                const easterDates = [];
                let currentYear = new Date().getFullYear();

                const goldenNumberHashmap = new Map();
                goldenNumberHashmap
                    .set(0, [27, 3])
                    .set(1, [14, 4])
                    .set(2, [3, 4])
                    .set(3, [23, 3])
                    .set(4, [11, 4])
                    .set(5, [31, 3])
                    .set(6, [18, 4])
                    .set(7, [8, 4])
                    .set(8, [28, 3])
                    .set(9, [16, 4])
                    .set(10, [5, 4])
                    .set(11, [25, 3])
                    .set(12, [13, 4])
                    .set(13, [2, 4])
                    .set(14, [22, 3])
                    .set(15, [10, 4])
                    .set(16, [30, 3])
                    .set(17, [17, 4])
                    .set(18, [7, 4])
                    .set(19, [27, 3]);

                while (currentYear <= selectedDate.getFullYear()) {
                    const goldenNumber =
                        currentYear - Math.floor(currentYear / 19) * 19 + 1;
                    const [day, month] = goldenNumberHashmap.get(goldenNumber);
                    const date = new Date(currentYear, month - 1, day);
                    const dayOfWeak = date.getDay();
                    const untillSunday = 7 - dayOfWeak;
                    const timestamp =
                        date.getTime() + untillSunday * 24 * 60 * 60 * 1000;
                    const newDate = new Date(timestamp);
                    const outputDay = newDate.getDate();
                    const outputMonth = newDate.getMonth();
                    easterDates.push(
                        `${outputDay + 1}-${outputMonth + 1}-${currentYear}`
                    ); // day +1 da prestavi iz NED na PON
                    currentYear++;
                }
                return easterDates;
            };

            let count = 0;
            const currentDate = new Date();
            const easterDates = populateEasterDates();

            while (currentDate <= selectedDate) {
                const dayOfWeak = currentDate.getDay();
                const dayMonthString = `${currentDate.getDate()}-${
                    currentDate.getMonth() + 1
                }`;
                const easterString = `${currentDate.getDate()}-${
                    currentDate.getMonth() + 1
                }-${currentDate.getFullYear()}`;
                const notWeekend = (day: number) => day !== 0 && day !== 6;

                if (
                    notWeekend(dayOfWeak) &&
                    !hollidays.includes(dayMonthString) &&
                    !easterDates.includes(easterString)
                )
                    count++;

                // Nastavi nasledni praznik med tednom
                if (!nextHolliday) {
                    if (
                        (notWeekend(dayOfWeak) &&
                            hollidays.includes(dayMonthString)) ||
                        easterDates.includes(easterString)
                    ) {
                        setNextHolliday(new Date(currentDate));
                    }
                }
                currentDate.setDate(currentDate.getDate() + 1);
            }
            setWorkDays(count);
        },
        [selectedDate, nextHolliday]
    );

    return (
        <div className="relative w-[38rem] h-[35rem] bg-white/5 flex flex-col items-center rounded-2xl shadow-2xl p-[1rem] transition-all duration-2000">
            <Title />

            <div className="flex gap-10">
                <DisplayResult
                    result={selectedDate.getTime() > Date.now() ? totalDays : 0}
                    // result={totalDays}
                    text="Vseh dni:"
                />
                <DisplayResult result={workDays} text="Delovnikov:" />
            </div>

            <NextHolliday>{nextHolliday}</NextHolliday>
            <DisplayDate selectedDate={selectedDate} />
            <ButtonTarget
                showDateForm={showDateForm}
                onClick={() => handleShowDateForm}
            />

            {/* Modal */}
            {showDateForm && (
                <DateSelector
                    selectedDate={selectedDate}
                    setSelectedDate={handleSelectDate}
                    position={position}
                    setShowDateForm={setShowDateForm}
                />
            )}
        </div>
    );
}

export default App;
