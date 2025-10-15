export default function Text({ children }: {children: string}) {
    return (
        <div className="text-[25px]">
            <p>{children}</p>
        </div>
    );
}