import { getDateFormat } from "../utils/helpers";
import Text from "./Text";

function DisplayDate({ selectedDate }: { selectedDate: Date }) {
    return (
        <div className="flex flex-col items-center m-1 p-2">
            <Text>Datum upokojitve</Text>
            <label className="text-[25px] text-pink-950 font-semibold">
                {selectedDate.getFullYear() != 1970
                    ? getDateFormat(selectedDate)
                    : "/"}
            </label>
        </div>
    );
}

export default DisplayDate;
