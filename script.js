function searchProduct() {
    let p = document.getElementById("product").value.trim();

    if (p === "") {
        alert("Please enter a product name");
        return;
    }

    document.getElementById("result").style.display = "block";
    document.getElementById("title").innerText = p;

    document.getElementById("amazon").href =
        "https://www.amazon.in/s?k=" + encodeURIComponent(p);

    document.getElementById("flipkart").href =
        "https://www.flipkart.com/search?q=" + encodeURIComponent(p);

    document.getElementById("meesho").href =
        "https://www.meesho.com/search?q=" + encodeURIComponent(p);
}
