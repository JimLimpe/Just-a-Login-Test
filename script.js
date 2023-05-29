const labels = document.querySelectorAll(".form-control label");

labels. fortach((label) => {
label.innerHTML = label.innerText
Split ("")
.map(
(letter, idx) =>
'<span style="transition-delay:${idx * S@}ms">${letter}</span>'

)

.join("");
});
