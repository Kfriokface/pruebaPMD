import './style.css'

const COLOR_PALETTE = {
  '#FFF05A': 'Maize',
  '#FFD25A': 'Sunglow',
  '#FFAA5A': 'Sandy Brown',
  '#FF785A': 'Bittersweet',
  '#191919': 'Eerie Black',
  '#f5f5f5': 'Whitesmoke'
}

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  })
}

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName = document.querySelector('#color-name');

  colorPickerSelect.addEventListener("change", (event) => {

    const newColor = event.target.value; 
    //Almacenamos el código de color

    document.body.style.backgroundColor = newColor;
    //Le aplicamos el background color con el código de color seleccionado
    
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : "-";
    
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();


