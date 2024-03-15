let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let text = document.querySelector("#text").value
    if (text.value) {

        let download = document.querySelector("#download")
        console.log(download)
        let src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`
        download.style.display = "block"
        download.href = src
        let img = document.querySelector("img")
        img.style.visibility = "visible"
        img.src = src
    }
    else {
        alert("Enter Text!")
    }
})

