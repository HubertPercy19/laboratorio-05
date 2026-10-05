const movements = [];

const isValidMovement = (movement, type, amount) => {
    return (
        movement &&
        (type === "ingreso" || type === "gasto") &&
        !isNaN(amount) &&
        amount > 0
    );
};

const calculateBalance = (balances) => {
    let total = 0;
    for (let i = 0; i < balances.length; i++) {
        total += balances[i];
    }
    return total;
};

const showMovement = (movement, type, amount, number) => {
    console.log(`Movimiento #${number}`);
    console.log(`Movimiento: ${movement}`);
    console.log(`Tipo: ${type}`);
    console.log(`Monto: ${amount}`);
};

const registerMovement = (number) => {
    const movement = prompt("Ingresa el nombre del movimiento (Ejem. Salario):").trim();
    const type = prompt("Tipo de movimiento (escribe: ingreso o gasto):").toLowerCase();
    const amount = parseFloat(prompt("Monto numérico (Ejem. 1500):"));

    if (!isValidMovement(movement, type, amount)) {
        alert("Datos inválidos. Por favor revísalos.");
        return;
    }

    const balance = type === "ingreso"
        ? amount
        : -amount;

    movements.push({
        movement,
        type,
        amount,
        balance
    });

    showMovement(movement, type, amount, number);
};


let active = "si";
let movementNumber = 1;

while (active === "si") {
    registerMovement(movementNumber);
    movementNumber++;
    active = prompt("¿Deseas registrar otro movimiento? (si/no)").toLowerCase();
}


const balances = movements.map((movement) => movement.balance);
const finalBalance = calculateBalance(balances);
console.log(`Saldo final total: ${finalBalance}`);