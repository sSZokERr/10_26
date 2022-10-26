function adatMegjelenites(termekLista){
    document.getElementById('termekek').innerHTML = ""
    let lista = document.getElementById('termekek')
    for(let p of termekLista) {
        let li = document.createElement('li')
        li.innerHTML = p.title + "<br>" + p.description + "<br>" + p.price + "<br>" + p.discountPercentage
        + "<br>" + p.rating + "<br>" + p.stock + "<br>" + p.brand + "<br>" + p.category
        lista.appendChild(li)
    }}

    document.addEventListener('DOMContentLoaded', async () => {
    all.addEventListener('click', async() => {
        let response = await fetch('/products.json')
        let eredmeny = await response.json()
        adatMegjelenites(eredmeny.products)
    })

    allABC.addEventListener('click', async() => {
        let response = await fetch('/products.json')
        let eredmeny = await response.json()
        let abc = eredmeny.products.sort((a, b) => {
            if(a.title < b.title){return -1}
            else if(a.title > b.title){return 1}
            else{return 0}
        })
        adatMegjelenites(abc)
    })

    exp.addEventListener('click', async() => {
        let response = await fetch('/products.json');
        let eredmeny = await response.json();
        let legdragabb = eredmeny.products.sort((a, b) => {
            if(a.price > b.price){return -1}
            else if(a.price < b.price){return 1}
            else{return 0}
        });
        adatMegjelenites(legdragabb)
    })

    apple.addEventListener('click', async() => {
        document.getElementById('termekek').innerHTML = ""
        let response = await fetch('/products.json')
        let eredmeny = await response.json()
        let termekek = eredmeny.products.filter(e => e.brand === 'Apple')
        adatMegjelenites(termekek)
    })
    keresGomb.addEventListener('click', async() => {
        document.getElementById('termekek').innerHTML = ""
        let response = await fetch('/products.json')
        let eredmeny = await response.json()
        let termekek = eredmeny.products.filter(e => e.description.includes(kereses.value))
        adatMegjelenites(termekek)
    })

    offer.addEventListener('click', async() => {
        let response = await fetch('/products.json');
        let eredmeny = await response.json();
        
        let alatt = eredmeny.products.filter(e => e.price < 100)
        adatMegjelenites(alatt)
    })
})