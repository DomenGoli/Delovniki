export default function ButtonDopust({
    onClick,
    vacationDays,
}: {
    onClick: () => void;
    vacationDays: number;
}) {
    return (
        <button
            className="w-[188px] cursor-pointer border-1 border-stone-700 bg-gradient-to-tl from-[#753682] to-[#bf2e34] hover:bg-gradient-to-br focus:outline-none outline-none font-medium rounded-lg text-2xl px-5 py-2.5 text-center mb-2 mt-3"
            onClick={onClick}
        >
            <div className="flex justify-center">
                Dopust (<p className="text-pink-950">{vacationDays}</p>)
            </div>
        </button>
    );
}
