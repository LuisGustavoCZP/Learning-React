export function Button ({children, size=20, onClick})
{
    return (
        <button onClick={onClick} style={{width: `${size}px`, height: `${size}px`}}>{children}</button>
    );
}