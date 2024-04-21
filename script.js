document.addEventListener("DOMContentLoaded", function() {
    var video = document.querySelector(".video");
    var pauseButton = document.querySelector(".pause-button");

    var playIcon = document.createElement("i");
    playIcon.classList.add("fa-solid", "fa-play"); 
    playIcon.style.fontSize = "30px"; 
    
    var pauseIcon = document.createElement("i");
    pauseIcon.classList.add("fas", "fa-pause");; 
    pauseIcon.style.fontSize = "30px"; 

    pauseButton.appendChild(playIcon); 

    pauseButton.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            pauseButton.removeChild(playIcon);
            pauseButton.appendChild(pauseIcon);
        } else {
            video.pause();
            pauseButton.removeChild(pauseIcon);
            pauseButton.appendChild(playIcon);
        }
    });

    video.addEventListener("ended", function() {
        video.currentTime = 0;
        pauseButton.removeChild(playIcon);
        pauseButton.appendChild(pauseIcon);
    });
});


function submitForm() {
    var fullName = document.getElementById('fullName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var stayDuration = document.getElementById('stayDuration').value;
    var bookingTime = document.getElementById('bookingTime').value;
    var guestCount = document.getElementById('guestCount').value;
    var comment = document.getElementById('comment').value;



    if (fullName.trim() === '' || phoneNumber.trim() === '' || stayDuration.trim() === '' || bookingTime.trim() === '' || guestCount.trim() === '' || comment.trim() === '') {
        alert('Пожалуйста, заполните все поля');
    } else {
        var message = `ФИО Клиента: ${fullName}\nНомер клиента: ${phoneNumber}\nВремя нахождения: ${stayDuration}\nВремя брони: ${bookingTime}\nКоличество гостей: ${guestCount}\nКомментарий: ${comment}`;
        alert(message);
    }
    console.log(message);
}

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, 
    spaceBetween: 30, 
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', 
    },
    pagination: {
        el: '.swiper-pagination', 
    },
});