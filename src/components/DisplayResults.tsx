import Text from "./Text";

export default function DisplayResult({
    result,
    text,
}: {
    result: number;
    text: string;
}) {
    return (
        <div className="flex flex-col items-center">
            <Text>{text}</Text>
            <p className="text-[90px] font-bold text-pink-950">{result < 0 ? 0 : result}</p>
        </div>
    );
}
