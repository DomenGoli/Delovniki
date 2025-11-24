import Text from "./Text";

export default function DisplayResult({ result, text }: {result: number; text: string}) {
    return <div className="flex flex-col items-center">
        <Text>{text}</Text>
        <label className="text-[90px] font-bold">{result}</label>
    </div> 
}