const buttonModal = document.querySelector("#buttonModal");
const modalBackground = document.querySelector("#modalTable");
const tableExpMobile = document.querySelector("#tableExpMobile");

buttonModal.addEventListener("click", () => {
  modalBackground.style.display == "flex"
    ? (modalBackground.style.display = "none")
    : (
        modalBackground.style.display = "flex",
        modalBackground.style.animation = "backgroundAnimation 0.5s ease-out forwards"

    );

    tableExpMobile.style.display == "flex"
    ? (tableExpMobile.style.display = "none")
    : (
        tableExpMobile.style.display = "flex",
        tableExpMobile.style.animation = "modalAnimation 0.5s ease-out forwards"
    )
});
modalBackground.addEventListener("click", ()=>{
    modalBackground.style.display = "none"
    tableExpMobile.style.display = "none"

})
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["HTML", 3],
    ["CSS", 4],
    ["NODEJS", 8],
    ["REACT", 5],
    ["VUEJS", 4],
  ]);

  var options = {
    title: "Principais competências",
    fontName: "JetBrains Mono",
    fontSize: 15,
    backgroundColor: "none",
    height: 300,
    width: 340,
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("tableExpMobile")
  );

  chart.draw(data, options);
}
