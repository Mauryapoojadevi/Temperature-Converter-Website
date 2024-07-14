function convertTemperature() {
    const temperature = document.getElementById('temperature').value;
    const scale = document.getElementById('scale').value;
    let result;

    if (scale === 'celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        result = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        const celsius = (temperature - 32) * 5/9;
        result = `${temperature}°F is equal to ${celsius.toFixed(2)}°C`;
    }

    document.getElementById('result').textContent = result;
}
