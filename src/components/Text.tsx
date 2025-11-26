export default function Text({ children }: {children: string}) {
    return (
        <div>
            <p className="text-[25px]">{children}</p>
        </div>
    );
}