let expensesChart = document.querySelector(".expenses-chart")

const data = fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    return data
  })
  .catch((error) => console.log(error))

data.then((data) => {
  data.forEach((item) => {
    let chart = document.createElement("div")
    chart.classList.add("chart")
    const barHeight = item.amount / 7

    chart.innerHTML = `
    <small class="amount">$${item.amount}</small>
    <div class="bar" style="height:${barHeight}em;"></div>
    <small>${item.day}</small>`

    item.day === "wed" ? chart.children[1].classList.add("active") : null

    expensesChart.appendChild(chart)

    chart.addEventListener("mouseover", () => {
      chart.classList.add("hover")
    })

    chart.addEventListener("mouseout", () => {
      chart.classList.remove("hover")
    })
  })
})
