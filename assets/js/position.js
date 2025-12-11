const DelivarCountry = document.getElementById('DelivarCountry')

navigator.geolocation.getCurrentPosition(async (position) => {
    let lat = position.coords.latitude
    let lon = position.coords.longitude

    const Url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    let res = await fetch(Url)
    let data = await res.json()

    DelivarCountry.innerHTML = data.countryName
}, () => {
    setTimeout(() => {
        alert("Location permission denied! to delivary your country ")
    }, 1000)
})