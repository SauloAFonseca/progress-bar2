const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

// ************* controla eventos do botao adicionar **************
nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

// *********** controla eventos do botao voltar ***************
prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

// ********** atualiza etapas do formulario ************
function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

// ************ atualiza a barra de progresso ***********
function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  // ******** manipula a barra de progresso do bootstrap *******
  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}


// $(document).ready(function() {  
  //   windowWidth = window.innerWidth;
  
  //   if(windowWidth <= 900) {
  //     $('.progress-step').removeAttr('data-title');
  //   }
      
  
  //   function onResize(){
  //     windowWidth = window.innerWidth;
  
  //     if(windowWidth <= 900) {
  //       $('.progress-step').removeAttr('data-title');
  //     }
  // }
  
  // $(window).on('resize', onResize);
  
  // })
