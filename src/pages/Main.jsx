import { Button } from "../components/Button";
import { LogoIcon } from "../components/LogoIcon";
import "../styles/main.css";

export function MainPage ({logo})
{
    const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].map((numero) => {
        return (<Button size={50} onClick={() => console.log(numero)}>{numero}</Button>);
    });

    const operadores = ["+", "-", "*", "/"].map((operador) => {
        return (<Button size={50} onClick={() => console.log(operador)}>{operador}</Button>);
    });
    
    return (
        <div className="calculadora-root">
            <header>
                <h1>Calculadora</h1>
                <LogoIcon src={logo} alt="logo" />
            </header>
            <div style={{width: "400px", height: "700px"}}>
                {numeros}
                {operadores}
            </div>
        </div>
    );
}