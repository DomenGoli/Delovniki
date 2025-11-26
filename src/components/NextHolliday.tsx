import { getDateFormat } from "../utils/helpers";
import Text from "./Text";

export default function NextHolliday({ children }: { children: Date | null }) {
    return (
        <div className="flex flex-col items-center p-2">
            <Text>Naslednji praznik med tednom</Text>
            <label className="text-[25px] text-pink-950 font-semibold">
                {children ? getDateFormat(children) : "/"}
            </label>
        </div>
    );
}
