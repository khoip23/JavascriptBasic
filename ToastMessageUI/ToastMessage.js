function toast({ title = '', message = '', type = 'info', duration = 3000 }) {
    const main = document.getElementById('toast')
    if (main) {
        const toast = document.createElement('div')

        //auto remove
        const autoRemoveID = setTimeout(function () {
            main.removeChild(toast)
        }, 5000)

        //remove when click
        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemoveID)
            }
        }

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fas fa-info-circle',
            warning: 'fas fa-exclamation-circle',
            error: 'fas fa-exclamation-circle',
        }
        const icon = icons[type]
        const delay = (duration / 1000).toFixed(2)
        toast.classList.add('toast', `toast--${type}`)
        toast.style.animation = `animation: slideInleft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
        <div class="toast__icon"> 
            <i class="${icon}"></i> 
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close"> 
            <i class="fa-solid fa-circle-xmark"></i>
        </div>
        `
        main.appendChild(toast)


    }
}
// toast({
//     title: 'Success',
//     message: 'dont kill my vibe',
//     type: 'success',
//     duration: 3000,
// })

function showSuccessToast() {
    toast({
        title: 'Thành công',
        message: 'Thành công message',
        type: 'success',
        duration: 1000,
    })
}
function showErrorToast() {
    toast({
        title: 'Thất bại',
        message: 'Thất bại message',
        type: 'error',
        duration: 1000,
    })
}  