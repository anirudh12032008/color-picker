const colorPicker = document.getElementById('colorPicker');
const colorDisplay = document.getElementById('colorDisplay');

colorPicker.addEventListener('input', (event) => {
    const color = event.target.value;
    colorDisplay.textContent = color.toUpperCase();
    colorDisplay.style.backgroundColor = color;
    colorDisplay.style.color = getContrastingColor(color);
});

function getContrastingColor(color) {
    const rgb = parseInt(color.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >>  8) & 0xff;
    const b = (rgb >>  0) & 0xff;
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance > 186 ? '#000' : '#FFF';
}
