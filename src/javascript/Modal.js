var modalContent = [
  {
    id: "btn1",
    title: "Desconto em compras na Wine",
    icon: "../assets/desafio-frontend-assets/icone-desconto-modal.png",
    description: `Sócio Wine tem 15% de desconto em todas as compras no site e no app. Sócios que assinam mais de uma experiência passam a ter 20%. O desconto será aplicado diretamente no carrinho em todas as compras.`,
  },
  {
    id: "btn2",
    title: "3x mais cashback pelo WineUP",
    icon: "../assets/desafio-frontend-assets/icone-desconto-modal.png",
    description:
      "Sócio Wine ganha 3x mais cashback no programa de recompensas da Wine, o WineUP. A cada compra no site ou APP, você acumula cashback.",
  },
  {
    id: "btn3",
    title: "Taxa de entrega diferenciada",
    icon: "../assets/desafio-frontend-assets/icone-entrega-modal.png",
    description:
      "Frete gratuito para regiões Sul e Sudeste. Para as demais regiões, a taxa de entrega é diferenciada. Você pode conferir o valor durante o processo de compra após a conclusão de sua assinatura.",
  },
  {
    id: "btn4",
    title: "Brindes e cupons no Indique Amigos",
    icon: "../assets/desafio-frontend-assets/icone-brindes-modal.png",
    description:
      "Ao assinar o Clube Wine com seu código, seu amigo e você ganham brinde e cupom de até R$ 100 para usar no site ou APP.",
  },
];

const modal = document.getElementById("myModal");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

const img = document.getElementsByClassName("close")[0];

btn1.onclick = function () {
  modal.style.display = "flex";
};

btn2.onclick = function () {
  modal.style.display = "flex";
};

btn3.onclick = function () {
  modal.style.display = "flex";
};

btn4.onclick = function () {
  modal.style.display = "flex";
};

// img.onclick = function () {
//   modal.style.display = "none";
// };

window.onclick = function (event) {
  console.log(event.target == modal);
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

if (btn1) {
  document.getElementById("myModal").innerHTML = `
  <div class="modal-content">
  <div class="modal-close">
    <img src="./images/icone-desconto-modal.png"/>
  </div>
    <div class="modal-text">
      <h1>Desconto em compras na Wine</h1>
      <img src="../assets/desafio-frontend-assets-btn1/close.svg" class="close"/>
      <p>Sócio Wine tem 15% de desconto em todas as compras no site e no app. Sócios que assinam mais de uma experiência passam a ter 20%. O desconto será aplicado diretamente no carrinho em todas as compras.</p>
    </div>
</div>`;
}

if (btn2) {
  document.getElementById("myModal").innerHTML = `<div class="modal-content">
  <div class="modal-close">
    <img src="../assets/desafio-frontend-assets/close.svg"class="close"/>
  </div>
    <div class="modal-text">
      <h1>3x mais cashback pelo WineUP</h1>
      <img src=""/>
      <p>Sócio Wine ganha 3x mais cashback no programa de recompensas da Wine, o WineUP. A cada compra no site ou APP, você acumula cashback.</p>
    </div>
</div>`;
}

if (btn3) {
  document.getElementById("myModal").innerHTML = `<div class="modal-content">
  <div class="modal-close">
    <img src="../assets/desafio-frontend-assets/close.svg"class="close"/>
  </div>
    <div class="modal-text">
      <h1>Brindes e cupons no Indique Amigos</h1>
      <img src=""/>
      <p>Frete gratuito para regiões Sul e Sudeste. Para as demais regiões, a taxa de entrega é diferenciada. Você pode conferir o valor durante o processo de compra após a conclusão de sua assinatura.</p>
    </div>
</div>`;
}

if (btn4) {
  document.getElementById("myModal").innerHTML = `<div class="modal-content">
  <div class="modal-close">
    <img src="../assets/desafio-frontend-assets/close.svg"class="close"/>
  </div>
    <div class="modal-text">
      <h1>Brindes e cupons no Indique Amigos</h1>
      <img src=""/>
      <p>Ao assinar o Clube Wine com seu código, seu amigo e você ganham brinde e cupom de até R$ 100 para usar no site ou APP.</p>
    </div>
</div>`;
}

// modalContent.map(function (item) {
//   if (item.id == "btn1") {
//     return `<div class="modal-content">
//     <div class="modal-close">
//       <img src="../assets/desafio-frontend-assets/close.svg"class="close"/>
//     </div>
//       <div class="modal-text">
//         <h1>${item.title}</h1>
//         <img src=${item.icon}/>
//         <p>${item.description}</p>
//       </div>
//   </div>`;
//   } else if (item.id === "btn2") {
//     return `<div class="modal-content">
//     <div class="modal-close">
//       <img src="../assets/desafio-frontend-assets/close.svg"class="close"/>
//     </div>
//       <div class="modal-text">
//         <h1>${item.title}</h1>
//         <img src=${item.icon}/>
//         <p>${item.description}</p>
//       </div>
//   </div>`;
//   } else if (item.id === "btn3") {
//     return `<div class="modal-content">
//     <div class="modal-close">
//       <img src="../assets/desafio-frontend-assets/close.svg"class="close"/>
//     </div>
//       <div class="modal-text">
//         <h1>${item.title}</h1>
//         <img src=${item.icon}/>
//         <p>${item.description}</p>
//       </div>
//   </div>`;
//   } else if (item.id === "btn4") {
//     return `<div class="modal-content">
//     <div class="modal-close">
//       <img src="../assets/desafio-frontend-assets/close.svg"class="close"/>
//     </div>
//       <div class="modal-text">
//         <h1>${item.title}</h1>
//         <img src=${item.icon}/>
//         <p>${item.description}</p>
//       </div>
//   </div>`;
//   }
// });

// document.getElementById("myModal").innerHTML = array.join("");
