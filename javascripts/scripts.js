const scriptURL = 'https://script.google.com/macros/s/AKfycbzdLTcWDsCVcAK8IrXvhdIDNumDmzVZsMroMowyfwn_U6zORHw4SoVIbPMeAXg0t20A/exec'
const form = document.forms['formamodent']

let loading = document.querySelector('.loading')
loading.style.display = "none"

let alert_sent = document.querySelector('.alert_sent')
let hide_btn = document.querySelector('.hide_btn')

hide_btn.onclick = ()=>{
    alert_sent.style.transform = "translateX(150%)"
}

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert_sent.style.transform = "translateX(0)"

            setTimeout(()=>{
                alert_sent.style.transform = "translateX(150%)"
            }, 8000)

            loading.style.display = "none"
            form_qabul.classList.remove("actived_form_qabul")
            form_qabul_in.forEach(inp_v => {
                inp_v.value = ""
            })
            contact_us.classList.remove("actived_form_contact_us")
            contact_inp.forEach(ip_v => {
                ip_v.value = ""
            })
            body.style.overflow = "auto"
        })
        .catch(error => {
            alert("Sizning internetingizda muammo borga o'xshayabdi. Qaytadan harakat qilib ko'ring.😅")
        })
        .finally(
            loading.style.display = "flex"
        )
})


// var url = window.location.href;
// url = url.split('.html')[0];

// window.history.replaceState( null, null, url );