
//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (carClass instanceof Car) {
        if (el.checked) {
            if (carArr.length < 2) {
                if (GetCarArrPosition(carArr, carClass) === -1) {
                    carArr.push(carClass);
                }
            } else {
                alert("Só é possível comparar dois veículos.");
                el.checked = false;
            }
        } else {
            const pos = GetCarArrPosition(carArr, carClass);
            if (pos !== -1) {
                carArr.splice(pos, 1);
            }
        }
    } else {
        throw "Você precisa passar uma instância da classe Car";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    for (let i = 0; i < carArr.length; i++) {
        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${carArr[i].image}" width="200">`;
        document.getElementById(`compare_modelo_${i}`).innerText = carArr[i].nome;
        document.getElementById(`compare_alturacacamba_${i}`).innerText = carArr[i].alturaCacamba + " mm";
        document.getElementById(`compare_alturaveiculo_${i}`).innerText = carArr[i].alturaVeiculo + " mm";
        document.getElementById(`compare_alturasolo_${i}`).innerText = carArr[i].alturaSolo + " mm";
        document.getElementById(`compare_capacidadecarga_${i}`).innerText = carArr[i].capacidadeCarga + " kg";
        document.getElementById(`compare_motor_${i}`).innerText = carArr[i].motor + "L";
        document.getElementById(`compare_potencia_${i}`).innerText = carArr[i].potencia + " cv";
        document.getElementById(`compare_volumecacamba_${i}`).innerText = carArr[i].volumeCacamba + " L";
        document.getElementById(`compare_roda_${i}`).innerText = carArr[i].roda;
        document.getElementById(`compare_preco_${i}`).innerText = "R$ " + carArr[i].preco.toLocaleString("pt-BR");
    }

for (let i = carArr.length; i < 2; i++) {
        document.getElementById(`compare_image_${i}`).innerHTML = "";
        document.getElementById(`compare_modelo_${i}`).innerText = "";
        document.getElementById(`compare_alturacacamba_${i}`).innerText = "";
        document.getElementById(`compare_alturaveiculo_${i}`).innerText = "";
        document.getElementById(`compare_alturasolo_${i}`).innerText = "";
        document.getElementById(`compare_capacidadecarga_${i}`).innerText = "";
        document.getElementById(`compare_motor_${i}`).innerText = "";
        document.getElementById(`compare_potencia_${i}`).innerText = "";
        document.getElementById(`compare_volumecacamba_${i}`).innerText = "";
        document.getElementById(`compare_roda_${i}`).innerText = "";
        document.getElementById(`compare_preco_${i}`).innerText = "";
    }
}
