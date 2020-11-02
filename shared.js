var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__actions .modal__action--negative');
console.log(modalNoButton);
    for (var i = 0; i < selectPlanButtons.length; i++){
        selectPlanButtons[i].addEventListener('click', function(){
            modal.style.display = 'block';
            backdrop.style.display = 'block';
            
        });
    }

    for (var i = 0; i < modalNoButton.length; i++) {
        modalNoButton[i].addEventListener('click', function(){
           modalNoButton.style.display = 'none';
        });
        
    }

  