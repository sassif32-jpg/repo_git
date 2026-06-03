fetch("data.json")
.then(res => res.json())
.then(data => {
const list = document.querySelector("#lista");
data.forEach(el => {
list.innerHTML += `
<article class="card">
<h3>${el.titolo}</h3>
<p>${el.descrizione}</p>
</article>
`;
});
});